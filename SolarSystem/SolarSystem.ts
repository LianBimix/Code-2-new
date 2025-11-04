namespace SolarSystem {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;

    export const linewidth: number = 5;

    function handleLoad(_event: Event): void {

        console.log("Simulation start");
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2.lineWidth = linewidth;

        createPlanet;
    }

    function createPlanet(): void {
        const planet: Planet = new Planet(1, 1, Sun, CELEST, 5, Hallo, Earth, 10);
    }
}