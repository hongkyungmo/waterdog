package app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import service.domain.User;
import service.user.UserService;
import service.user.impl.UserServiceImpl;

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

		System.out.println("ajaxTest : " + user);
		//Business Logic
		// -> xxxService.addYYY(zzz);
		user.setNick("testNick");
		
		
		model.addAttribute("user", user);

	}
	
	@RequestMapping( value="ajaxTest", method=RequestMethod.GET )
	public void addJsonUserGET( Model model ) throws Exception {

		System.out.println("ajaxTest : ");
		//Business Logic
		// -> xxxService.addYYY(zzz);
		User user = new User();
		user.setTestVar(3);
		user.setNick("hahahahaha");
		
		userService.addUser(user);
		model.addAttribute("user", user);
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