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
                }
            ];
        return abi;
    }
    function getContractAddress() {
        let contractAddress = "0xfeccd78808e2d9e749e1f24a82c2a0eeb4603860";
        return contractAddress;
    }

    if(typeof web3 !== 'undefined'){
        web3 = new Web3(web3.currentProvider);
    }else{
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
    $('#viewNewPlanet').click(viewNewPlanet);
    //$('#buttonCreateAd').click(createAd);
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

   //<img id="id1" src="~$imageUrl`" onload="javascript:showImage();">


    function newPlanet() {
        $('#loader').show();
        console.log($('#nameYourPlanet').val());
        console.log( $('#valR').val());

        /*let planetEvent=contract.NewPlanet();
        console.log("ok");
        planetEvent.watch(function (error, result) {
            if(!error){
                console.log(result.args.name);
                console.log(result.args.civilizationParams);
                $('#loader').hide();
                $('#newName').html(result.args.name);
                var civilizationParams=result.args.civilizationParams;
                let imgNum=civilizationParams.substring(0, 1);
                document.getElementById("imgNativeRace").src = "./images/" + imgNum + ".png";
                let attack=civilizationParams.substring(1, 3);
                $('#newAttack').html(attack+" points");
                let defence=civilizationParams.substring(4, 3);
                $('#newDefencce').html(defence+" points");
                let intelligence=civilizationParams.substring(7, 3);
                $('#newIntelligence').html(intelligence+" points");
                let health=civilizationParams.substring(10, 3);
                $('#newHealth').html(health+" points");
                $('#newNativeRace').show();
            }else{
                $('#loader').hide();
                console.log(error);
            }
        });*/

        contract.createRandomPlanet($('#nameYourPlanet').val(),
           $('#valR').val(), function (error, result) {
                if(error){
                    console.log(error);
                    $('#loader').hide();
                }else{
                    console.log(result);
                    //let address =web3.eth.defaultAccount;
                   // console.log(address);


                    /*contract.ownerToPlanet(address, function (error, result) {
                         if(error){
                             console.log(error);
                         }else {
                             console.log(result);
                             contract.planets(result[0], function (error, result) {
                                 if(error){
                                     console.log(error);
                                 }else {
                                     console.log(result[0]);
                                     console.log(result[1]);
                                     console.log(result[2]);
                                     console.log(result[3]);
                                     console.log(result[4]);
                                 }});

                         }});*/


                    //console.log(planet.name);
                   /* var civilizationParams=contract.planets(id, function (error, result) {
                        if(error){
                            console.log(error);
                        }else {
                            console.log(result);
                        }}).civilizationParams;
                    console.log(civilizationParams);
                    let imgNum=civilizationParams.substring(0, 1);
                    document.getElementById("imgNativeRace").src = "./images/" + imgNum + ".png";
                    let attack=civilizationParams.substring(1, 3);
                    $('#newAttack').html(attack+" points");
                    let defence=civilizationParams.substring(4, 3);
                    $('#newDefencce').html(defence+" points");
                    let intelligence=civilizationParams.substring(7, 3);
                    $('#newIntelligence').html(intelligence+" points");
                    let health=civilizationParams.substring(10, 3);
                    $('#newHealth').html(health+" points");
                    $('#nameRace').html(name+"arians");*/
                    $('#loader').hide();

                }
            });




        /*let form = $('#formLogin');
        let username = form.find('input[name="username"]').val();
        let password = form.find('input[name="passwd"]').val();

        try {
            let data = await requester.post('user', 'login', {username, password}, 'basic');
            showInfo('Logged in');
            saveSession(data);
            showView('ads');
        } catch (err) {
            handleError(err);
        }*/
    }

    function viewNewPlanet() {
        contract.viewPlanet(function (error, result) {
            if(error){
                console.log(error);
                $('#loader').hide();
            }else{
                console.log(result[0]);
                console.log(result[1]);
                console.log(result[2]);
                console.log(result[3]);
                console.log(result[4]);
                console.log(result[5]);
                $('#nameRace').html(result[1]+"arians");
                $('#newNativeRace').show();
            }});

    }

    async function logout() {
        try {
            let data = await requester.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')});
            localStorage.clear();
            showInfo('Logged out');
            userLoggedOut();
            showView('home');
        } catch (err) {
            handleError(err);
        }
    }

    async function loadAds() {
        let ads = await requester.get('appdata', 'posts');
        let content=$('#content');
        content.empty();

        ads.forEach(a=>{
            if(a._acl.creator === localStorage.getItem(`id`)){
                a.isAuthor=true;
            }
        });

        let context={
            ads
        };

        let html=templates['catalog'](context);
        content.html(html);

        let editButtons=$(content).find('.ad-box').find('.edit');
        let deleteButtons=$(content).find('.ad-box').find('.delete');

        editButtons.click(openEditAd);
        deleteButtons.click(deleteAd);



    }

    async function deleteAd() {
        let id=$(this).parent().attr('data-id');
        await requester.remove('appdata', 'posts/' + id);
        showInfo('Ad deleted');
        showView('ads');
    }

   async function openEditAd() {
        let id=$(this).parent().attr('data-id');

        let ad=await requester.get('appdata',`posts/${id}`,'kinvey');

        let form = $('#formEditAd');
        form.find('input[name="title"]').val(ad.title);
        form.find('textarea[name="description"]').val(ad.description);
        form.find('input[name="price"]').val(Number(ad.price));
        form.find('input[name="image"]').val(ad.imageUrl);

        form.find('input[name="id"]').val(ad._id);
        form.find('input[name="publisher"]').val(ad.publisher);
        form.find('input[name="date"]').val(ad.date);

        $('#buttonEditAd').click(()=>editAd());
        showView('edit');
    }

    async function editAd() {
        let form = $('#formEditAd');
        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let price = form.find('input[name="price"]').val();
        let imageUrl = form.find('input[name="image"]').val();
        let id = form.find('input[name="id"]').val();
        let publisher = form.find('input[name="publisher"]').val();
        let date = form.find('input[name="date"]').val();

        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }
        if (Number.isNaN(price)) {
            showError('Price cannot be empty');
            return;
        }

        let editedAd = {
            title, description, price, imageUrl, date, publisher
        };

        try {
            await requester.update('appdata', 'posts/' + id, editedAd);
            showInfo('Ad editted');
            showView('ads');
        } catch (err) {
            handleError(err);
        }
    }

    async function createAd() {
        let form = $('#formCreateAd');
        let title = form.find('input[name="title"]').val();
        let description = form.find('textarea[name="description"]').val();
        let price = Number(form.find('input[name="price"]').val());
        let imageUrl = form.find('input[name="image"]').val();
        let date = (new Date()).toString('yyyy-MM-dd');
        let publisher = localStorage.getItem('username');

        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }
        if (Number.isNaN(price)) {
            showError('Price cannot be empty');
            return;
        }

        let newAd = {
            title, description, price, imageUrl, date, publisher
        };

        try {
            await requester.post('appdata', 'posts', newAd);
            showInfo('Ad created');
            showView('ads');
        } catch (err) {
            handleError(err);
        }
    }
}