import Component from './Component';

export default class Circle implements Component {
  private _radius: number;

  render(): void {
    console.log('rendering circle');
  }
  clone(): Component {
    const circle = new Circle();
    circle.radius = this.radius;
    return circle;
  }
  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }
}

// import Library from './structualPatterns/proxy/Library';
// import ProxyEbook from './structualPatterns/proxy/ProxyEbook';
// const fileNames = ['a', 'b', 'c'];
// const library = new Library();
// fileNames.forEach((fileName) => {
//   library.add(new ProxyEbook(fileName));
// });

// library.openBook('a');
// library.openBook('b');
