import DialogBox from './DialogBox';
import UiController from './UiController';
export default class textBox extends UiController{
    private _content: string;


    constructor(_owner: DialogBox) {
        super(_owner)
        this._owner = _owner
      }
    

public get content(): string {
    return this._content;
}
public set content(value: string) {
    this._content = value;
    this._owner.changed(this)

}

} 