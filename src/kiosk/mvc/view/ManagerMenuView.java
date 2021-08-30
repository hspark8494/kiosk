package kiosk.mvc.view;

import java.util.Scanner;

import kiosk.mvc.controller.ManagerController;
import kiosk.mvc.model.dto.Bundle;
import kiosk.mvc.model.dto.Product;

public class ManagerMenuView {
	ManagerController managerController = new ManagerController(); 
	Scanner sc = new Scanner(System.in);
	
	/**
	 * 메뉴 선택
	 * */
	public void menu() {
		System.out.println("===== 관리자 프로그램 =====");
		
		while(true) {
			System.out.println("\n메뉴를 선택해주세요.");
			System.out.println("---------------------------------------------------------------------------------------------------------------");
			System.out.println("1.상품등록  |  2.상품수정  |  3.상품삭제  |  4.세트등록  |  5.세트수정  |  6.세트삭제  |  7.판매조회  |  9.종료");
			System.out.println("---------------------------------------------------------------------------------------------------------------");
			System.out.print("> ");
			int menuNo = Integer.parseInt(sc.nextLine());
			switch(menuNo) {
				case 1 : productInsert(); break;
				case 2 : productUpdate(); break;
				case 3 : productDelete(); break;
				case 4 : bundleInsert(); break;
				case 5 : bundleUpdate(); break;
				case 6 : bundleDelete(); break;
				case 7 : salesInquiry(); break; //판매조회
				case 9 : System.out.println("프로그램 종료");
						System.exit(0);
				default : System.out.println("메뉴는 숫자 '1 ~ 7' 또는 '9'를 입력해주세요");
			}
		}
	}
	
	/**
	 * 1.상품등록
	 * */
	public void productInsert() {
		System.out.print("\n상품 코드 : ");
		String productCode = sc.nextLine();
		System.out.print("\n상품 이름 : ");
		String productName = sc.nextLine();
		System.out.print("\n상품 가격 : ");
		int productPrice = Integer.parseInt(sc.nextLine());
		System.out.print("\n상품 설명 : ");
		String productDetails = sc.nextLine();
		System.out.print("\n상품 이미지 : ");
		String productImage = sc.nextLine();
		System.out.print("\n상품 옵션 : "); //상품 코드(재귀적 관계)
		String productOptions = sc.nextLine();
		System.out.print("\n세트 체크 : ");
		int result = Integer.parseInt(sc.nextLine()); // false = 0 , true = 1
		boolean isBundle = false;
		if(result == 1) isBundle = true;
		
		managerController.productInsert(new Product(productCode, productName, productPrice, productDetails, productImage, productOptions, isBundle));		
	}
	
	/**
	 * 2.상품수정
	 * */
	public void productUpdate() {
		System.out.print("\n상품 코드 : ");
		String productCode = sc.nextLine();
		System.out.print("\n상품 가격 : ");
		int productPrice = Integer.parseInt(sc.nextLine());
		
		managerController.productUpdate(new Product(productCode, null, productPrice, null, null, null, false));
	}
	
	/**
	 * 3.상품삭제
	 * */
	public void productDelete() {
		System.out.print("\n상품 코드 : ");
		managerController.productDelete(sc.nextLine());
	}
	
	/**
	 * 4.세트등록
	 * */
	public void bundleInsert() {
		System.out.print("\n세트 코드 : ");
		String bundleCode = sc.nextLine();
		System.out.print("\n세트 이름 : ");
		String bundleName = sc.nextLine();
		System.out.print("\n세트 설명 : ");
		String bundleDetails = sc.nextLine();
		System.out.print("\n세트 가격 : ");
		int bundlePrice = Integer.parseInt(sc.nextLine());
		System.out.print("\n세트 이미지 : ");
		String bundleImage = sc.nextLine();
		System.out.print("\n상품 코드 : "); //참조 하고 있는 상품
		String productCode = sc.nextLine();
		
		managerController.bundleInsert(new Bundle(bundleCode, bundleName, bundleDetails, bundlePrice, bundleImage, productCode));
	}
	
	/**
	 * 5.세트수정
	 * */
	public void bundleUpdate() {
		System.out.print("\n세트 코드 : ");
		String bundleCode = sc.nextLine();
		System.out.print("\n세트 가격 : ");
		int bundlePrice = Integer.parseInt(sc.nextLine());
		
		managerController.bundleUpdate(new Bundle(bundleCode, null, null, bundlePrice, null, null));
	}
	
	/**
	 * 6.세트삭제
	 * */
	public void bundleDelete() {
		System.out.print("\n세트 코드 : ");
		String bundleCode = sc.nextLine();
		managerController.bundleDelete(bundleCode);
	}
	
	/**
	 * 7.판매조회
	 * */
	public void salesInquiry() {
		
	}
}
