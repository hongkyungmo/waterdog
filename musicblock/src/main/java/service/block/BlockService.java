package service.block;

import service.domain.Block;

public interface BlockService {
	public void addBlock(Block block) throws Exception;
	public Block getBlock(String blockId) throws Exception;
	public void updateBlock(Block block) throws Exception;
}
