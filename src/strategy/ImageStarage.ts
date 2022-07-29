import { Compressor } from './Compressor';
import { Filter } from './Filter';
export class imageStorage{
    public store(compressor:Compressor,filter:Filter){
        compressor.compress();
        filter.apply();
    }
}

// import { BWFilter } from './strategy/BWFilter';
// import { imageStorage } from './strategy/ImageStarage';
// import { PngCompressor } from './strategy/PngCompressor';
// const imageStorageVar = new imageStorage();
// imageStorageVar.store(new PngCompressor(),new BWFilter())