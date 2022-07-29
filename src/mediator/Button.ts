import DialogBox from './DialogBox';
import UiController from './UiController';
export default class Button extends UiController{
    private _enable: boolean;
  


    constructor(_owner: DialogBox) {
        super(_owner)
        this._owner = _owner
      }
    

  public get enable(): boolean {
    return this._enable;
}
public set enable(value: boolean) {
    this._enable = value;
    this._owner.changed(this)

}
} 