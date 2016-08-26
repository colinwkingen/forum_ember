import Ember from 'ember';

export default Ember.Component.extend({

  questionInfo: Ember.computed('question.answers', function() {
    if (!this.get('question.answers')) {
      return "No answers yet!";
    } else {
      return "Some answers.";
    }
  }),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
