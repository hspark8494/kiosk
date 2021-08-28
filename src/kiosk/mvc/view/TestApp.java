package kiosk.mvc.view;

import com.google.gson.Gson;

import kiosk.mvc.model.dto.Product;

public class TestApp {
	public static void main(String[] args) {
		System.out.println("Hello");
		Product prod = new Product();
		prod.setProductCode("1234");
		prod.setProductName("불고기버거");
		prod.setProductPrice(10000);
		
		Gson gson = new Gson();
		String json = gson.toJson(prod);
		
		System.out.println(json);
		
	}
}
