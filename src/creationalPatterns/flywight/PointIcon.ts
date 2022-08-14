import { PointType } from './PointType';
export default class PointIcon {
  private _pointType: PointType;

  private _icon: any[]; //20 kb

  constructor(pointType: PointType, icon: any[]) {
    this.pointType = pointType;
    this.icon = icon;
  }

  public get pointType(): PointType {
    return this._pointType;
  }
  public set pointType(value: PointType) {
    this._pointType = value;
  }
  public get icon(): any[] {
    return this._icon;
  }
  public set icon(value: any[]) {
    this._icon = value;
  }
}
