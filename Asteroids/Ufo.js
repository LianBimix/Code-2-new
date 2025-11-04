"use strict";
var Asteroids;
(function (Asteroids) {
    class Ufo extends Asteroids.Moveable {
        static speed = 50;
        constructor() {
            super();
            this.position = new Asteroids.Vector(0, Math.random() * Asteroids.crc2.canvas.height);
            this.velocity = new Asteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
        }
        draw() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.translate(-30, -17);
            Asteroids.crc2.stroke(Asteroids.ufoPath);
            Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.01) {
                this.shoot();
            }
            if (Math.random() < 0.02) {
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
            }
        }
        shoot() {
            const event = new CustomEvent("ufoShoots", { detail: { ufo: this } });
            Asteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    Asteroids.Ufo = Ufo;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Ufo.js.map