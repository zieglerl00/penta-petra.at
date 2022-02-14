let playerArray = [];
let playerNumbers = [];

let pickedEl = document.getElementById("picked-el");


let andi = true;
let seidl = true;
let mattl = true;
let pipo = true;
let beda = true;
let roebi = true;
let maci = true;
let georg = true;
let hoizi = true;
let kunsti = true;
let mo = true;
let pichla = true;
let urli = true;
let ziagla = true;
let woischi = true;
let vaki = true;
let fabi = true;
let alex = true
let random = true;

let pushedBtn = 0;

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

function getPlayerAndi(){

    if(andi && pushedBtn < 10){
        playerArray.push("Andi");
        document.getElementById("andibtn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        andi = false;
        pushedBtn++;
        pickedEl.innerText += " Andi,";
    }

    
    
}

function getPlayerSeidl(){

    if(seidl && pushedBtn < 10){
        playerArray.push("Seidl");
        document.getElementById("seidl_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        seidl = false;
        pushedBtn++;
        pickedEl.innerText += " Seidl,";
    }
    
}

function getPlayerMattl(){

    if(mattl && pushedBtn < 10){
        playerArray.push("Mattl");
        document.getElementById("mattl_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        mattl = false;
        pushedBtn++;
        pickedEl.innerText += " Mattl,";
    }
    
}

function getPlayerPipo(){

    if(pipo && pushedBtn < 10){
        playerArray.push("Pipooooo");
        document.getElementById("pipo_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        pipo = false;
        pushedBtn++;
        pickedEl.innerText += " Pipooooo,";
    }
    
}

function getPlayerBeda(){

    if(beda && pushedBtn < 10){
        playerArray.push("Beda");
        document.getElementById("beda_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        beda = false;
        pushedBtn++;
        pickedEl.innerText += " Beda,";
    }
    
}

function getPlayerRoebi(){

    if(roebi && pushedBtn < 10){
        playerArray.push("Roebi");
        document.getElementById("roebi_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        roebi = false;
        pushedBtn++;
        pickedEl.innerText += " Röbi,";
    }
    
}

function getPlayerMaci(){

    if(maci && pushedBtn < 10){
        playerArray.push("Maci");
        document.getElementById("maci_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        maci = false;
        pushedBtn++;
        pickedEl.innerText += " Maci,";
    }
    
}

function getPlayerGeorg(){

    if(georg && pushedBtn < 10){
        playerArray.push("Georg");
        document.getElementById("georg_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        georg = false;
        pushedBtn++;
        pickedEl.innerText += " Georg,";
    }
    
}

function getPlayerHoizi(){

    if(hoizi && pushedBtn < 10){
        playerArray.push("Hoizi");
        document.getElementById("hoizi_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        hoizi = false;
        pushedBtn++;
        pickedEl.innerText += " Hoizi,";
    }
    
}

function getPlayerKunsti(){

    if(kunsti && pushedBtn < 10){
        playerArray.push("Kunsti");
        document.getElementById("kunsti_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        kunsti = false;
        pushedBtn++;
        pickedEl.innerText += " Kunsti,";
    }
    
}

function getPlayerMo(){

    if(mo && pushedBtn < 10){
        playerArray.push("Mo");
        document.getElementById("mo_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        mo = false;
        pushedBtn++;
        pickedEl.innerText += " Mo,";
    }
    
}

function getPlayerPichla(){

    if(pichla && pushedBtn < 10){
        playerArray.push("Pichla");
        document.getElementById("pichla_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        pichla = false;
        pushedBtn++;
        pickedEl.innerText += " Pichla,";
    }
    
}

function getPlayerUrli(){

    if(urli && pushedBtn < 10){
        playerArray.push("Urli");
        document.getElementById("urli_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        urli = false;
        pushedBtn++;
        pickedEl.innerText += " Urli,";
    }
    
}

function getPlayerZiagla(){

    if(ziagla && pushedBtn < 10){
        playerArray.push("Ziagla");
        document.getElementById("ziagla_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        ziagla = false;
        pushedBtn++;
        pickedEl.innerText += " Ziagla,";
    }
    
}

function getPlayerWoischi(){

    if(woischi && pushedBtn < 10){
        playerArray.push("Woischi");
        document.getElementById("woischi_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)"; 
        woischi = false;
        pushedBtn++;
        pickedEl.innerText += " Woischi,";
    }
    
}

function getPlayerVaki(){

    if(vaki && pushedBtn < 10){
        playerArray.push("Vaki");
        document.getElementById("vaki_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        vaki = false;
        pushedBtn++;
        pickedEl.innerText += " Vaki,";
    }
    
}

function getPlayerFabi(){

    if(fabi && pushedBtn < 10){
        playerArray.push("Fabi");
        document.getElementById("fabi_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        fabi = false;
        pushedBtn++;
        pickedEl.innerText += " Fabi,";
    }
   
}

function getPlayerAlex(){

    if(alex && pushedBtn < 10){
        playerArray.push("Alex");
        document.getElementById("alex_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        alex = false;
        pushedBtn++;
        pickedEl.innerText += " Alex,";
    }
    
}

function getPlayerRandom(){

    if(random && pushedBtn < 10){
        playerArray.push("Random");
        document.getElementById("random_btn").style.backgroundColor = "rgba(42, 204, 27, 0.534)";
        random = false;
        pushedBtn++;
        pickedEl.innerText += " Random,";
    }
    
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

let canGenerate = true;

function generate(){

    if(canGenerate){
        randomPlayerArray()
        teamBuilder()
        canGenerate = false;
    }
    
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------


function reset(){

    pushedBtn = 0

    andi = true;
    seidl = true;
    mattl = true;
    pipo = true;
    beda = true;
    roebi = true;
    maci = true;
    georg = true;
    hoizi = true;
    kunsti = true;
    mo = true;
    pichla = true;
    urli = true;
    ziagla = true;
    woischi = true;
    vaki = true;
    fabi = true; 
    alex = true
    random = true;
    

    document.getElementById("andibtn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("seidl_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("mattl_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("pipo_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("beda_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("roebi_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("maci_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("georg_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("hoizi_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("kunsti_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("mo_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("pichla_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("urli_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("ziagla_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("woischi_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("vaki_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("fabi_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("alex_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";
    document.getElementById("random_btn").style.backgroundColor = "rgba(126, 88, 88, 0)";


    playerArray = [];
    pickedPlayers = "";
    pickedEl.textContent = "PLAYERS: ";
    team1El.textContent = "";
    team2El.textContent = "";
    canGenerate = true;
    displayShown = true;
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//RANDOM GENERATOR


function randomPlayerArray(){
    playerArray.sort(function(a, b){return 0.5 - Math.random()});
}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

let team1El = document.getElementById("team1-el");
let team2El = document.getElementById("team2-el");


function teamBuilder(){
    for(let i = 0; i < 5; i++){
        team1El.textContent += playerArray[i] + " ";
    }

    for(let i = 5; i < 10; i++){
        team2El.textContent += playerArray[i] + " ";
    }

}

//---------------------------------------------------------------------------
//---------------------------------------------------------------------------



