export interface EngineView {
  render(viewName: string, conttext: { [key: string]: any }): string;
}
