import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    answer3(params) {
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      params.question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return params.question.save();
      });
    }
  }
});
