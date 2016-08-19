import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        category: this.get('category') ? this.get('category') : "",
        comments: []
      };
      this.sendAction('save2', params);
    }
  }
});
