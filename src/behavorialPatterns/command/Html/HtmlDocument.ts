export default class HtmlDocument {
    private _content = "";

    public  bold() {
      this._content =  "<B>"+ this._content+"</B>"
    }

    public get content() {
        return this._content;
    }
    public set content(value) {
        this._content = value;
    }
}