const { ethers } = require('hardhat')
const { expect } = require('chai')
const {
  loadFixture,
  mine,
} = require('@nomicfoundation/hardhat-network-helpers')

async function fixture() {
  return {}
}

describe('Environment sanity', () => {
  beforeEach(async function () {
    Object.assign(this, await loadFixture(fixture))
  })

  describe('snapshot', () => {
    let blockNumberBefore

    it('cache and mine', async () => {
      blockNumberBefore = await ethers.provider.getBlockNumber()
      await mine()
      expect(await ethers.provider.getBlockNumber()).to.equal(
        blockNumberBefore + 1,
      )
    })

    it('check snapshot', async () => {
      expect(await ethers.provider.getBlockNumber()).to.equal(blockNumberBefore)
    })
  })
})
