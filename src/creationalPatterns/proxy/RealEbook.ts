import { IEbook } from './IEbook';
export default class RealEbook implements IEbook {
  private _fileName: string;

  constructor(_fileName: string) {
    this._fileName = _fileName;
    this.load();
  }

  /**
   * load
   */
  public load() {
    console.log('loading the Ebook ' + this._fileName);
  }
  /**
   * show
   */
  public show() {
    console.log('Showing the Ebook ' + this._fileName);
  }
  public get fileName() {
    return this._fileName;
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
}
