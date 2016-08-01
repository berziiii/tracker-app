import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('program', { path: '/programs/:id' });
  this.route('programs');
  this.route('cohort', { path: '/cohorts/:id' });
  this.route('enrollment');
  this.route('profiles');
  this.route('profile', { path: '/profiles/:id' });
  this.route('enrollments');
  this.route('diagnostics');
  this.route('practices');
  this.route('projects');
  this.route('attendences');
});

export default Router;
