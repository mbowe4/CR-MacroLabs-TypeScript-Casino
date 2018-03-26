namespace Casino {
    export class Rank {
        private static ACE:number = 1;
        private static TWO:number = 2;
        private static THREE:number = 3; 
        private static FOUR:number = 4; 
        private static FIVE:number = 5; 
        private static SIX:number = 6; 
        private static SEVEN:number = 7; 
        private static EIGHT:number = 8; 
        private static NINE:number = 9; 
        private static TEN:number = 10; 
        private static JACK:number = 11; 
        private static QUEEN:number = 12; 
        private static KING: number = 13;

        private rankValue:number;
        
        constructor(rankValue:number) {
            this.rankValue = rankValue;
        }

        public getRankValue():number {
            return this.rankValue;
        }

        public static values(): Array<number> {
            let ranks: number[] = new Array<number>(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING );
            return ranks;
        }

    }
}