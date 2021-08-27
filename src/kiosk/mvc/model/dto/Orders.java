package kiosk.mvc.model.dto;

import java.util.List;

public class Orders {
	private String ordersCode;
	private int ordersPrice;
	private String ordersDate;
	
	private List<OrdersDetails> ordersDetailsList;

	public Orders() {}
	public Orders(String ordersCode, int ordersPrice, String ordersDate) {
		this.ordersCode = ordersCode;
		this.ordersPrice = ordersPrice;
		this.ordersDate = ordersDate;
	}
	public Orders(String ordersCode, int ordersPrice, String ordersDate, List<OrdersDetails> ordersDetailsList) {
		this(ordersCode, ordersPrice, ordersDate);
		this.ordersDetailsList = ordersDetailsList;
	}
	
	public String getOrdersCode() {
		return ordersCode;
	}
	public void setOrdersCode(String ordersCode) {
		this.ordersCode = ordersCode;
	}
	public int getOrdersPrice() {
		return ordersPrice;
	}
	public void setOrdersPrice(int ordersPrice) {
		this.ordersPrice = ordersPrice;
	}
	public String getOrdersDate() {
		return ordersDate;
	}
	public void setOrdersDate(String ordersDate) {
		this.ordersDate = ordersDate;
	}
	public List<OrdersDetails> getOrdersDetailsList() {
		return ordersDetailsList;
	}
	public void setOrdersDetailsList(List<OrdersDetails> ordersDetailsList) {
		this.ordersDetailsList = ordersDetailsList;
	}
	
	@Override
	public String toString() {
		return "Orders [ordersCode=" + ordersCode + ", ordersPrice=" + ordersPrice + ", ordersDate=" + ordersDate
				+ ", ordersDetailsList=" + ordersDetailsList + "]";
	}	
}
