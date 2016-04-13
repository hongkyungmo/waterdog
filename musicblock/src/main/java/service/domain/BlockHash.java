package service.domain;

public class BlockHash {

	private int hCode;
	private int bCode;
	private String tag;
	
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

	public BlockHash() {	}

	public String toString(){
		return "BlockHash: [hCode] : "+hCode+"[bCode] : "+bCode+"[tag] : "+tag;
	}
	
}