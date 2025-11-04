"use strict";
var SolarSystem;
(function (SolarSystem) {
    window.addEventListener("load", handleLoad);
    SolarSystem.linewidth = 5;
    function handleLoad(_event) {
        console.log("Simulation start");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        SolarSystem.crc2.lineWidth = SolarSystem.linewidth;
        createPlanet;
    }
    function createPlanet() {
        const planet = new SolarSystem.Planet(1, 1, Sun, SolarSystem.CELEST, 5, Hallo, Earth, 10);
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=SolarSystem.js.map