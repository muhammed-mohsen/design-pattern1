import HtmlNode from './HtmlNode';
import Operation from './Operation';
export default class AnchorTag implements HtmlNode {
  execute(operation: Operation) {
    operation.apply(this);
  }
}
