package kiosk.mvc.model.dto;

public class Bundle {
	private String bundleCode; //세트 코드
	private String bundleName; //세트 이름
	private String bundleDetails; //세트 설명
	private int bundlePrice; //세트 가격
	private String bundleImage; //세트 이미지 URL
	private String productCode;
	
	public Bundle() {}
	public Bundle(String bundleCode, String bundleName, String bundleDetails, int bundlePrice, String bundleImage) {
		this.bundleCode = bundleCode;
		this.bundleName = bundleName;
		this.bundleDetails = bundleDetails;
		this.bundlePrice = bundlePrice;
		this.bundleImage = bundleImage;
	}
	public Bundle(String bundleCode, String bundleName, String bundleDetails, int bundlePrice, String bundleImage, String productCode) {
		this(bundleCode, bundleName, bundleDetails, bundlePrice, bundleImage);
		this.productCode = productCode;
	}

	public String getBundleCode() {
		return bundleCode;
	}
	public void setBundleCode(String bundleCode) {
		this.bundleCode = bundleCode;
	}
	public String getBundleName() {
		return bundleName;
	}
	public void setBundleName(String bundleName) {
		this.bundleName = bundleName;
	}
	public String getBundleDetails() {
		return bundleDetails;
	}
	public void setBundleDetails(String bundleDetails) {
		this.bundleDetails = bundleDetails;
	}
	public int getBundlePrice() {
		return bundlePrice;
	}
	public void setBundlePrice(int bundlePrice) {
		this.bundlePrice = bundlePrice;
	}
	public String getBundleImage() {
		return bundleImage;
	}
	public void setBundleImage(String bundleImage) {
		this.bundleImage = bundleImage;
	}
	public String getProductCode() {
		return productCode;
	}
	public void setProductCode(String productCode) {
		this.productCode = productCode;
	}
	
	@Override
	public String toString() {
		return "Bundle [bundleCode=" + bundleCode + ", bundleName=" + bundleName + ", bundleDetails=" + bundleDetails
				+ ", bundlePrice=" + bundlePrice + ", bundleImage=" + bundleImage + "]";
	}	
	
}
