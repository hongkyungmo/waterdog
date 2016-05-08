package service.user;

import service.domain.User;

public interface UserDao {
	public void addUser(User user) throws Exception ;
	public void checkUserByNick(User user) throws Exception;
	public void checkUserByEmail(User user) throws Exception;
}
