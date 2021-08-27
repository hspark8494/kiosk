package kiosk.mvc.model.dto;

public class Bundle {
	private String bundleCode; //��Ʈ �ڵ�
	private String bundleName; //��Ʈ �̸�
	private String bundleDetails; //��Ʈ ����
	private int bundlePrice; //��Ʈ ����
	private String bundleImage; //��Ʈ �̹��� URL
	
	private Product product;

	public Bundle() {}
	public Bundle(String bundleCode, String bundleName, String bundleDetails, int bundlePrice, String bundleImage) {
		this.bundleCode = bundleCode;
		this.bundleName = bundleName;
		this.bundleDetails = bundleDetails;
		this.bundlePrice = bundlePrice;
		this.bundleImage = bundleImage;
	}
	public Bundle(String bundleCode, String bundleName, String bundleDetails, int bundlePrice, String bundleImage, Product product) {
		this(bundleCode, bundleName, bundleDetails, bundlePrice, bundleImage);
		this.product = product;
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
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	@Override
	public String toString() {
		return "Bundle [bundleCode=" + bundleCode + ", bundleName=" + bundleName + ", bundleDetails=" + bundleDetails
				+ ", bundlePrice=" + bundlePrice + ", bundleImage=" + bundleImage + ", product=" + product + "]";
	}	
}
