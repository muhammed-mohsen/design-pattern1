import { IEbook } from './IEbook';
export default class Library {
  private ebooks: { [key: string]: IEbook } = <{ [key: string]: IEbook }>{};
  /**
   * add
   */
  public add(ebook: IEbook) {
    this.ebooks[ebook.fileName] = ebook;
  }
  /**
   * openBook
   */
  public openBook(fileName: string) {
    this.ebooks[fileName]?.show();
  }
}
