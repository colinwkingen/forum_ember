import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestion(question, params) {
      this.sendAction('update', question, params);
    };
  }
});
