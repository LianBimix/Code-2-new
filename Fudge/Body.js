"use strict";
var Fudge;
(function (Fudge) {
    var f = FudgeCore;
    class Body extends f.Node {
        //public rotation: number;
        speed;
        constructor(_name, _size, _orbit, _speed) {
            super(_name);
            this.addComponent(new f.ComponentMesh(Fudge.mesh));
            this.addComponent(new f.ComponentMaterial(Fudge.material));
            this.addComponent(new f.ComponentTransform());
            this.mtxLocal.translateX(_orbit);
            // this.rotation=_rotation;
            this.speed = _speed;
            this.getComponent(f.ComponentMesh).mtxPivot.scale(new f.Vector3(_size, _size, _size));
        }
        update() {
            const rotSpeed = 360 / this.speed; //360 Grad in fünf Sekunden
            const angle = rotSpeed * f.Loop.timeFrameGame / 1000; //man muss Sekunden in Millisekunden umrechnen, weil Fudge hier immer mit Millisekunden zählt
            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
    Fudge.Body = Body;
})(Fudge || (Fudge = {}));
//# sourceMappingURL=Body.js.map