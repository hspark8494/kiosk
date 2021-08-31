package kiosk.mvc.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.OrdersDetails;
import kiosk.mvc.model.dto.Product;
import kiosk.mvc.util.DbUtil;

public class ManagerDAOImpl implements ManagerDAO {
	private Properties proFile = DbUtil.getProFile();

	/**
	 * 상품 등록
	 * */
	@Override
	public int productInsert(Product product) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		int result = 0;
		String sql = proFile.getProperty("insert.product");
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			ps.setString(1, product.getProductCode());
			ps.setString(2, product.getProductName());
			ps.setString(3, product.getCategoryCode());
			ps.setInt(4, product.getProductPrice());
			ps.setString(5, product.getProductDetails());
			ps.setString(6, product.getProductImage());
			ps.setString(7, product.getProductOptions());
			ps.setBoolean(8, false);
			result = ps.executeUpdate();
		} finally {
			DbUtil.close(con, ps, null);
		}

		return result;
	}
	
	/**
	 * 상품 가격 수정
	 * */
	@Override
	public int productUpdate(Product product) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		int result = 0;
		String sql = proFile.getProperty("update.product");
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			ps.setInt(1,product.getProductPrice());
			ps.setString(2, product.getProductCode());
			result = ps.executeUpdate();
		} finally {
			DbUtil.close(con, ps, null);
		}

		return result;
	}

	/**
	 * 상품 삭제
	 * */
	@Override
	public int productDelete(String productCode) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		int result = 0;
		String sql = proFile.getProperty("delete.product");

		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			ps.setString(1, productCode);
			
			result = ps.executeUpdate();
		} finally {
			DbUtil.close(con, ps, null);
		}

		return result;

	}

	/**
	 * 세트 등록
	 * */
	@Override
	public int bundleInsert(Bundle bundle) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		int result = 0;
		String sql = proFile.getProperty("insert.bundle");

		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			ps.setString(1, bundle.getBundleCode());
			ps.setString(2, bundle.getBundleName());
			ps.setString(3, bundle.getBundleDetails());
			ps.setInt(4, bundle.getBundlePrice());
			ps.setString(5, bundle.getBundleImage());
			ps.setString(6, bundle.getProductCode());
			
			result = ps.executeUpdate();
		} finally {
			DbUtil.close(con, ps, null);
		}

		return result;

	}
	
	/**
	 * 세트 가격 수정
	 * */
	@Override
	public int bundleUpdate(Bundle bundle) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		int result = 0;
		String sql = proFile.getProperty("update.bundle");
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			
				ps.setInt(1, bundle.getBundlePrice());
				ps.setString(2, bundle.getBundleCode());
				result=ps.executeUpdate();		
		}
				
		 finally {
			DbUtil.close(con, ps, null);
		}
		return result;

	}

	/**
	 * 세트 삭제
	 * */
	@Override
	public int bundleDelete(String bundleCode) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		String sql = proFile.getProperty("delete.bundle");
		int result=0;
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			ps.setString(1, bundleCode);
			result=ps.executeUpdate();	
		} finally {
			DbUtil.close(con, ps, null);
		}
		return result;
	}
	
	/**
	 * 판매 내역 조회
	 * */
	@Override
	public List<Orders> ordersSelect() throws SQLException{
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		List<Orders> ordersList = new ArrayList<Orders>();
		String sql = proFile.getProperty("select.orders");
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			String tempOrdersCode = ""; 
			while(rs.next()) {
				String ordersCode = rs.getString(1);
				if(!tempOrdersCode.equals(ordersCode)) {
					Orders orders = new Orders(ordersCode, rs.getInt(2), rs.getString(3));
					
					List<OrdersDetails> ordersDetailsList = new ArrayList<OrdersDetails>();
					OrdersDetails ordersDetails = new OrdersDetails(rs.getString(4), ordersCode, rs.getString(5),rs.getString(6), rs.getString(7), rs.getInt(8));
					
					orders.setOrdersDetailsList(ordersDetailsList);
					tempOrdersCode = ordersCode;
					
					ordersList.add(orders);
				}else {
					Orders orders = ordersList.get(ordersList.size()-1);
					
					List<OrdersDetails> ordersDetailsList = orders.getOrdersDetailsList();
					ordersDetailsList.add(new OrdersDetails(rs.getString(4), ordersCode, rs.getString(5),rs.getString(6), rs.getString(7), rs.getInt(8)));
				}
			}
		}finally {
			DbUtil.close(con, ps, rs);
		}
		
		return ordersList;
	}

}
