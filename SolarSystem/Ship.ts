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
            this.destination = destinations.random(0,this.destinations.length -1);
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
    }
}