import PdfBuilder from './creationalPtterns/builder/PdfBuilder';
import Presentation from './creationalPtterns/builder/Presentation';
import Slide from './creationalPtterns/builder/Slide';
const presentaion = new Presentation();
presentaion.addSlide(new Slide('slide 1'));
presentaion.addSlide(new Slide('slide 2'));
presentaion.export(new PdfBuilder());
