"use strict";
var Pizza;
(function (Pizza) {
    let canvas;
    let crc2;
    addEventListener("load", handleLoad);
    function handleLoad() {
        drawPizza();
    }
    function playerEnter() {
        triamount: parseInt = console.log("Please enter the Number of triangles you'd like your Pizza to be sliced in: ");
    }
    function drawPizza() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.beginPath();
    }
})(Pizza || (Pizza = {}));
