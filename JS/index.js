"use strict";

//ask if they want best of 3, 5, or 7
//ask player what they want to choose, rock, paper, or scissors
//determine who wins, computer or player
//bully player for losing
var playerChoice;
var computerChoice;
var playerScore = 0;
var computerScore = 0;
var bestOf = 3;

var roundsLeft = bestOf - (playerScore + computerScore);

function getComputerChoice() { //determines what the computer will play (rock, paper, or scissors)
    computerChoice = Math.floor(Math.random() * Math.floor(3));
    // 0 = ROCK    1 = PAPER    2 = SCISSORS
    if (computerChoice == 0) {
        document.getElementById("cChoice").src = "Images/rock.png"
    } else if(computerChoice == 1) {
        document.getElementById("cChoice").src = "Images/paper.png"
    } else if(computerChoice == 2) {
        document.getElementById("cChoice").src = "Images/scissors.png"
    }
    return computerChoice;
}

function playRockPaperScissors() {
    if (playerChoice == undefined) {
        alert("please make a selection.");
    } else {
        computerChoice = getComputerChoice();
        return getWinner();
    }
}

function getWinner() {
    if (playerChoice == 0 && computerChoice == 2) { //player = rock | computer = scissors
        playerScore ++;
        document.getElementById("pScore").innerHTML = playerScore;
        document.getElementById("winMessage").innerHTML = "";
    } else if (playerChoice == 2 && computerChoice == 1) { //player = scissors | computer = paper
        playerScore ++;
        document.getElementById("pScore").innerHTML = playerScore;
        document.getElementById("winMessage").innerHTML = "";
    } else if (playerChoice == 1 && computerChoice == 0) {//player = paper | computer = rock
        playerScore ++;
        document.getElementById("pScore").innerHTML = playerScore;
        document.getElementById("winMessage").innerHTML = "";
    } 
    else if (playerChoice == 2 && computerChoice == 0) {//player = scissors | computer = rock
        computerScore ++;
        document.getElementById("cScore").innerHTML = computerScore;
        document.getElementById("winMessage").innerHTML = "";
    } else if (playerChoice == 1 && computerChoice == 2) {//player = paper | computer = scissors
        computerScore ++;
        document.getElementById("cScore").innerHTML = computerScore;
        document.getElementById("winMessage").innerHTML = "";
    } else if (playerChoice == 0 && computerChoice == 1) {//player = rock | computer = paper
        computerScore ++;
        document.getElementById("cScore").innerHTML = computerScore;
        document.getElementById("winMessage").innerHTML = "";
    } else if (playerChoice == computerChoice) { //What to do if there is a tie
        document.getElementById("winMessage").innerHTML = "Tie!";
    }
    
    if (didGameEnd()) {
        document.getElementById("Button3").disabled = true;
        document.getElementById("Button5").disabled = true;
        document.getElementById("Button7").disabled = true;
        document.getElementById("rockImg").classList.remove('hover');
        document.getElementById("paperImg").classList.remove('hover');
        document.getElementById("scissorsImg").classList.remove('hover');
        document.getElementById("rockImg").onclick = "";
        document.getElementById("paperImg").onclick = "";
        document.getElementById("scissorsImg").onclick = "";
        document.getElementById("confirm").disabled = true;
        document.getElementById("helpMessage").style.visibility = "visible";
    }
}

function didGameEnd() {
    roundsLeft = bestOf - (playerScore + computerScore);
    if (playerScore > roundsLeft && playerScore > computerScore) {
        document.getElementById("winMessage").innerHTML = "You Win!";
        return true;
    } else if (computerScore > roundsLeft && computerScore > playerScore) {
        document.getElementById("winMessage").innerHTML = "You Lose!";
        return true;
    } else {
        return false;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    bestOf = 3;
    document.getElementById("pScore").innerHTML = playerScore;
    document.getElementById("cScore").innerHTML = playerScore;
    document.getElementById("cChoice").src = "Images/blank.png"
    document.getElementById("pChoice").src = "Images/blank.png"
    document.getElementById("winMessage").innerHTML = "";

    document.getElementById("Button3").disabled = false;
    document.getElementById("Button5").disabled = false;
    document.getElementById("Button7").disabled = false;
    document.getElementById("rockImg").classList.add('hover');
    document.getElementById("paperImg").classList.add('hover');
    document.getElementById("scissorsImg").classList.add('hover');
    document.getElementById("rockImg").onclick = function() { choseRock() };
    document.getElementById("paperImg").onclick = function() { chosePaper() };
    document.getElementById("scissorsImg").onclick = function() { choseScissors() };
    document.getElementById("confirm").disabled = false;

    document.getElementById("helpMessage").style.visibility = "hidden";
}

function choseRock() {
    document.getElementById("pChoice").src = "Images/rock.png"
    playerChoice = 0;
}

function chosePaper() {
    document.getElementById("pChoice").src = "Images/paper.png"
    playerChoice = 1;
}

function choseScissors() {
    document.getElementById("pChoice").src = "Images/scissors.png"
    playerChoice = 2;
}


function bestOf3() {
    bestOf = 3;
    document.getElementById("Button3").style.borderColor = "forestgreen";
    document.getElementById("Button5").style.borderColor = "black";
    document.getElementById("Button7").style.borderColor = "black";
}
function bestOf5() {
    bestOf = 5;
    document.getElementById("Button3").style.borderColor = "black";
    document.getElementById("Button5").style.borderColor = "forestgreen";
    document.getElementById("Button7").style.borderColor = "black";
}
function bestOf7() {
    bestOf = 7;
    document.getElementById("Button3").style.borderColor = "black";
    document.getElementById("Button5").style.borderColor = "black";
    document.getElementById("Button7").style.borderColor = "forestgreen";
}