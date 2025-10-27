"use strict";
var Pizza;
(function (Pizza) {
    let canvas;
    let crc2;
    let radius;
    let ammountTri;
    addEventListener("load", handleLoad);
    function handleLoad() {
        drawPizza();
    }
    playerInputs();
    function playerInputs() {
        radius = parseInt(prompt("Please enter what Radius you'd like the Pizza to be cut in") || "100", 10);
        ammountTri = parseInt(prompt("Please enter how many pieces your Pizza should be cut in:") || "100", 10);
    }
    function drawPizza() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.beginPath();
        crc2.arc(200, 200, radius, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#664cf6ff";
        crc2.fill();
    }
})(Pizza || (Pizza = {}));
//# sourceMappingURL=Pizza.js.map