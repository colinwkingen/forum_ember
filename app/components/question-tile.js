import Ember from 'ember';

export default Ember.Component.extend({

  questionInfo: Ember.computed('question.answers', function() {
    var answerNumber = this.get('question.answers.length');
    if ( !answerNumber) {
      return "No answers yet!";
    } else if (answerNumber === 1){
      return "This only has " + answerNumber.toString() + " answer.";
    } else if (answerNumber < 5) {
      return "This currently has " + answerNumber.toString() + " answers.";
    } else {
      return "This question is on fire with " + answerNumber.toString() + " answers.";
    }
  }),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
