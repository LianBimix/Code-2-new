namespace Farm{
    export class Animal {
        public species: string;
        public name: string;
        public sound: string;
        public food: Food;
        public consumption: number;

        public constructor(_species: string,_name:string, _sound: string,_food: Food,_consumtion:number) {
            this.species = _species;
            this.name=_name;
            this.sound = _sound;
            this.food=_food;
            this.consumption=_consumtion;
        }
        public subtraction(_subtracted: Animal): void {
            this.consumption -=_subtracted.consumption;
        }
        public doStuff():void {};
        public doGreen(): void {};
        public doSpecialAction():void {};
    }
}