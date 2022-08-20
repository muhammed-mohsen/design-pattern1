export default class Message {
  private _content: string;

  constructor(content: string) {
    this._content = content;
    console.log(
      '🚀 ~ file: Message.ts ~ line 6 ~ Message ~ constructor ~  this._conten',
      this._content,
    );
  }
}
