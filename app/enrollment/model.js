import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  cohort: belongsTo('cohort', {
    inverse: 'enrollments'
  }),
  profile: belongsTo('profile', {
    inverse: 'enrollments'
  }),
  
});
