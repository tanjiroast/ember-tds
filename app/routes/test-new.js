import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class TestNewRoute extends Route {
  model() {
    return {};
  }

  @action save(data) {
    let contact = this.store.createObject('contact', data);
    contact.save();
  }
}
