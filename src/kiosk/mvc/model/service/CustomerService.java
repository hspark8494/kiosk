package kiosk.mvc.model.service;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;

public interface CustomerService {
	/**
	 * 카테고리별로 상품의 정보를 가져오는 메소드
	 * */
	List<Category>selectProductByCategory()throws SQLException;
	
	/**
	 * 세트의 정보를 가져오는 메소드
	 * */
	List<Bundle>selectBundle()throws SQLException;
	
	/**
	 * 주문완료시 주문 내역을 저장하는 메소드 
	 * */
	int insertOrders(Orders orders) throws SQLException;
}
