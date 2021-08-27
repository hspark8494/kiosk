package kiosk.mvc.model.service;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dao.CustomerDAO;
import kiosk.mvc.model.dao.CustomerDAOImpl;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;

public class CustomerService {
	CustomerDAO customerDAO = new CustomerDAOImpl();
	
	public List<Category> selectAll() throws SQLException{
		return customerDAO.selectProductByCategory();
	}
	
	public int ordersInsert(Orders orders) throws SQLException{
		return customerDAO.ordersInsert(orders);
	}
}
