import Device from './Device';
import RemoteControl from './RemoteControl';
export default class AdvancedRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  /**
   * setChannel
   */
  public setChannel(channel: number): void {
    this._device.setChannel(channel);
  }
}
