package kiosk.mvc.model.dto;

public class OrdersDetails {
	private String ordersDetailsCode; //주문 상세 코드
	private String ordersCode; //주문 코드
	private String productCode; //상품 코드
	private String bundleCode; //세트 코드
	private int ordersDetailsQTY; //주문 수량
	
	public OrdersDetails() {}
	public OrdersDetails(String ordersDetailsCode, String ordersCode, String productCode, String bundleCode,
			int ordersDetailsQTY) {
		this.ordersDetailsCode = ordersDetailsCode;
		this.ordersCode = ordersCode;
		this.productCode = productCode;
		this.bundleCode = bundleCode;
		this.ordersDetailsQTY = ordersDetailsQTY;
	}
	
	public String getOrdersDetailsCode() {
		return ordersDetailsCode;
	}
	public void setOrdersDetailsCode(String ordersDetailsCode) {
		this.ordersDetailsCode = ordersDetailsCode;
	}
	public String getOrdersCode() {
		return ordersCode;
	}
	public void setOrdersCode(String ordersCode) {
		this.ordersCode = ordersCode;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getBundleCode() {
		return bundleCode;
	}
	public void setBundleCode(String bundleCode) {
		this.bundleCode = bundleCode;
	}
	public int getOrdersDetailsQTY() {
		return ordersDetailsQTY;
	}
	public void setOrdersDetailsQTY(int ordersDetailsQTY) {
		this.ordersDetailsQTY = ordersDetailsQTY;
	}
	
	@Override
	public String toString() {
		return "OrdersDetails [ordersDetailsCode=" + ordersDetailsCode + ", ordersCode=" + ordersCode + ", productCode="
				+ productCode + ", bundleCode=" + bundleCode + ", ordersDetailsQTY=" + ordersDetailsQTY + "]";
	}
}