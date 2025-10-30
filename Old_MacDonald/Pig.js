"use strict";
var Farm;
(function (Farm) {
    class Pig extends Farm.Mammels {
        doSpecialAction() {
            console.log("Pigs eat almost everything!");
            console.log("They also like to roll in mud to protect their skin from bugs and keep it moist in the summer!");
        }
    }
    Farm.Pig = Pig;
})(Farm || (Farm = {}));
//# sourceMappingURL=Pig.js.map