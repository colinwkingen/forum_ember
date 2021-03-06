import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  author: DS.attr(),
  content: DS.attr()
});
