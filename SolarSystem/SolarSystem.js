"use strict";
var SolarSystem;
(function (SolarSystem) {
    window.addEventListener("load", hndLoad);
    let slider;
    const objects = [];
    SolarSystem.destinations = [];
    function hndLoad() {
        console.log("solarsystem start");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        slider = document.getElementById("speedvalue");
        SolarSystem.crc2 = canvas?.getContext("2d");
        SolarSystem.crc2.fillStyle = "#000000ff";
        createBodies();
        canvas.addEventListener("mouseup", hndClick);
        slider.addEventListener("input", hndSlider);
        window.setInterval(update, 20);
    }
    function createBodies() {
        // const sun: Planet = new Planet()
        // const ship: Ship = new Ship()
        // const jupiter: Planet = new Planet()
        // const iO: Planet = new Planet()
        // const earth: Planet = new Planet()
        // const moon: Planet = new Planet()
        // const venus: Planet = new Planet()
        // const saturn: Planet = new Planet()
        // const titan: Planet = new Planet()
        // const neptun: Planet = new Planet()
        // const triton: Planet = new Planet()
        // const ganymed: Planet = new Planet()
        // const callisto: Planet = new Planet()
        // const titania: Planet = new Planet()
        // const rhea: Planet = new Planet()
        // const oberon: Planet = new Planet()
        // const lapetus: Planet = new Planet()
        // const proteus: Planet = new Planet()
        // const neeid: Planet = new Planet()
        // const deinos: Planet = new Planet()
        SolarSystem.destinations.push();
    }
    function hndSlider() {
        console.log("SLIEDEEEEEER" + slider.value);
    }
    function hndClick(_event) {
        const clickPosition = new SolarSystem.Vector(_event.clientX, _event.clientY);
        getMouseTarget(clickPosition);
    }
    function getMouseTarget(_clientPosition) {
        for (let i = 0; i < objects.length - 1; i++) {
            if (objects[i].position == _clientPosition) {
                return objects[i];
            }
        }
        return null;
    }
    function openDescription() {
    }
    function update() {
        SolarSystem.crc2.fillRect(0, 0, SolarSystem.crc2.canvas.width, SolarSystem.crc2.canvas.height);
        //need move objekts
        //need draw objekts
        //coordinateShip()
    }
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=SolarSystem.js.map