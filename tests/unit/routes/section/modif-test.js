import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | section/modif', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:section/modif');
    assert.ok(route);
  });
});
