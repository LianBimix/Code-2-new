"use strict";
var Vectorr;
(function (Vectorr) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
            this.x = _x;
            this.y = _y;
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
    }
    Vectorr.Vector = Vector;
    const v1 = new Vector(10, -3);
    v1.scale(2);
    console.log(v1);
})(Vectorr || (Vectorr = {}));
//# sourceMappingURL=Vector.js.map