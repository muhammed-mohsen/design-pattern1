import { EngineView } from './EngineView';
export default class MatchaViewEngine implements EngineView {
  public render(viewName: string, conttext: { [key: string]: any }): string {
    console.log(
      '🚀 ~ file: MatchaViewEngine.ts ~ line 3 ~ MatchaViewEngine ~ render ~ viewName',
      viewName,
      conttext,
    );
    return 'View rendered by MatchaViewEngine';
  }
}
