package service.domain;

public class MusicHash {

	private int hCode; 	// Hash Code
	private int bCode; 	// Block Code
	private String tag; // Tag

	
	public MusicHash() {
		super();
		// TODO Auto-generated constructor stub
	}

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

	public String toString() {
		return "MuscHash: [hCode] : " + hCode + "[bCode] : " + bCode + "[tag] : " + tag;
	}

}
