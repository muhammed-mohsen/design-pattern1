import Controller from '../Matcha/Controller';
import MatchaViewEngine from '../Matcha/MatchaViewEngine';
import sharpViewEngine from './sharpViewEngine';

export default class SharpController extends Controller {
  protected viewEngine(): MatchaViewEngine {
    return new sharpViewEngine();
  }
}
