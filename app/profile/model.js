import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  first_name: attr('string'),
  last_name: attr('string'),
  gender: attr('string'),
  phone_number: attr('string'),
  github_username: attr('string'),
  user: belongsTo('user'),
  cohorts: hasMany('cohort'),
  attendences: hasMany('attendence'),
});
