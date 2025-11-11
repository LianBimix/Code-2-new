namespace Script {
  import f = FudgeCore;
  f.Project.registerScriptNamespace(Script);  // Register the namespace to FUDGE for serializationF
  export class CubaControl extends f.ComponentScript {
    // Register the script as component for use in the editor via drag&drop
    public static readonly iSubclass: number = f.Component.registerSubclass(CubaControl);
    // Properties may be mutated by users in the editor via the automatically created user interface
    //public message: string = "CustomComponentScript added to ";


    public constructor() {
      super();

      // Don't start when running in editor
      if (f.Project.mode == f.MODE.EDITOR)
        return;

      // Listen to this component being added to or removed from a node
      this.addEventListener(f.EVENT.COMPONENT_ADD, this.hndEvent);
      this.addEventListener(f.EVENT.COMPONENT_REMOVE, this.hndEvent);
      this.addEventListener(f.EVENT.NODE_DESERIALIZED, this.hndEvent);
    }

    // Activate the functions of this component as response to events
    public hndEvent = (_event: Event): void => {
      switch (_event.type) {
        case f.EVENT.COMPONENT_ADD:
          f.Debug.log(this.node);
          break;
        case f.EVENT.COMPONENT_REMOVE:
          this.removeEventListener(f.EVENT.COMPONENT_ADD, this.hndEvent);
          this.removeEventListener(f.EVENT.COMPONENT_REMOVE, this.hndEvent);
          break;
        case f.EVENT.NODE_DESERIALIZED:
          // if deserialized the node is now fully reconstructed and access to all its components and children is possible
          // f.Loop.addEventListener(f.EVENT.LOOP_FRAME, this.update);
          break;
      }
    }

    public update = (_event: Event): void => {
      //this.drive();
      //this.rotate();
    }
    public rotate = (_angle: number):void => {
      //let node: f.Node = this.node; 
      //let cmpTransform: f.ComponentTransform = node.getComponent(f.ComponentTransform); 
      this.node.mtxLocal.rotateY(f.Keyboard.mapToTrit([f.KEYBOARD_CODE.A],[f.KEYBOARD_CODE.D])); 
    }

    public drive = (_forward: number): void => {
      //let node: f.Node = this.node; 
      //let cmpTransform: f.ComponentTransform = node.getComponent(f.ComponentTransform); 
      this.node.mtxLocal.translateZ(0.5*f.Keyboard.mapToTrit([f.KEYBOARD_CODE.S],[f.KEYBOARD_CODE.W])); 
    }

  }
}
