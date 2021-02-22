import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesAddRoute extends Route {
  model(){
    return {};
  }

  @action save(cat){
    let category = this.store.createRecord('category', cat);
    category.save().then(
      ()=>this.transistionTo('categories')
    );
  }
}
