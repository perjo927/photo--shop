"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.shoppingCart = [];
    }
    Object.defineProperty(ShoppingCart.prototype, "cart", {
        get: function () {
            return this.shoppingCart;
        },
        set: function (newCart) {
            this.shoppingCart = newCart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "length", {
        get: function () {
            return this.shoppingCart.length;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCart.prototype.delete = function (id) {
        var index = this.shoppingCart.findIndex(function (e) { return e.id === id; });
        if (index >= 0) {
            this.shoppingCart.splice(index, 1);
            return true;
        }
        return false;
    };
    ShoppingCart.prototype.insert = function (item) {
        this.shoppingCart.push(item);
    };
    return ShoppingCart;
}());
exports.default = ShoppingCart;
