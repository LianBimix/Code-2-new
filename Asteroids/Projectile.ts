namespace Asteroids {
    export class Projectile extends Moveable {
        public livespan: number = 2;

        public constructor(_position: Vector, _velocity: Vector) {
            super(_position);

            this.velocity = _velocity.copy();
        }
        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.strokeRect(-2, -2, 2, 2);
            crc2.restore();
        }
        public move(_timeslice: number): void {
            super.move(_timeslice);
            this.livespan -= _timeslice;
            if (this.livespan < 0)
                this.expandable = true;
        }
    }
}