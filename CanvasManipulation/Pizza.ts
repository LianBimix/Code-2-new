namespace Pizza {
    let canvas: HTMLCanvasElement; 
    let crc2: CanvasRenderingContext2D; 
    let radius: number; 
    let ammountTri: number;
    addEventListener ("load", handleLoad)
    function handleLoad(): void {
        drawPizza()
    }

    playerInputs();
    function playerInputs():void { 
        radius = parseInt(prompt("Please enter what Radius you'd like the Pizza to be cut in")||"100", 10);
        ammountTri = parseInt(prompt("Please enter how many pieces your Pizza should be cut in:")||"100", 10);
    }

    function drawPizza(): void {
        canvas=document.querySelector("canvas")!;
        crc2=canvas.getContext("2d")!;
        crc2.beginPath();
        crc2.arc(200, 200, radius,0, 2*Math.PI)
        crc2.closePath();
        crc2.fillStyle="#664cf6ff";
        crc2.fill();
    }
}