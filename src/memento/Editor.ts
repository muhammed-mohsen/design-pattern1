import { EditorState } from './EditorState';
export class Editor {
  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public createState(): EditorState {
    return new EditorState(this._content);
  }
  public restoreState(state: EditorState) {
    this._content = state.content;
  }
}


// import { Editor } from './memento/Editor';
// import { History } from './memento/History';
// const editor = new Editor();
// const history = new History();
// editor.content = 'a';
// history.push(editor.createState());
// editor.content = 'b';
// history.push(editor.createState());
// editor.content = 'c';
// history.push(editor.createState());

// editor.restoreState(history.pop());
// editor.restoreState(history.pop());
// console.log(editor.content, history);
