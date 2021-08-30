package kiosk.mvc.controller;

import java.util.List;

import com.google.gson.Gson;

import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import kiosk.mvc.model.dto.Category;
import kiosk.mvc.model.dto.Product;
import kiosk.mvc.model.service.CustomerService;

/**
 * WebView를 제어하는 컨트롤러
 * 
 * @author 박효승
 * @date 2021. 8. 28.
 *
 */
public class FrontController {
	private static FrontController instance = new FrontController();
	private CustomerService cs = new CustomerService();
	private WebView webView;
	private WebEngine webEngine;

	private Gson gson = new Gson();

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
	 * WebView의 상품목록을 초기화 시킵니다.
	 */
	public void initProducts() {
		try {
			List<Category> list = cs.selectProductByCategory();
			String data = gson.toJson(list);
			System.out.println(data);

			webEngine.executeScript("initProducts('"+data+"');");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	/**
	 * WebView의 세트목록을 초기화 시킵니다.
	 */
	public void initBundles() {
		try {
			List<Product> list = cs.selectBundle();
			String data = gson.toJson(list);
			System.out.println(data);
			webEngine.executeScript("initBundles('"+data+"');");

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public void initialize() {
		initProducts();
		initBundles();
		webEngine.executeScript("initialize()");
		
	}
	

}
