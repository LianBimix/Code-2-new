"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Planet extends SolarSystem.CelestialBody {
        speed;
        distance;
        rotationPoint;
        type;
        constructor(_speed, _distance, _rotationPoint, _type, _position, _description, _name, _size) {
            super(_name, _size, _position, _description);
            this.speed = _speed;
            this.distance = _distance;
            this.rotationPoint = _rotationPoint;
            this.type = _type;
        }
    }
    SolarSystem.Planet = Planet;
    let CELEST;
    (function (CELEST) {
        CELEST[CELEST["PLANET"] = 0] = "PLANET";
        CELEST[CELEST["MOON"] = 1] = "MOON";
    })(CELEST = SolarSystem.CELEST || (SolarSystem.CELEST = {}));
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Planet.js.map