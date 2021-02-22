import Model from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr('string') name;
}

