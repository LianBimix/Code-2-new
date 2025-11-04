"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody extends SolarSystem.Body {
        name;
        size;
        constructor(_name, _size, _position, _description) {
            super(_position, _description);
            this.name = _name;
            this.size = _size;
        }
        draw() {
            const gradient = SolarSystem.crc2.createLinearGradient(0, 0, 0, 100);
            gradient.addColorStop(0, "#00ffc3ff");
            gradient.addColorStop(.5, "#6b6b4eff");
            gradient.addColorStop(1, "#406087ff");
            SolarSystem.crc2.fillRect(0, 0, 200, 100);
            SolarSystem.crc2.beginPath();
            SolarSystem.crc2.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
            SolarSystem.crc2.closePath();
            SolarSystem.crc2.fillStyle = gradient;
            console.log("Planeeeeeeet");
        }
        orbit() {
        }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=CelestialBody.js.map