pragma solidity ^0.4.19;

import "./planetbattle.sol";
import "./erc721.sol";
import "./safemath.sol";

///@title A contract that manages transfering planet ownership
///@author AnaYaneva
///@dev Compliant with OpenZeppelin's implementation of the ERC721 spec draft

contract PlanetOwnership is PlanetBattle, ERC721 {

  using SafeMath for uint256;

  mapping (uint => address) planetApprovals;

  function balanceOf(address _owner) public view returns (uint256 _balance) {
    return ownerPlanetCount[_owner];
  }

  function ownerOf(uint256 _tokenId) public view returns (address _owner) {
    return planetToOwner[_tokenId];
  }

  function _transfer(address _from, address _to, uint256 _tokenId) private {
    ownerPlanetCount[_to] = ownerPlanetCount[_to].add(1);
    ownerPlanetCount[msg.sender] = ownerPlanetCount[msg.sender].sub(1);
    planetToOwner[_tokenId] = _to;
    Transfer(_from, _to, _tokenId);
  }

  function transfer(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint256 _tokenId) public onlyOwnerOf(_tokenId) {
    planetApprovals[_tokenId] = _to;
    Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint256 _tokenId) public {
    require(planetApprovals[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }
}
