import Button from '../Button';
export default class AntButton implements Button {
  submit: string;
  render() {
    console.log('ant Button');
  }
}
