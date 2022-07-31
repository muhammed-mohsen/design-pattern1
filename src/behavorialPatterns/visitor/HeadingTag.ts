import HtmlNode from './HtmlNode';
import Operation from './Operation';

export default class HeadingTag implements HtmlNode {
  execute(operation: Operation) {
    operation.apply(this);
  }
}
