import Button from './Button';
import DialogBox from './DialogBox';
import ListBox from './ListBox';
import textBox from './TextBox';
import UiController from './UiController';
export default  class ArtDialogBox extends DialogBox{
    private _saveButton = new Button(this)
    private _ArticleListBox = new ListBox(this)
    private _TitleTextBox = new textBox(this)

    public simulateUser (){
        this._ArticleListBox.selected = "hello"
        this._TitleTextBox.content = ""
        console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 13 ~ ArtDialogBox ~ simulateUser ~ this._ArticleListBox", this._ArticleListBox.selected)
        console.log("TextBox: ",this._TitleTextBox.content)
        console.log("Button: ",this._saveButton.enable)

    }
    public changed(control:UiController): void {
        if(control === this._ArticleListBox)
        this.articleSelected()
        if(control === this._TitleTextBox)
        this.titleChanged()
        

    }
    private  articleSelected(){
        console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 28 ~ ArtDialogBox ~ articleSelected ~ this._ArticleListBox.selected", this._ArticleListBox.selected)
        this._TitleTextBox.content = this._ArticleListBox.selected
        this._saveButton.enable =true
    }
    private  titleChanged(){
        console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 33 ~ ArtDialogBox ~ titleChanged ~ titleChanged")
        const content =   this._TitleTextBox.content
        console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 35 ~ ArtDialogBox ~ titleChanged ~ content", content,!content)
          
        // console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 35 ~ ArtDialogBox ~ titleChanged ~ isEmpty", isEmpty)
        this._saveButton.enable = !!content
        console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 39 ~ ArtDialogBox ~ titleChanged ~  this._saveButton.enable ",  this._saveButton.enable )
    }
   
} 