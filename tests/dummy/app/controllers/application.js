import Ember from 'ember';
import timemachine from 'timemachine';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  theDate: computed({
    get() {
      timemachine.reset();
      timemachine.config({
          dateString: 'December 25, 1991 13:12:59'
      });

      return new Date();
    }
  }).readOnly()
});
