export default class HttpRequest {
  private _userName = 'admin';
  private _password = 'password';
  public get userName() {
    return this._userName;
  }
  public set userName(value) {
    this._userName = value;
  }
  public get password() {
    return this._password;
  }
  public set password(value) {
    this._password = value;
  }
}
