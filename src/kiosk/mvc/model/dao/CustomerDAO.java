package kiosk.mvc.model.dao;

import java.sql.SQLException;

import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.OrdersDetails;

public interface CustomerDAO {
	/**
	 * ���۰� ���ÿ� DB���� ��� ������ ����Ʈ�� �Ѱ��ִ� �޼ҵ�
	 * select.All=select * from category join product using(category_code) join bundle using(product_code)
	 * */
	Category selectAll() throws SQLException;
	
	/**
	 * �ֹ� �޼ҵ�
	 * insert.orders=insert into orders(orders_code, orders_price, orders_date) values(orders_seq.nextval, ?, default)
	 * */
	int ordersInsert(int ordersPrice) throws SQLException;
	
	/**
	 * �ֹ� �� �޼ҵ�
	 * insert.ordersDetails=insert into orders_details(orders_details_code, orders_code, product_code, bundle_code, orders_details_qty)
	 * values(orders_details_seq.nextval, orders_seq.currval, ?, ?, ?)
	 * */
	int ordersDetailsInsert(OrdersDetails ordersdetails) throws SQLException;
}
