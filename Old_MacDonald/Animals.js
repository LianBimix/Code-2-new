"use strict";
var Farm;
(function (Farm) {
    class Animal {
        species;
        name;
        sound;
        food;
        consumption;
        constructor(_species, _name, _sound, _food, _consumtion) {
            this.species = _species;
            this.name = _name;
            this.sound = _sound;
            this.food = _food;
            this.consumption = _consumtion;
        }
        subtraction(_subtracted) {
            this.consumption -= _subtracted.consumption;
        }
        doStuff() { }
        ;
        doGreen() { }
        ;
        doSpecialAction() { }
        ;
    }
    Farm.Animal = Animal;
})(Farm || (Farm = {}));
//# sourceMappingURL=Animals.js.map