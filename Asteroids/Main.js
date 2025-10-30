"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleload);
    const m = new Moveable();
    const a = new Asteroids.Asteroid(1);
    const p = new Projectile(new Asteroids.Vector(0, 0), new Asteroids.Vector(0, 0));
    const moveables = [];
    moveables.push(new Asteroids.Asteroid(1));
    moveables.push(new Projectile(new Asteroids.Vector(0, 0), new Asteroids.Vector(0, 0)));
    const asteroids = [];
    function handleload() {
        console.log("Starting Asteroids!");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas?.getContext("2d");
        Asteroids.crc2.fillStyle = "#000000ff";
        Asteroids.crc2.strokeStyle = "#ff3232ff";
        Asteroids.createPaths();
        createAsteroids(5);
        //createShip();
        //canvas.addEventListener("mousedown", loadLaser); 
        canvas.addEventListener("mousedown", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress); 
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootLaser(_event) {
        console.log("Laser is shooting");
        const hotspot = new Asteroids.Vector(_event.clientX - Asteroids.crc2.canvas.offsetLeft, _event.clientY - Asteroids.crc2.canvas.offsetTop);
        const asteroidHit = getAsteroidHit(hotspot);
        if (asteroidHit) {
            breakAsteroid(asteroidHit);
        }
    }
    function getAsteroidHit(_hotspot) {
        for (const asteroid of asteroids) {
            if (asteroid.isHit(_hotspot)) {
                return asteroid;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                asteroids.push(fragment);
                console.log(fragment.position);
            }
        }
        const index = asteroids.indexOf(_asteroid);
        asteroids.splice(index, 1);
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroids.Asteroid(1.0);
            asteroids.push(asteroid);
        }
    }
    function update() {
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        for (const asteroid of asteroids) {
            asteroid.move(1 / 50);
            asteroid.draw();
        }
        //ship.draw();
        //handleCollisions();
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map