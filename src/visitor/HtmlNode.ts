import Operation from './Operation';
export default interface HtmlNode {
  execute(operation: Operation);
}
