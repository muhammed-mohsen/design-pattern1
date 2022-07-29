import DialogBox from './DialogBox';
import UiController from './UiController';
export default class ListBox extends UiController{
    private _selected: string;


    constructor(_owner: DialogBox) {
        super(_owner)
        this._owner = _owner
      }
    

      public get selected(): string {
        return this._selected;
    }
    public set selected(value: string) {
        this._selected = value;
        this._owner.changed(this)
    }
  

} 