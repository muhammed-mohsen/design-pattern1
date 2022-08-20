import { EngineView } from './EngineView';
import MatchaViewEngine from './MatchaViewEngine';
export default class Controller {
  public render(viewName: string, conttext: { [key: string]: any }) {
    const engine: EngineView = this.viewEngine();
    const html = engine.render(viewName, conttext);
    console.log(
      '🚀 ~ file: Controller.ts ~ line 11 ~ Controller ~ render ~ html',
      html,
    );
  }
  protected viewEngine() {
    return new MatchaViewEngine();
  }
}
