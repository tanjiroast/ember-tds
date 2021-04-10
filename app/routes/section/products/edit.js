import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionProductsEditRoute extends Route {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action back(model) {
    model.rollbackAttributes();
    this.transitionTo('section.edit', model.section.get('id'));
  }

  @action update(model) {
    model.save().then(() => {
      this.transitionTo('section.edit', model.section.get('id'));
    });
  }
}
