import { UniswapV3PoolAbi } from '@repo/core/abis'
import { createConfig } from 'ponder'
import { http } from 'viem'
import { indexerConfig } from './src/config'

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(indexerConfig.database.url),
    },
  },
  contracts: {
    UniswapV3Pool: {
      network: 'arbitrum',
      abi: UniswapV3PoolAbi,
      address: '0xc6962004f452be9203591991d15f6b388e09e8d0', // USDC/WETH pool
      startBlock: 311172963,
      filter: {
        event: 'Swap',
        args: {
          sender: null,
          recipient: null,
        },
      },
    },
  },
})
