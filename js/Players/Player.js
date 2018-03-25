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
//# sourceMappingURL=Player.js.map