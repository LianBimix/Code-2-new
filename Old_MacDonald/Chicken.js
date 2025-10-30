"use strict";
var Farm;
(function (Farm) {
    class Chicken extends Farm.Mammels {
        doSpecialAction() {
            console.log("Chickens lay eggs.");
            console.log("CHicken also have feathers and can fly using their wings!");
        }
    }
    Farm.Chicken = Chicken;
})(Farm || (Farm = {}));
//# sourceMappingURL=Chicken.js.map