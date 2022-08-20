import Caramel from './Caramel/Caramel';
import Filter from './Filter';
import Image from './Image';
export default class CaramelFilter implements Filter {
  private _filter: Caramel;
  constructor(_filter: Caramel) {
    this._filter = _filter;
  }
  apply(image: Image): void {
    console.log(
      '🚀 ~ file: CaramelFilter.ts ~ line 10 ~ CaramelFilter ~ apply ~ image',
      image,
    );
    this._filter.intial();
    this._filter.render();
  }
}
