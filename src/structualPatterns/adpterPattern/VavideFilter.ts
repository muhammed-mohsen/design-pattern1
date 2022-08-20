import Filter from './Filter';
import Image from './Image';
export default class VavideFilter implements Filter {
  apply(image: Image): void {
    console.log('applying Vavid filter', image);
  }
}
