package service.block.impl;

import service.block.BlockService;

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
			blockDao.addBlock(block);
		}

		public void updateBlock(Block block) throws Exception {
			blockDao.updateBlock(block);
		}

}
