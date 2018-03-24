export class Suit {

    private static HEARTS: String = "Hearts";
    private static CLUBS: String = "Clubs";
    private static DIAMOND: String = "Diamonds";
    private static SPADE: String = "Spades";

    private suitValue: String;

    constructor(suitValue: String) {
        this.suitValue = suitValue;
    }

    public getSuitValue(): String {
        return this.suitValue;
    } 

    public static values(): Array<String> {
        let suits: String[] = new Array<String>(Suit.HEARTS, Suit.CLUBS, Suit.DIAMOND, Suit.SPADE);
        return suits;
    }
}

