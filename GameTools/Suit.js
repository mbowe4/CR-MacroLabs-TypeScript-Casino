"use strict";
exports.__esModule = true;
var Suit = /** @class */ (function () {
    function Suit(suitValue) {
        this.suitValue = suitValue;
    }
    Suit.prototype.getSuitValue = function () {
        return this.suitValue;
    };
    Suit.values = function () {
        var suits = new Array(Suit.HEARTS, Suit.CLUBS, Suit.DIAMOND, Suit.SPADE);
        return suits;
    };
    Suit.HEARTS = "Hearts";
    Suit.CLUBS = "Clubs";
    Suit.DIAMOND = "Diamonds";
    Suit.SPADE = "Spades";
    return Suit;
}());
exports.Suit = Suit;
