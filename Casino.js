"use strict";
exports.__esModule = true;
var Player_1 = require("./Players/Player");
var GoFishGame_1 = require("./Games/GoFishGame");
var GoFishHumanPlayer_1 = require("./Players/GoFishHumanPlayer");
var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("disply");
        this.userInput = document.getElementById("user_input");
        this.isPlaying = true;
    }
    Casino.prototype.askUserName = function () {
        this.displayEle.innerHTML += "<br/>".concat("Please enter your name");
        var name = this.userInput.value;
        return name;
    };
    Casino.prototype.askUserBalance = function () {
        this.displayEle.innerHTML += "<br/>".concat("Please enter your balance");
        var balance = this.userInput.value;
        return balance;
    };
    Casino.prototype.setUpUserProfile = function () {
        var name = this.askUserName();
        var balance = this.askUserBalance();
        this.player = new Player_1.Player(name, balance);
    };
    Casino.prototype.initiateGame = function () {
        do {
            var selectedGame = this.availableGames();
            if (selectedGame == "Exit") {
                this.exitCasino();
                break;
            }
            else {
                this.selectGame(selectedGame).startGame();
            }
        } while (this.isPlaying);
    };
    Casino.prototype.availableGames = function () {
        this.displayEle.innerHTML += "<br/>".concat("Please select a game", "<br/>", "1. Go Fish", "<br/>", "2. War");
        return this.userInput.value;
    };
    Casino.prototype.selectGame = function (selectedGame) {
        var game = null;
        switch (selectedGame) {
            case "War":
                this.displayEle.innerHTML += "<br/>";
                this.displayEle.innerHTML += "You picked War";
                //game = new War(this.player);
                break;
            case "Go Fish":
                this.displayEle.innerHTML += "<br/>";
                this.displayEle.innerHTML += "You picked Go Fish";
                game = new GoFishGame_1.GoFishGame(new GoFishHumanPlayer_1.GoFishHumanPlayer(this.player));
                break;
            default:
                alert("Please pick a valid choice.");
        }
        return game;
    };
    Casino.prototype.start = function () {
        this.setUpUserProfile();
        this.initiateGame();
    };
    Casino.prototype.exitCasino = function () {
        this.displayEle.innerHTML += "Thank you for visiting.";
    };
    return Casino;
}());
exports.Casino = Casino;
