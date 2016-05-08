package app.user;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import service.domain.User;
import service.user.UserService;

@Controller
@RequestMapping("/user/*")
public class UserController {
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;

	public UserController() {
		System.out.println(this.getClass());
	}
	
	@RequestMapping(value = "userLogin", method = RequestMethod.POST)
	public User getJsonUserPOST(@RequestBody Map map) throws Exception {
		System.out.println("(/user/userLogin)RequestBody로 전달받은 String(JSON) : "+map);

		User user = new User();

		user.setPassword((String)map.get("pass"));
		
		String loginInfo = (String)map.get("user");
		if(loginInfo.contains("@")){
			System.out.println("Email>>"+loginInfo);
			user.setEmail(loginInfo);
		}else{
			System.out.println("Nick>>"+loginInfo);
			user.setNick(loginInfo);
		}		

		System.out.println("User>>"+user);
		//mapper에서 decode 사용하여 T/F return
		return user;
	}
}
