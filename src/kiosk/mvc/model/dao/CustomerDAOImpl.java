package kiosk.mvc.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.OrdersDetails;
import kiosk.mvc.model.dto.Product;
import kiosk.mvc.util.DbUtil;

public class CustomerDAOImpl implements CustomerDAO {
	
	private Properties proFile = DbUtil.getProFile();
	/**
	 * 카테고리별로 상품의 정보를 가져오는 메소드
	 * select.productByCategory=select * from category join product using(category_code)
	 * */
	@Override
	public List<Category> selectProductByCategory() throws SQLException {
		Connection con = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<Category> categoryList = new ArrayList<Category>();
        String sql = proFile.getProperty("select.productByCategory");
        try {
            con = DbUtil.getConnection();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            String tempCategoryCode = ""; //임시카테고리 코드 NullPointException 방지
            while(rs.next()) {
                String categoryCode = rs.getString(1);  //카테고리코드 가져오기 
                if(!tempCategoryCode.equals(categoryCode)) { //임시랑 카테고리랑 비교 
                	Category category = new Category(categoryCode, rs.getString(2)); 
                    
                    List<Product> productList = new ArrayList<Product>();
                    int result = rs.getInt(9);
                    boolean isBundle = false;
                    if(result==1) isBundle = true;
                    Product product = new Product(rs.getString(3), rs.getString(4), rs.getInt(5), rs.getString(6),
                    							  rs.getString(7), rs.getString(8), isBundle);
                    productList.add(product);
                    
                    category.setProductList(productList);
                    tempCategoryCode = categoryCode;
                    categoryList.add(category);
                }else {
                	Category category = categoryList.get(categoryList.size()-1);
                	
                	List<Product> productList = category.getProductList();
                	int result = rs.getInt(9);
                    boolean isBundle = false;
                    if(result==1) isBundle = true;
                	productList.add(new Product(rs.getString(3), rs.getString(4), rs.getInt(5), rs.getString(6),
                								rs.getString(7), rs.getString(8), isBundle));
                }
            }
        } finally {
        	DbUtil.close(con, ps, rs);
        }
        return categoryList;
	}

	/**
	 * 세트의 정보를 가져오는 메소드
	 * select.productInBundle=select * from bundle
	 * */
	public List<Bundle> selectBundle() throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		List<Bundle> bundleList = new ArrayList<Bundle>();
		String sql = proFile.getProperty("select.Bundle");
		try {
			con=DbUtil.getConnection();
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			while(rs.next()) {
				 int result = rs.getInt(9);
                 boolean isBundle = false;
                 if(result==1) isBundle = true;
				 Bundle bundle = new Bundle(rs.getString(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getString(5));
				 Product product = new Product(rs.getString(3), rs.getString(4), rs.getInt(5), rs.getString(6),
						  rs.getString(7), rs.getString(8), isBundle);
				 bundle.setProduct(product);
				 bundleList.add(bundle);
			}
		} finally {
			DbUtil.close(con, ps, rs);
		}
			return bundleList;
		}
	
		
	/**
	 * 주문 완료시 주문 내역을 저장하는 메소드
	 * insert.orders=insert into orders(orders_code, orders_price, orders_date) values(orders_seq.nextval, ?, default)
	 * */
	@Override
	public int insertOrders(Orders orders) throws SQLException {
		Connection con = null;
        PreparedStatement ps = null;
        String sql = proFile.getProperty("insert.orders");
        int result = 0;

        try {
            con = DbUtil.getConnection();
            con.setAutoCommit(false);
            ps = con.prepareStatement(sql);
            ps.setInt(1, orders.getOrdersPrice());
            result = ps.executeUpdate();

            if(result == 0) {
                con.rollback();
                throw new SQLException("주문 실패하였습니다.");
            }else {
            	int re [] = intsertOrdersDetails(con, orders);

                for(int i: re) {
                    if(i != 1) {
                    	con.rollback();
                    	throw new SQLException("주문할 수 없습니다.");
                    }
                }
                con.commit();
            }
        } finally {
        	con.commit();
            DbUtil.close(con, ps, null);
        }

        return result;
	}

	/**
	 * 주문 상세 내역을 저장하는 메소드
	 * insert.ordersDetails=insert into orders_details(orders_details_code, orders_code, product_code, bundle_code, orders_details_qty)
	 * values(orders_details_seq.nextval, orders_seq.currval, ?, ?, ?)
	 * */
	public int[] intsertOrdersDetails(Connection con, Orders orders) throws SQLException {
		PreparedStatement ps = null;
		String sql = proFile.getProperty("insert.ordersDetails");
		int result [] = null;
		try {
			ps = con.prepareStatement(sql);
			for(OrdersDetails ordersDetails : orders.getOrdersDetailsList()) {
				Product product = selectProductByProductCode(ordersDetails.getProductCode()); 
				ps.setString(1, ordersDetails.getProductCode());
				ps.setString(2, ordersDetails.getBundleCode());
				ps.setInt(3, ordersDetails.getOrdersDetailsQTY());
				ps.addBatch();
				ps.clearParameters();
			}
			result = ps.executeBatch();
		}finally {
			DbUtil.close(null, ps, null);
		}
		
		return result;
	}
	
	/**
	 * 상품코드와 일치하는 상품을 찾는 메소드
	 * select.productByProductCode=select * from product where product_code = ?
	 * */
	public Product selectProductByProductCode(String productCode) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		Product product = null;
		String sql = proFile.getProperty("select.productByProductCode");
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			ps.setString(1, productCode);
			rs = ps.executeQuery();
			if(rs.next()) {
				int result = rs.getInt(8);
				boolean isBundle = false;
				if(result==1) isBundle = true;
				product = new Product(rs.getString(1), rs.getString(2), rs.getInt(4), rs.getString(5), rs.getString(6), rs.getString(7), isBundle);
			}
		}finally {
			DbUtil.close(con, ps, rs);
		}
		
		return product;
	}
}
