import Component from './Component';
export default class ContextMenu {
  /**
   * duplicate
   */
  public duplicate(component: Component) {
    component.clone();
  }
}
