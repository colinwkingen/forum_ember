import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    save3(params) {
      console.log(params);
      var newQuestion = this.store.createRecord('question', params);
      console.log(newQuestion);
      newQuestion.save();
    },
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }

});
