// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

/**
 * @title TestnetToken
 * @notice This contract to mock WETH and USDC on testnet
 */
contract TestToken is ERC20 {
    uint8 private immutable decimals_;
    address public immutable minter;

    constructor(string memory _name, string memory _symbol, address _minter, uint8 _decimals)
        ERC20(_name, _symbol)
    {
        minter = _minter;
        decimals_ = _decimals;
    }

    function mint(address _account, uint256 _amount) external {
        // if (msg.sender != minter) revert();

        _mint(_account, _amount);
    }

    function burn(address _account, uint256 _amount) external {
        // if (msg.sender != minter) revert();

        _burn(_account, _amount);
    }

    function decimals() public view override returns (uint8) {
        return decimals_;
    }
}