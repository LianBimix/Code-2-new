"use strict";
var SolarSystem;
(function (SolarSystem) {
    function getRandomNumber(_max, _min) {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
    SolarSystem.getRandomNumber = getRandomNumber;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=functions.js.map