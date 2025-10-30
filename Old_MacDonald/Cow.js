"use strict";
var Farm;
(function (Farm) {
    class Cow extends Farm.PlantEater {
        doSpecialAction() {
            console.log("Cows can give milk!");
        }
    }
    Farm.Cow = Cow;
})(Farm || (Farm = {}));
//# sourceMappingURL=Cow.js.map