import { Observer } from './Observer';
export  class Subject {
    private _observers:Observer[]=[]
    public addObserver(observer:Observer){
        this._observers.push(observer)
    }
    public popObserver(observer:Observer){
        console.log("🚀 ~ file: Subject.ts ~ line 8 ~ Subject ~ popObserver ~ observer", observer)
        this._observers.pop()
    }
    public notifyObservers(){
        console.log("🚀 ~ file: Subject.ts ~ line 15 ~ Subject ~ notifyObservers ~ this._observers", this._observers)
        this._observers.forEach(observer=>{
            observer.update()
        })
    }
}
// import Chart from './observer/Chart';
// import DataSource from "./observer/DataSource";
// import SpreedSheet from "./observer/SpreedSheat";

// const spreedSheet = new SpreedSheet()
// const spreedSheet2 = new SpreedSheet()
// const chart = new Chart()

// const source = new DataSource()
// source.addObserver(spreedSheet)
// source.addObserver(spreedSheet2)
// source.addObserver(chart)
// source.value = "muhammed"