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
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "name": "_owner",
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
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "_balance",
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
                        }
                    ],
                    "name": "levelUp",
                    "outputs": [],
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_approved",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
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
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
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
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "planetId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "civilizationParams",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "image",
                            "type": "uint8"
                        }
                    ],
                    "name": "NewPlanet",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "name",
                            "type": "string"
                        }
                    ],
                    "name": "NewPlanetName",
                    "type": "event"
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
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
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
                }
            ];
        return abi;
    }

    function getContractAddress() {
        let contractAddress = "0xf1c99195cb3ba9ebed870f2a31e7c15689a3b1cc";
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

    $('header').find('a').show();
    $('section').hide();
    $('#viewHome').show();


    //const adsDiv = $('#ads');
    //const templates={};

    //loadTemplates();

    //async function loadTemplates() {
    //    const [addCatalogTemplate,addBoxTemplate]=
    //        await Promise.all([
    //            $.get('./templates/adsCatalog.html'),
    //            $.get('./templates/ad-box-partial.html')
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
            case 'myAccount':
                $('#viewMyAccount').show();
                break;
            case 'newAccount':
                $('#viewNewAccount').show();
                break;
            case 'galaxy':
                $('#viewGalaxy').show();
                loadAds();
                break;
            case 'transfer':
                $('#viewTransfer').show();
                break;
            case 'attack':
                $('#viewAttack').show();
                break;
            case 'battle':
                $('#viewBattle').show();
                break;
        }
    }

    function navigateTo(e) {
        $('section').hide();
        let target = $(e.target).attr('data-target');
        $('#' + target).show();
    }

    // Attach event listeners
    $('#linkHome').click(() => showView('home'));
    $('#linkMyAccount').click(() => showView('myAccount'));
    $('#linkNewAccount').click(() => showView('newAccount'));
    $('#linkGalaxy').click(() => showView('galaxy'));
    $('#linkTransfer').click(() => showView('transfer'));

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    $('#invadeNewPlanet').click(newPlanet);
    $('#homeProceed').click(homeProceed);
    //$('#buttonEditAd').click(editAd);

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
        contract.hasPlanet(function (error, result) {
            if (!error) {
                let hasPlanet = result.toString();

                if (hasPlanet==0){
                    showView('newAccount');
                } else if(hasPlanet==1){
                    showView('myAccount');
                    yourPlanet();
                }
            } else {
                console.log(error);
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
             }
             //let address =web3.eth.defaultAccount;
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

}