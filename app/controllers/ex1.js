import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content = "entrez votre texte";
  @tracked info="";

  get style(){

  }
  get size(){

  }

  @action clear(){
    this.info=info
  }

  @action save(info){
    this.info=info
  }

  @action update(){

  }
}
