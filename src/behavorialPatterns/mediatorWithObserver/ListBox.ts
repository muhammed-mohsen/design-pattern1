import UiController from './UiController';
export default class ListBox extends UiController{
    private _selected: string;



    

      public get selected(): string {
        return this._selected;
    }
    public set selected(value: string) {
        this._selected = value;
        console.log("🚀 ~ file: ListBox.ts ~ line 14 ~ ListBox ~ setselected ~ value", value)
        this.notifyEventHandlers()
    }
  

} 