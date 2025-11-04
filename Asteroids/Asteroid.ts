namespace Asteroids {
    export class Asteroid extends Moveable {
        public size: number;
        private type: number;

        public constructor(_size: number, _position?: Vector) {
            super(_position);
            this.velocity = Vector.getRandom(100,200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.translate(-50, -50);
            crc2.lineWidth = 2/this.size;
            crc2.stroke(asteroidPaths[this.type]);
            crc2.restore();
        }
        public isHit(_hotspot: Vector): boolean {
            const hitsize: number = 50 * this.size;
            const difference: Vector = Vector.getDifference(_hotspot, this.position);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
}