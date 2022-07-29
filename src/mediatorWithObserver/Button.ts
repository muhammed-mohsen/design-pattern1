import UiController from './UiController';
export default class Button extends UiController{
    private _enable: boolean;
  


    

  public get enable(): boolean {
    return this._enable;
}
public set enable(value: boolean) {
    this._enable = value;
    this.notifyEventHandlers()
}
} 