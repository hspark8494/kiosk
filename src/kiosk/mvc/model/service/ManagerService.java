package kiosk.mvc.model.service;

import java.sql.SQLException;

import kiosk.mvc.model.dao.ManagerDAO;
import kiosk.mvc.model.dao.ManagerDAOImpl;
import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Product;

public class ManagerService {
	private ManagerDAO managerDAO = new ManagerDAOImpl();
	
	/**
	 * 상품 등록
	 */
	public void productInsert(Product product) throws SQLException {
		int result = managerDAO.productInsert(product);
		if(result == 0) throw new SQLException("상품 등록이 실패하였습니다.");
	}
	/**
	 * 상품 수정
	 */
	public void productUpdate(Product product) throws SQLException {
		int result = managerDAO.productUpdate(product);
		if(result == 0) throw new SQLException("상품 수정이 실패하였습니다.");
	}
	
	/**
	 * 상품 삭제
	 */
	public void productDelete(String productCode) throws SQLException {
		int result = managerDAO.productDelete(productCode);
		if(result == 0) throw new SQLException(productCode + "와 일치하는 상품이 없습니다.");
	}
	
	/**
	 * 세트 등록
	 */
	public void bundleInsert(Bundle bundle) throws SQLException {
		int result = managerDAO.bundleInsert(bundle);
		if(result == 0) throw new SQLException("세트 등록이 실패하였습니다.");
	}
	
	/**
	 * 세트 수정
	 */
	public void bundleUpdate(Bundle bundle) throws SQLException {
		int result = managerDAO.bundleUpdate(bundle);
		if(result == 0) throw new SQLException("세트 수정이 실패하였습니다.");
	}
	
	/**
	 * 세트 삭제
	 */
	public void bundleDelete(String bundleCode) throws SQLException {
		int result = managerDAO.bundleDelete(bundleCode);
		if(result == 0) throw new SQLException(bundleCode + "와 일치하는 세트가 없습니다.");
	}

}
