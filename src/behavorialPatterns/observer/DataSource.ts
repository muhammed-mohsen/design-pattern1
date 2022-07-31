import { Subject } from "./Subject";

export default class DataSource extends Subject{
    private _value: string;
    public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this.notifyObservers()
        this._value = value;
    }



}