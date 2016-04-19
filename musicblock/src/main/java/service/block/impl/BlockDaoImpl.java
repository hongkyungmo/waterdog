package service.block.impl;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import service.block.BlockDao;
import service.domain.Block;
import service.domain.BlockEmotion;
import service.domain.BlockHash;

@Repository("blockDaoImpl")
public class BlockDaoImpl implements BlockDao{
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public BlockDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addBlock(Block block) {
		sqlSession.insert("BlockMapper.addBlock", block);
	}
	
	
	public void addBlockEmotion(List<BlockEmotion> be, int bCode){
		HashMap<String, Object> emotion = new HashMap<String,Object>();
		System.out.println("addBlockEmotion>>"+bCode);
		for(int i=0;i<be.size();i++){
			be.get(i).setbCode(bCode);
		}
		emotion.put("list", be);
		sqlSession.insert("BlockMapper.addBlockEmotion",emotion);
	}
	public void addBlockHash(List<BlockHash> bh, int bCode){
		HashMap<String, Object> hash = new HashMap<String,Object>();
		System.out.println("addBlockHash>>"+bCode);
		for(int i=0;i<bh.size();i++){
			bh.get(i).setbCode(bCode);
		}
		hash.put("list", bh);
		sqlSession.insert("BlockMapper.addBlockHash",hash);

	}
	
	public int getCurrentBlockCode(){
		return sqlSession.selectOne("BlockMapper.getCurrentBlockCode");
	}

	@Override
	public void updateBlock(Block block) {
		// TODO Auto-generated method stub

	}

}
