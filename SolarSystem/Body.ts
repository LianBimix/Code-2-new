namespace SolarSystem {
    export class Body {
        public position: Vector; 
        public description: string; 

        public constructor (_position:Vector, _description: string){
            this.position = _position; 
            this.description = _description;
        }
        public draw ():void{}
    }
}