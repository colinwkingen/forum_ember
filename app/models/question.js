import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  detail: DS.attr(),
  nsfw: DS.attr(),
  serious: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
