package service.domain;

public class BlockHash {

	private int hCode;	// Hash Code
	private int bCode;	// Block Code
	private String tag;	// Tag
	
	
	public BlockHash() {	}
	
	public int gethCode() {
		return hCode;
	}

	public void sethCode(int hCode) {
		this.hCode = hCode;
	}

	public int getbCode() {
		return bCode;
	}

	public void setbCode(int bCode) {
		this.bCode = bCode;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public String toString(){
		return "BlockHash: [hCode] : "+hCode+"[bCode] : "+bCode+"[tag] : "+tag;
	}
	
}