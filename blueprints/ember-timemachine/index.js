/*jshint node:true*/
module.exports = {
  description: 'Insatlls timemachine',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('timemachine', 'git@github.com:ryanlabouve/timemachine.git#7521e619e9ec81e1bc790412893656dfbf09cbfe');
  }
};
