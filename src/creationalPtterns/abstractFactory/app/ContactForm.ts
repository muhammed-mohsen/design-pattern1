import WidgetFactory from '../WidgetFactory';
export default class ContactForm {
  /**
   * render
   */
  public render(factory: WidgetFactory) {
    factory.createButton().render();
    factory.createTextBox().render();
  }
}

// import ContactForm from './creationalPtterns/abstractFactory/app/ContactForm';
// import MaterialWidgetFactory from './creationalPtterns/abstractFactory/material/MaterialWidgetFactory';
// const form = new ContactForm();
// form.render(new MaterialWidgetFactory());
