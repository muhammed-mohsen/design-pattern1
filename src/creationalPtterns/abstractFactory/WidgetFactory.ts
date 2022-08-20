import Widget from './Widget';
export default interface WidgetFactory {
  createTextBox(): Widget;
  createButton(): Widget;
}
