import { ListIterator } from './ListIterator';
export class BrowseHistory {
    private _urls: string[] = [];

    public createItrator(){
        return new ListIterator(this);
    }
    public push(url: string) {
            this._urls.push(url)
    }
    public pop() {
            this._urls.pop()
         return   this._urls.at(-1)
    }
  
    public get urls(): string[] {
        return this._urls;
    }
    public set urls(value: string[]) {
        this._urls = value;
    }

  
}