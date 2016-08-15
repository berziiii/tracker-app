import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],

  cohort: {},

  actions: {
    create() {
      this.sendAction('createCohort', this.get('cohort'));
    },

    reset() {
      this.sendAction('goToProgram');
    },

  },
});
