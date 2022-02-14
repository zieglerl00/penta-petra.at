
function hideElements(){
    document.getElementById("left-top-el-img").style.visibility = "hidden";
    document.getElementById("left-mid-el-img").style.visibility = "hidden";
    document.getElementById("left-bot-el-img").style.visibility = "hidden";

    document.getElementById("mid-top-el-img").style.visibility = "hidden";
    document.getElementById("mid-mid-el-img").style.visibility = "hidden";
    document.getElementById("mid-bot-el-img").style.visibility = "hidden";

    document.getElementById("right-top-el-img").style.visibility = "hidden";
    document.getElementById("right-mid-el-img").style.visibility = "hidden";
    document.getElementById("right-bot-el-img").style.visibility = "hidden";

    document.getElementById("winner").style.visibility = "hidden";
}

hideElements()



let winnerEl = document.getElementById("winner");

let startButton = document.getElementById("start-btn-el");

let playArray;

let startGameBool = false;

let playerOne;
let playerTwo;
let draw;



var user = true;



let klickedLeftTop = true;
let klickedLeftMid = true;
let klickedLeftBot = true;

let klickedMidTop = true;
let klickedMidMid = true;
let klickedMidBot = true;

let klickedRightTop = true;
let klickedRightMid = true;
let klickedRightBot = true;


function startGame(){
    startGameBool = true;
    hideElements()
    user = true;
    playArray = [
        [ ,  ,],
        [ , , ],
        [ , , ]
    ]

    startButton.innerText = "Running..";

    playerTwo = false;;
    playerOne = false;
    draw = false;


    klickedLeftTop = true;
    klickedLeftMid = true;
    klickedLeftBot = true;

    klickedMidTop = true;
    klickedMidMid = true;
    klickedMidBot = true;

    klickedRightTop = true;
    klickedRightMid = true;
    klickedRightBot = true;
    
}

function left_top(){
    if(startGameBool){
        if(user && klickedLeftTop === true){
            document.getElementById("left-top-el-img").style.visibility = "visible";
            document.getElementById("left-top-el-img").src="X.png";
            user = false;
            playArray[0][0] = "X";
            klickedLeftTop = false;
            compare()
        }else if(user === false && klickedLeftTop === true)
        {
            document.getElementById("left-top-el-img").src="Kreis.png";
            document.getElementById("left-top-el-img").style.visibility = "visible";
            user = true;
            playArray[0][0] = "O";
            klickedLeftTop = false;
            compare()
        }
    }
    
}

function left_mid(){
    if(startGameBool){
        if(user && klickedLeftMid === true){
            document.getElementById("left-mid-el-img").style.visibility = "visible";
            document.getElementById("left-mid-el-img").src="X.png";
            user = false;
            playArray[1][0] = "X";
            klickedLeftMid = false;
            compare()
        }
        else if(user === false && klickedLeftMid === true){
            document.getElementById("left-mid-el-img").src="Kreis.png";
            document.getElementById("left-mid-el-img").style.visibility = "visible"  ;
            user = true;
            playArray[1][0] = "O";
            klickedLeftMid = false;
            compare()
        }
    }
}

function left_bot(){
    if(startGameBool){
        if(user && klickedLeftBot === true){
            document.getElementById("left-bot-el-img").style.visibility = "visible";
            document.getElementById("left-bot-el-img").src="X.png";
            user = false;
            playArray[2][0] = "X";
            klickedLeftBot = false;
            compare()
        }
        else if(user === false && klickedLeftBot === true){
            document.getElementById("left-bot-el-img").src="Kreis.png";
            document.getElementById("left-bot-el-img").style.visibility = "visible"   ;
            user = true;
            playArray[2][0] = "O";
            klickedLeftBot = false;
            compare()
        }
    }
}

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------



function mid_top(){
    if(startGameBool){
        if(user && klickedMidTop === true){
            document.getElementById("mid-top-el-img").style.visibility = "visible";
            document.getElementById("mid-top-el-img").src="X.png";
            user = false;
            playArray[0][1] = "X";
            klickedMidTop = false;
            compare()
        }
        else if(user === false && klickedMidTop === true){
            document.getElementById("mid-top-el-img").src="Kreis.png";
            document.getElementById("mid-top-el-img").style.visibility = "visible" ;
            user = true;
            playArray[0][1] = "O";
            klickedMidTop = false;
            compare()
        }
    }
}

function mid_mid(){
    if(startGameBool){
        if(user && klickedMidMid === true){
            document.getElementById("mid-mid-el-img").style.visibility = "visible";
            document.getElementById("mid-mid-el-img").src="X.png";
            user = false;
            playArray[1][1] = "X";
            klickedMidMid = false;
            compare()
        }
        else if(user === false && klickedMidMid === true){
            document.getElementById("mid-mid-el-img").src="Kreis.png";
            document.getElementById("mid-mid-el-img").style.visibility = "visible"  ; 
            user = true;
            playArray[1][1] = "O";
            klickedMidMid = false;
            compare()
        }
    }
}

function mid_bot(){
    if(startGameBool){
        if(user && klickedMidBot === true){
            document.getElementById("mid-bot-el-img").style.visibility = "visible";
            document.getElementById("mid-bot-el-img").src="X.png";
            user = false;
            playArray[2][1] = "X";
            klickedMidBot = false;
            compare()
        }
        else if(user === false && klickedMidBot === true){
            document.getElementById("mid-bot-el-img").src="Kreis.png";
            document.getElementById("mid-bot-el-img").style.visibility = "visible"; 
            user = true;
            playArray[2][1] = "O";
            klickedMidBot = false;
            compare()
        }
    }
}

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------



function right_top(){
    if(startGameBool){
        if(user && klickedRightTop === true){
            document.getElementById("right-top-el-img").style.visibility = "visible";
            document.getElementById("right-top-el-img").src="X.png";
            user = false;
            playArray[0][2] = "X";
            klickedRightTop = false;
            compare()
        }
        else if(user === false && klickedRightTop === true){
            document.getElementById("right-top-el-img").src="Kreis.png";
            document.getElementById("right-top-el-img").style.visibility = "visible"   ;
            user = true;
            playArray[0][2] = "O";
            klickedRightTop = false;
            compare()
        }
    }
}

function right_mid(){
    if(startGameBool){
        if(user && klickedRightMid === true){
            document.getElementById("right-mid-el-img").style.visibility = "visible";
            document.getElementById("right-mid-el-img").src="X.png";
            user = false;
            playArray[1][2] = "X";
            klickedRightMid = false;
            compare()
        }
        else if(user === false && klickedRightMid === true){
            document.getElementById("right-mid-el-img").src="Kreis.png";
            document.getElementById("right-mid-el-img").style.visibility = "visible";;
            user = true;
            playArray[1][2] = "O";
            klickedRightMid = false;
            compare()
        }
    }
}

function right_bot(){
    if(startGameBool){
        if(user && klickedRightBot === true){
            document.getElementById("right-bot-el-img").style.visibility = "visible";
            document.getElementById("right-bot-el-img").src="X.png";
            user = false;
            playArray[2][2] = "X";
            klickedRightBot = false;
            compare()
            console.log(playArray[0][0],playArray[1][1],playArray[2][2])
        }
        else if(user === false && klickedRightBot === true){
            document.getElementById("right-bot-el-img").src="Kreis.png";
            document.getElementById("right-bot-el-img").style.visibility = "visible"; 
            user = true;
            playArray[2][2] = "O";
            klickedRightBot = false;
            compare()
        }
    }
}

function compare(){
    
    if(playArray[0][0] === "X" && playArray[1][1] === "X" && playArray[2][2] === "X"){
        console.log("LEFT TOP TO RIGHT BOT");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[0][0] === "O" && playArray[1][1] === "O" && playArray[2][2] === "O"){
        console.log("LEFT TOP TO RIGHT BOT");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[0][0] === "X" && playArray[1][0] === "X" && playArray[2][0] === "X"){
        console.log("LEFT TOP TO LEFT BOT");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[0][0] === "O" && playArray[1][0] === "O" && playArray[2][0] === "O"){
        console.log("LEFT TOP TO LEFT BOT");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[0][0] === "X" && playArray[0][1] === "X" && playArray[0][2] === "X"){
        console.log("LEFT TOP TO RIGHT TOP");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[0][0] === "O" && playArray[0][1] === "O" && playArray[0][2] === "O"){
        console.log("LEFT TOP TO RIGHT TOP");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[2][0] === "X" && playArray[2][1] === "X" && playArray[2][2] === "X"){
        console.log("LEFT BOT TO RIGHT BOT");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[2][0] === "O" && playArray[2][1] === "O" && playArray[2][2] === "O"){
        console.log("LEFT BOT TO RIGHT BOT");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[0][2] === "X" && playArray[1][2] === "X" && playArray[2][2] === "X"){
        console.log("LEFT TOP TO RIGHT BOT");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[0][2] === "O" && playArray[1][2] === "O" && playArray[2][2] === "O"){
        console.log("LEFT TOP TO RIGHT BOT");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[0][1] === "X" && playArray[1][1] === "X" && playArray[2][1] === "X"){
        console.log("MID TOP TO MID BOT");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[0][1] === "O" && playArray[1][1] === "O" && playArray[2][1] === "O"){
        console.log("MID TOP TO MID BOT");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[1][0] === "X" && playArray[1][1] === "X" && playArray[1][2] === "X"){
        console.log("MID LEFT TO MID RIGHT");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[1][0] === "O" && playArray[1][1] === "O" && playArray[1][2] === "O"){
        console.log("MID LEFT TO MID RIGHT");
        playerTwo = true;
        whoWins()
    }
    else  if(playArray[0][2] === "X" && playArray[1][1] === "X" && playArray[2][0] === "X"){
        console.log("LEFT BOT TO RIGHT TOP");
        playerOne = true;
        whoWins()
    }
    else  if(playArray[0][2] === "O" && playArray[1][1] === "O" && playArray[2][0] === "O"){
        console.log("LEFT BOT TO RIGHT TOP");
        playerTwo = true;
        whoWins()
    }
    else if(klickedLeftTop === false && klickedLeftMid === false && klickedLeftBot === false && klickedMidTop === false && klickedMidMid === false && klickedMidBot === false && klickedRightTop === false && klickedRightMid === false && klickedRightBot === false){
        draw = true;
        whoWins()
    }
    
    
}

function whoWins(){

    startGameBool = false;

    if(playerOne){
        winnerEl.innerText = "Spieler X gewinnt";
        document.getElementById("winner").style.visibility = "visible";
        startButton.innerText = "NEW GAME";
    }
    else if(playerTwo){
        winnerEl.innerText = "Spieler O gewinnt";
        document.getElementById("winner").style.visibility = "visible";
        startButton.innerText = "NEW GAME";
    }
    else if(draw){
        winnerEl.innerText = "Unentschieden!";
        document.getElementById("winner").style.visibility = "visible";
        startButton.innerText = "NEW GAME";
    }
}
