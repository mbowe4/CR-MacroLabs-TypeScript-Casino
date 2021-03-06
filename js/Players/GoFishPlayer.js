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
var Player_1 = require("./Player");
var GoFishPlayer = /** @class */ (function (_super) {
    __extends(GoFishPlayer, _super);
    function GoFishPlayer(rootPlayer, name) {
        var _this = _super.call(this, rootPlayer.getName(), rootPlayer.getBalance()) || this;
        _this.cardHand = new Array();
        _this.numPairs = 0;
        _this.displayEle = document.getElementById("disply");
        _this.userInput = document.getElementById("user_input");
        _this.submit = document.getElementById("submit");
        return _this;
    }
    GoFishPlayer.prototype.addPair = function () {
        this.numPairs++;
    };
    GoFishPlayer.prototype.getNumPairs = function () {
        return this.numPairs;
    };
    GoFishPlayer.prototype.addCardToHand = function (cardToAdd) {
        if (this.hasCard(cardToAdd)) {
            this.displayEle.innerHTML(this.getName() + " made a match. One point.");
            this.addPair();
            this.removeMatches(cardToAdd.getRank());
        }
        else {
            this.cardHand.push(cardToAdd);
        }
    };
    GoFishPlayer.prototype.removeMatches = function (rankToCompare) {
        for (var i = 0; i < this.cardHand.length; i++) {
            if (this.cardHand[i].getRank() === rankToCompare) {
                this.cardHand.splice(i, 1);
            }
        }
    };
    GoFishPlayer.prototype.getCardHandSize = function () {
        return this.cardHand.length;
    };
    GoFishPlayer.prototype.isHandEmpty = function () {
        return this.cardHand.length > 0;
    };
    GoFishPlayer.prototype.hasCard = function (cardAskedFor) {
        for (var i = 0; i < this.cardHand.length; i++) {
            if (this.cardHand[i].getRank() == cardAskedFor.getRank()) {
                return true;
            }
        }
        return false;
    };
    GoFishPlayer.prototype.removeCard = function (cardToRemove) {
        for (var i = 0; i < this.cardHand.length; i++) {
            if (this.cardHand[i].getRank() === cardToRemove.getRank()) {
                this.cardHand.splice(i, 1);
            }
        }
    };
    return GoFishPlayer;
}(Player_1.Player));
exports.GoFishPlayer = GoFishPlayer;
//# sourceMappingURL=GoFishPlayer.js.map