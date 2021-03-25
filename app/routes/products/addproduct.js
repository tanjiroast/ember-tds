
import Abstractroute from '../abstractroute';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SectionsAddProductRoute extends Abstractroute {
  @service userAuth;
  model() {
    return this.store.createRecord('product', {});
  }
  @action add(section) {
    section.save();
  }
  @action save(data) {
    let section = this.store.createRecord('product', data);
    section.save().then(() => this.transitionTo('board'));
  }
  @action logout() {
    this.userAuth.logout();
    this.transitionTo('index');
  }

}
