import { Observer } from './Observer';
export default class Chart implements Observer{
    update(): void {
        console.log("updating chart")
    }

}