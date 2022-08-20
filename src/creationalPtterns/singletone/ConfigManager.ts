export default class ConfigManager {
  private _settings: { [key: string]: any } = {};
  private static _instance = new ConfigManager();

  private constructor() {}

  public get settings(): { [key: string]: any } {
    return this._settings;
  }
  public set settings(value: { [key: string]: any }) {
    this._settings = value;
  }
  public static get instance() {
    return ConfigManager._instance;
  }
  public static set instance(value) {
    ConfigManager._instance = value;
  }
}

// import ConfigManager from './creationalPtterns/singletone/ConfigManager';
// const config = ConfigManager.instance;
// config.settings.name = 'muhammmed';
// config.settings.val = { hell: 'sfds' };

// const newConfig = ConfigManager.instance;
// console.log(
//   '🚀 ~ file: main.ts ~ line 8 ~ newConfig.settings.name',
//   newConfig.settings.name,
// );
