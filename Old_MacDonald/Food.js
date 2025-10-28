"use strict";
var Farm;
(function (Farm) {
    class Food {
        type;
        amount;
        constructor(_type, _amount) {
            this.type = _type;
            this.amount = _amount;
        }
        subtract(_subtracted) {
            this.amount -= _subtracted;
        }
    }
    Farm.Food = Food;
})(Farm || (Farm = {}));
//# sourceMappingURL=Food.js.map