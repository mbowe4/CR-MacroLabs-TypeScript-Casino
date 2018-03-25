"use strict";
/// <reference path="./Players/GoFishComputerPlayer.ts" />
/// <reference path="./Players/GoFishHumanPlayer.ts" />
/// <reference path="./Players/Player.ts" />
/// <reference path="./Interfaces/Game.ts" />
/// <reference path="./Games/GoFishGame.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Players/Player");
var GoFishGame_1 = require("./Games/GoFishGame");
var GoFishHumanPlayer_1 = require("./Players/GoFishHumanPlayer");
var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("disply");
        this.userInput = document.getElementById("user_input");
        this.submit = document.getElementById("submit");
        this.player = new Player_1.Player;
        this.isPlaying = true;
    }
    Casino.prototype.init = function () {
        this.loginOptions();
    };
    Casino.prototype.loginOptions = function () {
        this.displayEle.innerHTML = "Please enter your name";
    };
    Casino.prototype.getName = function () {
        this.name = this.userInput.value;
        this.userInput.value = "";
        this.userInput.setAttribute("placeholder", "AGE");
        this.userInput.setAttribute("type", "number");
        this.userInput.setAttribute("onclick", "casino.getBalance()");
        this.displayEle.innerHTML = "Please enter your balance";
    };
    Casino.prototype.getBalance = function () {
        this.balance = this.userInput.value;
        this.userInput.value = "";
        this.userInput.setAttribute("type", "text");
        this.player = new Player_1.Player(this.name, this.balance);
        document.getElementById("userInfo").innerHTML = this.player.toString();
        document.getElementById("userInfo").hidden = false;
        this.gameOptions();
    };
    Casino.prototype.gameOptions = function () {
        document.getElementById("cardGame").hidden = true;
        this.displayEle.innerHTML = "Please enter the name of the game you would like to play";
        this.submit.setAttribute("onclick", "casino.takeOptions()");
        this.userInput.setAttribute("placeholder", "GAME");
        this.submit.hidden = false;
        this.userInput.hidden = false;
    };
    Casino.prototype.takeOptions = function () {
        var input = this.userInput.value;
        switch (input.toLowerCase()) {
            case "go fish": {
                this.goFish = new GoFishGame_1.GoFishGame(new GoFishHumanPlayer_1.GoFishHumanPlayer(this.player));
                this.goFish.startGame();
                break;
            }
        }
    };
    // protected askUserName(): string {
    //     this.displayEle.innerHTML += "<br/>".concat("Please enter your name");
    //     var name: string = this.userInput.value;
    //     return name;
    // }
    // protected askUserBalance(): number {
    //     this.displayEle.innerHTML += "<br/>".concat("Please enter your balance");
    //     var balance: number = this.userInput.value;
    //     return balance;
    // }
    // protected setUpUserProfile(): void {
    //     var name: string = this.askUserName();
    //     var balance: number = this.askUserBalance();
    //     this.player = new Player(name, balance);
    // }
    // protected initiateGame(): void {
    //     do {
    //         var selectedGame: string = this.availableGames();
    //         if(selectedGame == "Exit") {
    //             this.exitCasino();
    //             break;
    //         } else {
    //             this.selectGame(selectedGame).startGame();
    //         }
    //     }
    //     while(this.isPlaying);
    // }
    // public availableGames():string {
    //     this.displayEle.innerHTML += "<br/>".concat("Please select a game", "<br/>", "1. Go Fish", "<br/>", "2. War");
    //     return this.userInput.value;
    // }
    // public selectGame(selectedGame): Game {
    //     let game: Game;
    //     switch (selectedGame) {
    //         case "War":
    //         this.displayEle.innerHTML += "<br/>";  
    //         this.displayEle.innerHTML += "You picked War";
    //             //game = new War(this.player);
    //             break;
    //         case "Go Fish":
    //         this.displayEle.innerHTML += "<br/>";  
    //         this.displayEle.innerHTML += "You picked Go Fish";
    //             game = new GoFishGame(new GoFishHumanPlayer(this.player));
    //             break;
    //         default: 
    //             alert("Please pick a valid choice.");
    //     }
    //     return game;
    // }
    // public start(): void {
    //     this.setUpUserProfile();
    //     this.initiateGame();
    // }
    Casino.prototype.exitCasino = function () {
        this.displayEle.innerHTML += "Thank you for visiting.";
    };
    return Casino;
}());
exports.Casino = Casino;
//# sourceMappingURL=Casino.js.map