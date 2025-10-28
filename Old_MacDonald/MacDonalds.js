"use strict";
var Farm;
(function (Farm) {
    const animales = [];
    const foodies = [];
    const hay = new Farm.Food("Hay", 10);
    const grass = new Farm.Food("Grass", 10);
    const ingwer = new Farm.Food("Ingwer", 10);
    const grain = new Farm.Food("Grain", 10);
    const meat = new Farm.Food("Meat", 10);
    foodies.push(hay, grass, ingwer, grain, meat);
    const cow = new Farm.Animal("Cow", "Gerta", "Moo", hay, 4);
    const sheep = new Farm.Animal("Sheep", "Shawn", "Baah", grass, 1);
    const pig = new Farm.Animal("Pig", "Hannes", "Oink", ingwer, 1);
    const chicken = new Farm.Animal("Chicken", "Jocky", "Cluck", grain, 0.5);
    const dog = new Farm.Animal("Dog", "Bruno", "Woof", meat, 2);
    animales.push(cow, sheep, pig, chicken, dog);
    for (let x = 0; x < 7; x++) {
        for (let i = 0; i < animales.length; i++) {
            foodies[i].amount -= animales[i].consumption;
            console.log("Old MacDonald has a farm! Ee, i, ee, i, o!");
            console.log("And on his farm he has " + animales[i].name + " the " + animales[i].species + "! Ee, i, ee, i, o!");
            console.log("With a " + animales[i].sound + " " + animales[i].sound + " here");
            console.log("And a " + animales[i].sound + " " + animales[i].sound + " there");
            console.log("Here a " + animales[i].sound + "! There a " + animales[i].sound + "!");
            console.log("Everywhere a " + animales[i].sound + " " + animales[i].sound + "!");
            console.log("");
            console.log(animales[i].name + " eats " + animales[i].consumption + " Kilo of " + foodies[i].type);
            console.log("");
        }
        console.log("At the end of the day the animals ate a lot! In total: ");
        for (let y = 0; y < foodies.length; y++) {
            console.log(foodies[y].amount + " Kilo of " + foodies[y].type);
            if (foodies[y].amount < animales[y].consumption) {
                console.log("(" + foodies[y].type + " will be refilled!)");
                foodies[y].amount += 10;
            }
        }
        console.log("Are left in the Silo!");
        console.log("");
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=MacDonalds.js.map