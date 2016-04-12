
public class BlockHashVo {

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

	public BlockHashVo() {	}

	public String toString(){
		return "BlockHashVo: [hCode] : "+hCode+"[bCode] : "+bCode+"[tag] : "+tag;
	}
	
}
