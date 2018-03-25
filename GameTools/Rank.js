"use strict";
exports.__esModule = true;
var Rank = /** @class */ (function () {
    function Rank(rankValue) {
        this.rankValue = rankValue;
    }
    Rank.prototype.getRankValue = function () {
        return this.rankValue;
    };
    Rank.values = function () {
        var ranks = new Array(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING);
        return ranks;
    };
    Rank.ACE = 1;
    Rank.TWO = 2;
    Rank.THREE = 3;
    Rank.FOUR = 4;
    Rank.FIVE = 5;
    Rank.SIX = 6;
    Rank.SEVEN = 7;
    Rank.EIGHT = 8;
    Rank.NINE = 9;
    Rank.TEN = 10;
    Rank.JACK = 11;
    Rank.QUEEN = 12;
    Rank.KING = 13;
    return Rank;
}());
exports.Rank = Rank;
