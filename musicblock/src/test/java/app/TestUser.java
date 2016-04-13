package app;

import service.domain.User;
import service.user.UserService;
import service.user.impl.UserServiceImpl;

public class TestUser {
	public static void main(String args[]) throws Exception{
		System.out.println("테스트!");
		
		User user = new User();
		UserService userService = new UserServiceImpl();
		
		user.setNick("hahaha");
		
		userService.addUser(user);
	}
}
