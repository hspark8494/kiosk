package kiosk.mvc.model.dto;

import java.util.List;

public class Category {
	private String categoryCode; //카테고리 코드
	private String categoryName; //카테고리 이름
	
	private List<Product> productList; //상품 종류

	public Category() {}	
	public Category(String categoryCode, String categoryName) {
		this.categoryCode = categoryCode;
		this.categoryName = categoryName;
	}
	public Category(String categoryCode, String categoryName, List<Product> productList) {
		this(categoryCode, categoryName);
		this.productList = productList;
	}
	
	public String getCategoryCode() {
		return categoryCode;
	}
	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public List<Product> getProductList() {
		return productList;
	}
	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}
	
	@Override
	public String toString() {
		return "Category [categoryCode=" + categoryCode + ", categoryName=" + categoryName + ", productList="
				+ productList + "]";
	}	
}
