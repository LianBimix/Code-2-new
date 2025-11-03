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
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=CelestialBody.js.map