"use strict";
var Farm;
(function (Farm) {
    class Sheep extends Farm.PlantEater {
        doSpecialAction() {
            console.log("Sheep have whool that can be used to make warm blankets!");
        }
    }
    Farm.Sheep = Sheep;
})(Farm || (Farm = {}));
//# sourceMappingURL=Sheep.js.map