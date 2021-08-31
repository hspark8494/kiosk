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
			System.out.println(orders);
			
			for(OrdersDetails ordersDetails : orders.getOrdersDetailsList()) {
				if(ordersDetails.getBundleCode() != null) {
					System.out.println(ordersDetails);
				}else {
					System.out.println("주문상세번호 " + ordersDetails.getOrdersDetailsCode() + "의 상품 코드 : " + ordersDetails.getProductCode() +
							" | 주문 수량 : " + ordersDetails.getOrdersDetailsQTY());
				}
				
			}
			System.out.println();
		}
	}
}