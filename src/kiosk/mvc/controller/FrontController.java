package kiosk.mvc.controller;

import java.lang.reflect.Type;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import javafx.concurrent.Worker;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Orders;
import kiosk.mvc.model.dto.OrdersDetails;
import kiosk.mvc.model.service.CustomerService;
import kiosk.mvc.model.service.CustomerServiceImpl;
import netscape.javascript.JSObject;

/**
 * WebView를 제어하는 컨트롤러
 * 
 * @author 박효승
 * @date 2021. 8. 28.
 *
 */
public class FrontController {
	private static FrontController instance = new FrontController();
	private CustomerService cs = new CustomerServiceImpl();
	private WebView webView;
	private WebEngine webEngine;

	private FrontController() {
	};

	public static FrontController getInstance() {
		return instance;
	}

	public WebView getWebView() {
		return webView;
	}

	public void setWebView(WebView webView) {
		this.webView = webView;
		this.webEngine = webView.getEngine();

	}

	/**
	 * WebView의 상품목록 초기화
	 */
	public void initProducts() {
		Gson gson = new Gson();
		try {
			List<Category> list = cs.selectProductByCategory();
			String data = gson.toJson(list);
			System.out.println(data);

			webEngine.executeScript("initProducts('" + data + "');");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * WebView의 세트 리스트 초기화
	 */
	public void initBundles() {
		try {
			List<Bundle> list = cs.selectBundle();
			Gson gson = new Gson();
			String data = gson.toJson(list);
			System.out.println(data);
			webEngine.executeScript("initBundles('" + data + "');");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * WebView 초기화
	 */
	public void initialize() {
		initProducts();
		initBundles();
		webEngine.executeScript("initialize()");
	}
	
	/**
	 * 서비스 연결
	 */
	public void insertOrders(String input) {
		Gson gson = new Gson();
		Type listType = new TypeToken<ArrayList<OrdersDetails>>() {
		}.getType();

		List<OrdersDetails> list = gson.fromJson(input.toString(), listType);
		Orders orders = new Orders();
		orders.setOrdersDetailsList(list);

		try {
			cs.insertOrders(orders);
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}
}
