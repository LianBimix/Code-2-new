namespace SolarSystem {
    export class Ship extends Body {
        public velociy: Vector; 
        public destination: Planet; 
        public speed: number = 10;
        public speedMod: number = 0;
        public isMoving: boolean = false;

        public constructor (_velocity: Vector, _destionation:Planet, _position: Vector, _description: string) {
            super(_position, _description); 
            this.velociy = _velocity; 
            this.destination = _destionation;
        }
        public setNewDestination(_currentDestination: Planet): void{
            this.destination = sunArray.random(0,this.sunArray.length -1);
            if(this.position=_currentDestination.position) {
                return;
            }
        }
        public move (): void {
            const distance: Vector = new Vector(this.destination.position.x-this.position.x, this.destination.position.y-this.position.y);
            const distanceLength: number = Math.sqrt(distance.x^2+distance.y^2); 
            const path: number = this.speed*this.speedMod; 
            this.position.x = (distance.x/distanceLength)*Math.min(path, distanceLength); 
            this.position.y = (distance.y/distanceLength)*Math.min(path, distanceLength);
        }
        public coordinateShip(_speedMod: number): void {
            this.speedMod = _speedMod;
            if (this.isMoving){
                this.move();
                if (this.position == this.destination.position) {
                    this.isMoving = false; 
                }
                this.draw();
            }
            
            const gamba:number = getRandomNumber(100,0); 
            if(gamba == 100){

            }
        }
        public draw():void {
        canvas=document.querySelector("canvas")!;
        crc2=canvas.getContext("2d")!;
        crc2.beginPath();
        crc2.lineWidth = 0.5;
        crc2.moveTo(5,0);
        crc2.lineTo(5,5); 
        crc2.lineTo(0,5);
        crc2.closePath();

        crc2.fillStyle = "#84a6b8ff";
        crc2.fill();
        crc2.stroke();
        }
    }
}