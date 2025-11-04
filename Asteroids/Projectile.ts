namespace Asteroids {
    export class Projectile extends Moveable {
        private static maxLivespan: number = 2;
        private remainingLivetime: number;

        public constructor(_position: Vector, _velocity: Vector) {
            super(_position);
            this.remainingLivetime= Projectile.maxLivespan;
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
            this.remainingLivetime -= _timeslice;
            if (this.remainingLivetime < 0)
                this.expandable = true;
        }
    }
}