const { ethers } = require('hardhat')
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers')

const shouldBehaveLikeProxy = require('../Proxy.behaviour')
const shouldBehaveLikeTransparentUpgradeableProxy = require('./TransparentUpgradeableProxy.behaviour')

async function fixture() {
  const [owner, other, ...accounts] = await ethers.getSigners()

  const implementation = await ethers.deployContract('DummyImplementation')

  const createProxy = (logic, initData, opts = undefined) =>
    ethers.deployContract(
      'TransparentUpgradeableProxy',
      [logic, owner, initData],
      opts,
    )

  return {
    nonContractAddress: owner,
    owner,
    other,
    accounts,
    implementation,
    createProxy,
  }
}

describe('TransparentUpgradeableProxy', () => {
  beforeEach(async function () {
    Object.assign(this, await loadFixture(fixture))
  })

  shouldBehaveLikeProxy()

  // createProxy, owner, otherAccounts
  shouldBehaveLikeTransparentUpgradeableProxy()
})
