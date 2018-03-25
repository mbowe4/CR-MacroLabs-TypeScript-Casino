"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GoFishPlayer_1 = require("./GoFishPlayer");
var GoFishHumanPlayer = /** @class */ (function (_super) {
    __extends(GoFishHumanPlayer, _super);
    function GoFishHumanPlayer(rootPlayer) {
        var _this = _super.call(this, rootPlayer) || this;
        _this.displayEle = document.getElementById("disply");
        _this.userInput = document.getElementById("user_input");
        _this.submit = document.getElementById("submit");
        return _this;
    }
    GoFishHumanPlayer.prototype.showCards = function () {
        var showCardHand = "";
        for (var i = 0; i < this.cardHand.length; i++) {
            showCardHand.concat((i + 1).toString(), ": ", this.cardHand[i].toString());
        }
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innterHTML += showCardHand;
        return showCardHand;
    };
    GoFishHumanPlayer.prototype.showOpponents = function (opponents) {
        var showOpponents = "";
        for (var i = 0; i < opponents.length; i++) {
            showOpponents.concat((i + 1).toString(), ": ", opponents[i].getName(), "<br/>");
        }
        this.displayEle.innerHTML += showOpponents;
        return showOpponents;
    };
    GoFishHumanPlayer.prototype.pickOpponentToAsk = function (opponents) {
        this.showOpponents(opponents);
        this.displayEle.innterHTML += "Enter the number for the play you want to ask: ";
        var opponentIndex = this.userInputEle.value;
        try {
            return opponents[opponentIndex - 1];
        }
        catch (e) {
            if (e instanceof RangeError) {
                this.displayEle.innerHTML += "Try again. Please enter one of the numbers shown.";
                return this.pickOpponentToAsk(opponents);
            }
        }
    };
    GoFishHumanPlayer.prototype.pickCard = function () {
        this.showCards();
        this.displayEle.innerHTML += "<br/>";
        this.displayEle.innerHTML += "Enter the number of your card choice: ";
        var cardIndex = this.userInputEle.value;
        try {
            return this.cardHand[cardIndex - 1];
        }
        catch (e) {
            if (e instanceof RangeError) {
                this.displayEle.innerHTML += "<br/>";
                this.displayEle.innerHTML += "Try again. Please enter one of the numbers show.";
                return this.pickCard();
            }
        }
    };
    return GoFishHumanPlayer;
}(GoFishPlayer_1.GoFishPlayer));
exports.GoFishHumanPlayer = GoFishHumanPlayer;
//# sourceMappingURL=GoFishHumanPlayer.js.map