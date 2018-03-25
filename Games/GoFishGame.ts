import { Profile } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Players/Profile";
import { GoFishPlayer} from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Players/GoFishPlayer";
import { GoFishHumanPlayer } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Players/GoFishHumanPlayer"
import { Deck } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/GameTools/Deck"
import { GoFishComputerPlayer } from "../Players/GoFishComputerPlayer";
import { Card } from "../GameTools/Card";
import { Game } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Interfaces/Game";

export class GoFishGame implements Game{
    displayEle:any;
    userInputEle:any;
    private turnCounter: number;
    private players: GoFishPlayer[];
    private deck: Deck;

    constructor(player1: GoFishHumanPlayer) {
        this.players = [player1, new GoFishComputerPlayer("Bob"), new GoFishComputerPlayer("Sue")];
        this.turnCounter = 0;
        this.deck = new Deck();
        this.deck.shuffle();
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }

    public welcomeMessage(): void {
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "Welcome to Go Fish!";
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "You are playing with Bob and Sue today.";
    }

    public startGame(): void {
        this.welcomeMessage();
        this.deal();

        while (this.gameIsNotOver()) {
            this.takeTurn();
        }
        let winners: GoFishPlayer[] = this.determineWinner();
        this.gameOverMessage(winners);
        this.endGame();
    }

    public deal(): void {
        this.displayEle.innterHTML += "<br/>";
        this.displayEle.innerHTML += "Dealing out player hands.";
        for (var i = 0; i < this.players.length; i++ ) {
            for(var j = 0; j < 5; j++) {
                this.players[i].addCardToHand(this.deck.getTopCard());
                this.deck.deck.pop();
            }
        }
    }

    public gameIsNotOver(): boolean {
        let numPairsMatched: number = 0;
        for(var i = 0; i < this.players.length; i++) {
            numPairsMatched += this.players[i].getNumPairs();
        }
        return numPairsMatched < 26;
    }

    public getCurrentPlayer(): GoFishPlayer {
        
        return this.players[this.turnCounter % this.players.length];
    }

    public takeTurn(): void {
        var currentPlayer: GoFishPlayer = this.getCurrentPlayer();
        if(currentPlayer.isHandEmpty()) {
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innerHTML += currentPlayer.getName() + " ran out of cards and there are not cards left in the deck. Skipping turn.";
            this.turnCounter++;
            return;
        }
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML +="It's " + currentPlayer.getName() + "'s turn.";

        var opponents: GoFishPlayer[] = (this.players);
        
        let currentPlayerIndex: number = opponents.indexOf(currentPlayer);
        opponents.splice(currentPlayerIndex, 1);

        var opponentToAsk:GoFishPlayer = currentPlayer.pickOpponentToAsk(opponents);

        let cardPicked: Card = currentPlayer.pickCard();
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += currentPlayer.getName().concat(" asked ", opponentToAsk.getName(), " for a ", cardPicked.toString(), ".");

        if(opponentToAsk.hasCard(cardPicked)) {
            opponentToAsk.removeCard(cardPicked);
            currentPlayer.addCardToHand(cardPicked);
            this.displayEle.innerHTML += "<br/>".concat(opponentToAsk.getName(), " had that card. ", currentPlayer.getName(), " goes again.");
            this.fillPlayerHands();
            this.takeTurn();
        } else {
            this.displayEle.innerHTML += "<br/>".concat(opponentToAsk.getName(), " did not have that card ", "Go fish.");
            if (this.deck.deck.length == 0) {
                this.displayEle.innerHTML += "<br/>" + "The deck is empty. No cards to draw.";
                this.turnCounter++;
                return;
            }
            var topCard: Card = this.deck.getTopCard();
            this.deck.deck.pop();
            currentPlayer.addCardToHand(topCard);
            if (topCard.getRank() == cardPicked.getRank()) {
                this.displayEle.innerHTML += "<br/>".concat(currentPlayer.getName() + " picked their wish!" + currentPlayer.getName() + " gets a point. Go again.");
                this.fillPlayerHands();
                this.takeTurn();
            } else {
                this.fillPlayerHands();
                this.turnCounter++;
            }
        }
    }

    public fillPlayerHands(): void {
        for(var i = 0; i < this.players.length; i++) {
            if(this.players[i].isHandEmpty() && this.deck.deck.length > 0) {
                let topCard: Card = this.deck.getTopCard();
                //this.deck.deck.splice(0, 1);
                this.deck.deck.pop();
                this.players[i].addCardToHand(topCard);
            }
        }
    }
    
    public displayScores(players: Array<GoFishPlayer>): String {
        let displayScores: String = "";
        for(var i = 0; i < players.length; i++ ) {
            displayScores + "> " + players[i].getName() + ": " + players[i].getNumPairs();
        }

        return displayScores;
    }

    public determineWinner(): Array<GoFishPlayer> {
        let winners: Array<GoFishPlayer> = new Array<GoFishPlayer>();
        let highestScore:number = 0;

        for(var i = 0; i < this.players.length; i++){
            let currentScore = this.players[i].getNumPairs();

            if(currentScore > highestScore) {
                highestScore = currentScore;
                winners = [];
                winners.push(this.players[i])
            }
            else if(currentScore == highestScore) {
                winners.push(this.players[i]);
            }
        }
        return winners;
    }

    public gameOverMessage(winners: Array<GoFishPlayer>): void {
        if(winners.length > 1) {
            console.log("There was a tie!");
            for(var i = 0; i < winners.length; i++) {
                console.log("Congratulations, " + winners[i].getName + " you tied!" );
            }
        }
        else {
            console.log("Congratulations, " + winners[0].getName + " you win!");
        }
        this.displayScores(this.players);
        console.log("That was fun! Game over.");
    }

    public endGame(): void {

    }
}