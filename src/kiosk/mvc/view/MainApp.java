package kiosk.mvc.view;
 
import java.io.File;
import java.net.URL;

import javafx.application.Application;
import javafx.scene.Cursor;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.Pane;
import javafx.scene.text.FontSmoothingType;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
 
public class MainApp extends Application {
 
    @Override
    public void start(final Stage stage) throws Exception{
        final WebView browser = new WebView();
        final WebEngine webEngine = browser.getEngine();
        browser.setFontSmoothingType(FontSmoothingType.GRAY);
        System.setProperty("prism.lcdtext", "false");
        File file = new File("resources/html/index.html");
        URL url = file.toURI().toURL();
        System.out.println("HTML LOAD: " + url.toString());
        webEngine.load(url.toString());
        
        browser.setContextMenuEnabled(false);
        AnchorPane root = new AnchorPane(browser);
        
        
        
        Pane pane = new Pane();
        pane.setPrefSize(300.0, 80.0);
        
        
        Scene scene = new Scene(root);
        root.getChildren().add(pane);
        
        
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
        
        
        stage.initStyle(StageStyle.UNDECORATED);
        stage.setTitle("Kiosk");
        stage.setScene(scene);
        stage.setWidth(765);
        stage.setHeight(1025);
        browser.setMinHeight(1025);
        browser.setMinWidth(765);
        stage.show();
    }
 
    public static void main(String[] args) {
        launch(args);
    }
 
}