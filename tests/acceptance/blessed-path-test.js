import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import timemachine from 'timemachine';

moduleForAcceptance('Acceptance | blessed path');

test('the date object works', function(assert) {
  assert.expect(1);
  visit('/');

  let currentDate = new Date();

  andThen(function() {
    assert.equal(
      find('.listed-date').text().trim(),
      currentDate.toDateString(),
      `We don't nuke the current date by default`
    );
  });
});

test('We don\'t obliterate the date', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(function() {

    timemachine.reset();
    let currentDate = new Date();
    assert.equal(
      find('.listed-date').text().trim(),
      currentDate.toDateString(),
      `We don't nuke the current date by default`
    );
  });
});

test('visiting with patched date', function(assert) {
  assert.expect(1);
  visit('/');

  let oldDate = new Date();
  oldDate.setYear(2010);

  timemachine.config({
    dateString: oldDate.toDateString()
  });

  andThen(function() {
    assert.equal(
      find('.listed-date').text().trim(),
      oldDate.toDateString(),
      'We successfully reset the old date'
    );
  });
});
