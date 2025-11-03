namespace SolarSystem {
    export function getRandomNumber(_max: number, _min: number): number {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }
}