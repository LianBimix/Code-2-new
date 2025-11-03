namespace SolarSystem {
    export class Ship extends Body {
        public velociy: Vector; 
        public destination: Planet; 

        public constructor (_velocity: Vector, _destionation:Planet, _position: Vector, _description: string) {
            super(_position, _description); 
            this.velociy = _velocity; 
            this.destination = _destionation;
        }
        public setDestination(): void{
            
        }
    }
}