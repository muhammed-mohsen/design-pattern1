import AnchorTag from './AnchorTag';
import HeadingTag from './HeadingTag';
export default interface Operation {
  apply(operation: AnchorTag);
  apply(operation: HeadingTag);
}
