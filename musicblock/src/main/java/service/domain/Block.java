package service.domain;

import java.util.List;

public class Block {
	private int bCode;		// Block Code
	private int uCode;		// User Code
	private String note;	// 계이름
	private String title; 	// 제목
	private int pCount;		// Play Count
	private int dCount;		// Download Count
	List<BlockHash> blockHashList;
	List<BlockEmotion> blockEmotionList;
	

	public Block() {	
		System.out.println(this.getClass());
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
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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
	
	public void setblockHashList(List hashList){
		blockHashList = (List)hashList;
//		for(int i=0;i<HashList.size();i++){
//			blockHashList=HashList;
//		}
//		
//		this.blockHashList=HashList;
		
		// 여기수정!!!!!!!!!!!!!!!!!!!!!!!!
	}
	
	public List<BlockHash> getblockHashList(){
		return blockHashList;
	}

	public List<BlockEmotion> getBlockEmotionList() {
		return blockEmotionList;
	}

	public void setBlockEmotionList(List<BlockEmotion> blockEmotionList) {
		this.blockEmotionList = blockEmotionList;
	}

	@Override
	public String toString() {
		return "Block [bCode=" + bCode + ", uCode=" + uCode + ", note=" + note + ", pCount=" + pCount + ", dCount="
				+ dCount + ", blockHashList=" + blockHashList + ", blockEmotionList=" + blockEmotionList + "]";
	}

	
	
	
}

