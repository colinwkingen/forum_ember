import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      console.log(this.get('nsfw'));
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        detail: this.get('detail') ? this.get('detail') : "",
        nsfw: this.get('nsfw'),
        serious: this.get('serious'),
        answers: []
      };
      this.sendAction('save2', params);
      this.set('title', '');
      this.set('author', '');
      this.set('detail', '');
    }
  }
});
