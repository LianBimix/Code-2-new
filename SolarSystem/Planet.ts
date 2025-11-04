namespace SolarSystem {
    export class Planet extends CelestialBody {
        public speed: number; 
        public distance: number; 
        public rotationPoint: CelestialBody; 
        public type: CELEST; 

        public constructor (_speed: number, _distance: number, _rotationPoint: CelestialBody, _type:CELEST, _position: Vector, _description: string, _name:string, _size:number) {
            super(_name, _size, _position, _description); 
            this.speed = _speed; 
            this.distance = _distance; 
            this.rotationPoint = _rotationPoint; 
            this.type =_type;
        }
        //public draw(): void {}
    }
    export enum CELEST {
        PLANET, 
        MOON
    }
}