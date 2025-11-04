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
            this.destination = sunArray.random(0, this.sunArray.length - 1);
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
        draw() {
            SolarSystem.canvas = document.querySelector("canvas");
            SolarSystem.crc2 = SolarSystem.canvas.getContext("2d");
            SolarSystem.crc2.beginPath();
            SolarSystem.crc2.lineWidth = 0.5;
            SolarSystem.crc2.moveTo(5, 0);
            SolarSystem.crc2.lineTo(5, 5);
            SolarSystem.crc2.lineTo(0, 5);
            SolarSystem.crc2.closePath();
            SolarSystem.crc2.fillStyle = "#84a6b8ff";
            SolarSystem.crc2.fill();
            SolarSystem.crc2.stroke();
        }
    }
    SolarSystem.Ship = Ship;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Ship.js.map