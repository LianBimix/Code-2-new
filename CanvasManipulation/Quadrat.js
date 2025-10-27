"use strict";
var Canvas;
(function (Canvas) {
    addEventListener("load", handleLoad);
    function handleLoad() {
        drawBackground();
    }
    function drawBackground() {
        const canvas = document.querySelector("canvas");
        const crc2 = canvas.getContext("2d");
        const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        crc2.fillStyle = randomcolor;
        const randomwidth = Math.round(Math.random() * crc2.canvas.width);
        const randomheight = Math.round(Math.random() * crc2.canvas.height);
        crc2.fillRect(0, 0, randomwidth, randomheight);
    }
})(Canvas || (Canvas = {}));
