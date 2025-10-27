namespace Koordinatensystem {
    document.getElementById("refresh")!.onclick=hndtransform; 
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D; 

    //addEventListener("load", handleLoad)
    //function handleLoad(): void {
    coordSystem();
    //}
    function coordSystem(): void {
        crc2.beginPath()
        crc2.lineWidth=2; 
        crc2.moveTo(0,0)
        crc2.lineTo(0,400)
        crc2.moveTo(0,0)
        crc2.lineTo(400,0)
        crc2.closePath()
        crc2.stroke()
        for (let i: number = 1; i<400; i+=10) {
            crc2.moveTo(i,0);
            crc2.lineTo(i,3);
            crc2.stroke();
            crc2.moveTo(0,i);
            crc2.lineTo(3,i);
            crc2.stroke();
        }
    }
    function hndtransform(): void {
        canvas=document.querySelector("canvas")!;
        crc2=canvas.getContext("2d")!;
        const translate: number = Math.random()*200;
        const scale: number = Math.random()*5;
        crc2.translate(translate, translate);
        crc2.scale(scale, scale);
        crc2.rotate(Math.random()*359);
        const randomcolor: string = "#" + Math.floor(Math.random()*16777215).toString(16);
        crc2.fillRect(0, 0, 400, 400)
        crc2.fillStyle = randomcolor;
        coordSystem();
        crc2.resetTransform();
        crc2.getTransform();
    }
}