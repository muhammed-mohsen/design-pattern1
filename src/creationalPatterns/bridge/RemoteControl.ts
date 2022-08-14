import Device from './Device';
export default class RemoteControl {
  protected _device: Device; // this is the bridge between implementation and feature classes

  constructor(_device: Device) {
    this._device = _device;
  }

  public turnOn(): void {
    this._device.turnOn();
  }
  public turnOff(): void {
    this._device.turnOff();
  }
}
