"use strict";
exports.__esModule = true;
var Deck_1 = require("/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/GameTools/Deck");
var GoFishComputerPlayer_1 = require("../Players/GoFishComputerPlayer");
var GoFishGame = /** @class */ (function () {
    function GoFishGame(player1) {
        this.players = [player1, new GoFishComputerPlayer_1.GoFishComputerPlayer("Bob"), new GoFishComputerPlayer_1.GoFishComputerPlayer("Sue")];
        this.turnCounter = 0;
        this.deck = new Deck_1.Deck();
        this.deck.shuffle();
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    GoFishGame.prototype.welcomeMessage = function () {
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "Welcome to Go Fish!";
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "You are playing with Bob and Sue today.";
    };
    GoFishGame.prototype.startGame = function () {
        this.welcomeMessage();
        this.deal();
        while (this.gameIsNotOver()) {
            this.takeTurn();
        }
        var winners = this.determineWinner();
        this.gameOverMessage(winners);
        this.endGame();
    };
    GoFishGame.prototype.deal = function () {
        this.displayEle.innterHTML += "<br/>";
        this.displayEle.innerHTML += "Dealing out player hands.";
        for (var i = 0; i < this.players.length; i++) {
            for (var j = 0; j < 5; j++) {
                this.players[i].addCardToHand(this.deck.getTopCard());
                this.deck.deck.pop();
            }
        }
    };
    GoFishGame.prototype.gameIsNotOver = function () {
        var numPairsMatched = 0;
        for (var i = 0; i < this.players.length; i++) {
            numPairsMatched += this.players[i].getNumPairs();
        }
        return numPairsMatched < 26;
    };
    GoFishGame.prototype.getCurrentPlayer = function () {
        return this.players[this.turnCounter % this.players.length];
    };
    GoFishGame.prototype.takeTurn = function () {
        var currentPlayer = this.getCurrentPlayer();
        if (currentPlayer.isHandEmpty()) {
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innerHTML += currentPlayer.getName() + " ran out of cards and there are not cards left in the deck. Skipping turn.";
            this.turnCounter++;
            return;
        }
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "It's " + currentPlayer.getName() + "'s turn.";
        var opponents = (this.players);
        var currentPlayerIndex = opponents.indexOf(currentPlayer);
        opponents.splice(currentPlayerIndex, 1);
        var opponentToAsk = currentPlayer.pickOpponentToAsk(opponents);
        var cardPicked = currentPlayer.pickCard();
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += currentPlayer.getName().concat(" asked ", opponentToAsk.getName(), " for a ", cardPicked.toString(), ".");
        if (opponentToAsk.hasCard(cardPicked)) {
            opponentToAsk.removeCard(cardPicked);
            currentPlayer.addCardToHand(cardPicked);
            this.displayEle.innerHTML += "<br/>".concat(opponentToAsk.getName(), " had that card. ", currentPlayer.getName(), " goes again.");
            this.fillPlayerHands();
            this.takeTurn();
        }
        else {
            this.displayEle.innerHTML += "<br/>".concat(opponentToAsk.getName(), " did not have that card ", "Go fish.");
            if (this.deck.deck.length == 0) {
                this.displayEle.innerHTML += "<br/>" + "The deck is empty. No cards to draw.";
                this.turnCounter++;
                return;
            }
            var topCard = this.deck.getTopCard();
            this.deck.deck.pop();
            currentPlayer.addCardToHand(topCard);
            if (topCard.getRank() == cardPicked.getRank()) {
                this.displayEle.innerHTML += "<br/>".concat(currentPlayer.getName() + " picked their wish!" + currentPlayer.getName() + " gets a point. Go again.");
                this.fillPlayerHands();
                this.takeTurn();
            }
            else {
                this.fillPlayerHands();
                this.turnCounter++;
            }
        }
    };
    GoFishGame.prototype.fillPlayerHands = function () {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].isHandEmpty() && this.deck.deck.length > 0) {
                var topCard = this.deck.getTopCard();
                //this.deck.deck.splice(0, 1);
                this.deck.deck.pop();
                this.players[i].addCardToHand(topCard);
            }
        }
    };
    GoFishGame.prototype.displayScores = function (players) {
        var displayScores = "";
        for (var i = 0; i < players.length; i++) {
            displayScores + "> " + players[i].getName() + ": " + players[i].getNumPairs();
        }
        return displayScores;
    };
    GoFishGame.prototype.determineWinner = function () {
        var winners = new Array();
        var highestScore = 0;
        for (var i = 0; i < this.players.length; i++) {
            var currentScore = this.players[i].getNumPairs();
            if (currentScore > highestScore) {
                highestScore = currentScore;
                winners = [];
                winners.push(this.players[i]);
            }
            else if (currentScore == highestScore) {
                winners.push(this.players[i]);
            }
        }
        return winners;
    };
    GoFishGame.prototype.gameOverMessage = function (winners) {
        if (winners.length > 1) {
            console.log("There was a tie!");
            for (var i = 0; i < winners.length; i++) {
                console.log("Congratulations, " + winners[i].getName + " you tied!");
            }
        }
        else {
            console.log("Congratulations, " + winners[0].getName + " you win!");
        }
        this.displayScores(this.players);
        console.log("That was fun! Game over.");
    };
    GoFishGame.prototype.endGame = function () {
    };
    return GoFishGame;
}());
exports.GoFishGame = GoFishGame;
