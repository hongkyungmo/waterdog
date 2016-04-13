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

	}

}
