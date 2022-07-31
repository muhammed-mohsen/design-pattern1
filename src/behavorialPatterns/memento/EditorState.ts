export class EditorState {
  private _content: string;
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public constructor(content: string) {
    this.content = content;
  }
}
