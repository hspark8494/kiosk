package kiosk.mvc.model.service;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dao.CustomerDAO;
import kiosk.mvc.model.dao.CustomerDAOImpl;
import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;

public class CustomerService {
	CustomerDAO customerDAO = new CustomerDAOImpl();
	
	/**
	 * 카테고리별로 상품의 정보를 가져오는 메소드
	 * */
	public List<Category> selectProductByCategory() throws SQLException{
		return customerDAO.selectProductByCategory();
	}
	
	/**
	 * 세트의 정보를 가져오는 메소드
	 * */
	public List<Bundle> selectBundle() throws SQLException{
		return customerDAO.selectBundle();
	}
	
	/**
	 * 주문 완료시 주문 내역을 저장하는 메소드
	 * */
	public int insertOrders(Orders orders) throws SQLException{ //테스트 끝나면 void로 수정
		int result = customerDAO.insertOrders(orders);
		if(result == 0) throw new SQLException("주문이 실패하였습니다."); //DAO에서 예외처리해서 빼도 될 듯
		return result;
	}
}
