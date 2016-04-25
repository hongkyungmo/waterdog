package service.domain;

public class MusicEmotion {
	private int emotion;	
	private int mCode;
	
	public MusicEmotion(){	
		super();
	}

	public int getEmotion() {
		return emotion;
	}

	public void setEmotion(int emotion) {
		this.emotion = emotion;
	}

	public int getmCode() {
		return mCode;
	}

	public void setmCode(int mCode) {
		this.mCode = mCode;
	}

	@Override
	public String toString() {
		return "MusicEmotion [emotion=" + emotion + ", mCode=" + mCode + "]";
	}
}
