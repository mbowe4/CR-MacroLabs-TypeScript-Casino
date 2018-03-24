import { Player } from "./Players/Player";

export class Casino {
    player:Player;
    private isPlaying:boolean = true;

    protected askUserName(): String {
        let name: String = prompt("Please enter your name.");
        return name;
    }

    protected askUserBalance(): String {
        let balance = prompt("Please enter your balance.");
        return balance;
    }

    protected setUpUserProfile(): void {
        let name: String = this.askUserName();
        let balance: String = this.askUserBalance();

        this.player = new Player(name, balance);
    }

    protected initiateGame(): void {
        do {
            let selectedGame: String = this.availableGames();
            if(selectedGame == "Exit") {
                this.exitCasino();
                break;
            } else {
                this.selectGame(selectedGame).startGame();
            }
        }
        while(this.isPlaying);
    }

    public availableGames():String {
        return prompt("Please select a game\n1. Go Fish\n2. War");
    }
    
    public selectGame(selectedGame): Game {
        let game: Game = null;

        switch (selectedGame) {
            case "War":
                alert("You picked War");
                game = new War(this.player);
                break;
            case "Go Fish":
                alert("you picked Go Fish");
                game = new GoFish(new GoFishHumanPlayer(player));
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
        console.log("Thank you for visiting.");
    }


// }

// function askUserName(): void {
//     this.name = prompt("Please enter your name.");

//     if(name != null) {
//         document.getElementById("displayName").innerHTML = "Hello, " + name;
//     }
// }

// function askUserBalance(): void {
//     this.balance = prompt("Please enter your balance.");

//     if(this.balance != null) {
//         document.getElementById("displayBalance").innerHTML = "Your balance is: " + this.balance;
//     }
//