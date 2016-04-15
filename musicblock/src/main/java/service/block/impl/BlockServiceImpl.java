package service.block.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import service.block.BlockDao;
import service.block.BlockService;
import service.domain.Block;
import service.user.UserService;

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
			System.out.println("<<    ServiceImpl/addBlock Start   >>");
			System.out.println();
			//blockDao = new BlockDaoImpl();
			blockDao.addBlock(block);
			System.out.println("<<    ServiceImpl/BlockTest End   >>");
		}

		public void updateBlock(Block block) throws Exception {
			blockDao.updateBlock(block);
		}

}
