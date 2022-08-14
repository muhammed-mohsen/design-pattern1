import AuthToken from './AuthToken';
import Message from './Message';
import NotificationServer from './NotificationServer';
export default class NotificationService {
  /**
   * send
   */
  public send(msg: string, target: string) {
    const authToken = new AuthToken();
    const server = new NotificationServer();
    const connection = server.connect('ip');
    server.send(authToken, new Message(msg), target);
    connection.disconnect();
  }
  //   import NotificationService from './creationalPatterns/facade/NotificationService';
  // const notification = new NotificationService();
  // notification.send('hell', 'ip');
}
