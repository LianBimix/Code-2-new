"use strict";
var Arc;
(function (Arc) {
    addEventListener("load", handleLoad);
    function handleLoad() {
        drawBackground();
        drawEyes();
        drawMouth();
    }
    function drawBackground() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        crc2.beginPath();
        crc2.arc(500, 500, 150, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
    }
    function drawEyes() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        crc2.beginPath();
        crc2.arc(450, 450, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#000000ff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(550, 450, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#000000ff";
        crc2.fill();
    }
    function drawMouth() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        crc2.beginPath();
        crc2.lineWidth = 10;
        crc2.ellipse(500, 530, 90, 75, 0, 0, 1 * Math.PI, false);
        crc2.fillStyle = "#1a1515ff";
        crc2.stroke();
    }
})(Arc || (Arc = {}));
