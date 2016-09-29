/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-timemachine',
  included: function included(app) {
    if (app.app) app = app.app;
    app.import('bower_components/timemachine/timemachine.min.js');
    app.import('vendor/shims/timemachine.js', {
      type: 'vendor',
      exports: {
        'timemachine': ['default']
      }
    });
  }
};
