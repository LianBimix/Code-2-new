"use strict";
var Koordinatensystem;
(function (Koordinatensystem) {
    document.getElementById("refresh").onclick = hndtransform;
    let canvas;
    let crc2;
    //addEventListener("load", handleLoad)
    //function handleLoad(): void {
    coordSystem();
    //}
    function coordSystem() {
        crc2.beginPath();
        crc2.lineWidth = 2;
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 600);
        crc2.moveTo(0, 0);
        crc2.lineTo(600, 0);
        crc2.closePath();
        crc2.stroke();
        for (let i = 1; i < 600; i += 10) {
            crc2.moveTo(i, 0);
            crc2.lineTo(i, 5);
            crc2.stroke();
            crc2.moveTo(0, i);
            crc2.lineTo(5, i);
            crc2.stroke();
        }
    }
    function hndtransform() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.translate(5, 5);
        //crc2.scale(0.75, 0.75);
        crc2.rotate(0.5);
        const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        crc2.fillRect(0, 0, 600, 600);
        crc2.fillStyle = randomcolor;
        coordSystem();
        //crc2.resetTransform();
        crc2.getTransform();
    }
})(Koordinatensystem || (Koordinatensystem = {}));
//# sourceMappingURL=Koordinaten.js.map