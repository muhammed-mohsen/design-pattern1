import UiController from './UiController';
export default class textBox extends UiController{
    private _content: string;


public get content(): string {
    return this._content;
}
public set content(value: string) {
    this._content = value;
    this.notifyEventHandlers()
}

} 