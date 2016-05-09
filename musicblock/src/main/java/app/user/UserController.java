package app.user;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
	public void getJsonUserPOST(@RequestBody Map map, Model model) throws Exception {
		System.out.println("/user/userLogin start");
		System.out.println("RequestBody>>"+map);
		System.out.println("Model>>"+model);
		
		String password=(String)map.get("pass");
		String loginInfo = (String)map.get("user");
		
		User user = userService.checkUser(map);		
		System.out.println("User>>"+user);
		
		if(user!=null){
			model.addAttribute("message",user.getNick()+"님 환영합니다.");
		}else{
			model.addAttribute("message","다시 로그인 해 주세요.");
		}
	}
}
