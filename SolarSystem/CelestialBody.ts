namespace SolarSystem{
    export class CelestialBody extends Body {
        public name: string; 
        public size: number;

        public constructor(_name: string, _size: number, _position: Vector, _description: string) {
            super(_position, _description); 
            this.name=_name; 
            this.size=_size;
        }
    }
}