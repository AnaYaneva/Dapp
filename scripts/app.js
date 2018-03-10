//const ContractInfo = require('/config/ContractInfo');
function startApp() {
    //Ropsten
    function getContractOwner() {
        let ownerAddress = "0x8C3Ee86e92713A9D9CfE7c2a30535293104d1ADd";
        return ownerAddress;
    }

    function getContractABI() {
        let abi =
            [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "planetToOwner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        }
                    ],
                    "name": "levelUp",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "pendingPlanetApprovals",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "ownerToPlanet",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "planets",
                    "outputs": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "civilizationParams",
                            "type": "uint256"
                        },
                        {
                            "name": "level",
                            "type": "uint32"
                        },
                        {
                            "name": "readyTime",
                            "type": "uint32"
                        },
                        {
                            "name": "winCount",
                            "type": "uint16"
                        },
                        {
                            "name": "lossCount",
                            "type": "uint16"
                        },
                        {
                            "name": "image",
                            "type": "uint8"
                        },
                        {
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        },
                        {
                            "name": "_targetId",
                            "type": "uint256"
                        }
                    ],
                    "name": "battle",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdraw",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "viewPlanet",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint32"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint8"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        },
                        {
                            "name": "_newAppearance",
                            "type": "uint8"
                        }
                    ],
                    "name": "changeAppearance",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getPlanetsElement",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint32"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint8"
                        },
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "takeOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "hasPlanet",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        },
                        {
                            "name": "_newName",
                            "type": "string"
                        }
                    ],
                    "name": "changeName",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "refuseOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_fee",
                            "type": "uint256"
                        }
                    ],
                    "name": "setLevelUpFee",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "planetId",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "ownerPlanetCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "planetsCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "name": "_image",
                            "type": "uint8"
                        }
                    ],
                    "name": "createRandomPlanet",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                }
            ];
        return abi;
    }

    function getContractAddress() {
        let contractAddress = "0x6d23418216095e648431Ebd25eBeF77669d6Fd13";
        return contractAddress;
    }

    //Testrpc
    /*function getContractOwner() {
        let ownerAddress = "0x8C3Ee86e92713A9D9CfE7c2a30535293104d1ADd";
        return ownerAddress;
    }

    function getContractABI() {
        let abi =
            [
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "planetToOwner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        }
                    ],
                    "name": "levelUp",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "pendingPlanetApprovals",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "ownerToPlanet",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "planets",
                    "outputs": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "civilizationParams",
                            "type": "uint256"
                        },
                        {
                            "name": "level",
                            "type": "uint32"
                        },
                        {
                            "name": "readyTime",
                            "type": "uint32"
                        },
                        {
                            "name": "winCount",
                            "type": "uint16"
                        },
                        {
                            "name": "lossCount",
                            "type": "uint16"
                        },
                        {
                            "name": "image",
                            "type": "uint8"
                        },
                        {
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        },
                        {
                            "name": "_targetId",
                            "type": "uint256"
                        }
                    ],
                    "name": "battle",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [],
                    "name": "withdraw",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "viewPlanet",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint32"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint8"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        },
                        {
                            "name": "_newAppearance",
                            "type": "uint8"
                        }
                    ],
                    "name": "changeAppearance",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_id",
                            "type": "uint256"
                        }
                    ],
                    "name": "getPlanetsElement",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint32"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint16"
                        },
                        {
                            "name": "",
                            "type": "uint8"
                        },
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "takeOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "hasPlanet",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_planetId",
                            "type": "uint256"
                        },
                        {
                            "name": "_newName",
                            "type": "string"
                        }
                    ],
                    "name": "changeName",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "refuseOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_fee",
                            "type": "uint256"
                        }
                    ],
                    "name": "setLevelUpFee",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "planetId",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "name": "ownerPlanetCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "planetsCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "name": "_image",
                            "type": "uint8"
                        }
                    ],
                    "name": "createRandomPlanet",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                }
            ];
        return abi;
    }

    function getContractAddress() {
        let contractAddress = "0x6d23418216095e648431Ebd25eBeF77669d6Fd13";
        return contractAddress;
    }*/



    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }



    let contract = web3.eth.contract(getContractABI()).at(getContractAddress());
    console.log(contract);

    //templates
    const planetsDiv = $('#planets');
    const templates = {};

    loadTemplates();

    async function loadTemplates() {
        const [addCatalogTemplate, addBoxTemplate] =
            await Promise.all([
                $.get('./templates/planetsCatalog.html'),
                $.get('./templates/planet-box-partial.html')
            ]);
        templates['catalog'] = Handlebars.compile(addCatalogTemplate);
        Handlebars.registerPartial('planetBox', addBoxTemplate);
    }

    $('header').find('a').show();
    $('section').hide();
    $('#viewHome').show();




    //navbar
    function showView(view) {
        $('section').hide();
        switch (view) {
            case 'home':
                $('#viewHome').show();
                break;
            case "pending":
                $('#viewPending').show();
                break;
            case 'myAccount':
                $('#viewMyAccount').show();
                break;
            case 'newAccount':
                $('#viewNewAccount').show();
                break;
            case 'galaxy':
                $('#viewGalaxy').show();
                loadPlanets();
                break;
            case 'transfer':
                $('#viewTransfer').show();
                break;
        }
    }

    function navigateTo(e) {
        $('section').hide();
        let target = $(e.target).attr('data-target');
        $('#' + target).show();
    }

    // Attach event listeners
    $('#btnSearchGalaxy').click(() => showView('galaxy'));


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $('#invadeNewPlanet').click(newPlanet);
    $('#homeProceed').click(homeProceed);


    // Notifications
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').fadeOut(300)
    });

    $('#infoBox').click((event) => $(event.target).hide());
    $('#errorBox').click((event) => $(event.target).hide());

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    }

    function showError(message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    //Home View
    function homeProceed() {
        contract.pendingPlanetApprovals(function (error, result) {
            if (error) {
                console.log(error);
            } else {
                let pendingPlanetId = result.toString();

                if (pendingPlanetId == 0) {
                    contract.hasPlanet(function (error, result) {
                        if (!error) {
                            let hasPlanet = result.toString();

                            if (hasPlanet == 0) {
                                showView('newAccount');
                            } else if (hasPlanet == 1) {
                                showView('myAccount');
                                yourPlanet();
                            }
                        } else {
                            console.log(error);
                        }
                    });
                } else {
                    showView('pending');
                    pendingPlanet(Number(pendingPlanetId) - 1);
                }
            }
        });
    }


    //Pending View
    function pendingPlanet(id) {
        //$('#pendingPlanetLoader').show();

        contract.getPlanetsElement(id, function (error, result) {
            if (error) {
                console.log(error);
                // $('#pendingPlanetLoader').hide();
            } else {
                //$('#pendingPlanetLoader').hide();

                $('#pendingPlanetName').html(result[0].toString());
                $('#pendingPlanetLevel').html(result[2].toString());
                $('#pendingPlanetWin').html(result[3].toString());
                $('#pendingPlanetLoss').html(result[4].toString());
                document.getElementById("pendingPlanetImage").src = "./images/" + result[5].toString() + ".jpg";

                //let id = result[6].toString();
                //console.log(id);
                //$('#btnLevelUp').click(levelUp(id));

                let civilizationParams = result[1].toString();
                let imgNum = civilizationParams.substring(0, 1);
                document.getElementById("pendingPlanetNativeRaceImage").src = "./images/" + imgNum + ".png";
                let attack = civilizationParams.substring(1, 4);
                $('#pendingPlanetRaceAttack').html(attack + " points");
                let defence = civilizationParams.substring(4, 7);
                $('#pendingPlanetRaceDefencce').html(defence + " points");
                let intelligence = civilizationParams.substring(7, 10);
                $('#pendingPlanetRaceIntelligence').html(intelligence + " points");
                let health = civilizationParams.substring(10, 15);
                $('#pendingPlanetRaceHealth').html(health + " points");
                $('#pendingPlanetRace').html(result[0] + "arians");
                $('#pendingPlanetView').show();

                $('#btnTakeOwnership').click(function () {
                    contract.takeOwnership(id, function (error, result) {
                        if (error) {
                            console.log(error);
                            // $('#pendingPlanetLoader').hide();
                        } else {
                            showInfo("You have Planet now!")
                            showView('myAccount');
                            yourPlanet();
                        }
                    });
                });
                $('#btnRefuseOwnership').click(function () {
                    contract.refuseOwnership(id, function (error, result) {
                        if (error) {
                            console.log(error);
                            // $('#pendingPlanetLoader').hide();
                        } else {
                            showInfo("You refuse Planet's ownership!")
                            showView('newAccount');
                        }
                    });
                });
            }
        });
    }

    //Invade New Planet View
    function newPlanet() {
        $('#newPlanetLoader').show();

        contract.createRandomPlanet($('#nameYourPlanet').val(),
            $('#valR').val(), function (error, result) {
                if (error) {
                    console.log(error);
                    $('#newPlanetLoader').hide();
                } else {
                    console.log(result);
                    $('#newPlanetLoader').hide();
                    showView('myAccount');
                    yourPlanet();
                }
            });
    }

    //Your Planet View
    function yourPlanet() {
        $('#yourPlanetLoader').show();

        contract.viewPlanet(function (error, result) {
            if (error) {
                console.log(error);
                $('#yourPlanetLoader').hide();
            } else {
                $('#yourPlanetLoader').hide();

                $('#yourPlanetName').html(result[0].toString());
                $('#yourPlanetLevel').html(result[2].toString());
                $('#yourPlanetWin').html(result[3].toString());
                $('#yourPlanetLoss').html(result[4].toString());
                document.getElementById("yourPlanetImage").src = "./images/" + result[5].toString() + ".jpg";

                let id = result[6].toString();

                let civilizationParams = result[1].toString();
                let imgNum = civilizationParams.substring(0, 1);
                document.getElementById("yourPlanetNativeRaceImage").src = "./images/" + imgNum + ".png";
                let attack = civilizationParams.substring(1, 4);
                $('#yourPlanetRaceAttack').html(attack + " points");
                let defence = civilizationParams.substring(4, 7);
                $('#yourPlanetRaceDefencce').html(defence + " points");
                let intelligence = civilizationParams.substring(7, 10);
                $('#yourPlanetRaceIntelligence').html(intelligence + " points");
                let health = civilizationParams.substring(10, 15);
                $('#yourPlanetRaceHealth').html(health + " points");
                $('#yourPlanetRace').html(result[0] + "arians");
                $('#yourPlanetView').show();

                $('#btnTransfer').click(function () {
                    $('#transferPlanet').show();

                    let to = $('#recipientAddress').val();

                    $('#btnFinalTransfer').click(function () {
                        contract.transfer(to, id, function (error, result) {
                            if (error) {
                                console.log(error);
                            } else {
                                $('#infoTransfer').show();
                                showInfo("Master, You transfer this planet! Now wait till the Recipient to approve the transfer!");
                            }
                        });
                    });
                });
            }
        });
    }

    //view Galaxy
    function loadPlanets() {
        $('#loader').show();

        let count;
        let str = "[";
        contract.planetsCount(function (error, result) {
            if (error) {
                console.log(error);
            } else {
                count = result.toString();
                //console.log(count);

                for (let i = 0; i < Number(count); i++) {
                    //console.log(i);

                    contract.getPlanetsElement(i, function (error, result) {
                        if (error) {
                            console.log(error);
                        } else {
                            str += "{id: \"" + i + "\",name: \"" + result[0].toString() + "\",civilizationParams: \"" + result[1].toString() +
                                "\", level: \"" + result[2].toString() + "\",winCount: \"" + result[3].toString() + "\",lossCount: \"" + result[4].toString() +
                                "\",imageUrl: \"./images/" + result[5].toString() + ".jpg\",owner: \"" + result[6].toString() + "\"}";
                            if (i < Number(count) - 1) {
                                str += ",";
                            } else {
                                $('#loader').hide();
                                str += "]";
                                //console.log(str);
                                let planets = eval(str);
                                //console.log(planets);

                                let content = $('#content');

                                content.empty();

                                planets.forEach(p => {
                                    if (p.owner !== web3.eth.defaultAccount) {
                                        p.isNotOwner = true;
                                    }
                                });

                                let context = {
                                    planets
                                };

                                let html = templates['catalog'](context);
                                content.html(html);

                                let attackButtons = $(content).find('.planet-box').find('.attack');

                                attackButtons.click(attack);

                                $('#btnYourPlanet').click(function () {
                                    showView('myAccount');
                                    yourPlanet();
                                });
                            }
                        }
                    });
                }
            }
        });
    }

    function attack() {
        let enemyId = $(this).parent().attr('data-id');

        contract.planetId(function (error, result) {
            if (error) {
                console.log(error);
            } else {
                let myId = result.toString();
                console.log(myId);
                contract.getPlanetsElement(myId, function (error, result) {
                    if (error) {
                        console.log(error);
                    } else {
                        let wins = result[3].toString();
                        //loss = result[4].toString();

                        console.log(wins);
                        //console.log(loss);

                        contract.battle(myId, enemyId, function (error, result) {
                            if (error) {
                                console.log(error);
                            } else {
                                contract.getPlanetsElement(myId, function (error, result) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        if (wins == result[3].toString()) {
                                            yourPlanet();
                                            showView('myAccount');
                                        } else {
                                            yourPlanet();
                                            showView('myAccount');

                                        }
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}