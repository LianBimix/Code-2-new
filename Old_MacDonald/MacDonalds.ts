namespace Farm {
    const animales: Animal[] = [];
    const foodies: Food[] = [];
    const hay: Food = new Food("Hay", 10);
    const grass: Food = new Food("Grass", 10);
    const ingwer: Food = new Food("Ingwer", 10);
    const grain: Food = new Food("Grain", 10);
    const meat: Food = new Food("Meat", 10);
    foodies.push(hay, grass, ingwer, grain, meat);
    const cow: Animal = new Animal("Cow", "Gerta", "Moo", hay, 4);
    const sheep: Animal = new Animal("Sheep", "Shawn", "Baah", grass, 1);
    const pig: Animal = new Animal("Pig", "Hannes", "Oink", ingwer, 1);
    const chicken: Animal = new Animal("Chicken", "Jocky", "Cluck", grain, 0.5);
    const dog: Animal = new Animal("Dog", "Bruno", "Woof", meat, 2);
    animales.push(cow, sheep, pig, chicken, dog);

    for (let x: number = 0; x < 7; x++) {

        for (let i: number = 0; i < animales.length; i++) {
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
        for (let y: number = 0; y < foodies.length; y++) {
            console.log(foodies[y].amount + " Kilo of " + foodies[y].type);
            if (foodies[y].amount < animales[y].consumption) {
                console.log("(" + foodies[y].type + " will be refilled!)");
                foodies[y].amount += 10;
            }
        }
        console.log("Are left in the Silo!");
        console.log("");
    }
}