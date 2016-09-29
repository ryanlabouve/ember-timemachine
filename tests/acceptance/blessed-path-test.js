import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import timemachine from 'timemachine';

moduleForAcceptance('Acceptance | blessed path');

test('visiting without patched date', function(assert) {
  visit('/');

  let currentDate = new Date();
  let oldDate = new Date();
  oldDate.setYears(2010);

  andThen(function() {
    find('.listed-date').text(),
    currentDate.toDateString();
  });
});

test('visiting with patched date', function(assert) {
  visit('/');

  let oldDate = new Date();
  oldDate.setYears(2010);

  timemachine.config({
    dateString: oldDate.toDateString()
  });

  andThen(function() {
    find('.listed-date').text(),
    currentDate.toDateString();
  });
});
