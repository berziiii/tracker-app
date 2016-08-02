import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  day: attr('date'),
  option: attr('string'),
  note: attr('string'),
  profile: belongsTo('profile')
});
