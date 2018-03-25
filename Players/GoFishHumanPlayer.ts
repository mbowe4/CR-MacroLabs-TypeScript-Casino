import { Player } from "./Player";
import { Profile } from "./Profile";
import { GoFishPlayer } from "./GoFishPlayer";
import { Card } from "../GameTools/Card";

export class GoFishHumanPlayer extends GoFishPlayer {
    displayEle:any;
    userInputEle:any;
    
    constructor(rootPlayer) {
        super(rootPlayer);
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }

    public showCards(): string {
        var showCardHand: string = "";
        for(var i = 0; i < this.cardHand.length; i++) {
            showCardHand.concat((i + 1).toString(), ": ", this.cardHand[i].toString());
            
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innterHTML += showCardHand;
            return showCardHand;
        }
    }

    public showOpponents(opponents: GoFishPlayer[]): string {
        var showOpponents: string = "";
        for (var i = 0; i < opponents.length; i++) {
            showOpponents.concat((i + 1).toString(), ": ", opponents[i].getName(), "<br/>");
        }
        this.displayEle.innerHTML += showOpponents;
        return showOpponents;
    }
    
    public pickOpponentToAsk(opponents: GoFishPlayer[]): GoFishPlayer {
        this.showOpponents(opponents);
        
        this.displayEle.innterHTML += "Enter the number for the play you want to ask: ";
        var opponentIndex:number = this.userInputEle.value;

        try {
            return opponents[opponentIndex -1];
        } catch (e) {
            if(e instanceof RangeError) {
                this.displayEle.innerHTML += "Try again. Please enter one of the numbers shown.";
                return this.pickOpponentToAsk(opponents);
            }     
        }
    }
    
    public pickCard(): Card {
        this.showCards();
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "Enter the number of your card choice: ";
        var cardIndex: number = this.userInputEle.value;
        try {
            return this.cardHand[cardIndex -1];
        } catch (e) {
            if(e instanceof RangeError) {
                this.displayEle.innerHTML += "<br/>";
                this.displayEle.innerHTML+= "Try again. Please enter one of the numbers show.";
                return this.pickCard();
            }
        }
        
    }




}
