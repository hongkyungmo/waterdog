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

import javassist.expr.Instanceof;
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
		
		// Client로 부터 받은 emotion 정보를 담는다.
		List<Object> emotionArray = new ArrayList<Object>();
		emotionArray=(ArrayList)map.get("emotion");
		
		// 감정목록 생성		
		List<BlockEmotion> emotionList = new ArrayList<BlockEmotion>();
		for(int i=0;i<emotionArray.size();i++){
//			if(emotionArray.get(i).equals("that")){
//				BlockEmotion emotion = new BlockEmotion();
//				emotion.setEmotion(i);
//				emotionList.add(emotion);
//			}
				BlockEmotion emotion = new BlockEmotion();
				emotion.setEmotion(Integer.parseInt((String)emotionArray.get(i)));
				emotionList.add(emotion);
		}

		// hash 정보 담기
		List<BlockHash> hashList = new ArrayList<BlockHash>();

		// #단위로 해시태그 분리
		// 왜 그런지 아직은 모르겠는데 0번 배열에서 null string이 있음.
		String hashArray[] = ((String)map.get("tag")).split("#");
		
		// 해시태그 목록 생성(해시브라운 먹고 싶다.)
		for(int i=1;i<hashArray.length;i++){
			BlockHash hash = new BlockHash();
			hash.setTag(hashArray[i].trim());
			hashList.add(hash);
		}
		
		// title 지정하기
		String title=(String)map.get("title");
//		if(title==null||title.equals("")){
//			title= new Title().getTitle();
//		}
				
		Block block = new Block();
		block.setTitle(title);
		block.setNote((String)map.get("notes"));
		//block.setuCode(Integer.parseInt((String)map.get("ucode")));//유저코드를 왜래키로 가지고 있어야 함 (수정)
		block.setuCode(1);
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
			////블록값이 있을경우에만 담아온다.
			if( block != null)
			{
				System.out.println("보내쪙");
				model.addAttribute("block", block); 
			}
			else
			{	System.out.println("보내지마");
				model.addAttribute("block", null);
			}
		}
		
}
