package service.music.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import service.domain.Music;
import service.domain.MusicEmotion;
import service.domain.MusicHash;
import service.music.MusicDao;

@Repository("musicDaoImpl")
public class MusicDaoImpl implements MusicDao {

	// Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	
	public void setSqlSession(SqlSession sqlSession){
		this.sqlSession = sqlSession;
	}
	
	public MusicDaoImpl(){
		System.out.println(this.getClass());
	}
		
	@Override
	public void addMusic(Music music) {
		System.out.println("musicDaoImpl의 addMusic()");
		sqlSession.insert("MusicMapper.addMusic",music);
		System.out.println("musicDaoImpl의 addMusic()");
	}

	@Override
	public void addMusicEmotion(List<MusicEmotion> me, int mCode) {
		HashMap<String, Object> emotion = new HashMap<String, Object>();
		System.out.println("addBlockEmotion>>" + mCode);
		for (int i = 0; i < me.size(); i++) {
			me.get(i).setmCode(mCode);
		}
		emotion.put("list", me);
		sqlSession.insert("MusicMapper.addMusicEmotion", emotion);
	}

	@Override
	public void addMusicHash(MusicHash mh, int mCode) {
		mh.setbCode(mCode);
		System.out.println("addMusicHash>>" + mh);
		sqlSession.insert("MusicMapper.addMusicHash", mh);
	}

	/* SELECT */
	@Override
	public Music getMusic(String musicId) {
		return sqlSession.selectOne("MusicMapper.getMusic",musicId);
	}

	@Override
	public int getCurrentMusicCode() {
		return sqlSession.selectOne("MusicMapper.getCurrentMusicCode");
	}

	@Override
	public void updateMusic(Music music) {
	}
	
}
