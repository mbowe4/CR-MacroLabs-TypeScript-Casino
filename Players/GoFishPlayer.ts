import player = require("./Player");
import { Player } from "./Player";
import { Profile } from "./Profile";
import { Card } from "../GameTools/Card";
import { Rank } from "../GameTools/Rank";

export abstract class GoFishPlayer extends Player {
    protected cardHand: Card[];
    protected numPairs: number;

    constructor(rootPlayer?: Player, name?: string) {
        super(rootPlayer.getId(), rootPlayer.getName(), rootPlayer.getBalance());
        this.cardHand = new Array<Card>();
        this.numPairs = 0;
    }

    

    public addPair(): void {
        this.numPairs++;
    }

    public getNumPairs(): number {
        return this.numPairs;
    }

    public addCardToHand(cardToAdd:Card): void {
        if(this.hasCard(cardToAdd)) {
            console.log(this.getName() + " made a match. One point.");
            this.addPair();
            this.removeMatches(cardToAdd.getRank());
        }
        else {
            this.cardHand.push(cardToAdd);
        }
    }

    public removeMatches(rankToCompare: number): void {
        for(var i = 0; i < this.cardHand.length; i++) {
            if(this.cardHand[i].getRank() === rankToCompare) {

            }
        }
    }

    public getCardHandSize(): number {
        return this.cardHand.length;
    }

    public isHandEmpty(): boolean {
        return this.cardHand.length > 0;
    }

    public hasCard(cardAskedFor: Card): boolean {
        for(var i = 0; i < this.cardHand.length; i++) {
            if(this.cardHand[i].getRank() == cardAskedFor.getRank()) {
                return true;
            }
        }
        return false;
    }

    public removeCard(cardToRemove: Card): void {
        // find out how to iterate and remove
    }

    public abstract pickOpponentToAsk(opponents: GoFishPlayer[]): GoFishPlayer;
    
    public abstract pickCard(): Card;
    
}