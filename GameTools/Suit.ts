namespace Casino {
    export class Suit {
        private static HEARTS: string = "Hearts";
        private static CLUBS: string = "Clubs";
        private static DIAMOND: string = "Diamonds";
        private static SPADE: string = "Spades";

        private suitValue: string;

        constructor(suitValue: string) {
            this.suitValue = suitValue;
        }

        public getSuitValue(): string {
            return this.suitValue;
        } 

        public static values(): Array<string> {
            let suits: string[] = new Array<string>(Suit.HEARTS, Suit.CLUBS, Suit.DIAMOND, Suit.SPADE);
            return suits;
        }
    }
}

