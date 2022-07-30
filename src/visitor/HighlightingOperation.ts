import AnchorTag from './AnchorTag';
import HeadingTag from './HeadingTag';
import Operation from './Operation';
export default class HighlightingOperation implements Operation {
  apply(operation: AnchorTag);
  apply(operation: HeadingTag);
  apply(operation: AnchorTag | HeadingTag): void {
    if (operation.constructor.name === 'HeadingTag') {
      console.log('highlighting Heading');
    }
    if (operation.constructor.name === 'AnchorTag') {
      console.log('highlighting Anchor Tag');
    }
  }
}
