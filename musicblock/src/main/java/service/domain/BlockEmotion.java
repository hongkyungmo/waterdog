package service.domain;

public class BlockEmotion {

	private int emotion;	// Emotion
	private int bCode;
	
	public BlockEmotion() {
		super();
	}
	
	public BlockEmotion(int emotion) {
		super();
		this.emotion = emotion;
	}

	public int getEmotion() {
		return emotion;
	}

	public void setEmotion(int emotion) {
		this.emotion = emotion;
	}

	public int getbCode() {
		return bCode;
	}

	public void setbCode(int bCode) {
		this.bCode = bCode;
	}

	@Override
	public String toString() {
		return "BlockEmotion [emotion=" + emotion + ", bCode=" + bCode + "]";
	}

}
