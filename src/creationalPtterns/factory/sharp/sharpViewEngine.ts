import { EngineView } from '../Matcha/EngineView';
export default class sharpViewEngine implements EngineView {
  render(viewName: string, conttext: { [key: string]: any }): string {
    console.log(
      '🚀 ~ file: sharpViewEngine.ts ~ line 4 ~ sharpViewEngine ~ render ~ viewName',
      viewName,
      conttext,
    );

    return 'Rendered by Sharp ';
  }
}
