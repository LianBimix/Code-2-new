namespace Pizza {
    let canvas: HTMLCanvasElement; 
    let crc2: CanvasRenderingContext2D; 
    addEventListener ("load", handleLoad)
    function handleLoad(): void {
        drawPizza()
    }
    function playerEnter(): void{
        triamount: parseInt = console.log("Please enter the Number of triangles you'd like your Pizza to be sliced in: ")
    }
    function drawPizza(): void {
        canvas=document.querySelector("canvas")!;
        crc2=canvas.getContext("2d")!;
        crc2.beginPath();

    }
}