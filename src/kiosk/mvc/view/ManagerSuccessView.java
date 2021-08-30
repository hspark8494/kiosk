package kiosk.mvc.view;

import java.util.List;

import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.OrdersDetails;

public class ManagerSuccessView {

	/**
	 * 성공 메시지 출력
	 * */
	public static void messagePrint(String message) {
		System.out.println(message);
	}
	
	/**
	 * 판매 내역 출력
	 * */
	public static void ordersPrint(List<Orders> ordersList) {
		System.out.println("********** 총 주문량 : " + ordersList.size() + "개 **********");
		for(Orders orders : ordersList) {
			System.out.println("주문번호 " + orders.getOrdersCode() + "의 주문금액 : " + orders.getOrdersPrice() + " 주문날짜 " + orders.getOrdersDate());
			
			for(OrdersDetails ordersDetails : orders.getOrdersDetailsList()) {
				System.out.println(ordersDetails);
			}
			System.out.println();
		}
	}
}
