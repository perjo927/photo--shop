"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Money = /** @class */ (function () {
    function Money(limit) {
        this.credits = limit;
    }
    Object.defineProperty(Money.prototype, "amount", {
        get: function () {
            return this.credits;
        },
        enumerable: true,
        configurable: true
    });
    Money.prototype.add = function (amount) {
        this.credits += amount;
    };
    Money.prototype.subtract = function (amount) {
        if (this.credits - amount >= 0) {
            this.credits -= amount;
            return true;
        }
        return false;
    };
    return Money;
}());
exports.default = Money;
