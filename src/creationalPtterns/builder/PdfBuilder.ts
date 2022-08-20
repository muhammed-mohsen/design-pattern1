import PresentationBuilder from './PresentationBuilder';
import Slide from './Slide';
import PdfDocument from './PdfDocument';
export default class PdfBuilder implements PresentationBuilder {
  private _pdf = new PdfDocument();
  addSlide(slide: Slide): void {
    this._pdf.addPage(slide.text);
  }
  /**
   * getPdf
   */
  public getPdf() {
    return this._pdf;
  }
}
