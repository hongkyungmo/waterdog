package service.domain;

import java.sql.Date;
import java.util.List;

public class Music {
	
	private int mCode;		// Block Code
	private int uCode;		// User Code
	private String cmpt;	// 계이름
	private int pCount;		// Play Count
	private int dCount;		// Download Count
	private String title; 	// 제목
	private Date regDate;	//업로드시간
	List<MusicHash> musicHashList;
	List<MusicEmotion> musicEmotionList;
	
	
	public Music(){
		super();
		System.out.println(this.getClass());
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
	public String getCmpt() {
		return cmpt;
	}
	public void setCmpt(String cmpt) {
		this.cmpt = cmpt;
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
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public List<MusicHash> getMusicHashList() {
		return musicHashList;
	}
	public void setMusicHashList(List<MusicHash> musicHashList) {
		this.musicHashList = musicHashList;
	}
	public List<MusicEmotion> getMusicEmotionList() {
		return musicEmotionList;
	}
	public void setMusicEmotionList(List<MusicEmotion> musicEmotionList) {
		this.musicEmotionList = musicEmotionList;
	}

	@Override
	public String toString() {
		return "Music [mCode=" + mCode + ", uCode=" + uCode + ", cmpt=" + cmpt + ", pCount=" + pCount 
				+ ", dCount="+ dCount + ", title=" + title + ", regDate=" + regDate 
				+ ", musicHashList=" + musicHashList+ ", musicEmotionList=" + musicEmotionList + "]";
	}
	
	
}