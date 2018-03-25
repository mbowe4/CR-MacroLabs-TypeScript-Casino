import { Suit } from "./Suit";
import { Rank } from "./Rank";

export class Card {

    private suit: Suit;
    private rank: Rank;
    private card: string = "";

    constructor(rank: Rank, suit: Suit) {
        this.setSuit(suit);
        this.setRank(rank);
    }

    public getSuit(): String {
        return this.suit.getSuitValue();
    }

    public setSuit(suit:Suit): void {
        this.suit = suit;
    }

    public getRank(): number {
        return this.rank.getRankValue();
    }

    public setRank(rank: Rank): void {
        this.rank = rank;
    }

    public toString(): string {
        return this.card + "" + this.getRank() + " of " + this.getSuit();
    }
}