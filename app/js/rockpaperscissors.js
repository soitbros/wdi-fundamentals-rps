////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
	console.log("Please choose either 'rock', 'paper', or 'scissors'.");
	return prompt();
}

function randomPlay() {
	var randomNumber = Math.random();
	if (randomNumber < 0.33) {
		return "rock";
	} else if (randomNumber < 0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}
////////////////////////////////////////////////
/*           Write Your Code Below (1)        */
////////////////////////////////////////////////

function getPlayerMove(move) {
	return move || getInput();
}

function getComputerMove(move) {
	return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
	var winner;
	if (playerMove === computerMove) {
		winner = "tie";
	} else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
		winner = "player";
	} else {
		winner = "computer";
	} return winner;
}

function playToFive() {
	console.log("Let's play Rock, Paper, Scissors");

	var playerWins = 0;
	var computerWins = 0;

	while(playerWins < 5 && computerWins < 5) {
		if (winner === "player") {
			playerWins ++;
			console.log ("You won with " + playerMove + " against "  + computerMove + ". The score is " + playerWins + " to "  + computerWins);
		} else if (winner === "computer") {
			computerWins ++;
			console.log ("You lost with "  + playerMove + " against " + computerMove + ". The score is " + playerWins + " to "  + computerWins);
		} else if (winner === "tie") {
			console.log ("No one wins, no one loses. The score is " + playerWins + " to " + computerWins);
		}
	var playerMove = getPlayerMove();
	var computerMove = getComputerMove();
	var winner = getWinner(playerMove, computerMove);
	}
	return [playerWins, computerWins];
}

playToFive();
