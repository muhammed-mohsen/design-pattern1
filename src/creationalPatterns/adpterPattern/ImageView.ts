import Filter from './Filter';
import Image from './Image';
export default class ImageView {
  private _image: Image;

  constructor(_image: Image) {
    this._image = _image;
  }

  /**
   * apply
   */
  public apply(filter: Filter) {
    filter.apply(this._image);
  }
}

// import Caramel from './creationalPatterns/adpterPattern/Caramel/Caramel';
// import CaramelFilter from './creationalPatterns/adpterPattern/CaramelFilter';
// import Image from './creationalPatterns/adpterPattern/Image';
// import ImageView from './creationalPatterns/adpterPattern/ImageView';
// import VavideFilter from './creationalPatterns/adpterPattern/VavideFilter';

// const imageView = new ImageView(new Image());
// const vavidFilter = new VavideFilter();
// const caramelFilter = new CaramelFilter(new Caramel());
// imageView.apply(vavidFilter);
// imageView.apply(caramelFilter);
