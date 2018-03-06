pragma solidity ^0.4.19;

import "./planethelper.sol";

contract PlanetBattle is PlanetHelper {
  uint randNonce = 0;
  uint attackVictoryProbability = 60;

  function randMod(uint _modulus) internal returns(uint) {
    randNonce++;
    return uint(keccak256(now, msg.sender, randNonce)) % _modulus;
  }

  function battle(uint _planetId, uint _targetId) external onlyOwnerOf(_planetId) {
    Planet storage myPlanet = planets[_planetId];
    Planet storage enemyPlanet = planets[_targetId];
    uint rand = randMod(100);
    if (rand <= attackVictoryProbability) {
      myPlanet.winCount++;
      myPlanet.level++;
      enemyPlanet.lossCount++;
      attack(_planetId);
    } else {
      myPlanet.lossCount++;
      enemyPlanet.winCount++;
      _triggerCooldown(myPlanet);
    }
  }
}
