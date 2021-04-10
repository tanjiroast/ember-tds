import Abstractroute from '../../abstractroute';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsProductsAddProductRoute extends Abstractroute {
  model(params) {
    console.log(params.section_id);
    return RSVP.hash({
      product: {},
      section: this.store.findRecord('section', params.section_id),
    });
  }

  @action save(model) {
    console.log(model.section);
    model.product.section = model.section;
    let post = this.store.createRecord('product', model.product);
    post.save().then(() => {
      this.transitionTo('section.edit', model.product.section.id);
    });
  }
}
