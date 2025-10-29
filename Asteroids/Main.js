"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        console.log("Starting Asteroids!");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
            Asteroids.crc2 = canvas?.getContext("2d");
            Asteroids.crc2.fillStyle = "#000000ff";
            Asteroids.crc2.strokeStyle = "#ff0000ff";
            Asteroids.createPaths();
            console.log("Asteroids paths: ", Asteroids.asteroidPaths);
            const asteroid = new Asteroids.Asteroid(1);
            console.log(asteroid);
            asteroid.draw();
            asteroid.move(0.1);
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map