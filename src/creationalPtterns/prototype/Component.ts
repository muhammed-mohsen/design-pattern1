export default interface Component {
  render(): void;
  clone(): Component;
}
