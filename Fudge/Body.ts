namespace Fudge {
    import f = FudgeCore;
    export class Body extends f.Node {
        //public rotation: number;
        public speed: number;
        public constructor(_name: string, _size: number, _orbit: number, _speed: number) {
            super(_name);
            this.addComponent(new f.ComponentMesh(mesh));
            this.addComponent(new f.ComponentMaterial(material));
            this.addComponent(new f.ComponentTransform());
            this.mtxLocal.translateX(_orbit);
           // this.rotation=_rotation;
            this.speed=_speed;
            this.getComponent(f.ComponentMesh).mtxPivot.scale(new f.Vector3(_size,_size,_size));
        }

        public update(): void {
            const rotSpeed: number = 360 / this.speed; //360 Grad in fünf Sekunden
            const angle: number = rotSpeed * f.Loop.timeFrameGame / 1000; //man muss Sekunden in Millisekunden umrechnen, weil Fudge hier immer mit Millisekunden zählt
            
            this.getComponent(f.ComponentTransform).mtxLocal.rotateY(angle, true);
            this.getComponent(f.ComponentMesh).mtxPivot.rotateY(-3 * angle);
        }
    }
}