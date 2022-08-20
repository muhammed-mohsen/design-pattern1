import WidgetFactory from '../WidgetFactory';
import MaterialButton from './MaterialButton';
import MateriaTextBox from './MateriaTextBox';
export default class MaterialWidgetFactory implements WidgetFactory {
  createTextBox() {
    return new MateriaTextBox();
  }
  createButton() {
    return new MaterialButton();
  }
}
