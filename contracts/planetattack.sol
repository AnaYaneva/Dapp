pragma solidity ^0.4.19;

import "./planetfactory.sol";

contract PlanetAttack is PlanetFactory {

  modifier onlyOwnerOf(uint _planetId) {
    require(msg.sender == planetToOwner[_planetId]);
    _;
  }

  function _triggerCooldown(Planet storage _planet) internal {
    _planet.readyTime = uint32(now + cooldownTime);
  }

  function _isReady(Planet storage _planet) internal view returns (bool) {
      return (_planet.readyTime <= now);
  }

  function attack(uint _planetId) internal onlyOwnerOf(_planetId) {
    Planet storage myPlanet = planets[_planetId];
    require(_isReady(myPlanet));
    _triggerCooldown(myPlanet);
  }
}
