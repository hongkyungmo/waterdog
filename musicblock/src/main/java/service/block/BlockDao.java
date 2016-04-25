package service.block;

import java.util.List;

import service.domain.Block;
import service.domain.BlockEmotion;
import service.domain.BlockHash;

public interface BlockDao {
	public void addBlock(Block block);
	public void addBlockEmotion(List<BlockEmotion> be,int bCode);
	public void addBlockHash(BlockHash bh, int bCode);
	/* SELECT */
	public Block getBlock(String blockId);
	public int getCurrentBlockCode();
	
	public void updateBlock(Block block);
}
