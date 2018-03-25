"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.card = "";
        this.setSuit(suit);
        this.setRank(rank);
    }
    Card.prototype.getSuit = function () {
        return this.suit.getSuitValue();
    };
    Card.prototype.setSuit = function (suit) {
        this.suit = suit;
    };
    Card.prototype.getRank = function () {
        return this.rank.getRankValue();
    };
    Card.prototype.setRank = function (rank) {
        this.rank = rank;
    };
    Card.prototype.toString = function () {
        return this.card + "" + this.getRank() + " of " + this.getSuit();
    };
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=Card.js.map