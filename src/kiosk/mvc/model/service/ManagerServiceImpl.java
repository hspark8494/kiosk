package kiosk.mvc.model.service;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dao.ManagerDAO;
import kiosk.mvc.model.dao.ManagerDAOImpl;
import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.Product;

public class ManagerServiceImpl implements ManagerService {
	private ManagerDAO managerDAO = new ManagerDAOImpl();
	@Override
	public void productInsert(Product product) throws SQLException {
		int result = managerDAO.productInsert(product);
		if(result == 0) throw new SQLException("상품 등록이 실패하였습니다.");

	}

	@Override
	public void productUpdate(Product product) throws SQLException {
		int result = managerDAO.productUpdate(product);
		if(result == 0) throw new SQLException("상품 수정이 실패하였습니다.");

	}

	@Override
	public void productDelete(String productCode) throws SQLException {
		int result = managerDAO.productDelete(productCode);
		if(result == 0) throw new SQLException(productCode + "와 일치하는 상품이 없습니다.");

	}

	@Override
	public void bundleInsert(Bundle bundle) throws SQLException {
		int result = managerDAO.bundleInsert(bundle);
		if(result == 0) throw new SQLException("세트 등록이 실패하였습니다.");

	}

	@Override
	public void bundleUpdate(Bundle bundle) throws SQLException {
		int result = managerDAO.bundleUpdate(bundle);
		if(result == 0) throw new SQLException("세트 수정이 실패하였습니다.");

	}

	@Override
	public void bundleDelete(String bundleCode) throws SQLException {
		int result = managerDAO.bundleDelete(bundleCode);
		if(result == 0) throw new SQLException(bundleCode + "와 일치하는 세트가 없습니다.");


	}

	@Override
	public List<Orders> ordersSelect() throws SQLException {
		List<Orders> ordersList = managerDAO.ordersSelect();
		if(ordersList == null || ordersList.isEmpty()) throw new SQLException("판매 내역이 없습니다.");
		return ordersList;
	}

}
