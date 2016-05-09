package service.user.impl;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import service.domain.User;
import service.user.UserDao;

@Repository("userDaoImpl")
public class UserDaoImpl implements UserDao {
	///Field
	@Autowired
	@Qualifier("sqlSessionTemplate")
	private SqlSession sqlSession;
	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}

	///Constructor
	public UserDaoImpl() {
		System.out.println(this.getClass());
	}

	@Override
	public void addUser(User user) throws Exception {
		System.out.println("userDaoImpl 동작 확인");
		sqlSession.insert("UserMapper.addUser", user);
	}

	public User checkUser(Map<String, String> map) throws Exception{
		return (User) sqlSession.selectOne("UserMapper.checkUser", map);
	}

}
