pragma solidity ^0.4.19;

import "./planethelper.sol";

contract PlanetBattle is PlanetHelper {
  uint randNonce = 0;

function attackVictoryProbability(uint _planetId, uint _targetId) internal returns(uint) {
  uint32 myLevel=planets[_planetId].level;
  uint32 enemyLevel=planets[_targetId].level;

  if(myLevel<=enemyLevel){
      uint32 diff=enemyLevel-myLevel;

      if(diff>10){
          return 20;
      }else if(diff>5 && diff<=10){
          return 35;
      }else if(diff >0 && diff <= 5){
          return 50;
      }else if(diff == 0){
          return 50;
      }
  }else{
      uint32 diff1=myLevel-enemyLevel;

      if(diff1 > 10){
          return 80;
      }else if(diff1 > 5 && diff1 <= 10){
          return 65;
      }else if(diff1 >0 && diff1 <= 5){
          return 50;
      }
  }
}



  function randMod(uint _modulus) internal returns(uint) {
    randNonce++;
    return uint(keccak256(now, msg.sender, randNonce)) % _modulus;
  }

  function battle(uint _planetId, uint _targetId) external onlyOwnerOf(_planetId) {
    Planet storage myPlanet = planets[_planetId];
    Planet storage enemyPlanet = planets[_targetId];
    uint rand = randMod(100);
    uint attackVictoryProbabilityNum=attackVictoryProbability(_planetId,_targetId);
    if (rand <= attackVictoryProbabilityNum) {
      myPlanet.winCount++;
      myPlanet.level++;
      enemyPlanet.lossCount++;
      //attack(_planetId);
    } else {
      myPlanet.lossCount++;
      enemyPlanet.winCount++;
     // _triggerCooldown(myPlanet);
    }
  }
}
