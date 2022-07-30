import HtmlNode from './HtmlNode';
import Operation from './Operation';
export default class HtmlDocument {
  private _HtmlNodes: HtmlNode[] = [];
  /**
   * addNode
   */
  public addNode(node: HtmlNode) {
    this._HtmlNodes.push(node);
  }
  /**
   * execute
   */
  public execute(operation: Operation) {
    this._HtmlNodes.forEach((node) => {
      node.execute(operation);
    });
  }
}
