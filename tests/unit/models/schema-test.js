import { moduleForModel, test } from 'ember-qunit';

moduleForModel('schema', 'Unit | Model | schema', {
  // Specify the other units that are required for this test.
  needs: ["model:table"]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});