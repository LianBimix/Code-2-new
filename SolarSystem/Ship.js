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
        setNewDestination(_currentDestination) {
            this.destination = destinations.random(0, this.destinations.lenght - 1);
            if ()
                ;
        }
    }
    SolarSystem.Ship = Ship;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Ship.js.map