// import { Player } from "./Player";
// import { Profile } from "./Profile";
// import { GoFishPlayer } from "./GoFishPlayer";
// import { Card } from "../GameTools/Card";
namespace Casino {
    export class GoFishComputerPlayer extends GoFishPlayer{

        constructor(name: any) {
            super(name);
        }

        public getNumPairs(): number {
            return this.numPairs;
        }
        
        public pickOpponentToAsk(opponents: GoFishPlayer[]): GoFishPlayer {
            var opponentIndex:number = Math.floor(Math.random() * (opponents.length));
            return opponents[opponentIndex];
        }
        public pickCard(): Card {
            var cardIndex:number = Math.floor(Math.random() * (this.cardHand.length));
            return this.cardHand[cardIndex];
        }  
    }
}