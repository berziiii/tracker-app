import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('program-list/cohorts', 'Integration | Component | program list/cohorts', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{program-list/cohorts}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#program-list/cohorts}}
      template block text
    {{/program-list/cohorts}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
