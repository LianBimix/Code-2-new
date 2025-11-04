"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        position;
        description;
        constructor(_position, _description) {
            this.position = _position;
            this.description = _description;
        }
    }
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Body.js.map