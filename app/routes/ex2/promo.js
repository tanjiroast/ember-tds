import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex2PromoRoute extends Route {
  model(){
    return this.modelFor('ex2');
  }

  @tracked content = '';

  @action
  valider(){
    this.model().coefPromo();
  }
}
