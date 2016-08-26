import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestion() {
      this.set('updateQuestion', true);
    },
    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        detail: this.get('detail')

      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
