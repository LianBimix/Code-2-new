"use strict";
var Drei;
(function (Drei) {
    let canvas;
    let crc2;
    addEventListener("load", handleLoad);
    function handleLoad() {
        drawTriangle();
    }
    function getRandomX() {
        const x = Math.random() * crc2.canvas.width;
        return x;
    }
    function getRandomY() {
        const y = Math.random() * crc2.canvas.height;
        return y;
    }
    function drawTriangle() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.beginPath();
        crc2.lineWidth = 0.5;
        crc2.moveTo(getRandomX(), getRandomY());
        crc2.lineTo(getRandomX(), getRandomY());
        crc2.lineTo(getRandomX(), getRandomY());
        crc2.closePath();
        crc2.fillStyle = "#00FF00";
        crc2.fill();
        crc2.stroke();
    }
})(Drei || (Drei = {}));
//# sourceMappingURL=Triangle.js.map