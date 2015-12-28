import Ember from 'ember';
import WorkingIndicatorMixin from '../../../mixins/working-indicator';
import { module, test } from 'qunit';

module('Unit | Mixin | working indicator');

// Replace this with your real tests.
test('it works', function(assert) {
  let WorkingIndicatorObject = Ember.Object.extend(WorkingIndicatorMixin);
  let subject = WorkingIndicatorObject.create();
  assert.ok(subject);
});
