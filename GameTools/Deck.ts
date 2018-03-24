import { Card } from "./Card";
import { Rank } from "./Rank";
import { Suit } from "./Suit";

export class Deck {
    
    public deck: Card[] = new Array<Card>();

    constructor() {
        for(var currentRank = 0; currentRank < Rank.values.length; currentRank++) {
            for(var currentSuit = 0; currentSuit < Suit.values.length; currentSuit++ ) {
                var temp: Card = this.createCard(currentRank, currentSuit);
                this.deck.push(temp);
            }
        }
    }

    public createCard(rank, suit): Card {
        return new Card(rank, suit);
    }

    public getTopCard(): Card {
        return this.deck.pop();
    }

    public shuffle(): void {
        for (let i =this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        } 
    }


        
}

