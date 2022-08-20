import Stream from './Stream';

export default class CompressedStream implements Stream {
  private _stream: Stream;

  constructor(_stream: Stream) {
    this._stream = _stream;
  }

  /**
   * write
   */
  public write(text: string) {
    console.log('write  compressed Cloud');
    this._stream.write(text);
  }
}
