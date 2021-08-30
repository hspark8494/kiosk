package kiosk.mvc.controller;

import java.sql.SQLException;

import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Product;
import kiosk.mvc.model.service.ManagerService;
import kiosk.mvc.view.ManagerFailView;
import kiosk.mvc.view.ManagerSuccessView;

public class ManagerController {
	private ManagerService managerService = new ManagerService();
	
	/**
	 * 상품 등록
	 * */
	public void productInsert(Product product) {
		try {
			managerService.productInsert(product);
			ManagerSuccessView.messagePrint("상품이 등록되었습니다.");
		}catch (SQLException e) {
			ManagerFailView.messagePrint(e.getMessage());
		}
	}
	
	/**
	 * 상품 가격 수정
	 * */
	public void productUpdate(Product product) {
		try {
			managerService.productUpdate(product);
			ManagerSuccessView.messagePrint("상품 가격이 수정되었습니다.");
		}catch (SQLException e) {
			ManagerFailView.messagePrint(e.getMessage());
		}
	}
	
	/**
	 * 상품 삭제
	 * */
	public void productDelete(String productCode) {
		try {
			managerService.productDelete(productCode);
			ManagerSuccessView.messagePrint(productCode + " 상품이 삭제되었습니다.");
		}catch (SQLException e) {
			ManagerFailView.messagePrint(e.getMessage());
		}
	}
	
	/**
	 * 세트 등록
	 * */
	public void bundleInsert(Bundle bundle) {
		try {
			managerService.bundleInsert(bundle);
			ManagerSuccessView.messagePrint("세트가 등록되었습니다.");
		}catch (SQLException e) {
			ManagerFailView.messagePrint(e.getMessage());
		}
	}
	
	/**
	 * 세트 수정
	 * */
	public void bundleUpdate(Bundle bundle) {
		try {
			managerService.bundleUpdate(bundle);
			ManagerSuccessView.messagePrint("세트 가격이 수정되었습니다.");
		}catch (SQLException e) {
			ManagerFailView.messagePrint(e.getMessage());
		}
	}
	
	/**
	 * 세트 삭제
	 * */
	public void bundleDelete(String bundleCode) {
		try {
			managerService.bundleDelete(bundleCode);
			ManagerSuccessView.messagePrint(bundleCode + " 세트가 삭제되었습니다.");
		}catch (SQLException e) {
			ManagerFailView.messagePrint(e.getMessage());
		}
	}
}
