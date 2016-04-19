package service.domain;

public class BlockHash {

	private int bCode;	// Block Code
	private String tag;	// Tag
	
	
	public BlockHash() {	}
	
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
		return "BlockHash: "+"[bCode] : "+bCode+"[tag] : "+tag;
	}
	
}