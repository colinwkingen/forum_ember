import Ember from 'ember';

export function questionTags(params/*, hash*/) {
  var question = params[0];

  return question.get('author');
}

export default Ember.Helper.helper(questionTags);
