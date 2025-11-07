namespace Fudge {
  document.addEventListener("DOMContentLoaded", hndLoad);
  import f = FudgeCore;

  export const mesh: f.Mesh = new f.MeshSphere("Sphere");
  export const material: f.Material = new f.Material("Material", f.ShaderLit);

  let canvas: HTMLCanvasElement;
  const sun: Body= new Body("THe sun is a deadly laser",2, 0, 100);

  const mercury: Body = new Body("MAMAAAAAAAAAAAAA",0.3, 1.2, 50);
  sun.addChild(mercury);

  const venus: Body = new Body("Beauty",0.8, 3, 7);
  sun.addChild(venus);

  //const earth: Body = new Body("Öarph", 3);
  //sun.addChild(earth);
  //const moon: Body = new Body("Luna", 3.5);
  //earth.addChild(moon);

  const mars: Body = new Body("Caramel",0.5, 4,9.5);
  sun.addChild(mars);
  const phobos: Body = new Body("Phobos",0.3, 0.5, 10); 
  const deimos: Body = new Body("Deimos",0.4, 1, 20);
  mars.addChild(phobos);
  mars.addChild(deimos);
  
  //const jupiter: Body = new Body(".IO", 5);
  //sun.addChild(jupiter);
  //const ganymede: Body = new Body("Ganymede", 8); 
  //const calisto: Body = new Body("Calisto", 8);
  //const io: Body = new Body("Io", 8);
  //jupiter.addChild(ganymede);
  //jupiter.addChild(calisto);
  //jupiter.addChild(io);

  //const saturn: Body = new Body("Alles, was du brauchst", 6);
  //sun.addChild(saturn);
  //const titan: Body = new Body("Titan", 8);
  //const rhea: Body = new Body("Rhea", 8);
  //const iapetus: Body = new Body("Iapetus", 8);
  //saturn.addChild(titan); 
  //saturn.addChild(rhea); 
  //saturn.addChild(iapetus); 

  //const uranus: Body = new Body("Waschpods", 7);
  //sun.addChild(uranus);
  //const titania: Body = new Body("Titania", 8);
  //const oberon: Body = new Body("Oberon", 8);
  //const ariel: Body = new Body("Ariel", 8);
  //uranus.addChild(titania);
  //uranus.addChild(oberon); 
  //uranus.addChild(ariel);

  //const neptun: Body = new Body("Dreizack", 8); 
  //sun.addChild(neptun);
  //const triton: Body = new Body("Triton", 8);
  //const proteus: Body = new Body("Proteus", 8); 
  //const nereid: Body = new Body("Neroid", 8);
  //neptun.addChild(triton); 
  //neptun.addChild(proteus); 
  //neptun.addChild(nereid);

  const camera: f.ComponentCamera = new f.ComponentCamera();
  const viewport: f.Viewport = new f.Viewport();

  console.log(FudgeCore);
  console.log("HELLO");

  function hndLoad(): void {
    canvas = document.querySelector("canvas")!;
    canvas.height = 700;
    canvas.width = 1520;

    viewport.initialize("Viewport", sun, camera, canvas);

    camera.mtxPivot.translateZ(20);
    camera.mtxPivot.translateY(20);
    camera.mtxPivot.rotateX(-45);
    camera.mtxPivot.rotateY(180);

    sun.getComponent(f.ComponentMaterial).clrPrimary= new f.Color(0.7,0.7,0);
    mercury.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.3,0.3,0.3);
    mars.getComponent(f.ComponentMaterial).clrPrimary = new f.Color(0.8, 0.3,0.2);
    f.Loop.start();
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update); //time-based animation, wird versuchen auf 60fps  zu kommen
  }

  function update(): void {
    sun.update();
    mercury.update();
    venus.update();
    //earth.update();
    mars.update();
    phobos.update();
    deimos.update();
    //jupiter.update();
    //saturn.update();
    //uranus.update();
    //neptun.update();
    viewport.draw();
  }
}