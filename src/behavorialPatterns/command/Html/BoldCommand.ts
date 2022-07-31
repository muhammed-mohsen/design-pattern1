import History from './History';
import HtmlDocument from './HtmlDocument';
import { UndoableCommand } from './UndoableCommand';
export class BoldCommand implements UndoableCommand  {
    private _privousContent:string
    private _document:HtmlDocument 
    private _history:History
    

  constructor( _document: HtmlDocument , _history: History) {
    this._document = _document
    this._history = _history
  }
    unexecute(): void {
        this._document.content = this._privousContent
    }
    execute(): void {
        this._privousContent = this._document.content
        this._document.bold()
        this._history.push(this)
        }

}