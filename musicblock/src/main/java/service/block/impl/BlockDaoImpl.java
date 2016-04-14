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
		// TODO Auto-generated method stub

	}

	@Override
	public void updateBlock(Block block) {
		// TODO Auto-generated method stub

	}

}
