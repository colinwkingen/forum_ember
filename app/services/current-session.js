import Ember from 'ember';

export default Ember.Service.extend({
  questions: 0,
  answers: 0,

  asked() {
    this.set('questions', this.get('questions') + 1);
  },
  answered() {
    this.set('answers', this.get('answers') + 1);
  }
});
