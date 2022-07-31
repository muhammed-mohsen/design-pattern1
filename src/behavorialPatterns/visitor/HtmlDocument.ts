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

// import AnchorTag from './visitor/AnchorTag';
// import HeadingTag from './visitor/HeadingTag';
// import HighlightingOperation from './visitor/HighlightingOperation';
// import HtmlDocument from './visitor/HtmlDocument';
// const anchorTag = new AnchorTag();
// const headingTage = new HeadingTag();
// const document = new HtmlDocument();
// const hilight = new HighlightingOperation();
// document.addNode(anchorTag);
// document.addNode(headingTage);
// document.execute(hilight);
