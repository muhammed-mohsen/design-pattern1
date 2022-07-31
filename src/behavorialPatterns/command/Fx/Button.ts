import Command from './Command';
export class Button{
    private _label: string; 
  
    private _command:Command;

	constructor( command: Command) {
		
		this._command = command;
	}
    public Click(){
        this._command.execute()
    }
    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }
    
}