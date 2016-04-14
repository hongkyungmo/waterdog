package app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import service.domain.User;
import service.user.UserService;

@Controller
@RequestMapping("/test/*")
public class AjaxTest {
	///Field
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;
	
	
	public AjaxTest() {
		System.out.println("AjaxTest default contstructor");
	}

	/////////////////////////////////////////////////////////////
	@RequestMapping( value="ajaxTest", method=RequestMethod.POST )
	public void addJsonUser( @RequestBody User user, Model model ) throws Exception {

		System.out.println("ajaxTest : POST");
		//Business Logic
		// -> xxxService.addYYY(zzz);
		user.setNick("testNick");
		
		
		model.addAttribute("ok", user);

	}
	
	
	@RequestMapping( value="ajaxTest", method=RequestMethod.GET )
	public void addJsonUserGET( Model model ) throws Exception {

		System.out.println("ajaxTest : GET호출");
		
		
		//Business Logic
		//User user = new User();
		//user.setNick("User11");
		
		//userService.addUser(user);
		model.addAttribute("insertUser", "ok");
		
		System.out.println("model.addAttribute 실행 완료");//향후 log4j 적용할 예정
	}
}









/*@Controller
@RequestMapping("/test/*")
public class AjaxTest {
	/////////////////////////////////////////////////////////////
	@RequestMapping( value="ajaxTest", method=RequestMethod.POST )
	public void addJsonUser( @RequestBody User user, Model model ) throws Exception {

		System.out.println("ajaxTest : " + user);
		//Business Logic
		// -> xxxService.addYYY(zzz);

		model.addAttribute("user", user);

	}
}*/