package kiosk.mvc.model.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Properties;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Product;
import kiosk.mvc.util.DbUtil;

public class ManagerDAOImpl implements ManagerDAO {
	private Properties proFile = DbUtil.getProFile();

	//insert.product=insert into product(product_code, product_name, category_code, product_price, product_details, product_image, product_options, product_is_bundle) values(?, ?, ?, ?, ?, ?, ?, ?)
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
	//update.product=update product set product_price=? where product_code=?
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

	@Override
	public int productDelete(String productCode) throws SQLException {
		Connection con = null;
		PreparedStatement ps = null;
		int result = 0;
		String sql = proFile.getProperty(null);
		try {
			con = DbUtil.getConnection();
			ps = con.prepareStatement(sql);
			
		} finally {
			DbUtil.close(con, ps, null);
		}

		return result;
	}

	@Override
	public int bundleInsert(Bundle bundle) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int bundleUpdate(Bundle bundle) throws SQLException {
		// TODO Auto-generated method stub
		return 0;
	}

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

}
