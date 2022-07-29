import { Observer } from './Observer';
export default class SpreedSheet implements Observer{
    update(): void {
        console.log("updating spreed sheet")
    }

}