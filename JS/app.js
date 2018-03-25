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
define("Players/Player", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = /** @class */ (function () {
        function Player(name, balance, id) {
            this.setId(id);
            this.setName(name);
            this.balance = balance;
        }
        Player.prototype.getId = function () {
            return this.id;
        };
        Player.prototype.setId = function (id) {
            this.id = id;
        };
        Player.prototype.getName = function () {
            return this.name;
        };
        Player.prototype.setName = function (name) {
            this.name = name;
        };
        Player.prototype.getBalance = function () {
            return this.balance;
        };
        Player.prototype.toString = function () {
            return "Name: ".concat(this.getName(), " | ", "Balance: ", "+this.balance+");
        };
        return Player;
    }());
    exports.Player = Player;
});
define("GameTools/Suit", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("GameTools/Rank", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("GameTools/Card", ["require", "exports"], function (require, exports) {
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
});
define("Players/GoFishPlayer", ["require", "exports", "Players/Player"], function (require, exports, Player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
define("Players/GoFishComputerPlayer", ["require", "exports", "Players/GoFishPlayer"], function (require, exports, GoFishPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFishComputerPlayer = /** @class */ (function (_super) {
        __extends(GoFishComputerPlayer, _super);
        function GoFishComputerPlayer(name) {
            return _super.call(this, name) || this;
        }
        GoFishComputerPlayer.prototype.getNumPairs = function () {
            return this.numPairs;
        };
        GoFishComputerPlayer.prototype.pickOpponentToAsk = function (opponents) {
            var opponentIndex = Math.floor(Math.random() * (opponents.length));
            return opponents[opponentIndex];
        };
        GoFishComputerPlayer.prototype.pickCard = function () {
            var cardIndex = Math.floor(Math.random() * (this.cardHand.length));
            return this.cardHand[cardIndex];
        };
        return GoFishComputerPlayer;
    }(GoFishPlayer_1.GoFishPlayer));
    exports.GoFishComputerPlayer = GoFishComputerPlayer;
});
define("Players/GoFishHumanPlayer", ["require", "exports", "Players/GoFishPlayer"], function (require, exports, GoFishPlayer_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            this.displayEle.innerHTML += "<br/>" + showCardHand;
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
                }
            }
            return this.pickCard();
        };
        return GoFishHumanPlayer;
    }(GoFishPlayer_2.GoFishPlayer));
    exports.GoFishHumanPlayer = GoFishHumanPlayer;
});
define("Interfaces/Game", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("GameTools/Deck", ["require", "exports", "GameTools/Card", "GameTools/Rank", "GameTools/Suit"], function (require, exports, Card_1, Rank_1, Suit_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
/// <reference path="../Interfaces/Game.ts" />
define("Games/GoFishGame", ["require", "exports", "GameTools/Deck", "Players/GoFishComputerPlayer"], function (require, exports, Deck_1, GoFishComputerPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFishGame = /** @class */ (function () {
        function GoFishGame(player1) {
            this.players = [player1, new GoFishComputerPlayer_1.GoFishComputerPlayer("Bob"), new GoFishComputerPlayer_1.GoFishComputerPlayer("Sue")];
            this.turnCounter = 0;
            this.deck = new Deck_1.Deck();
            this.deck.shuffle();
            this.displayEle = document.getElementById("display");
            this.userInputEle = document.getElementById("user_input");
            this.submitButton = document.getElementById("submit");
        }
        GoFishGame.prototype.welcomeMessage = function () {
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innerHTML += "Welcome to Go Fish!";
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innerHTML += "You are playing with Bob and Sue today.";
        };
        GoFishGame.prototype.startGame = function () {
            this.displayEle.innerHTML = "";
            document.getElementById("header").innerHTML = "Welcome to Go Fish!";
            document.getElementById("cardGame").hidden = false;
            this.userInputEle.setAttribute("placeholder", "ASK CARD");
            this.userInputEle.value = "";
            this.submitButton.setAttribute("onclick", "casino.goFishGame.");
            //this.welcomeMessage();
            this.deal();
            while (this.gameIsNotOver()) {
                this.takeTurn();
            }
            var winners = this.determineWinner();
            this.gameOverMessage(winners);
            this.endGame();
        };
        GoFishGame.prototype.deal = function () {
            this.displayEle.innterHTML += "<br/>";
            this.displayEle.innerHTML += "Dealing out player hands.";
            for (var i = 0; i < this.players.length; i++) {
                for (var j = 0; j < 5; j++) {
                    this.players[i].addCardToHand(this.deck.getTopCard());
                    this.deck.deck.pop();
                }
            }
        };
        GoFishGame.prototype.gameIsNotOver = function () {
            var numPairsMatched = 0;
            for (var i = 0; i < this.players.length; i++) {
                numPairsMatched += this.players[i].getNumPairs();
            }
            return numPairsMatched < 26;
        };
        GoFishGame.prototype.getCurrentPlayer = function () {
            return this.players[this.turnCounter % this.players.length];
        };
        GoFishGame.prototype.takeTurn = function () {
            var currentPlayer = this.getCurrentPlayer();
            if (currentPlayer.isHandEmpty()) {
                this.displayEle.innerHTML += "<br/>";
                this.displayEle.innerHTML += currentPlayer.getName() + " ran out of cards and there are not cards left in the deck. Skipping turn.";
                this.turnCounter++;
                return;
            }
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innerHTML += "It's " + currentPlayer.getName() + "'s turn.";
            var opponents = (this.players);
            var currentPlayerIndex = opponents.indexOf(currentPlayer);
            opponents.splice(currentPlayerIndex, 1);
            var opponentToAsk = currentPlayer.pickOpponentToAsk(opponents);
            var cardPicked = currentPlayer.pickCard();
            this.displayEle.innerHTML += "<br/>";
            this.displayEle.innerHTML += currentPlayer.getName().concat(" asked ", opponentToAsk.getName(), " for a ", cardPicked.toString(), ".");
            if (opponentToAsk.hasCard(cardPicked)) {
                opponentToAsk.removeCard(cardPicked);
                currentPlayer.addCardToHand(cardPicked);
                this.displayEle.innerHTML += "<br/>".concat(opponentToAsk.getName(), " had that card. ", currentPlayer.getName(), " goes again.");
                this.fillPlayerHands();
                this.takeTurn();
            }
            else {
                this.displayEle.innerHTML += "<br/>".concat(opponentToAsk.getName(), " did not have that card ", "Go fish.");
                if (this.deck.deck.length == 0) {
                    this.displayEle.innerHTML += "<br/>" + "The deck is empty. No cards to draw.";
                    this.turnCounter++;
                    return;
                }
                var topCard = this.deck.getTopCard();
                this.deck.deck.pop();
                currentPlayer.addCardToHand(topCard);
                if (topCard.getRank() == cardPicked.getRank()) {
                    this.displayEle.innerHTML += "<br/>".concat(currentPlayer.getName() + " picked their wish!" + currentPlayer.getName() + " gets a point. Go again.");
                    this.fillPlayerHands();
                    this.takeTurn();
                }
                else {
                    this.fillPlayerHands();
                    this.turnCounter++;
                }
            }
        };
        GoFishGame.prototype.fillPlayerHands = function () {
            for (var i = 0; i < this.players.length; i++) {
                if (this.players[i].isHandEmpty() && this.deck.deck.length > 0) {
                    var topCard = this.deck.getTopCard();
                    //this.deck.deck.splice(0, 1);
                    this.deck.deck.pop();
                    this.players[i].addCardToHand(topCard);
                }
            }
        };
        GoFishGame.prototype.displayScores = function (players) {
            var displayScores = "";
            for (var i = 0; i < players.length; i++) {
                displayScores += "> " + players[i].getName() + ": " + players[i].getNumPairs();
            }
            return displayScores;
        };
        GoFishGame.prototype.determineWinner = function () {
            var winners = new Array();
            var highestScore = 0;
            for (var i = 0; i < this.players.length; i++) {
                var currentScore = this.players[i].getNumPairs();
                if (currentScore > highestScore) {
                    highestScore = currentScore;
                    winners = [];
                    winners.push(this.players[i]);
                }
                else if (currentScore == highestScore) {
                    winners.push(this.players[i]);
                }
            }
            return winners;
        };
        GoFishGame.prototype.gameOverMessage = function (winners) {
            if (winners.length > 1) {
                this.displayEle.innerHTML = "There was a tie! <br/>";
                for (var i = 0; i < winners.length; i++) {
                    this.displayEle.innerHTML += "Congratulations, " + winners[i].getName + " you tied!";
                }
            }
            else {
                this.displayEle.innerHTML = "Congratulations, " + winners[0].getName + " you win!";
            }
            this.displayEle.innertHTML = this.displayScores(this.players);
            this.displayEle.innerHTML += "That was fun! Game over.";
        };
        GoFishGame.prototype.endGame = function () {
        };
        return GoFishGame;
    }());
    exports.GoFishGame = GoFishGame;
});
/// <reference path="./Players/GoFishComputerPlayer.ts" />
/// <reference path="./Players/GoFishHumanPlayer.ts" />
/// <reference path="./Players/Player.ts" />
/// <reference path="./Interfaces/Game.ts" />
/// <reference path="./Games/GoFishGame.ts" />
define("Casino", ["require", "exports", "Players/Player", "Games/GoFishGame", "Players/GoFishHumanPlayer"], function (require, exports, Player_2, GoFishGame_1, GoFishHumanPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Casino = /** @class */ (function () {
        function Casino() {
            this.displayEle = document.getElementById("display");
            this.userInput = document.getElementById("user_input");
            this.submit = document.getElementById("submit");
            this.player = new Player_2.Player;
            this.isPlaying = true;
        }
        Casino.prototype.init = function () {
            this.loginOptions();
        };
        Casino.prototype.loginOptions = function () {
            this.displayEle.innerHTML = "Please enter your name";
        };
        Casino.prototype.getName = function () {
            this.name = this.userInput.value;
            this.userInput.value = "";
            this.userInput.setAttribute("placeholder", "AGE");
            this.userInput.setAttribute("type", "number");
            this.userInput.setAttribute("onclick", "casino.getBalance()");
            this.displayEle.innerHTML = "Please enter your balance";
        };
        Casino.prototype.getBalance = function () {
            this.balance = this.userInput.value;
            this.userInput.value = "";
            this.userInput.setAttribute("type", "text");
            this.player = new Player_2.Player(this.name, this.balance);
            document.getElementById("userInfo").innerHTML = this.player.toString();
            document.getElementById("userInfo").hidden = false;
            this.gameOptions();
        };
        Casino.prototype.gameOptions = function () {
            document.getElementById("cardGame").hidden = true;
            this.displayEle.innerHTML = "Please enter the name of the game you would like to play";
            this.submit.setAttribute("onclick", "casino.takeOptions()");
            this.userInput.setAttribute("placeholder", "GAME");
            this.submit.hidden = false;
            this.userInput.hidden = false;
        };
        Casino.prototype.takeOptions = function () {
            var input = this.userInput.value;
            switch (input.toLowerCase()) {
                case "go fish": {
                    this.goFish = new GoFishGame_1.GoFishGame(new GoFishHumanPlayer_1.GoFishHumanPlayer(this.player));
                    this.goFish.startGame();
                    break;
                }
            }
        };
        // protected askUserName(): string {
        //     this.displayEle.innerHTML += "<br/>".concat("Please enter your name");
        //     var name: string = this.userInput.value;
        //     return name;
        // }
        // protected askUserBalance(): number {
        //     this.displayEle.innerHTML += "<br/>".concat("Please enter your balance");
        //     var balance: number = this.userInput.value;
        //     return balance;
        // }
        // protected setUpUserProfile(): void {
        //     var name: string = this.askUserName();
        //     var balance: number = this.askUserBalance();
        //     this.player = new Player(name, balance);
        // }
        // protected initiateGame(): void {
        //     do {
        //         var selectedGame: string = this.availableGames();
        //         if(selectedGame == "Exit") {
        //             this.exitCasino();
        //             break;
        //         } else {
        //             this.selectGame(selectedGame).startGame();
        //         }
        //     }
        //     while(this.isPlaying);
        // }
        // public availableGames():string {
        //     this.displayEle.innerHTML += "<br/>".concat("Please select a game", "<br/>", "1. Go Fish", "<br/>", "2. War");
        //     return this.userInput.value;
        // }
        // public selectGame(selectedGame): Game {
        //     let game: Game;
        //     switch (selectedGame) {
        //         case "War":
        //         this.displayEle.innerHTML += "<br/>";  
        //         this.displayEle.innerHTML += "You picked War";
        //             //game = new War(this.player);
        //             break;
        //         case "Go Fish":
        //         this.displayEle.innerHTML += "<br/>";  
        //         this.displayEle.innerHTML += "You picked Go Fish";
        //             game = new GoFishGame(new GoFishHumanPlayer(this.player));
        //             break;
        //         default: 
        //             alert("Please pick a valid choice.");
        //     }
        //     return game;
        // }
        // public start(): void {
        //     this.setUpUserProfile();
        //     this.initiateGame();
        // }
        Casino.prototype.exitCasino = function () {
            this.displayEle.innerHTML += "Thank you for visiting.";
        };
        return Casino;
    }());
    exports.Casino = Casino;
});
define("App", ["require", "exports", "Casino"], function (require, exports, Casino_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function startGame() {
        var messagesElement = document.getElementById("display");
        messagesElement.innerText = "Welcome to the Typescript Casino";
        var casino = new Casino_1.Casino;
        casino.init();
    }
    document.getElementById('submit').addEventListener('click', startGame);
});
/// <reference path="./Casino.ts" />
/// <reference path="./Games/GoFishGame.ts" />
/// <reference path="./GameTools/Card.ts" />
/// <reference path="./GameTools/Deck.ts" />
/// <reference path="./GameTools/Rank.ts" />
/// <reference path="./GameTools/Suit.ts" />
/// <reference path="./Interfaces/Game.ts" />
/// <reference path="./Players/GoFishComputerPlayer.ts" />
/// <reference path="./Players/GoFishHumanPlayer.ts" />
/// <reference path="./Players/Player.ts" />
/// <reference path="./Players/GoFishComputerPlayer.ts" />
define("Bootstrapper", ["require", "exports", "Casino"], function (require, exports, Casino_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var casino = new Casino_2.Casino();
    casino.init();
});
// abstract class GameEngine<GameType, GameTypePlayer> implements Game<GameType, GameTypePlayer> {
//     getGame(): GameTypePlayer {
//         throw new Error("Method not implemented.");
//     }
//     evaluateTurn(player: GameType): void {
//         throw new Error("Method not implemented.");
//     }
//     run(): void {
//         throw new Error("Method not implemented.");
//     }
// }
//# sourceMappingURL=app.js.map