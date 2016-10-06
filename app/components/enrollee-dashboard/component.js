import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAdmin: Ember.computed.alias('auth.credentials.admin'),

});
