import Handler from './Handler';
import HttpRequest from './HttpRequest';
export default class WebServer {
  private _handler: Handler;

  constructor(_handler: Handler) {
    this._handler = _handler;
  }

  /**
   * hadle
   */
  public handle(request: HttpRequest) {
    this._handler.handle(request);
  }
}

// import Authentication from './chainOfResponsibilty/Authentication';
// import Compressor from './chainOfResponsibilty/Compressor';
// import HttpRequest from './chainOfResponsibilty/HttpRequest';
// import Log from './chainOfResponsibilty/Log';
// import WebServer from './chainOfResponsibilty/WebServer';
// const compress = new Compressor(null);
// const log = new Log(compress);
// const authentication = new Authentication(log);
// const request = new HttpRequest();
// const webServer = new WebServer(authentication);
// webServer.handle(request);
