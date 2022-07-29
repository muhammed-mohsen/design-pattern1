import { Tool } from './Tool';
export class Canvas{
    private _currentTool: Tool;
    public get currentTool(): Tool {
        return this._currentTool;
    }
    public set currentTool(value: Tool) {
        this._currentTool = value;
    }
    public mouseDown():void{
this._currentTool.mouseDown();
    }
    public mouseUp():void{
this._currentTool.mouseUp();
    }
    
}

// import { Canvas } from './state/Convas';
// import { SelectionTool } from './state/SelectionTool';


// const canvas = new Canvas()
// canvas.currentTool = new SelectionTool();
// canvas.mouseDown()