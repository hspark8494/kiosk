package kiosk.mvc.controller;

import java.sql.SQLException;
import java.util.List;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.Product;
import kiosk.mvc.model.service.CustomerService;

public class CustomerController {
	static CustomerService customerService = new CustomerService();
	
	/**
	 * 카테고리별로 상품의 정보를 가져오는 메소드
	 * */
	public static void selectProductByCategory(){
		try {
			List<Category> categoryList = customerService.selectProductByCategory();
			System.out.println("********총 카테고리 " + categoryList.size() + "개수 **************");
			for(Category category : categoryList) {
				System.out.println(category.getCategoryCode() + "의 " + category.getCategoryName());
				
				for(Product product : category.getProductList()) {
					System.out.println(product);
				}
				System.out.println();
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * 세트별로 세트 안에 들어있는 상품(사이드, 음료)의 정보를 가져오는 메소드
	 * */
	public static void selectProductInBundle(){
		try {
			List<Bundle> bundleList = customerService.selectProductInBundle();
			//System.out.println("********총 세트 " + bundleList.size() + "개수 **************");
			for(Bundle bundle : bundleList) {
				System.out.println(bundle.getBundleCode() + "의 " + bundle.getBundleName());
				
				for(Product product : bundle.getProductList()) {
					System.out.println(product);
				}
				System.out.println();
			}
		}catch (SQLException e) {
			//e.printStackTrace();
		}
	}
	
	/**
	 * 주문 완료시 주문 내역을 저장하는 메소드
	 * */
	public void ordersInsert(Orders orders){ 
		
	}
	
	public static void main(String[] args) {
		//selectProductByCategory();
		selectProductInBundle();
	}
}
