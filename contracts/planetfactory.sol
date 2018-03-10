pragma solidity ^0.4.19;

import "./ownable.sol";
import "./safemath.sol";

contract PlanetFactory is Ownable{

  using SafeMath for uint256;

  uint civilizationParamsDigits = 16;
  uint civilizationParamsModulus = 10 ** civilizationParamsDigits;
  uint cooldownTime = 5 minutes;


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

modifier onlyOwnerOf(uint _planetId) {
    require(msg.sender == planetToOwner[_planetId]);
    _;
  }

  function _createPlanet(string _name, uint _civilizationParams, uint8 _image) internal {
    uint id = planets.push(Planet(_name, _civilizationParams, 1, uint32(now + cooldownTime), 0, 0, _image, msg.sender)) - 1;
    planetToOwner[id] = msg.sender;
    ownerToPlanet[msg.sender] = id;
    ownerPlanetCount[msg.sender]++;
  }

  function _generateRandomCivilizationParams(string _str) private view returns (uint) {
    uint rand = uint(keccak256(_str));
    return rand % civilizationParamsModulus;
  }

  function createRandomPlanet(string _name, uint8 _image ) public {
    //require(msg.value == newPlanetPrice);
    require(ownerPlanetCount[msg.sender] == 0);
    uint randCivilizationParams = _generateRandomCivilizationParams(_name);
    randCivilizationParams = randCivilizationParams + randCivilizationParams % 100;
    _createPlanet(_name, randCivilizationParams, _image);
  }

  function viewPlanet() public view returns(
      string,
    uint,
    uint32,
    uint16,
    uint16,
    uint8,
    uint){
      //uint planetId=ownerToPlanet[msg.sender];
      Planet storage myPlanet = planets[ownerToPlanet[msg.sender]];
      require(myPlanet.owner == msg.sender);
    return (myPlanet.name,
            myPlanet.civilizationParams,
            myPlanet.level,
            myPlanet.winCount,
            myPlanet.lossCount,
            myPlanet.image,
            ownerToPlanet[msg.sender]);
    }

  function hasPlanet() public view returns(uint){
      return ownerPlanetCount[msg.sender];
  }

   function planetId() public view returns(uint){
      return ownerToPlanet[msg.sender];
  }

   function planetsCount() public view returns(uint){
      return planets.length;
  }

  function getPlanetsElement(uint _id) public view returns(string,
    uint,
    uint32,
    uint16,
    uint16,
    uint8,
    address){
      Planet storage planetElement = planets[_id];
    return (planetElement.name,
            planetElement.civilizationParams,
            planetElement.level,
            planetElement.winCount,
            planetElement.lossCount,
            planetElement.image,
            planetElement.owner);
  }
}