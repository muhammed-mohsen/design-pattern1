import PointIcon from './PointIcon';
export default class Point {
  private _x: number; //4 bytes
  private _y: number; // 4 bytes
  private _pointIcon: PointIcon;

  constructor(_x: number, _y: number, pointIcon: PointIcon) {
    this._x = _x;
    this._y = _y;
    this._pointIcon = pointIcon;
  }
  /**
   * draw
   */
  public draw() {
    console.log(
      `${this._pointIcon.pointType} at (${this._x},${this._y}) ${this._pointIcon.icon}`,
    );
  }
}
