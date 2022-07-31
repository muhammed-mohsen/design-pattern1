import { UndoableCommand } from './UndoableCommand';

export default class History{
    private _commands:UndoableCommand[]
    public push(undoableCommand:UndoableCommand) {
            this._commands.push(undoableCommand)
    }
    public pop() {
          return  this._commands.pop()
    }

}