import Movie from './Movie';
import PresentationBuilder from './PresentationBuilder';
import Slide from './Slide';
export default class MovieBuilder implements PresentationBuilder {
  private _movie = new Movie();
  addSlide(slide: Slide): void {
    this._movie.addFrame(slide.text, 3);
  }
  /**
   * geMovie
   */
  public geMovie() {
    return this._movie;
  }
}
