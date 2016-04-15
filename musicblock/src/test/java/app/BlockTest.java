package app;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import service.block.BlockService;
import service.block.impl.BlockServiceImpl;
import service.domain.Block;
import service.domain.BlockHash;
import service.domain.User;
import service.user.UserService;

@Controller
@RequestMapping("/test/*")
public class BlockTest {
	/// Field
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;
	
	@Autowired
	@Qualifier("blockServiceImpl")
	private BlockService blockService;

	public BlockTest() {
		System.out.println("AjaxTest default contstructor 생성됨ㅋ");
	}

	/////////////////////////////////////////////////////////////
	/*@RequestMapping(value = "ajaxTest", method = RequestMethod.POST)
	
	public @ResponseBody void addJsonUser(@RequestBody User user, Model model) throws Exception {

		System.out.println("User : " + user);
		// Business Logic
		// -> xxxService.addYYY(zzz);
		// user.setNick("testNick");

		// model.addAttribute("JSON", user);

	}*/

	@RequestMapping(value = "BlockTest", method = RequestMethod.GET)
	public void addJsonUserGET(Model model) throws Exception {

		System.out.println("ajaxTest : ");
		// Business Logic
		// -> xxxService.addYYY(zzz);
		// User user = new User();
		// user.setNick("ha11");
		//
		// userService.addUser(user);
		//BlockService blockService = new BlockServiceImpl();
		Block block = new Block();
		block.setdCount(1);
		block.setEmotion(1);
		block.setNote("도1,레2,레1");
		block.setpCount(0);
		block.setdCount(0);
		block.setuCode(1);
		
		BlockHash bh = new BlockHash();
		bh.setbCode(1);
		bh.setTag("test");
		List<BlockHash> hashList = new ArrayList();
		
		hashList.add(bh);
		
		
		System.out.println(block.toString());
		
		blockService.addBlock(block);
		
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