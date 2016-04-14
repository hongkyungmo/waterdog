package service.domain;

public class Block {
	private int bCode;		// Block Code
	private int uCode;		// User Code
	private String note;	// 계이름
	private int emotion;	// Emotion
	private int pCount;		// Play Count
	private int dCount;		// Download Count

	public Block() {	}

	public int getbCode() {
		return bCode;
	}

	public void setbCode(int bCode) {
		this.bCode = bCode;
	}

	public int getuCode() {
		return uCode;
	}

	public void setuCode(int uCode) {
		this.uCode = uCode;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public int getEmotion() {
		return emotion;
	}

	public void setEmotion(int emotion) {
		this.emotion = emotion;
	}

	public int getpCount() {
		return pCount;
	}

	public void setpCount(int pCount) {
		this.pCount = pCount;
	}

	public int getdCount() {
		return dCount;
	}

	public void setdCount(int dCount) {
		this.dCount = dCount;
	}
	
	public String toString(){
		return "Block : [bCode] : "+bCode+"[uCode] : "+uCode+"[note] : "+note
				+"[emotion] : "+emotion+"[pCount] : "+pCount+"[dCount] : "+dCount;
	}
	
}

