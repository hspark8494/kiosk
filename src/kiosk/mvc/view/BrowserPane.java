package kiosk.mvc.view;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;

import javafx.scene.Cursor;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Pane;
import javafx.scene.text.FontSmoothingType;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

/**
 * 이 클래스는 Kiosk에 필요한 웹뷰 및 설정을 초기화하는 역할을 합니다.
 * 
 * @author 박효승
 * @date 2021. 8. 28.
 *
 */
public class BrowserPane extends AnchorPane {
    private final WebView browser = new WebView();
    private final WebEngine webEngine = browser.getEngine();
    

    /**
     * 웹뷰를 노드로 가지고 있는 ArchorPane을 생성합니다.
     * @param initURL
     * @param x
     * @param y
     * @throws MalformedURLException
     */
	public BrowserPane(String initURL, double width, double height) throws MalformedURLException {
		browser.setFontSmoothingType(FontSmoothingType.GRAY);
		browser.setContextMenuEnabled(false);
		browser.setMinWidth(width);
        browser.setMinHeight(height);

        this.setMinWidth(width);
        this.setMinHeight(height);
        
        File file = new File(initURL);
        URL url = file.toURI().toURL();
        
        webEngine.load(url.toString());
        this.getChildren().add(browser);
        
	}
	

	/**
	 * UNDECORATED 상황에서도 윈도우 창을 움직일 수 있는 패널 및 이벤트를 추가합니다.
	 * @param stage
	 * @param x
	 * @param y
	 */
	public void setWindowMover(Stage stage, double width, double height) {
        Pane pane = new Pane();
        pane.setPrefSize(width, height);
		Scene scene = stage.getScene();
        pane.setOnMouseDragged(e->{
        	scene.setCursor(Cursor.MOVE);
        	stage.setX(e.getScreenX());
    	    stage.setY(e.getScreenY());
        });
        
        pane.setOnMousePressed(e->{
        	scene.setCursor(Cursor.MOVE);
        	stage.setX(e.getScreenX());
    	    stage.setY(e.getScreenY());
        });
        
        pane.setOnMouseReleased(e->scene.setCursor(Cursor.DEFAULT));
        
        this.getChildren().add(pane);
	}
	
	public WebView getBrowser() {
		return browser;
	}
	
	public WebEngine getWebEngine() {
		return webEngine;
	}
}
