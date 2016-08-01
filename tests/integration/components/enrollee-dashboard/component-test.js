import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enrollee-dashboard', 'Integration | Component | enrollee dashboard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enrollee-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enrollee-dashboard}}
      template block text
    {{/enrollee-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
