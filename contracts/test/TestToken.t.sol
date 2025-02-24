// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TestToken} from "../src/TestToken.sol";
import "forge-std/Script.sol";

contract TestTokenTest is Test {
    TestToken public token;
    address public minter;
    address public user;

    function setUp() public {
        minter = address(this);
        user = address(0xBEEF);
        token = new TestToken("Test Token", "TEST", minter, 18);
    }

    function test_Mint() public {
        uint256 amount = 1000 * 10 ** 18;
        token.mint(user, amount);
        assertEq(token.balanceOf(user), amount);
    }

    function test_Burn() public {
        uint256 amount = 1000 * 10 ** 18;
        token.mint(user, amount);
        token.burn(user, amount);
        assertEq(token.balanceOf(user), 0);
    }

    function test_Decimals() public view {
        assertEq(token.decimals(), 18);
    }
}
