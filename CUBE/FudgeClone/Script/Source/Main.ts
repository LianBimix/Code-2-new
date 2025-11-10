namespace Script {
  import f = FudgeCore;
  f.Debug.info("Main Program Template running!");

  let viewport: f.Viewport;
  //let cuba: f.Node;
  document.addEventListener("interactiveViewportStarted", <EventListener>start);

  function start(_event: CustomEvent): void {
    viewport = _event.detail;

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

  function update(_event: Event): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    f.AudioManager.default.update();
  }
}