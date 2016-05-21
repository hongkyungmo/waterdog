package service.music;

import service.domain.Music;

public interface MusicService {
	public void addMusic(Music music) throws Exception;
	public Music getMusic(String musicId) throws Exception;
	public void updateMusic(Music music) throws Exception;
}
