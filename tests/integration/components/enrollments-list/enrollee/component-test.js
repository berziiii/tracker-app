import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('enrollments-list/enrollee', 'Integration | Component | enrollments list/enrollee', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{enrollments-list/enrollee}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#enrollments-list/enrollee}}
      template block text
    {{/enrollments-list/enrollee}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
