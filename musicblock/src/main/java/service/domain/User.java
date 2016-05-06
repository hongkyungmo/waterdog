package service.domain;


public class User {
	private	int uCode;		// User Code
	private String nick;	// Nickname
	private String email;
	private String password;

	public User() {
		super();
	}

	public User(int uCode, String nick, String email, String password) {
		super();
		this.uCode = uCode;
		this.nick = nick;
		this.email=email;
		this.password=password;
	}

	public int getuCode() {
		return uCode;
	}

	public void setuCode(int uCode) {
		this.uCode = uCode;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [uCode=" + uCode + ", nick=" + nick + ", email=" + email + 
				", password=" + password + "]";
	}

	
	
}
