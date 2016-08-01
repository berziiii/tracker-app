import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  program: {},

  actions: {
    createProgram () {
      this.sendAction('createProgram', this.get('program'));
    },

    goToPrograms () {
      this.set('program', {});
      this.sendAction('goToPrograms');
    }
  },
});
