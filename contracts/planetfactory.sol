pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";

contract PlanetFactory is Ownable {

  using SafeMath for uint256;

  event NewPlanet(uint planetId, string name, uint civilizationParams, uint8 image);

  uint civilizationParamsDigits = 16;
  uint civilizationParamsModulus = 10 ** civilizationParamsDigits;
  uint cooldownTime = 1 days;


    uint newPlanetPrice = 0.1 ether;

  struct Planet {
    string name;
    uint civilizationParams;
    uint32 level;
    uint32 readyTime;
    uint16 winCount;
    uint16 lossCount;
    uint8 image;
    address owner;
  }

  Planet[] public planets;

  mapping (uint => address) public planetToOwner;
  mapping (address => uint) public ownerToPlanet;
  mapping (address => uint) public ownerPlanetCount;

  function _createPlanet(string _name, uint _civilizationParams, uint8 _image) internal {
    uint id = planets.push(Planet(_name, _civilizationParams, 1, uint32(now + cooldownTime), 0, 0, _image, msg.sender)) - 1;
    planetToOwner[id] = msg.sender;
    ownerToPlanet[msg.sender] = id;
    ownerPlanetCount[msg.sender]++;
    NewPlanet(id, _name, _civilizationParams, _image);
  }

  function _generateRandomCivilizationParams(string _str) private view returns (uint) {
    uint rand = uint(keccak256(_str));
    return rand % civilizationParamsModulus;
  }

  function createRandomPlanet(string _name, uint8 _image ) public {
    //require(msg.value == newPlanetPrice);
    require(ownerPlanetCount[msg.sender] == 0);
    uint randCivilizationParams = _generateRandomCivilizationParams(_name);
    randCivilizationParams = randCivilizationParams - randCivilizationParams % 100;
    _createPlanet(_name, randCivilizationParams, _image);
  }

  function viewPlanet() public view returns(string,
    uint,
    uint32,
    uint16,
    uint16,
    uint8){
      //uint planetId=ownerToPlanet[msg.sender];
      Planet storage myPlanet = planets[ownerToPlanet[msg.sender]];
      if(myPlanet.owner == msg.sender){
    return (myPlanet.name,
            myPlanet.civilizationParams,
            myPlanet.level,
            myPlanet.winCount,
            myPlanet.lossCount,
            myPlanet.image);
            }
            return ("",0,0,0,0,0);
    }


}