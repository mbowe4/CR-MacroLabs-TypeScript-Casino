import { Profile } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Players/Profile";
import { GoFishPlayer} from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Players/GoFishPlayer";
import { GoFishHumanPlayer } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/Players/GoFishHumanPlayer"
import { Deck } from "/Users/madelinebowe/Dev/CR-MacroLabs-TypeScript-Casino/GameTools/Deck"
import { GoFishComputerPlayer } from "../Players/GoFishComputerPlayer";
import { Card } from "../GameTools/Card";

export class GoFishGame{
    private turnCounter: number;
    private players: GoFishPlayer[];
    private deck: Deck;

    constructor(player1: GoFishHumanPlayer) {
        this.players = [player1, new GoFishComputerPlayer(), new GoFishComputerPlayer()];
        this.turnCounter = 0;
        this.deck = new Deck();
        this.deck.shuffle();
    }

    public welcomeMessage(): void {
        console.log("Welcome to Go Fish!")
        console.log("You are playing with Bob and Sue today.")
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
        console.log("Dealing out player hands");
        for (var i = 0; i < this.players.length; i++ ) {
            for(var j = 0; j < 5; j++) {
                this.players[i].addCardToHand(this.deck.getTopCard());
                this.deck.remove(i);
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
        let currentPlayer: GoFishPlayer = this.getCurrentPlayer();
        if(currentPlayer.isHandEmpty()) {
            console.log(currentPlayer.getName() + " ran out of cards and there are not cards left in the deck. Skipping turn.");
            this.turnCounter++;
            return;
        }
        console.log("It's " + currentPlayer.getName() + "'s turn.");

        let opponents: GoFishPlayer[] = [this.players];
        
        let currentPlayerIndex: number = opponents.indexOf(currentPlayer);
        opponents.splice()
        GoFishPlayer opponentToAsk = currentPlayer.pickOpponentToAsk(opponents);

        let cardPicked: Card = currentPlayer.pickCard();
        System.out.println("\n" + currentPlayer.getName() + " asked " + opponentToAsk.getName() + " for a " + cardPicked + ".\n");

    }

    public fillPlayerHands(): void {
        for(var i = 0; i < this.players.length; i++) {
            if(this.players[i].isHandEmpty() && this.deck.deck.length > 0) {
                let topCard: Card = this.deck.getTopCard();
                //this.deck.deck.splice(0, 1);
                this.deck.deck.remove(0);
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