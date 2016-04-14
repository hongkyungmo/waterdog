package service.domain;

public class Music {
	
	int mCode;		// Music Code
	int uCode;		// User Code
	String CMPT;	// Note
	int emotion;	// emotion
	int pCount;		// Play Count
	int dCount; 	// Download Count
	
	
	public Music() {
		super();
	}
	public int getmCode() {
		return mCode;
	}
	public void setmCode(int mCode) {
		this.mCode = mCode;
	}
	public int getuCode() {
		return uCode;
	}
	public void setuCode(int uCode) {
		this.uCode = uCode;
	}
	public String getCMPT() {
		return CMPT;
	}
	public void setCMPT(String cMPT) {
		CMPT = cMPT;
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
	
	@Override
	public String toString() {
		return "Music [mCode=" + mCode + ", uCode=" + uCode + ", CMPT=" + CMPT + ", emotion=" + emotion + ", pCount="
				+ pCount + ", dCount=" + dCount + "]";
	}
	
	
	
}
