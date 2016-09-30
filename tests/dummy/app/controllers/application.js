import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  theDate: computed({
    get() {
      let d = new Date();
      return d.toDateString();
    }
  }).readOnly()
});
