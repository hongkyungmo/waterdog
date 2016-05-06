package service.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import service.domain.User;
import service.user.UserDao;
import service.user.UserService;

@Service("userServiceImpl")
public class UserServiceImpl implements UserService {
	///Field
	@Autowired
	@Qualifier("userDaoImpl")
	private UserDao userDao;
	
	@Override
	public void addUser(User user) throws Exception{
		userDao.addUser(user);
	}
	
	public void checkUser(User user) throws Exception{
		// 여기서 nick으로 할지 email로 할지 확인
		// controll 에서 넘기니까 controll 에서 해야하나...
	}

}
