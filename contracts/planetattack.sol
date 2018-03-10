pragma solidity ^0.4.19;

import "./planetfactory.sol";

contract PlanetAttack is PlanetFactory {



  /*function _triggerCooldown(Planet storage _planet) internal {
    _planet.readyTime = uint32(now + cooldownTime);
  }

  function isReady(uint _planetId) public view returns (bool) {
       Planet storage myPlanet = planets[_planetId];
      return (myPlanet.readyTime <= now);
  }*/

  /*function attack(uint _planetId) internal onlyOwnerOf(_planetId) {
    require(isReady(_planetId));
    Planet storage myPlanet = planets[_planetId];
    _triggerCooldown(myPlanet);
  }*/
}
