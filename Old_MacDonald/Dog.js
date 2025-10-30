"use strict";
var Farm;
(function (Farm) {
    class Dog extends Farm.Mammels {
        doSpecialAction() {
            console.log("Dogs are carnivore and eat mostly meat.");
            console.log("Dogs also can be kept in the house!");
        }
    }
    Farm.Dog = Dog;
})(Farm || (Farm = {}));
//# sourceMappingURL=Dog.js.map