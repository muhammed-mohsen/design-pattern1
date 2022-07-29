import { Filter } from './Filter';
export class BWFilter implements Filter{
    apply(): string {
        console.log('BW not implemented.');
        return "sdss"
    }

}