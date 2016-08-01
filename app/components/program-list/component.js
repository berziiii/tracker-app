import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteProgram() {
      this.get('program').destroyRecord()
      .then(() => this.sendAction('goToPrograms'));
    }
  },
});
