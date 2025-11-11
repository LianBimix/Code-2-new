declare namespace Script {
    import f = FudgeCore;
    class CubaControl extends f.ComponentScript {
        static readonly iSubclass: number;
        constructor();
        hndEvent: (_event: Event) => void;
        update: (_event: Event) => void;
        rotate: (_angle: number) => void;
        drive: (_forwar: number) => void;
    }
}
declare namespace Script {
}
