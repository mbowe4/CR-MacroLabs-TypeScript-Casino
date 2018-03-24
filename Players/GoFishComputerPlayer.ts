import { Player } from "./Player";
import { Profile } from "./Profile";
import { GoFishPlayer } from "./GoFishPlayer";
import { Card } from "../GameTools/Card";

export class GoFishComputerPlayer extends GoFishPlayer{
    private randomNumber: number;

    
    public pickOpponentToAsk(opponents: GoFishPlayer[]): GoFishPlayer {
        throw new Error("Method not implemented.");
    }
    public pickCard(): Card {
        throw new Error("Method not implemented.");
    }
    private rand: number;

    
}