import Handler from './Handler';
import HttpRequest from './HttpRequest';
export default class Authentication extends Handler {
  public doHandle(request: HttpRequest): boolean {
    if (request.password === 'password' && request.userName === 'admin')
      return false;
    return true;
  }
}
