import Component from './Component';
export default class Group implements Component {
  private _objects: Component[] = [];

  render(): void {
    this._objects.forEach((obj) => {
      obj.render();
    });
  }
  /**
   * add
   */
  public add(obj: Component) {
    this._objects.push(obj);
  }
}
