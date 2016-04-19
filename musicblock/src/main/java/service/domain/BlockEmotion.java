package service.domain;

public class BlockEmotion {

	private int emotion;	// Emotion
	private int bCode;
	
	public BlockEmotion() {
		System.out.println(this.getClass());
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
