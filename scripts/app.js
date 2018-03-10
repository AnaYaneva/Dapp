//const ContractInfo = require('/config/ContractInfo');
function startApp() {
    function getContractOwner() {
        let ownerAddress = "0xa3c92aa93e70556f8ffa6e00373d7eb1479646e9";
        return ownerAddress;
    }

    function getContractABI() {
        let abi =
            [
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
                    "inputs": [],
                    "name": "withdraw",
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
                }
            ];
        return abi;
    }

    function getContractAddress() {
        let contractAddress = "0x64d77db88c1cd67e3de90dd8e5f8542c73793941";
        return contractAddress;
    }

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    //web3.eth.defaultAccount = web3.eth.accounts[0];

    //let contract = web3.eth.contract(ContractInfo.getContractABI()).at(ContractInfo.getContractAddress());

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


    //const adsDiv = $('#ads');
    //const templates={};

    //loadTemplates();

    //async function loadTemplates() {
    //    const [addCatalogTemplate,addBoxTemplate]=
    //        await Promise.all([
    //            $.get('./templates/planetsCatalog.html'),
    //            $.get('./templates/planet-box-partial.html')
    //    ]);
    //    templates['catalog']=Handlebars.compile(addCatalogTemplate);
    //    Handlebars.registerPartial('adBox',addBoxTemplate);
    //}

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

    // $('#linkHome').click(() => showView('home'));
    // $('#linkMyAccount').click(() => showView('myAccount'));
    // $('#linkNewAccount').click(() => showView('newAccount'));
    // $('#linkGalaxy').click(() => showView('galaxy'));
    $('#btnSearchGalaxy').click(() => showView('galaxy'));
    //$('#btnTransfer').click(() => showView('viewTransfer'));
    // $('#linkTransfer').click(() => showView('transfer'));

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $('#invadeNewPlanet').click(newPlanet);
    $('#homeProceed').click(homeProceed);
    $('#btnTakeOwnership').click(takeOwnership(id));
    $('#btnRefuseOwnership').click(refuseOwnership(id));

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

    /*let requester = (() => {
        const baseUrl = 'https://baas.kinvey.com/';
        const appKey = 'kid_Hy-wNpePZ';
        const appSecret = '82945baf3467420a9f9888b3360a9270';

        function makeAuth(type) {
            if (type === 'basic') return 'Basic ' + btoa(appKey + ':' + appSecret);
            else return 'Kinvey ' + localStorage.getItem('authtoken');
        }

        function makeRequest(method, module, url, auth) {
            return req = {
                url: baseUrl + module + '/' + appKey + '/' + url,
                method,
                headers: {
                    'Authorization': makeAuth(auth)
                }
            };
        }

        function get(module, url, auth) {
            return $.ajax(makeRequest('GET', module, url, auth));
        }

        function post(module, url, data, auth) {
            let req = makeRequest('POST', module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = 'application/json';
            return $.ajax(req);
        }

        function update(module, url, data, auth) {
            let req = makeRequest('PUT', module, url, auth);
            req.data = JSON.stringify(data);
            req.headers['Content-Type'] = 'application/json';
            return $.ajax(req);
        }

        function remove(module, url, auth) {
            return $.ajax(makeRequest('DELETE', module, url, auth));
        }

        return {
            get, post, update, remove
        }
    })();*/

    /*if (localStorage.getItem('authtoken') !== null &&
        localStorage.getItem('username') !== null) {
        userLoggedIn();
    } else {
        userLoggedOut();
    }
    showView('home');*/

    /* function userLoggedIn() {
         $('#loggedInUser').text(`Welcome, ${localStorage.getItem('username')}!`);
         $('#loggedInUser').show();
         $('#linkLogin').hide();
         $('#linkRegister').hide();
         $('#linkLogout').show();
         $('#linkListAds').show();
         $('#linkCreateAd').show();
     }

     function userLoggedOut() {
         $('#loggedInUser').text('');
         $('#loggedInUser').hide();
         $('#linkLogin').show();
         $('#linkRegister').show();
         $('#linkLogout').hide();
         $('#linkListAds').hide();
         $('#linkCreateAd').hide();
     }

     function saveSession(data) {
         localStorage.setItem('username', data.username);
         localStorage.setItem('id', data._id);
         localStorage.setItem('authtoken', data._kmd.authtoken);
         userLoggedIn();
     }*/

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
                    pendingPlanet(Number(pendingPlanetId)-1);
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

            }
        });
    }

    function takeOwnership(id) {
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
    }

    function refuseOwnership(id) {
        contract.refuseOwnership(id, function (error, result) {
            if (error) {
                console.log(error);
                // $('#pendingPlanetLoader').hide();
            } else {
                showInfo("You refuse Planet's ownership!")
                showView('newAccount');
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

                    /*contract.viewPlanet(function (error, result) {
                        if (error) {
                            console.log(error);
                        } else {
                            let civilizationParams = result[1].toString();
                            let imgNum = civilizationParams.substring(0, 1);
                            document.getElementById("newPlanetRaceImage").src = "./images/" + imgNum + ".png";
                            let attack = civilizationParams.substring(1, 4);
                            $('#newPlanetRaceAttack').html(attack + " points");
                            let defence = civilizationParams.substring(4, 7);
                            $('#newPlanetRaceDefencce').html(defence + " points");
                            let intelligence = civilizationParams.substring(7, 10);
                            $('#newPlanetRaceIntelligence').html(intelligence + " points");
                            let health = civilizationParams.substring(10, 15);
                            $('#newPlanetRaceHealth').html(health + " points");
                            $('#newPlanetRaceName').html(result[0] + "arians");
                            $('#newPlanetNativeRace').show();
                        }
                        //let address =web3.eth.defaultAccount;
                    });*/
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
                console.log(id);
                //$('#btnLevelUp').click(levelUp(id));

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

                $('#btnTransfer').click(transfer(id));
            }
            //let address =web3.eth.defaultAccount;
        });
    }

    function transfer(id) {
        $('#transferPlanet').show();

        let to=$('#recipientAddress').val();

        contract.transfer(to, id, function (error, result) {
            if (error) {
                console.log(error);
            } else {
                $('#infoTransfer').show();
                showInfo("Master, You transfer this planet! Now wait till the Recipient to approve the transfer!");
            }
        });
    }

    //function levelUp(id) {
    //    contract.levelUp(id, function (error, result) {
    //        if (error) {
    //            console.log(error);
    //            $('#yourPlanetLoader').hide();
    //        } else {
    //            $('#yourPlanetLoader').hide();
    //        }
    //    });
    //}

    //view Galaxy
    function loadPlanets() {
        /*let planets = [{id: "0",name: "aaaaaaaaaaaaa",civilizationParams: "2158999472581878", level: "1",winCount: "2",lossCount: "0",imageUrl: "./images/1.jpg",owner: "0xbfb9ce4c1636b088f13f68771b6c908b18dd53c0"},{id: "1",name: "bbbbbbbbbb",civilizationParams: "5072482078175354", level: "1",winCount: "0",lossCount: "0",imageUrl: "./images/2.jpg",owner: "0x60543a7fcaf1fe2c966e250ecafa520b1ec008f8"},{id: "2",name: "ccccccccccccc",civilizationParams: "1253081221454378", level: "1",winCount: "0",lossCount: "0",imageUrl: "./images/3.jpg",owner: "0x7a5eeff92340016838bfde140da9143628527973"},{id: "3",name: "ddddddddddd",civilizationParams: "7847733125690990", level: "1",winCount: "1",lossCount: "0",imageUrl: "./images/4.jpg",owner: "0xc40c2f1c6beebf6cdc96d9a68f5f56efed33ddb7"},{id: "4",name: "eeeeeeeeeee",civilizationParams: "4164385903776334", level: "1",winCount: "0",lossCount: "0",imageUrl: "./images/5.jpg",owner: "0x731cb7a5b4fd9a07f9165964b9d01cea35342bb6"},{id: "5",name: "ffffffffffff",civilizationParams: "440762851425760", level: "1",winCount: "0",lossCount: "0",imageUrl: "./images/6.jpg",owner: "0xd9759c48346b3e5863dd8e3c06134755c3cb5f6f"},{id: "6",name: "mmmmmmmmmmmmm",civilizationParams: "688340196147026", level: "1",winCount: "0",lossCount: "0",imageUrl: "./images/1.jpg",owner: "0x5644829262d0e1506fae84f7624bc858e038b051"},{id: "7",name: "lllllllllllllllllllllllll",civilizationParams: "5214677890933704", level: "1",winCount: "0",lossCount: "0",imageUrl: "./images/2.jpg",owner: "0xeddfedd98b40cc8640a23ff0f343fafbe5de0329"},{id: "8",name: "Mars",civilizationParams: "8645582557085842", level: "1",winCount: "0",lossCount: "3",imageUrl: "./images/3.jpg",owner: "0x5064b54f0a17af8bf7e91d675080db0ccbea5a67"}];
        //let planets =[];
        let count;
        let str = "";
        contract.planetsCount(function (error, result) {
            if (error) {
                console.log(error);
            } else {
                count = result.toString();
                console.log(count);

                for (let i = 0; i < Number(count); i++) {
                    console.log(i);

                    contract.getPlanetsElement(i, function (error, result) {
                        if (error) {
                            console.log(error);
                        } else {
                            //console.log(result[0].toString());
                            //console.log(result[1].toString());
                            //console.log(result[2].toString());
                            //console.log(result[3].toString());
                            //console.log(result[4].toString());
                            //console.log("./images/" + result[5].toString() + ".jpg");
                            //console.log(result[6].toString());
                            // let planet=new Planet(
                            //     i,
                            //     result[0].toString(),
                            //     result[1].toString(),
                            //     result[2].toString(),
                            //     result[3].toString(),
                            //     result[4].toString(),
                            //     "./images/" + result[5].toString() + ".jpg",
                            //     result[6].toString()
                            // );

                            //planets.push({
                            //    id: i,
                            //    name: result[0].toString(),
                            //    civilizationParams: result[1].toString(),
                            //    level: result[2].toString(),
                            //    winCount: result[3].toString(),
                            //    lossCount: result[4].toString(),
                            //    imageUrl: "./images/" + result[5].toString() + ".jpg",
                            //    owner: result[6].toString()});

                            //console.log(planets[i].id);
                            //console.log(planets.length);
                            str += "{id: \"" + i + "\",name: \"" + result[0].toString() + "\",civilizationParams: \"" + result[1].toString() +
                                "\", level: \"" + result[2].toString() + "\",winCount: \"" + result[3].toString() + "\",lossCount: \"" + result[4].toString() +
                                "\",imageUrl: \"./images/" + result[5].toString() + ".jpg\",owner: \"" + result[6].toString() + "\"}";
                            if (i < Number(count) - 1) {
                                str += ",";
                            }
                            console.log(str);
                        }
                    });
                }


            }
        });
        let planets = "[" + str + "]";*/

        $('#loader').show();

        let count;
        let str = "[";
        contract.planetsCount(function (error, result) {
            if (error) {
                console.log(error);
            } else {
                count = result.toString();
                console.log(count);

                for (let i = 0; i < Number(count); i++) {
                    console.log(i);

                    contract.getPlanetsElement(i, function (error, result) {
                        if (error) {
                            console.log(error);
                        } else {
                            //console.log(result[0].toString());
                            //console.log(result[1].toString());
                            //console.log(result[2].toString());
                            //console.log(result[3].toString());
                            //console.log(result[4].toString());
                            //console.log("./images/" + result[5].toString() + ".jpg");
                            //console.log(result[6].toString());
                            // let planet=new Planet(
                            //     i,
                            //     result[0].toString(),
                            //     result[1].toString(),
                            //     result[2].toString(),
                            //     result[3].toString(),
                            //     result[4].toString(),
                            //     "./images/" + result[5].toString() + ".jpg",
                            //     result[6].toString()
                            // );

                            //planets.push({
                            //    id: i,
                            //    name: result[0].toString(),
                            //    civilizationParams: result[1].toString(),
                            //    level: result[2].toString(),
                            //    winCount: result[3].toString(),
                            //    lossCount: result[4].toString(),
                            //    imageUrl: "./images/" + result[5].toString() + ".jpg",
                            //    owner: result[6].toString()});

                            //console.log(planets[i].id);
                            //console.log(planets.length);
                            str += "{id: \"" + i + "\",name: \"" + result[0].toString() + "\",civilizationParams: \"" + result[1].toString() +
                                "\", level: \"" + result[2].toString() + "\",winCount: \"" + result[3].toString() + "\",lossCount: \"" + result[4].toString() +
                                "\",imageUrl: \"./images/" + result[5].toString() + ".jpg\",owner: \"" + result[6].toString() + "\"}";
                            if (i < Number(count) - 1) {
                                str += ",";
                            } else {
                                $('#loader').hide();
                                str += "]";
                                console.log(str);
                                let planets = eval(str);
                                console.log(planets);

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
                                console.log(planets);
                            }
                        }
                    });
                }
            }
        });
    }

    function attack() {
        let id = $(this).parent().attr('data-id');

        console.log("attack " + id);

        let wins;
        //let loss;
        let myId;

        contract.planetId(function (error, result) {
            if (error) {
                console.log(error);
            } else {
                myId = result.toString();
                console.log(myId);
                contract.getPlanetsElement(myId, function (error, result) {
                    if (error) {
                        console.log(error);
                    } else {
                        wins = result[3].toString();
                        //loss = result[4].toString();

                        console.log(wins);
                        //console.log(loss);

                        console.log("battle(" + myId + "," + id + ")");
                        contract.battle(myId, id, function (error, result) {
                            if (error) {
                                console.log(error);
                            } else {
                                contract.getPlanetsElement(id, function (error, result) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        contract.getPlanetsElement(myId, function (error, result) {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                if (wins == result[3].toString()) {
                                                    showInfo("you lost");
                                                    showView('myAccount');
                                                } else {
                                                    showInfo("you win");
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
        });


    }


}