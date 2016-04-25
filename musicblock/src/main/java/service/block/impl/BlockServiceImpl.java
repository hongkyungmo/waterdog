package service.block.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import service.block.BlockDao;
import service.block.BlockService;
import service.domain.Block;

@Service("blockServiceImpl")
public class BlockServiceImpl implements BlockService{


	//Field
	@Autowired
	@Qualifier("blockDaoImpl")
	private BlockDao blockDao;
	public void setBlockDao(BlockDao blockDao) {
		this.blockDao = blockDao;
	}

	///Constructor
	public BlockServiceImpl() {
		System.out.println(this.getClass());
	}

	///Method
	public void addBlock(Block block) throws Exception {
		System.out.println("blockServiceImpl의 addblock()");
		blockDao.addBlock(block);
		System.out.println("돌아왔을떄 blockDao.addBlock(block)");
		int bcode = blockDao.getCurrentBlockCode();
		System.out.println("bcode>>"+bcode);

		blockDao.addBlockEmotion(block.getBlockEmotionList(),bcode);
		
		for(int i=0; i< block.getBlockHashList().size();i++){
			blockDao.addBlockHash(block.getBlockHashList().get(i),bcode);
		}
	}

	public void updateBlock(Block block) throws Exception {
		blockDao.updateBlock(block);
	}


}
