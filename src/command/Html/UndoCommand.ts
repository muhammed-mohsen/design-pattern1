import Command from '../Fx/Command';
import History from "./History";

export default class UndoCommand implements Command{
    private _history:History
    execute(): void {
    this._history.pop()?.unexecute()
    }
} 