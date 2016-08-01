import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr('string'),
  start_date: attr('date'),
  end_date: attr('date'),
  market: attr('string'),
  program: belongsTo('program'),
  profiles: hasMany('profile'),
});
