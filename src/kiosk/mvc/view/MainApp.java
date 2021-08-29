package kiosk.mvc.view;

import javafx.application.Application;
import javafx.concurrent.Worker;
import javafx.scene.Scene;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import kiosk.mvc.controller.FrontController;

/**
 * Kiosk 메인 어플리케이션 클래스
 * @author 박효승
 * @date 2021. 8. 28.
 *
 */
public class MainApp extends Application {

	@Override
	public void start(final Stage stage) throws Exception {
		double x = 765.0;
		double y = 1080.0;

		BrowserPane pane = new BrowserPane("resources/html/index.html", x, y);

		System.setProperty("prism.lcdtext", "false");

		Scene scene = new Scene(pane);
		stage.setScene(scene);
		
		stage.initStyle(StageStyle.UNDECORATED);
		stage.setTitle("Kiosk");
		
		pane.setWindowMover(stage, 300.0, 75.0);
		stage.setWidth(x);
		stage.setHeight(y);

		stage.show();
		
		FrontController.getInstance().setWebView(pane.getWebView());
		Worker<Void> worker= pane.getWebEngine().getLoadWorker();
		
//		FrontController fc = FrontController.getInstance();
//		
//		worker.stateProperty().addListener((ob, ov, nv) -> {
//			if (nv == Worker.State.SUCCEEDED) {
//				fc.initialize();
//			}
//		});
		
	}

	public static void main(String[] args) {
		launch(args);
	}

}