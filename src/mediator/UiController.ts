import DialogBox from './DialogBox';
export default class UiController{
    protected _owner:DialogBox

  constructor(_owner: DialogBox) {
    this._owner = _owner
  }

} 
// import ArtDialogBox from "./mediatorWithObserver/ArticleDialogBox"

// const articleDialogBox = new ArtDialogBox()
// articleDialogBox.simulateUser()