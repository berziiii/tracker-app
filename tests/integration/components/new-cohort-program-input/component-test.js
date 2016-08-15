import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-cohort-program-input', 'Integration | Component | new cohort program input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-cohort-program-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-cohort-program-input}}
      template block text
    {{/new-cohort-program-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
