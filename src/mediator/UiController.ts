import DialogBox from './DialogBox';
export default class UiController{
    protected _owner:DialogBox

  constructor(_owner: DialogBox) {
    this._owner = _owner
  }

} 