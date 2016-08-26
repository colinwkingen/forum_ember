import Ember from 'ember';

export function questionTags(params/*, hash*/) {
  var question = params[0];
  var tags = "";
  if (question.get('nsfw') === true ) {
    tags += "<span class='glyphicon glyphicon-alert'> NSFW</span>";
  }
  if (question.get('serious') === true ) {
    tags += "<span class='glyphicon glyphicon-alert'> Serious</span>";
  }

  return Ember.String.htmlSafe(tags);
}

export default Ember.Helper.helper(questionTags);
