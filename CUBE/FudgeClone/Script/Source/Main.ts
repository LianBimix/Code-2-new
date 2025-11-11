namespace Script {
  import f = FudgeCore;
  f.Debug.info("Main Program Template running!");

  let viewport: f.Viewport;
  let cuba: CubaControl;
  let control: f.Control = new f.Control("Cuba", 0.5, f.CONTROL_TYPE.PROPORTIONAL);
  document.addEventListener("interactiveViewportStarted", <EventListener><unknown>start);
  
  async function start(_event: CustomEvent): Promise <void> {
    viewport = _event.detail;
    
    const cubaNode: f.Node = viewport.getBranch().getChildByName("CUBA");
    cuba = cubaNode.getComponent(CubaControl); 
    
    const cubaGraph: f.Graph = <f.Graph>f.Project.getResourcesByName("CUBA")[0];
    console.log(cubaGraph);
    
    for (let i: number = 0; i < 10; i++) {
      const cubaInstance: f.GraphInstance = await f.Project.createGraphInstance(cubaGraph);
      console.log(cubaInstance);
      const position: f.Vector3 = f.random.getVector3(
        new f.Vector3(30, 0, 30), new f.Vector3(-30, 0, -30)
      );
      cubaInstance.mtxLocal.translate(position);
      cubaNode.getParent().addChild(cubaInstance);
    }
    
    //document.addEventListener("keydown", drive);
    document.addEventListener("mousedown", hndMouseClick);
    
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    f.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }
  
  function hndMouseClick(_event: MouseEvent): void {
    if (_event.button != 2)
      return;
    const vecScreen: f.Vector2 = new f.Vector2(_event.offsetX, _event.offsetY); 
    const ray: f.Ray = viewport.getRayFromClient(vecScreen);
    console.log(ray);

    const cubas: f.Node[] = viewport.getBranch().getChildrenByName("CUBA"); 
    for (const cubaToCheck of cubas) {
      const vecDistance: f.Vector3 = ray.getDistance(cubaToCheck.mtxWorld.translation); 
      cubaToCheck.getComponent(f.ComponentMaterial).clrPrimary = f.Color.CSS("yellow");
        if (vecDistance.magnitude<1) {
          cuba = cubaToCheck.getComponent(CubaControl);
          cubaToCheck.getComponent(f.ComponentMaterial).clrPrimary = f.Color.CSS("red");
        }    
    }
  }


  function update(): void {
    const wroom: number = f.Keyboard.mapToTrit(
      [f.KEYBOARD_CODE.S],
      [f.KEYBOARD_CODE.W]
    );
    const round: number = f.Keyboard.mapToTrit(
      [f.KEYBOARD_CODE.A],
      [f.KEYBOARD_CODE.D]
    );

    control.setInput(wroom);
    cuba.drive(control.getOutput()); 

    control.setInput(round); 
    cuba.rotate(control.getOutput());
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    f.AudioManager.default.update();
  }
}