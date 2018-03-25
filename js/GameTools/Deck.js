"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var Rank_1 = require("./Rank");
var Suit_1 = require("./Suit");
var Deck = /** @class */ (function () {
    function Deck() {
        this.deck = new Array();
        for (var currentRank = 0; currentRank < Rank_1.Rank.values.length; currentRank++) {
            for (var currentSuit = 0; currentSuit < Suit_1.Suit.values.length; currentSuit++) {
                var temp = this.createCard(currentRank, currentSuit);
                this.deck.push(temp);
            }
        }
    }
    Deck.prototype.createCard = function (rank, suit) {
        return new Card_1.Card(rank, suit);
    };
    Deck.prototype.getTopCard = function () {
        return this.deck.pop();
    };
    Deck.prototype.shuffle = function () {
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.deck[j], this.deck[i]], this.deck[i] = _a[0], this.deck[j] = _a[1];
        }
        var _a;
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map