package service.domain;

import java.sql.Timestamp;

public class Music {
	
	private int mCode;		// Music Code
	private int uCode;		// User Code
	private String CMPT;	// Note
	private int emotion;	// emotion
	private int pCount;		// Play Count
	private int dCount; 	// Download Count
	private String Title;	// title
	private Timestamp regDate;	//업로드시간
	
	
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
	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public Timestamp getRegDate() {
		return regDate;
	}
	public void setRegDate(Timestamp regDate) {
		this.regDate = regDate;
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
				+ pCount + ", dCount=" + dCount + ", Title=" + Title + ", regDate=" + regDate + "]";
	}
	
}
