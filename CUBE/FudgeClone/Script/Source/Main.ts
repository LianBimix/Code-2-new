namespace Script {
  import f = FudgeCore;
  f.Debug.info("Main Program Template running!");

  let viewport: f.Viewport;
  //let cuba: CubaControl;
  document.addEventListener("interactiveViewportStarted", <EventListener><unknown>start);

  async function start(_event: CustomEvent): Promise <void> {
    viewport = _event.detail;

    const cubaNode: f.Node = viewport.getBranch().getChildByName("CUBA"); 
    //cuba = cubaNode.getComponent(CubaControl); 

    const cubaGraph: f.Graph = <f.Graph>f.Project.getResourcesByName("CUBA")[0];
    console.log(cubaGraph);

    for (let i: number =0; i<10; i++) {
      const cubaInstance: f.GraphInstance = await f.Project.createGraphInstance(cubaGraph); 
      console.log(cubaInstance); 
      const position: f.Vector3 = f.random.getVector3( 
        new f.Vector3(30,0,30), new f.Vector3(-30,0,-30)
      );
      cubaInstance.mtxLocal.translate(position); 
      cubaNode.getParent().addChild(cubaInstance);
    }

    //document.addEventListener("mousemove", hndMouseMove);
    //document.addEventListener("keydown", drive);

    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    f.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }
  // function hndMouseMove(_event: MouseEvent): void {
    
  //   viewport.getBranch().getChildByName("CUBA").getComponent(CustomComponentScript).rotator(_event.movementX);
  // }

  // function drive (KeyboardEvent): void {
  //   const driving = f.Keyboard.mapToTrit([f.KEYBOARD_CODE.A],[f.KEYBOARD_CODE.D]);
  //   console.log(mapT)
  //   if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
  //   viewport.getBranch().getChildByName("CUBA").getComponent(CustomComponentScript).driver(_event.key);
  // }

  function update(): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    f.AudioManager.default.update();
  }
}