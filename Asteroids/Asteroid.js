"use strict";
var Asteroids;
(function (Asteroids) {
    class Asteroid extends Asteroids.Moveable {
        size;
        type;
        constructor(_size, _position) {
            super(_position);
            this.velocity = Asteroids.Vector.getRandom(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        draw() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.scale(this.size, this.size);
            Asteroids.crc2.translate(-50, -50);
            Asteroids.crc2.lineWidth = 2 / this.size;
            Asteroids.crc2.stroke(Asteroids.asteroidPaths[this.type]);
            Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            const hitsize = 50 * this.size;
            const difference = Asteroids.Vector.getDifference(_hotspot, this.position);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    Asteroids.Asteroid = Asteroid;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map