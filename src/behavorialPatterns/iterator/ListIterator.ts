import { BrowseHistory } from './BrowseHistory';
import Iterator from "./Iterator";

export  class ListIterator implements Iterator {
    private _history:BrowseHistory
    private _index = 0;

	constructor(browserHistory:BrowseHistory) {
        this._history = browserHistory
	}
    
    hasNext(): boolean {
        return  this._index<this._history.urls.length

    }
    public get() {
        
        return   this._history.urls[this._index];
    } 
    current() {
        return this.get() 
    }
    next(): void {
        this._index++
    }
         
} 


// import { BrowseHistory } from './iterator/BrowseHistory';
// const browseHistory = new BrowseHistory()
// browseHistory.push('sfasfdsa')
// browseHistory.push('sfasfdsasdsaads')
// browseHistory.push('sfasfdsasds23333')
// const itrator = browseHistory.createItrator();

// while(itrator.hasNext())
// {
//     console.log(itrator.current())
//     itrator.next()
// }