namespace Canvas {


    addEventListener("load", handleLoad);
    function handleLoad(): void {
        drawBackground()
    }

    function drawBackground(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;
        const randomcolor: string = "#" + Math.floor(Math.random()*16777215).toString(16);
        crc2.fillStyle = randomcolor;
        const randomwidth: number = Math.round(Math.random()*crc2.canvas.width);
        const randomheight: number = Math.round(Math.random()*crc2.canvas.height);
        crc2.fillRect(0, 0, randomwidth, randomheight);
    }

}