package app;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import service.block.BlockService;
import service.block.impl.BlockServiceImpl;
import service.domain.Block;
import service.domain.User;
import service.user.UserService;

@Controller
@RequestMapping("/test/*")
public class AjaxTest {
	/// Field
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;
	
	@Autowired
	@Qualifier("blockServiceImpl")
	private BlockService blockService;

	public AjaxTest() {
		System.out.println("AjaxTest default contstructor 생성됨ㅋ");
	}

	/////////////////////////////////////////////////////////////
	@RequestMapping(value = "ajaxTest/{value}", method = RequestMethod.POST)
	public void addJsonUserGET(@PathVariable String value, @RequestBody Map user, Model model) throws Exception {

		System.out.println("value : " + value);
		System.out.println("User : " + user);
		// Business Logic
		// -> xxxService.addYYY(zzz);
		
		model.addAttribute(user);
		System.out.println("ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ");

	}

	@RequestMapping(value = "ajaxTest/{value}", method = RequestMethod.GET)
	public void addJsonUserPOST(@PathVariable String value, Model model) throws Exception {

		System.out.println("ajaxTest : " + value);
		// Business Logic
		// -> xxxService.addYYY(zzz);
		// User user = new User();
		// user.setNick("ha11");
		//
		// userService.addUser(user);

		
//		//BlockService blockService = new BlockServiceImpl();
//		Block block = new Block();
//		block.setdCount(1);
//		block.setEmotion(1);
//		block.setNote("도1,레2,레1");
//		block.setpCount(0);
//		block.setdCount(0);
//		block.setuCode(1);
//		
//		System.out.println(block.toString());
//		
//		blockService.addBlock(block);
		

		model.addAttribute("user", "aaa11");

		System.out.println("ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ");
	}

//	@RequestMapping(value = "/user1", method = RequestMethod.POST)
//	public void getJsonUser1(@RequestBody User user, Model model) throws Exception {
//		System.out.println("/getJsonUser2 : POST value : " + user);
//		User user1 = new User(0, "Haha", "1234");
//		model.addAttribute("user", user1);
//	}
//
//	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
//	public void addUser(@RequestBody User user, HttpServletResponse response) {
//		System.out.println("addUser called" + user.getUem());
//		try {
//			userService.addUser(user);
//			response.getWriter().print("success");
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}

}

/*
 * @Controller
 * 
 * @RequestMapping("/test/*") public class AjaxTest {
 * /////////////////////////////////////////////////////////////
 * 
 * @RequestMapping( value="ajaxTest", method=RequestMethod.POST ) public void
 * addJsonUser( @RequestBody User user, Model model ) throws Exception {
 * 
 * System.out.println("ajaxTest : " + user); //Business Logic // ->
 * xxxService.addYYY(zzz);
 * 
 * model.addAttribute("user", user);
 * 
 * } }
 */
