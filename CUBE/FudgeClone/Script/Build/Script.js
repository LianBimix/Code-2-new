"use strict";
var Script;
(function (Script) {
    var f = FudgeCore;
    f.Project.registerScriptNamespace(Script); // Register the namespace to FUDGE for serializationF
    class CubaControl extends f.ComponentScript {
        // Register the script as component for use in the editor via drag&drop
        static { this.iSubclass = f.Component.registerSubclass(CubaControl); }
        // Properties may be mutated by users in the editor via the automatically created user interface
        //public message: string = "CustomComponentScript added to ";
        constructor() {
            super();
            // Activate the functions of this component as response to events
            this.hndEvent = (_event) => {
                switch (_event.type) {
                    case "componentAdd" /* f.EVENT.COMPONENT_ADD */:
                        f.Debug.log(this.node);
                        break;
                    case "componentRemove" /* f.EVENT.COMPONENT_REMOVE */:
                        this.removeEventListener("componentAdd" /* f.EVENT.COMPONENT_ADD */, this.hndEvent);
                        this.removeEventListener("componentRemove" /* f.EVENT.COMPONENT_REMOVE */, this.hndEvent);
                        break;
                    case "nodeDeserialized" /* f.EVENT.NODE_DESERIALIZED */:
                        // if deserialized the node is now fully reconstructed and access to all its components and children is possible
                        //f.Loop.addEventListener(f.EVENT.LOOP_FRAME, this.update);
                        break;
                }
            };
            this.update = (_event) => {
                //this.drive();
                //this.rotate();
            };
            this.rotate = (_angle) => {
                //let node: f.Node = this.node; 
                //let cmpTransform: f.ComponentTransform = node.getComponent(f.ComponentTransform); 
                this.node.mtxLocal.rotateY(_angle);
            };
            this.drive = (_forward) => {
                //let node: f.Node = this.node; 
                //let cmpTransform: f.ComponentTransform = node.getComponent(f.ComponentTransform); 
                this.node.mtxLocal.translateZ(_forward);
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
    Script.CubaControl = CubaControl;
})(Script || (Script = {}));
var Script;
(function (Script) {
    var f = FudgeCore;
    f.Debug.info("Main Program Template running!");
    let viewport;
    let cuba;
    let control = new f.Control("Cuba", 0.5, 0 /* f.CONTROL_TYPE.PROPORTIONAL */);
    document.addEventListener("interactiveViewportStarted", start);
    async function start(_event) {
        viewport = _event.detail;
        const cubaNode = viewport.getBranch().getChildByName("CUBA");
        cuba = cubaNode.getComponent(Script.CubaControl);
        const cubaGraph = f.Project.getResourcesByName("CUBA")[0];
        console.log(cubaGraph);
        for (let i = 0; i < 10; i++) {
            const cubaInstance = await f.Project.createGraphInstance(cubaGraph);
            console.log(cubaInstance);
            const position = f.random.getVector3(new f.Vector3(30, 0, 30), new f.Vector3(-30, 0, -30));
            cubaInstance.mtxLocal.translate(position);
            cubaNode.getParent().addChild(cubaInstance);
        }
        //document.addEventListener("keydown", drive);
        document.addEventListener("mousedown", hndMouseClick);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        f.Loop.start(); // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
    }
    function hndMouseClick(_event) {
        if (_event.button != 2)
            return;
        const vecScreen = new f.Vector2(_event.offsetX, _event.offsetY);
        const ray = viewport.getRayFromClient(vecScreen);
        console.log(ray);
        const cubas = viewport.getBranch().getChildrenByName("CUBA");
        for (const cubaToCheck of cubas) {
            const vecDistance = ray.getDistance(cubaToCheck.mtxWorld.translation);
            cubaToCheck.getComponent(f.ComponentMaterial).clrPrimary = f.Color.CSS("yellow");
            if (vecDistance.magnitude < 1) {
                cuba = cubaToCheck.getComponent(Script.CubaControl);
                cubaToCheck.getComponent(f.ComponentMaterial).clrPrimary = f.Color.CSS("red");
            }
        }
    }
    function update() {
        const wroom = f.Keyboard.mapToTrit([f.KEYBOARD_CODE.S], [f.KEYBOARD_CODE.W]);
        const round = f.Keyboard.mapToTrit([f.KEYBOARD_CODE.A], [f.KEYBOARD_CODE.D]);
        control.setInput(wroom);
        cuba.drive(control.getOutput());
        control.setInput(round);
        cuba.rotate(control.getOutput());
        // ƒ.Physics.simulate();  // if physics is included and used
        viewport.draw();
        f.AudioManager.default.update();
    }
})(Script || (Script = {}));
//# sourceMappingURL=Script.js.map