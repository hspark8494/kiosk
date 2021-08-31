package kiosk.mvc.model.service;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.Product;

public interface ManagerService {
	/**
	 * 관리자 상품 등록
	 */
	void productInsert(Product product) throws SQLException;
	
	/**
	 * 관리자 상품 수정
	 */
	void productUpdate(Product product) throws SQLException;
	
	/**
	 * 관리자 상품 삭제
	 */
	void productDelete(String productCode) throws SQLException;
	
	/**
	 * 관리자 세트 등록
	 */
	void bundleInsert(Bundle bundle) throws SQLException; 
	
	/**
	 * 관리자 세트 수정
	 */
	void bundleUpdate(Bundle bundle) throws SQLException;
	
	/**
	 * 관리자 세트 삭제
	 */
	void bundleDelete(String bundleCode) throws SQLException;
	
	/**
	 * 판매 내역 조회
	 * */
	List<Orders> ordersSelect() throws SQLException;
	
}
