export default class Slide {
  private _text: string;

  constructor(_text: string) {
    this._text = _text;
  }

  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
}
