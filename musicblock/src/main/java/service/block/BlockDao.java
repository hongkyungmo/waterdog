package service.block;

import service.domain.Block;

public interface BlockDao {
	public void addBlock(Block block);
	public void updateBlock(Block block);
}
