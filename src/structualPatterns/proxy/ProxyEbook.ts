import { IEbook } from './IEbook';
import RealEbook from './RealEbook';
export default class ProxyEbook implements IEbook {
  private _fileName: string;
  private _ebook: RealEbook;

  constructor(_fileName: string) {
    this._fileName = _fileName;
  }

  show(): void {
    if (!this._ebook) {
      const ebook = new RealEbook(this._fileName);
      this._ebook = ebook;
    }
    this._ebook.show();
  }

  public get fileName() {
    return this._fileName;
  }
}
