/*jshint node:true*/

var RSVP = require('rsvp');

module.exports = {
  description: 'Insatlls timemachine',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return RSVP.all([
      this.addPackageToProject('timemachine', 'ryanlabouve/timemachine#faabc5832750289e4f348d5dfe5293ecf01053f0'),
      this.addAddonToProject('ember-browserify')
    ]);
  }
};
