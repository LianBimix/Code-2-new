"use strict";
var Farm;
(function (Farm) {
    class Mammels extends Farm.Animal {
        doStuff() {
            console.log("These mammels walk on four legs and have some type of fur!");
        }
    }
    Farm.Mammels = Mammels;
})(Farm || (Farm = {}));
//# sourceMappingURL=mammel.js.map