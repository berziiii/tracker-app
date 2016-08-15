import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
   return this.get('store').findRecord('program', params.id);
  },

  actions: {
    createCohort(data) {
      let cohort = this.get('store').createRecord('cohort', data);
      console.log(this.get('cohort'));
      return cohort.save()
      .then((cohort) => this.transitionTo('program', cohort.program_id));
    },

    goToProgram(program) {
      this.transitionTo('program', program.id);
    }
  },
});
