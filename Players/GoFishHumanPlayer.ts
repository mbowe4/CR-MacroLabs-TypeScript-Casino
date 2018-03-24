import { Player } from "./Player";
import { Profile } from "./Profile";
import { GoFishPlayer } from "./GoFishPlayer";
import { Card } from "../GameTools/Card";

export class GoFishHumanPlayer extends GoFishPlayer {
    
    public pickOpponentToAsk(opponents: GoFishPlayer[]): GoFishPlayer {
        throw new Error("Method not implemented.");
    }
    public pickCard(): Card {
        throw new Error("Method not implemented.");
    }
    constructor(rootPlayer:Player) {
        super(rootPlayer);
    }

    public showCards():String {
        let showCardHand: String = "";
        return null;
    }


}
