import { EditorState } from './EditorState';
export class History {
  private _states: Array<EditorState> = [];
  public push(state: EditorState) {
    this._states.push(state);
  }
  public pop() {
     this._states.pop();
     return this._states.at(-1)
  }
}
