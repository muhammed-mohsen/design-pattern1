import TextBox from '../TextBox';

export default class MateriaTextBox implements TextBox {
  field: string;
  render() {
    console.log('material text Box');
  }
}
