import Widget from '../Widget';
import WidgetFactory from '../WidgetFactory';
import AntButton from './AntButton';
import AntTextBox from './AntTextBox';
export default class AntWidgetFactory implements WidgetFactory {
  createTextBox(): Widget {
    return new AntTextBox();
  }
  createButton(): Widget {
    return new AntButton();
  }
}
