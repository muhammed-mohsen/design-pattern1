import Handler from './Handler';
import HttpRequest from './HttpRequest';
export default class Log extends Handler {
  //   constructor(request: Handler) {
  //     super(request);
  //   }

  public doHandle(request: HttpRequest): boolean {
    console.log(request.password, 'password');
    return false;
  }
}
