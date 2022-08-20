import PointIcon from './PointIcon';
import { PointType } from './PointType';
export default class PointIconFactory {
  private pointIcon: { [key in PointType]: PointIcon } = <
    { [key in PointType]: PointIcon }
  >{};
  /**
   * getPointIcon
   */
  public getPointIcon(pointType: PointType) {
    if (!this.pointIcon[pointType]) {
      const icon = new PointIcon(pointType, []);
      this.pointIcon[pointType] = icon;
    }
    return this.pointIcon[pointType];
  }
}
