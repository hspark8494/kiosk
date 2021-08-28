package kiosk.mvc.model.dto;

import java.util.List;

public class Product {
	private String productCode; //상품코드
	private String productName; //상품 이름
	private int productPrice; //상품가격
	private String productDetails; //상품설명
	private String productImage; //상품이미지 URL
	private String productOptions; //상품 옵션
	private boolean isBundle; //세트 체크
	
	private Category category; //카테고리
	
	public Product() {}
	public Product(String productCode, String productName, int productPrice, String productDetails, String productImage,
			String productOptions, boolean isBundle) {
		this.productCode = productCode;
		this.productName = productName;
		this.productPrice = productPrice;
		this.productDetails = productDetails;
		this.productImage = productImage;
		this.productOptions = productOptions;
		this.isBundle = isBundle;
	}
	public Product(String productCode, String productName, int productPrice, String productDetails, String productImage,
			String productOptions, boolean isBundle, Category category) {
		this(productCode, productName, productPrice, productDetails, productImage, productOptions, isBundle);
		this.category = category;
	}
	
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public int getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(int productPrice) {
		this.productPrice = productPrice;
	}
	public String getProductDetails() {
		return productDetails;
	}
	public void setProductDetails(String productDetails) {
		this.productDetails = productDetails;
	}
	public String getProductImage() {
		return productImage;
	}
	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}
	public String getProductOptions() {
		return productOptions;
	}
	public void setProductOptions(String productOptions) {
		this.productOptions = productOptions;
	}
	public boolean isBundle() {
		return isBundle;
	}
	public void setBundle(boolean isBundle) {
		this.isBundle = isBundle;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "Product [productCode=" + productCode + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", productDetails=" + productDetails + ", productImage=" + productImage + ", productOptions="
				+ productOptions + ", isBundle=" + isBundle + ", category=" + category + "]";
	}	
}
