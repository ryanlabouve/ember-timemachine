/*jshint node:true*/
module.exports = {
  description: ''

  afterInstall: function(options) {
    return this.addBowerPackageToProject('timemachine', '2.6.0');
  }
};
