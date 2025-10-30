"use strict";
var Farm;
(function (Farm) {
    class PlantEater extends Farm.Mammels {
        doGreen() {
            console.log("Plant Eaters have a mostly green diet!");
        }
    }
    Farm.PlantEater = PlantEater;
})(Farm || (Farm = {}));
//# sourceMappingURL=PlantEaters.js.map