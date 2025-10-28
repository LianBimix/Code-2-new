namespace Vectorr {
    export class Vector {
        public x: number;
        public y: number;

        public constructor(_x: number, _y: number) {
            this.set(_x, _y);
            this.x = _x;
            this.y = _y;
        }
        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }
    }
    const v1: Vector = new Vector(10, -3);
    v1.scale(2);
    console.log(v1);
}