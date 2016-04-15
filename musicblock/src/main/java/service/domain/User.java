package service.domain;


public class User {
	private	int uCode;		// User Code
	private String nick;	// Nickname

	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(int uCode, String nick) {
		super();
		this.uCode = uCode;
		this.nick = nick;
	}

	public int getUCode() {
		return uCode;
	}

	public void setUCode(int uCode) {
		this.uCode = uCode;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}
}
