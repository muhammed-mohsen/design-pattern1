import Controller from './Matcha/Controller';

export default class ProductController extends Controller {
  /**
   * listProducts
   */
  public listProducts() {
    const context: { [key: string]: any } = {};
    this.render('products.html', context);
  }
}

// import ProductController from './creationalPtterns/factory/ProductController';
// const product = new ProductController();
// product.listProducts();
