namespace Script {
  import f = FudgeCore;
  f.Debug.info("Main Program Template running!");

  let viewport: f.Viewport;
  //let cuba: CubaControl;
  document.addEventListener("interactiveViewportStarted", <EventListener><unknown>start);
  document.addEventListener("mousedown", hndMouseClick);

  async function start(_event: CustomEvent): Promise<void> {
    viewport = _event.detail;

    const cubaNode: f.Node = viewport.getBranch().getChildByName("CUBA");
    //cuba = cubaNode.getComponent(CubaControl); 

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
      getDistance(cubaInstance, viewport.getRayFromClient);
    }
    
    //document.addEventListener("keydown", drive);
    
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
    f.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
  }

  function getDistance(_car: f.GraphInstance, _pointer: any): void {

  }
  
  function hndMouseClick(_event: MouseEvent): void {
    if (_event.button != 2)
      return;
    const vecScreen: f.Vector2 = new f.Vector2(_event.offsetX, _event.offsetY); 
    const ray: f.Ray = viewport.getRayFromClient(vecScreen);
    console.log(ray);

    const cubas: f.Node[] = viewport.getBranch().getChildrenByName("CUBA"); 
    for (const cuba of cubas) {
      const vecDistance: f.Vector3 = ray.getDistance(cuba.mtxWorld.translation); 
      console.log(vecDistance.magnitude);
    }
  }


  function update(): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    f.AudioManager.default.update();
  }
}