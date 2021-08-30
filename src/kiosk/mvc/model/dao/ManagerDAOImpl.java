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

	@Override
	public int productInsert(Product product) throws SQLException {
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
	public int productUpdate(Product product) throws SQLException {
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
		// TODO Auto-generated method stub
		return 0;
	}

}
