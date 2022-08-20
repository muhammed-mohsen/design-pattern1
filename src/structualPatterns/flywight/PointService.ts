import Point from './Point';
import PointIconFactory from './PointIconFactory';
import { PointType } from './PointType';
export default class PointService {
  private _pointIconFactory: PointIconFactory;
  constructor(_pointIconFactory: PointIconFactory) {
    this._pointIconFactory = _pointIconFactory;
  }
  /**
   * getPoints
   */
  public getPoints(): Point[] {
    const point = new Point(
      3,
      4,
      this._pointIconFactory.getPointIcon(PointType.COFFEE),
    );
    const points: Point[] = [];
    points.push(point);
    return points;
  }
}
// import PointIconFactory from './creationalPatterns/flywight/PointIconFactory';
// import PointService from './creationalPatterns/flywight/PointService';
// const pointService = new PointService(new PointIconFactory());

// pointService.getPoints().forEach((point) => {
//   point.draw();
// });

//share file that contains large data
