package service.block.impl;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import service.block.BlockDao;
import service.domain.Block;

@Repository("blockDaoImpl")
public class BlockDaoImpl implements BlockDao{
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	@Override
	public void addBlock(Block block) {
		sqlSession.insert("BlockMapper.addBlock", block);
		sqlSession.insert("BlockMapper.addBlockHash", block.getblockHashList());
		//Dao에서 for문을 통해 매번 addBlockHash를 부르지 않는 이유 :
		//dao 함수 호출 - mapper id 검색 - db 오픈 - query 수행 >> 이 매번 일어나니까
		//지금 방식으로 하면 query 수행 전의 과정이 한번만 발생하고 query 수행만 여러번!
	}

	@Override
	public void updateBlock(Block block) {
		// TODO Auto-generated method stub

	}

}
