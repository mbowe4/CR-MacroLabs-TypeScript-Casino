
/// <reference path="./Players/GoFishComputerPlayer.ts" />
/// <reference path="./Players/GoFishHumanPlayer.ts" />
/// <reference path="./Players/Player.ts" />
/// <reference path="./Interfaces/Game.ts" />
/// <reference path="./Games/GoFishGame.ts" />

import { Player } from "./Players/Player";
import { Game } from "./Interfaces/Game";
import { GoFishGame } from "./Games/GoFishGame";
import { GoFishHumanPlayer } from "./Players/GoFishHumanPlayer";

export class Casino {
    displayEle:any; 
    userInput:any;
    submit:any;
    name:string;
    balance:number;
    public goFish;
    public war;
    player:Player;
    private isPlaying:boolean;

    constructor() {
        this.displayEle = document.getElementById("display"); 
        this.userInput = document.getElementById("user_input");
        this.submit = document.getElementById("submit");
        this.player = new Player;
        this.isPlaying = true;
    }

    init():void {
        alert("here")
        this.loginOptions();
    }

    loginOptions():void {
        this.displayEle.innerHTML = "Please enter your name";
    }

    getName():void {
        this.name = this.userInput.value;
        this.userInput.value="";
        this.userInput.setAttribute("placeholder", "AGE");
        this.userInput.setAttribute("type", "number");
        this.userInput.setAttribute("onclick", "casino.getBalance()");
        this.displayEle.innerHTML = "Please enter your balance";
    }

    getBalance():void {
        this.balance = this.userInput.value;
        this.userInput.value="";
        this.userInput.setAttribute("type", "text");
        this.player = new Player(this.name, this.balance)
        document.getElementById("userInfo").innerHTML = this.player.toString();
        document.getElementById("userInfo").hidden = false;
        this.gameOptions();
    }

    gameOptions(): void {
        document.getElementById("cardGame").hidden = true;
        this.displayEle.innerHTML = "Please enter the name of the game you would like to play";
        this.submit.setAttribute("onclick", "casino.takeOptions()");
        this.userInput.setAttribute("placeholder", "GAME");
        this.submit.hidden = false;
        this.userInput.hidden = false;
    }

    takeOptions(): void {
        var input:string = this.userInput.value;
        switch(input.toLowerCase()) {
            case "go fish": {
                this.goFish = new GoFishGame(new GoFishHumanPlayer(this.player));
                this.goFish.startGame();
                break;
            }
        }
    }


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

    protected exitCasino(): void {
        this.displayEle.innerHTML += "Thank you for visiting.";
    }

}