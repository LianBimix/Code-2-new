namespace SolarSystem{
    export class CelestialBody extends Body {
        public name: string; 
        public size: number;

        public constructor(_name: string, _size: number, _position: Vector, _description: string) {
            super(_position, _description); 
            this.name=_name; 
            this.size=_size;
        }
        public draw(): void {
            const gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

            gradient.addColorStop(0, "#00ffc3ff");
            gradient.addColorStop(.5, "#6b6b4eff");
            gradient.addColorStop(1, "#406087ff");

            crc2.fillRect(0, 0, 200, 100);
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.size, 0, 2*Math.PI);
            crc2.closePath(); 
            crc2.fillStyle = gradient;
            console.log("Planeeeeeeet")
        }

        public orbit():void{
            

        }
    }

}