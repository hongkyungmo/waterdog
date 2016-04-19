package app.block;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import service.block.BlockService;
import service.domain.Block;
import service.domain.BlockEmotion;
import service.domain.BlockHash;

@Controller
@RequestMapping("/block/*")
public class BlockController {
	@Autowired
	@Qualifier("blockServiceImpl")
	private BlockService blockService;
	
	public BlockController() {
		System.out.println(this.getClass());
	}

	@RequestMapping(value = "blockSave", method = RequestMethod.POST)
	public Block addJsonBlockPOST(@RequestBody Map map) throws Exception {

		System.out.println("(/block/blockSave)RequestBody로 전달받은 String(JSON) : "+map);
		
		//hash info
		BlockHash bh = new BlockHash();
		bh.setTag("해시태그1");
		BlockHash bh2 = new BlockHash();
		bh2.setTag("hash2");

		List<BlockHash> hashList = new ArrayList();
		hashList.add(bh);
		hashList.add(bh2);

		//emotion info
		BlockEmotion be = new BlockEmotion();
		be.setEmotion(1);
		BlockEmotion be2 = new BlockEmotion();
		be.setEmotion(2);
		
		List<BlockEmotion> emotionList=new ArrayList();
		emotionList.add(be);
		emotionList.add(be2);
		
		//블록에 정보 담기
		Block block = new Block();
		block.setNote((String)map.get("note"));
		block.setuCode(1);//유저코드를 왜래키로 가지고 있어야 함
		block.setblockHashList(hashList);
		block.setBlockEmotionList(emotionList);
		
		System.out.println("완성된 형태의 블록 : " + block);
		
		blockService.addBlock(block);
		return block;
	}
}
