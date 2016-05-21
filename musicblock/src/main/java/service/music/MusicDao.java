package service.music;

import java.util.List;

import service.domain.Music;
import service.domain.MusicEmotion;
import service.domain.MusicHash;

public interface MusicDao {
	public void addMusic(Music music);

	public void addMusicEmotion(List<MusicEmotion> me, int mCode);

	public void addMusicHash(MusicHash mh, int mCode);

	/* SELECT */
	public Music getMusic(String musicId);

	public int getCurrentMusicCode();

	public void updateMusic(Music music);
}
