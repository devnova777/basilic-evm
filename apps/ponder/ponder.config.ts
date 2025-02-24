import { createConfig } from 'ponder'
import { http } from 'viem'
import { UniswapV3PoolAbi } from './abis/UniswapV3PoolAbi'

export default createConfig({
  networks: {
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
  },
  contracts: {
    UniswapV3Pool: {
      network: 'arbitrum',
      abi: UniswapV3PoolAbi,
      address: '0xc6962004f452be9203591991d15f6b388e09e8d0', // USDC/WETH pool
      startBlock: 308590083,
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
