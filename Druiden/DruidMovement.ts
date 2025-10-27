export namespace DruidMovement {

    interface State {  
        x: number;
    }

    interface Command {
        module: string;
        method: string;
        data: string;
    }

    const DummyCommand: Command = 
    
    export function getCommand(_state: State): Command { 
    console.log(_state);
     return DummyCommand;
    }
}
