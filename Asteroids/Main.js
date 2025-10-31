"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", handleload);
    Asteroids.lineWidth = 2;
    //const m: Moveable = new Moveable();
    //const a: Moveable = new Asteroid(1);
    //const p: Moveable = new Projectile(new Vector(0, 0), new Vector(0, 0));
    //const moveables: Moveable[] = [];
    //moveables.push(new Asteroid(1));
    //moveables.push(new Projectile(new Vector(0, 0), new Vector(0, 0)));
    const moveables = [];
    function handleload() {
        console.log("Starting Asteroids!");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas?.getContext("2d");
        Asteroids.crc2.fillStyle = "#000000ff";
        Asteroids.crc2.strokeStyle = "#ff3232ff";
        Asteroids.crc2.lineWidth = Asteroids.lineWidth;
        Asteroids.createPaths();
        createAsteroids(5);
        //createShip();
        canvas.addEventListener("mouseup", shootProjectile);
        canvas.addEventListener("mousedown", shootLaser);
        //canvas.addEventListener("keypress", handleKeypress); 
        //canvas.addEventListener("mousemove", setHeading);
        window.setInterval(update, 20);
    }
    function shootProjectile(_event) {
        const origin = new Asteroids.Vector(_event.clientX - Asteroids.crc2.canvas.offsetLeft, _event.clientY - Asteroids.crc2.canvas.offsetTop);
        const velocity = new Asteroids.Vector(0, 0);
        velocity.random(100, 100);
        const projectile = new Asteroids.Projectile(origin, velocity);
        moveables.push(projectile);
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
        for (const moveable of moveables) {
            if (moveable instanceof Asteroids.Asteroid && moveable.isHit(_hotspot)) {
                return moveable;
            }
        }
        return null;
    }
    function breakAsteroid(_asteroid) {
        if (_asteroid.size > 0.3) {
            for (let i = 0; i < 2; i++) {
                const fragment = new Asteroids.Asteroid(_asteroid.size / 2, _asteroid.position);
                fragment.velocity.add(_asteroid.velocity);
                moveables.push(fragment);
            }
        }
        _asteroid.expandable = true;
    }
    function createAsteroids(_nAsteroids) {
        for (let i = 0; i < _nAsteroids; i++) {
            const asteroid = new Asteroids.Asteroid(1.0);
            moveables.push(asteroid);
        }
    }
    function update() {
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        for (const moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        deleteExpandables();
        //ship.draw();
        //handleCollisions();
    }
    function deleteExpandables() {
        for (let i = moveables.length - 1; i >= 0; i--) {
            if (moveables[i].expandable)
                moveables.splice(i, 1);
        }
    }
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Main.js.map