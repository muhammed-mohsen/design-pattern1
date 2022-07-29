import { EventHandler } from './EventHandler';
export default abstract class UiController{
protected _eventHandlers:EventHandler[]=[];

public addEventHandler(event:EventHandler){
  this._eventHandlers.push(event)
}
protected notifyEventHandlers(){
  this._eventHandlers.forEach(eventHandler=>{
    eventHandler.handle()
  })
}
} 