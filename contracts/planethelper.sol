pragma solidity ^0.4.19;

import "./planetattack.sol";

contract PlanetHelper is PlanetAttack {

  uint levelUpFee = 0.001 ether;

  modifier aboveLevel(uint _level, uint _planetId) {
    require(planets[_planetId].level >= _level);
    _;
  }

  function withdraw() external onlyOwner {
    owner.transfer(this.balance);
  }

  function setLevelUpFee(uint _fee) external onlyOwner {
    levelUpFee = _fee;
  }

  function levelUp(uint _planetId) external payable {
    require(msg.value == levelUpFee);
    planets[_planetId].level++;
  }

  function changeName(uint _planetId, string _newName) external aboveLevel(2, _planetId) onlyOwnerOf(_planetId) {
    planets[_planetId].name = _newName;
  }

  function changeAppearance(uint _planetId, uint8 _newAppearance) external aboveLevel(20, _planetId) onlyOwnerOf(_planetId) {
    planets[_planetId].image = _newAppearance;
  }

}
