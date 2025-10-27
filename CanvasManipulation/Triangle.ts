namespace Drei {
    let canvas: HTMLCanvasElement; 
    let crc2:CanvasRenderingContext2D;
    addEventListener ("load", handleLoad); 
    function handleLoad(): void {
        drawTriangle()
    }
    function getRandomX(): number {
        const x: number = Math.random()*crc2.canvas.width;
        return x;
    }
    function getRandomY(): number {
        const y: number=Math.random()*crc2.canvas.height;
        return y;
    }
    function drawTriangle(): void {
        canvas=document.querySelector("canvas")!;
        crc2=canvas.getContext("2d")!;
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
} 