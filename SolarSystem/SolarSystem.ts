namespace SolarSystem {
     window.addEventListener("load", hndLoad);
    export let crc2: CanvasRenderingContext2D;
    let slider: HTMLInputElement;
    const objects:Body[]=[];



    function hndLoad(): void {
        console.log("solarsystem start");

        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        slider = document.getElementById("speedvalue") as HTMLInputElement;

        crc2 = <CanvasRenderingContext2D>canvas?.getContext("2d");
        crc2.fillStyle = "#000000ff";
        
        
        createBodies();
        
        canvas.addEventListener("mouseup", hndClick);
        slider.addEventListener("input", hndSlider);
        
        
        
        window.setInterval(update, 20);
    }
    
    function createBodies(): void {
        //const sun: Planet = new Planet()
        // const ship: Ship = new Ship()
        // const jupiter: Planet = new Planet()
        // const iO: Planet = new Planet()
        // const earth: Planet = new Planet()
        // const moon: Planet = new Planet()
        // const venus: Planet = new Planet()
        // const saturn: Planet = new Planet()
        // const titan: Planet = new Planet()
        // const neptun: Planet = new Planet()
        // const triton: Planet = new Planet()
        // const ganymed: Planet = new Planet()
        // const callisto: Planet = new Planet()
        // const titania: Planet = new Planet()
        // const rhea: Planet = new Planet()
        // const oberon: Planet = new Planet()
        // const lapetus: Planet = new Planet()
        // const proteus: Planet = new Planet()
        // const neeid: Planet = new Planet()
        // const deinos: Planet = new Planet()

    }


    // function hndSlider(): void {
    //     console.log("SLIEDEEEEEER" + slider.value);
        

    // }

    // function hndClick(_event: MouseEvent): void {

    //      const clickPosition: Vector 
    //      clickPosition.x = _event.clientX
    //      clickPosition.y = _event.clientY
    //      getMouseTarget(clickPosition);
    // }

    // function getMouseTarget(_clientPosition: Vector): Body| null {
    //     for (const object in objects){

    //         let hit = inHitRange(_clientPosition.x  - this.);
    //         if ( hit = true){
    //             return object;
    //         }
    //         else
    //             return null;

    //     }
    // }

    // function inHitRange(_clientposition:Vector): boolean{
    //     const hitsize:number = 5;
    //     const getDifference: Vector = new Vector(_clientposition.x - this.position.x)

    // }


    function update(): void {

        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //need move objekts
        //need draw objekts
        //coordinateShip()
    }
}
    
