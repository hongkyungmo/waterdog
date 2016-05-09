package service.user;

import java.util.Map;

import service.domain.User;

public interface UserDao {
	public void addUser(User user) throws Exception ;
	public User checkUser(Map<String, String> map) throws Exception;
}
