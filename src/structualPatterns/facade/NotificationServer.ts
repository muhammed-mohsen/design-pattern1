import AuthToken from './AuthToken';
import Connection from './Connection';
import Message from './Message';
export default class NotificationServer {
  /**
   * connect
   */
  public connect(ipAddress: string) {
    console.log(
      '🚀 ~ file: NotificationServer.ts ~ line 7 ~ NotificationServer ~ connect ~ ipAddress',
      ipAddress,
    );
    return new Connection();
  }
  /**
   * authenticate
   */
  public authenticate(ipAddress: string, key: string) {
    console.log(
      '🚀 ~ file: NotificationServer.ts ~ line 18 ~ NotificationServer ~ authenticate ~ ipAddress',
      ipAddress,
      key,
    );
    return new AuthToken();
  }
  /**
   * send
   */
  public send(authToken: AuthToken, message: Message, target: string) {
    console.log('send a message to server', authToken, message, target);
  }
}
