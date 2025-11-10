"use strict";
var Script;
(function (Script) {
    var f = FudgeCore;
    f.Project.registerScriptNamespace(Script); // Register the namespace to FUDGE for serializationF
    class CustomComponentScript extends f.ComponentScript {
        // Register the script as component for use in the editor via drag&drop
        static { this.iSubclass = f.Component.registerSubclass(CustomComponentScript); }
        constructor() {
            super();
            // Properties may be mutated by users in the editor via the automatically created user interface
            this.message = "CustomComponentScript added to ";
            // Activate the functions of this component as response to events
            this.hndEvent = (_event) => {
                switch (_event.type) {
                    case "componentAdd" /* f.EVENT.COMPONENT_ADD */:
                        f.Debug.log(this.message, this.node);
                        break;
                    case "componentRemove" /* f.EVENT.COMPONENT_REMOVE */:
                        this.removeEventListener("componentAdd" /* f.EVENT.COMPONENT_ADD */, this.hndEvent);
                        this.removeEventListener("componentRemove" /* f.EVENT.COMPONENT_REMOVE */, this.hndEvent);
                        break;
                    case "nodeDeserialized" /* f.EVENT.NODE_DESERIALIZED */:
                        // if deserialized the node is now fully reconstructed and access to all its components and children is possible
                        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, this.update);
                        break;
                }
            };
            this.rotate = () => {
                let node = this.node;
                let cmpTransform = node.getComponent(f.ComponentTransform);
                cmpTransform.mtxLocal.rotateY(f.Keyboard.mapToTrit([f.KEYBOARD_CODE.A], [f.KEYBOARD_CODE.D]));
            };
            this.drive = () => {
                let node = this.node;
                let cmpTransform = node.getComponent(f.ComponentTransform);
                cmpTransform.mtxLocal.translateZ(0.5 * f.Keyboard.mapToTrit([f.KEYBOARD_CODE.S], [f.KEYBOARD_CODE.W]));
            };
            this.update = (_event) => {
                this.drive();
                this.rotate();
            };
            // Don't start when running in editor
            if (f.Project.mode == f.MODE.EDITOR)
                return;
            // Listen to this component being added to or removed from a node
            this.addEventListener("componentAdd" /* f.EVENT.COMPONENT_ADD */, this.hndEvent);
            this.addEventListener("componentRemove" /* f.EVENT.COMPONENT_REMOVE */, this.hndEvent);
            this.addEventListener("nodeDeserialized" /* f.EVENT.NODE_DESERIALIZED */, this.hndEvent);
        }
    }
    Script.CustomComponentScript = CustomComponentScript;
})(Script || (Script = {}));
var Script;
(function (Script) {
    var f = FudgeCore;
    f.Debug.info("Main Program Template running!");
    let viewport;
    //let cuba: f.Node;
    document.addEventListener("interactiveViewportStarted", start);
    function start(_event) {
        viewport = _event.detail;
        //document.addEventListener("mousemove", hndMouseMove);
        //document.addEventListener("keydown", drive);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start(); // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
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
    function update(_event) {
        // ƒ.Physics.simulate();  // if physics is included and used
        viewport.draw();
        f.AudioManager.default.update();
    }
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map