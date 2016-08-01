import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  actions: {
    createProgram(data) {
      let program = this.get('store').createRecord('program', data);
      // this.transitionTo('programs');
      return program.save()
      .then(() => this.transitionTo('programs'));
    },

    goToPrograms() {
      this.transitionTo('programs');
    },
  },
});
