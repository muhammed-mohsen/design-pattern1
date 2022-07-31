import HttpRequest from './HttpRequest';
export default abstract class Handler {
  private _next: Handler;

  constructor(_next: Handler) {
    this._next = _next;
  }
  /**
   * handle
   */
  public handle(request: HttpRequest) {
    if (this.doHandle(request)) return;
    if (this._next) this._next.handle(request);
  }
  /**
   * doHandle
   */
  public abstract doHandle(request: HttpRequest): boolean;
}
