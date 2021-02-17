import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsAddRoute extends Route {
  model() {
    return this.store.createRecord('contact', {
    });
  }

  @action
  add(contact) {
    contact.save();
  }
  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(() => this.transitionTo('contacts'));
  }
}
