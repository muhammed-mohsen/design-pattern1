import Handler from './Handler';
import HttpRequest from './HttpRequest';
export default class Compressor extends Handler {
  public doHandle(request: HttpRequest): boolean {
    console.log('compress file', request.userName);
    return false;
  }
}
