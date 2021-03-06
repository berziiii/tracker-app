import Ember from 'ember';

export default Ember.Route.extend({
  // auth: Ember.inject.service(),
  model(params) {
    return this.get('store').findRecord('program', params.id);
  },

  actions: {
    goToPrograms () {
      this.transitionTo('programs');
    }
  },

});
