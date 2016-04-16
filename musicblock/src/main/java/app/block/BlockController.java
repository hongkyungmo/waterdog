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
		/*
		 * 1) RequestBody String str
		 *  -> Request로 날아온 완벽한 원본 그대로의 JSON.
		 * 2) RequestBody Map map
		 *  -> JSON형태가 MAP으로 저장됨.
		 * 3) RequestBody Block block
		 *  -> hashCode를 제대로 저장할 수 있는 setter가 없음
		 *  -> 그러므로 400(bad request) 발생
		 * 4) ModelAttribute Block block
		 *  -> 현재의 케이스에서는 제대로 값이 전달되지 않음.
		 */
		System.out.println("<<    BlockTest.java Start   >>");
		
		System.out.println("(/block/blockSave)RequestBody로 전달받은 String(JSON) : "+map);
		
		//블록해시에 정보 담기
		BlockHash bh1 = new BlockHash();
		bh1.setbCode(1);//setbCode에 적절한 숫자를 넣으려면 현재의 블록시퀀스 번호를 DB로부터 얻어와야 함.
						//그리고 거기에 +1을 해서 bCode에 할당해야 함.
						//아, 더 좋은 방법으로는 BlockMapper.xml에서 블록해시를 저장할 때 DB의 블록시퀀스 번호를 바로 읽어서 저장할 수도 있을 듯.
		bh1.setTag("해시태그1");
		/*BlockHash bh2 = new BlockHash();
		bh2.setbCode(2);
		bh2.setTag("해시태그2");*/
		
		//블록해시 리스트에 블록해시 담기
		List<BlockHash> hashList = new ArrayList();
		hashList.add(bh1);
		/*hashList.add(bh2);*/
		
		//블록에 정보 담기
		Block block = new Block();
		block.setEmotion(Integer.parseInt((String)map.get("emotion")));
		block.setNote((String)map.get("note"));
		block.setuCode(1);//유저코드를 왜래키로 가지고 있어야 함
		
		
		
		block.setblockHashList(hashList);
		
		System.out.println("완성된 형태의 블록 : " + block);
		
		blockService.addBlock(block);
		System.out.println("<<    BlockTest.java End   >>");
		return block;
	}
}
