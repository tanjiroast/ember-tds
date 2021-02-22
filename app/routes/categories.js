import Route from '@ember/routing/route';
import MyCategories from 'tds/classes/contacts';

export default class CategoriesRoute extends Route {
  model() {
    return new MyCategories(this.store.findAll('category'));
  }
  afterModel(model) {
    this.store.findAll('contact');
    if (model.length > 0) {
      this.transitionTo(`categories.contacts`, model.get('firstObject').id);
    }
  }
}
