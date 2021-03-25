import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | products/addproduct', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:products/addproduct');
    assert.ok(route);
  });
});
