"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        static getDifference(_v0, _v1) {
            const vector = new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
            return vector;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        random(_minLength, _maxLength) {
            const length = _minLength + Math.random() + (_maxLength - _minLength);
            const direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            const a = new Vector(this.x, this.y);
            return a;
        }
    }
    SolarSystem.Vector = Vector;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Vector.js.map