package kiosk.mvc.model.service;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dao.CustomerDAO;
import kiosk.mvc.model.dao.CustomerDAOImpl;
import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;

public class CustomerServiceImpl implements CustomerService {
	CustomerDAO customerDAO = new CustomerDAOImpl();

	@Override
	public List<Category> selectProductByCategory() throws SQLException {
		return customerDAO.selectProductByCategory();
	}

	@Override
	public List<Bundle> selectBundle() throws SQLException {
		return customerDAO.selectBundle();
	}

	@Override
	public int insertOrders(Orders orders) throws SQLException {
		int result = customerDAO.insertOrders(orders);
		if(result == 0) throw new SQLException("주문이 실패하였습니다."); 
		return result;

	}

}
