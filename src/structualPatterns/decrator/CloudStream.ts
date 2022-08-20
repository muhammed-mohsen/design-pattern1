import Stream from './Stream';

export default class CloudStream implements Stream {
  /**
   * write
   */
  public write(text: string) {
    console.log('write Cloud', text);
  }
}

// import CloudStream from './creationalPatterns/decrator/CloudStream';
// import CompressedStream from './creationalPatterns/decrator/CompressedStream';
// import EncryptStream from './creationalPatterns/decrator/EncryptStream';

// const stream = new EncryptStream(new CompressedStream(new CloudStream()));
// stream.write('sdfsf');
