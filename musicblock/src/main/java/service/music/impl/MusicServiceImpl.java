package service.music.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import service.domain.Music;
import service.music.MusicDao;
import service.music.MusicService;

@Service("musicServiceImpl")
public class MusicServiceImpl implements MusicService{
	
	///Field
	@Autowired
	@Qualifier("musicDaoImpl")
	private MusicDao musicDao;
	
	public MusicServiceImpl(MusicDao musicDao) {
		this.musicDao = musicDao;
	}
	
	///Constructor
	public MusicServiceImpl() {
		System.out.println(this.getClass());
	}

	///Method
	public void addMusic(Music music) throws Exception {
		musicDao.addMusic(music);
		int mcode = musicDao.getCurrentMusicCode();
		System.out.println("mcode>>"+mcode);
		
		musicDao.addMusicEmotion(music.getMusicEmotionList(), mcode);
		
		for(int i = 0 ; i < music.getMusicHashList().size() ; i++){
			musicDao.addMusicHash(music.getMusicHashList().get(i), mcode);
		}
	}
	
	public Music getMusic(String musicId) throws Exception {
		return musicDao.getMusic(musicId);
	}
	
	public void updateMusic(Music music) throws Exception {
		musicDao.updateMusic(music);
	}
}
