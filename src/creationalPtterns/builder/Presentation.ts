import PresentationBuilder from './PresentationBuilder';
import Slide from './Slide';
export default class Presentation {
  private _slides: Slide[] = [];

  /**
   * addSlide
   */
  public addSlide(slide: Slide) {
    this._slides.push(slide);
  }
  /**
   * export
   */
  public export(builder: PresentationBuilder) {
    builder.addSlide(new Slide('Copyright '));

    this._slides.forEach((slide) => {
      builder.addSlide(slide);
    });
  }
  //     if (format === PresentationFormat.PDF) {
  //       const pdf = new PdfDocument();
  //       this._slides.forEach((slide) => {
  //         pdf.addPage(slide.text);
  //       });
  //     }
  //     if (format === PresentationFormat.MOVIE) {
  //       const movie = new Movie();
  //       this._slides.forEach((slide) => {
  //         movie.addFrame(slide.text, 33);
  //       });
  //     }
  //   }
}
