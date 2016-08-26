import Ember from 'ember';

export default Ember.Service.extend({
  questions: 0,
  answers: 0,

  answered() {
    this.set('questions', this.get('questions') + 1);
  },
  asked() {
    this.set('answers', this.get('answers') + 1);
  }
});
