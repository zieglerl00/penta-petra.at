"use strict";
let pcGuessEl = document.getElementById("pc-guess");
let result = document.getElementById("winner");
let winnerCompleteEl = document.getElementById("winner-complete");
let startBtnEl = document.getElementById("start-btn");
let userPointsEl = document.getElementById("userpoints-el");
let computerPointsEl = document.getElementById("computerpoints-el");
let maxWinsEl = document.getElementById("maxWins-el");
let computerGuess

let safe = false;

let winsUser = 0;
let winsComputer = 0;

let playableRoundsBool = true;
let playableRounds = 3;


//Letzte IF abfrage == statt ===

//-----------------COMPUTER------------------------------
//-------------------------------------------------------

let computerArray = ["SCHERE", "STEIN", "PAPIER"];
let computerGuessNumber;


function startGame(){

    if(playableRoundsBool){
        playableRounds = window.prompt("Auf wieviel Gewonnene wilst du Spielen?");
        if(playableRounds === null){
            playableRounds = 3;
        }
        playableRoundsBool = false;
    }
    
    safe = true;
    maxWinsEl.textContent = "Es wird auf " + playableRounds + " " + "gewonnene gespielt";

    computerGuess = computerArray[Math.floor(Math.random()*computerArray.length)];
    
    computerGuessNumber = computerArray.indexOf(computerGuess) + 1;

    console.log(computerGuessNumber);
    startBtnEl.textContent = "NEXT ROUND";
    winnerCompleteEl.innerText = "";            
}

//-------------------------------------------------------
//-----------------NEWGAME-------------------------------

function nextRound(){
        pcGuessEl.textContent = "Entscheidung getroffen!";
        result.textContent = "";
        startGame();
        safe = true;
} 

//-----------------USER----------------------------------
//-------------------------------------------------------

let userGuess;

function scissorGuess(){
    if(safe){
        userGuess = 1;
        compare();
    }
}

function stoneGuess(){
    if(safe){
        userGuess = 2;
        compare();
    } 
}

function paperGuess(){
    if(safe){
        userGuess = 3;
        compare();
    } 
}

//-----------------COMPARE-------------------------------
//-------------------------------------------------------

let userWinner = "Der Spieler gewinnt diese Runde mit"
let computerWinner = "Computer gewinnt diese Runde mit"

function compare(){
    if(userGuess === computerGuessNumber){
        result.textContent = "Unentschieden beide hatten " + computerGuess; 
    }
    else if(userGuess === 1 && computerGuessNumber === 2){
        result.textContent = computerWinner + " " + computerGuess;
        winsComputer++;
    }
    else if(userGuess === 1 && computerGuessNumber === 3){
        result.textContent = userWinner + " " + computerGuess;
        winsUser++;
    }
    else if(userGuess === 2 && computerGuessNumber === 1){
        result.textContent = userWinner + " " + computerGuess;
        winsUser++;
    }
    else if(userGuess === 2 && computerGuessNumber === 3){
        result.textContent = computerWinner + " " + computerGuess;
        winsComputer++;
    }
    else if(userGuess === 3 && computerGuessNumber === 1){
        result.textContent = computerWinner + " " + computerGuess;
        winsComputer++;
    }
    else{
        result.textContent = userWinner + " " + computerGuess;
        winsUser++;
    }

    safe = false;
    
    pcGuessEl.textContent = computerGuess;

    computerPointsEl.innerText = "PUNKTE: " + winsComputer;
    userPointsEl.innerText = "PUNKTE: " + winsUser;

    console.log(playableRounds);

    if(winsComputer == playableRounds){
        winnerCompleteEl.innerText = "DER COMPUTER GEWINNT MIT " + winsComputer + " ZU " + winsUser;
        reset()
    }
    else if(winsUser == playableRounds){
        winnerCompleteEl.innerText = "DER USER GEWINNT MIT " + winsUser + " ZU " + winsComputer;
        reset()
    }

}

//-----------------COUNTING------------------------------
//-------------------------------------------------------

function reset(){
    computerPointsEl.innerText = "PUNKTE: ";
    userPointsEl.innerText = "PUNKTE: ";
    startBtnEl.innerText = "NEUSTART";
    winsComputer = 0;
    winsUser = 0;
    playableRoundsBool = true;
} 


//-------------------------------------------------------
//-------------------------------------------------------