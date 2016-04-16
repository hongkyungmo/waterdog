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
		System.out.println(this.getClass());
	}

	@RequestMapping(value = "BlockTest", method = RequestMethod.GET)
	public void addJsonUserGET(Model model) throws Exception {
		System.out.println("<<    BlockTest.java Start   >>");
		Block block = new Block();
		block.setdCount(1);
		block.setEmotion(1);
		block.setNote("도1,레2,레1");
		block.setpCount(0);
		block.setdCount(0);
		block.setuCode(1);
		
		BlockHash bh = new BlockHash();
		bh.setbCode(10);
		bh.setTag("test123");
		List<BlockHash> hashList = new ArrayList();
		
		hashList.add(bh);
		block.setblockHashList(hashList);
		
		System.out.println("[8080/test/BlockTest] Block(+hashList) : " + block.toString());
		
		blockService.addBlock(block);

		System.out.println("<<    BlockTest.java End   >>");
	}
}