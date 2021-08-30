package kiosk.mvc.model.dao;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.Product;

public interface ManagerDAO {
	/**
	 * 상품 등록
	 */
	int productInsert(Product product) throws SQLException;
	
	/**
	 * 상품 수정
	 */
	int productUpdate(Product product) throws SQLException;
	
	/**
	 * 상품 삭제
	 */
	int productDelete(String productCode) throws SQLException;
	
	/**
	 * 세트 등록
	 */
	int bundleInsert(Bundle bundle) throws SQLException;
	
	/**
	 * 세트 수정
	 */
	int bundleUpdate(Bundle bundle) throws SQLException;
	
	/**
	 * 세트 삭제
	 */
	int bundleDelete(String bundleCode) throws SQLException;
	
	/**
	 * 판매 조회
	 */
	public List<Orders> ordersSelect() throws SQLException;
}
