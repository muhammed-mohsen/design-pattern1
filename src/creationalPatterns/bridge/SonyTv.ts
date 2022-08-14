import Device from './Device';

export default class SonyTv implements Device {
  public turnOn(): void {
    console.log('Sony: turn ON');
  }
  public turnOff(): void {
    console.log('Sony: turn OFF');
  }
  public setChannel(channel: number): void {
    console.log('Sont: set channel' + channel);
  }
}

// import AdvancedRemoteControl from './creationalPatterns/bridge/AdvancedRemoteControl';
// import SonyTv from './creationalPatterns/bridge/SonyTv';
// // const remotControl = new RemoteControl(new SonyTv());
// const advancedRemotControl = new AdvancedRemoteControl(new SonyTv());
// advancedRemotControl.turnOn();
// advancedRemotControl.setChannel(1);
// advancedRemotControl.turnOff();
