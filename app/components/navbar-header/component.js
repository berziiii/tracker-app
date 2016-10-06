import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAdmin: Ember.computed.alias('auth.credentials.admin'),
  profile: Ember.computed.alias('auth.credentials.profile.id'),

  didInsertElement () {
    Ember.$('li').on('click', function () {
      Ember.$('#navigation').collapse('hide');
    });
  },

  tagName: 'div',
  classNames: ['navbar-header'],
});
