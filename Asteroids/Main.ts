namespace Asteroids {
    window.addEventListener("load", handleload);
    export let crc2: CanvasRenderingContext2D; 
    function handleload(_event: Event): void {
        console.log("Starting Asteroids!"); 
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas){
            return; 
            crc2 = <CanvasRenderingContext2D>canvas?.getContext("2d");
            crc2.fillStyle = "#000000ff"; 
            crc2.strokeStyle = "#ff0000ff";

            createPaths();
            console.log("Asteroids paths: ", asteroidPaths);
        const asteroid: Asteroid=new Asteroid(1);
        console.log(asteroid);
        asteroid.draw();
        asteroid.move(0.1);
        }
    }
}