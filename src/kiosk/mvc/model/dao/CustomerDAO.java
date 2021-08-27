package kiosk.mvc.model.dao;

import java.sql.SQLException;

import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.OrdersDetails;

public interface CustomerDAO {
	/**
	 * 시작과 동시에 DB에서 모든 정보를 프론트로 넘겨주는 메소드
	 * select.All=select * from category join product using(category_code) join bundle using(product_code)
	 * */
	Category selectAll() throws SQLException;
	
	/**
	 * 주문 메소드
	 * insert.orders=insert into orders(orders_code, orders_price, orders_date) values(orders_seq.nextval, ?, default)
	 * */
	int ordersInsert(int ordersPrice) throws SQLException;
	
	/**
	 * 주문 상세 메소드
	 * insert.ordersDetails=insert into orders_details(orders_details_code, orders_code, product_code, bundle_code, orders_details_qty)
	 * values(orders_details_seq.nextval, orders_seq.currval, ?, ?, ?)
	 * */
	int ordersDetailsInsert(OrdersDetails ordersdetails) throws SQLException;
}
