import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        detail: this.get('detail') ? this.get('detail') : "",
        answers: []
      };
      this.sendAction('save2', params);
    }
  }
});
