"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Ship extends SolarSystem.Body {
        velociy;
        destination;
        constructor(_velocity, _destionation, _position, _description) {
            super(_position, _description);
            this.velociy = _velocity;
            this.destination = _destionation;
        }
        setDestination() {
        }
    }
    SolarSystem.Ship = Ship;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Ship.js.map