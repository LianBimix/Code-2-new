"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Ship extends SolarSystem.Body {
        velociy;
        destination;
        speed = 10;
        speedMod = 0;
        isMoving = false;
        constructor(_velocity, _destionation, _position, _description) {
            super(_position, _description);
            this.velociy = _velocity;
            this.destination = _destionation;
        }
        setNewDestination(_currentDestination) {
            this.destination = destinations.random(0, this.destinations.length - 1);
            if (this.position = _currentDestination.position) {
                return;
            }
        }
        move() {
            const distance = new SolarSystem.Vector(this.destination.position.x - this.position.x, this.destination.position.y - this.position.y);
            const distanceLength = Math.sqrt(distance.x ^ 2 + distance.y ^ 2);
            const path = this.speed * this.speedMod;
            this.position.x = (distance.x / distanceLength) * Math.min(path, distanceLength);
            this.position.y = (distance.y / distanceLength) * Math.min(path, distanceLength);
        }
        coordinateShip(_speedMod) {
            this.speedMod = _speedMod;
            if (this.isMoving) {
                this.move();
                if (this.position == this.destination.position) {
                    this.isMoving = false;
                }
                this.draw();
            }
            const gamba = SolarSystem.getRandomNumber(100, 0);
            if (gamba == 100) {
            }
        }
    }
    SolarSystem.Ship = Ship;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Ship.js.map