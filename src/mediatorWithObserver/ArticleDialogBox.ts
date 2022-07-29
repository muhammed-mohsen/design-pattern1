import Button from './Button';
import ListBox from './ListBox';
import textBox from './TextBox';
export default  class ArtDialogBox {
    private _saveButton = new Button()
    private _ArticleListBox = new ListBox()
    private _TitleTextBox = new textBox()

  constructor() {
    this._ArticleListBox.addEventHandler({ handle: ()=>this.articleSelected()})
    this._TitleTextBox.addEventHandler({ handle: ()=>this.titleChanged()})
  }

    public simulateUser (){
        this._ArticleListBox.selected = "hello"
        this._TitleTextBox.content = ""
        console.log("TextBox: ",this._TitleTextBox.content)
        console.log("Button: ",this._saveButton.enable)

    }

    private  articleSelected(){
        console.log("🚀 ~ file: ArticleDialogBox.ts ~ line 24 ~ ArtDialogBox ~ articleSelected ~ this._ArticleListBox")
        this._TitleTextBox.content = this._ArticleListBox.selected
        this._saveButton.enable =true
    }
    private  titleChanged(){
        console.log("🚀 ~ file: ArticleDialogBox.ts ~ line 29 ~ ArtDialogBox ~ titleChanged ~ this._TitleTextBox")
        const content =   this._TitleTextBox.content
          
        // console.log("🚀 ~ file: ArticleDialogBoc.ts ~ line 35 ~ ArtDialogBox ~ titleChanged ~ isEmpty", isEmpty)
        this._saveButton.enable = !!content
    }
   
} 