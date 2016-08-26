import Ember from 'ember';

export default Ember.Component.extend({
  currentSession: Ember.inject.service(),
  actions: {
    answer1() {
      console.log("answer1");
      var params = {
        author: this.get('author') ? this.get('author') : "",
        question: this.get('question') ? this.get('question') : "",
        content: this.get('content') ? this.get('content') : ""
      };
      this.get('currentSession').answered();
      this.sendAction('answer2', params);
      this.set('author', '');
      this.set('content', '');
    }
  }

});
