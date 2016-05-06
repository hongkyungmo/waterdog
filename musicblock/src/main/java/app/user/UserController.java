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
		
		String loginInfo = (String)map.get("user");
		String password = (String)map.get("password");
		System.out.println("password>>"+password);
		
		if(loginInfo.contains("@")){
			System.out.println("Email>>"+loginInfo);
			
		}else{
			System.out.println("Nick>>"+loginInfo);
		}
		return user;
	}
}
