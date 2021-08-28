package kiosk.mvc.model.dto;

/**
 * 이 클래스는 Bundle DTO를 래핑하여 Prdouct처럼 다룰 수 있게 해줍니다.
 * 
 * @author 박효승
 * @date 2021. 8. 29.
 *
 */
public class BundleWrapper extends Product{
	private Bundle bundle;

	public BundleWrapper(Bundle bundle) {
		setProductCode(bundle.getBundleCode());
		setProductName(bundle.getBundleName());
		setProductPrice(bundle.getBundlePrice());
		setProductDetails(bundle.getBundleDetails());
		setProductImage(bundle.getBundleImage());
	}
	
	/**
	 * 원래의 bundle 객체를 돌려줍니다
	 * @return bundle
	 */
	public Bundle unwrap() {
		return bundle;
	}
}
