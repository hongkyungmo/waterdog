package app.block;

import java.util.ArrayList;
import java.util.List;
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
import service.domain.Block;
import service.domain.BlockEmotion;
import service.domain.BlockHash;
import service.domain.Title;

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

		//emotion 정보 담기
		List<Object> emotionArray = new ArrayList<Object>();
		emotionArray=(ArrayList)map.get("emotion");

		List<BlockEmotion> emotionList = new ArrayList<BlockEmotion>();

		for(int i=0;i<emotionArray.size();i++){
			if(emotionArray.get(i).equals("that")){
				BlockEmotion emotion = new BlockEmotion();
				emotion.setEmotion(i);
				emotionList.add(emotion);
			}
		}

		// hash 정보 담기
		List<BlockHash> hashList = new ArrayList<BlockHash>();

		String hashArray[] = ((String)map.get("tag")).split("#");

		for(int i=0;i<hashArray.length;i++){
			BlockHash hash = new BlockHash();
			hash.setTag(hashArray[i].trim());
			hashList.add(hash);
		}
		
		// title 지정하기
		String title=(String)map.get("title");
		if(title==null||title.equals("")){
			title= new Title().getTitle();
		}
				
		Block block = new Block();
		block.setTitle(title);
		block.setNote((String)map.get("note"));
		block.setuCode(81);//유저코드를 왜래키로 가지고 있어야 함 (수정)
		block.setBlockHashList(hashList);
		block.setBlockEmotionList(emotionList);
		block.setTime(Integer.parseInt((String)map.get("sec")));

		System.out.println("완성된 형태의 블록 : " + block);

		blockService.addBlock(block);
		return block;
	}
	
	@RequestMapping(value = "getJsonBlock/{blockId}", method = RequestMethod.GET)
	public void getJsonBlockGET(@PathVariable String blockId, Model model) 
			throws Exception {
		
		System.out.println("/getJsonBlock/getBlock: model로 전달받은 String(JSON) : "+model);
		//Business Logic
		System.out.println("blockId: "+blockId);
		System.out.println("model: "+model);
		Block block = blockService.getBlock(blockId);
		model.addAttribute("block", block); 

	}
}
