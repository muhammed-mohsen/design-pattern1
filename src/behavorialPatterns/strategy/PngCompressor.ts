import { Compressor } from './Compressor';
export class PngCompressor implements Compressor{
    compress(): string {
        console.log('Png not compressed.');
        return "Png not compressed"
    }

}