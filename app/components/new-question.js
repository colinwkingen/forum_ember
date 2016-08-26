import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        detail: this.get('detail') ? this.get('detail') : "",
        nsfw: this.get('nsfw') ? this.get('nsfw') : false,
        serious: this.get('serious') ? this.get('serious') : false,
        answers: []
      };
      this.sendAction('save2', params);
      this.set('title', '');
      this.set('author', '');
      this.set('detail', '');
    }
  }
});
