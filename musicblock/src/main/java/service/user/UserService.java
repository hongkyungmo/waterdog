package service.user;

import service.domain.User;

public interface UserService {
	public void addUser(User user) throws Exception;
	public void checkUser(User user) throws Exception;
}
