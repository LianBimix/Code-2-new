"use strict";
var Asteroids;
(function (Asteroids) {
    class Projectile extends Asteroids.Moveable {
        static maxLivespan = 2;
        remainingLivetime;
        constructor(_position, _velocity) {
            super(_position);
            this.remainingLivetime = Projectile.maxLivespan;
            this.velocity = _velocity.copy();
        }
        draw() {
            Asteroids.crc2.save();
            Asteroids.crc2.translate(this.position.x, this.position.y);
            Asteroids.crc2.strokeRect(-2, -2, 2, 2);
            Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            this.remainingLivetime -= _timeslice;
            if (this.remainingLivetime < 0)
                this.expandable = true;
        }
    }
    Asteroids.Projectile = Projectile;
})(Asteroids || (Asteroids = {}));
//# sourceMappingURL=Projectile.js.map