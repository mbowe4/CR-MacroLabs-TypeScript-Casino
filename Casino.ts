import { Player } from "./Players/Player";
import { Game } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Interfaces/Game";
import { GoFishGame } from "./Games/GoFishGame";
import { GoFishHumanPlayer } from "./Players/GoFishHumanPlayer";

export class Casino {
    displayEle:any = document.getElementById("disply");
    userInput:any = document.getElementById("user_input");

    player:Player;
    private isPlaying:boolean = true;

    protected askUserName(): string {
        this.displayEle.innerHTML += "<br/>".concat("Please enter your name");
        var name: string = this.userInput.value;
        return name;
    }

    protected askUserBalance(): string {
        this.displayEle.innerHTML += "<br/>".concat("Please enter your balance");
        var balance: string = this.userInput.value;
        return balance;
    }

    protected setUpUserProfile(): void {
        var name: string = this.askUserName();
        var balance: string = this.askUserBalance();

        this.player = new Player(name, balance);
    }

    protected initiateGame(): void {
        do {
            var selectedGame: string = this.availableGames();
            if(selectedGame == "Exit") {
                this.exitCasino();
                break;
            } else {
                this.selectGame(selectedGame).startGame();
            }
        }
        while(this.isPlaying);
    }

    public availableGames():string {
        this.displayEle.innerHTML += "<br/>".concat("Please select a game", "<br/>", "1. Go Fish", "<br/>", "2. War");
        return this.userInput.value;
    }
    
    public selectGame(selectedGame): Game {
        let game: Game = null;

        switch (selectedGame) {
            case "War":
            this.displayEle.innerHTML += "<br/>";  
            this.displayEle.innerHTML += "You picked War";
                //game = new War(this.player);
                break;
            case "Go Fish":
            this.displayEle.innerHTML += "<br/>";  
            this.displayEle.innerHTML += "You picked Go Fish";
                game = new GoFishGame(new GoFishHumanPlayer(this.player));
                break;
            default: 
                alert("Please pick a valid choice.");
        }
        return game;
}

    public start(): void {
        this.setUpUserProfile();
        this.initiateGame();
    }

    protected exitCasino(): void {
        this.displayEle.innerHTML += "Thank you for visiting.";
    }
}