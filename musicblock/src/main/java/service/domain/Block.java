package service.domain;

import java.util.List;
import java.sql.Date;

public class Block {
	private int bCode;		// Block Code
	private int uCode;		// User Code
	private String note;	// 계이름
	private int pCount;		// Play Count
	private int dCount;		// Download Count
	private String title; 	// 제목
	private Date regDate;	//업로드시간
	private int time;		// 블럭시간
	List<BlockHash> blockHashList;
	List<BlockEmotion> blockEmotionList;
	
	// java.sql.*
	// 1. Date : millisecond -> SQL  DATE
	// 2. Time : java.util.Date class -> SQL TIME value.
	// 3. Timestamp : java.util.Date -> SQL TIMESTAMP value // 더 세밀한 단위
	
	

	public Block(){
		super();
	}

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

	public int getTime() {
		return time;
	}

	public void setTime(int time) {
		this.time = time;
	}

	public List<BlockHash> getBlockHashList() {
		return blockHashList;
	}

	public void setBlockHashList(List<BlockHash> blockHashList) {
		this.blockHashList = blockHashList;
	}

	public List<BlockEmotion> getBlockEmotionList() {
		return blockEmotionList;
	}

	public void setBlockEmotionList(List<BlockEmotion> blockEmotionList) {
		this.blockEmotionList = blockEmotionList;
	}
	
	@Override
	public String toString() {
		return "Block [bCode=" + bCode + ", uCode=" + uCode + ", note=" + note + ", pCount=" 
	+ pCount + ", dCount=" + dCount + ", title=" + title + ", regDate=" + regDate + ", time=" + time 
	+ ", blockHashList="+ blockHashList + ", blockEmotionList=" + blockEmotionList + "]";
	}

}

