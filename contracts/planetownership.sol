pragma solidity ^0.4.19;

import "./planetbattle.sol";
import "./safemath.sol";

///@title A contract that manages transfering planet ownership
///@author AnaYaneva

contract PlanetOwnership is PlanetBattle {

  using SafeMath for uint256;

  mapping (uint => address) planetApprovals;
  mapping (address => uint) ownerApprovals;


  function _transfer( address _to, uint256 _tokenId) private {
   require(ownerPlanetCount[_to]==0);
   ownerPlanetCount[_to] = ownerPlanetCount[_to].add(1);
   ownerPlanetCount[planetToOwner[_tokenId]] = ownerPlanetCount[planetToOwner[_tokenId]].sub(1);
    planetToOwner[_tokenId] = _to;
    ownerToPlanet[_to] = _tokenId;
    planets[_tokenId].owner=_to;

    delete planetApprovals[_tokenId];
    delete ownerApprovals[_to];
 }

  function transfer(address _to, uint256 _tokenId) public  onlyOwnerOf(_tokenId){
    planetApprovals[_tokenId] = _to;
    ownerApprovals[_to]=_tokenId.add(1);
    //ownerApprovals[_to]=ownerApprovals[_to];
  }

  function takeOwnership(uint256 _tokenId) public {
    require(planetApprovals[_tokenId] == msg.sender);
    _transfer( msg.sender, _tokenId);
  }

  function refuseOwnership(uint256 _tokenId) public {
    require(planetApprovals[_tokenId] == msg.sender);
    delete planetApprovals[_tokenId];
    delete ownerApprovals[msg.sender];
  }

  function pendingPlanetApprovals() public view returns(uint){
      return ownerApprovals[msg.sender];
  }
}
