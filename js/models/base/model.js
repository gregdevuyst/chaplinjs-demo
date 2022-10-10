// Wrapper for model
define([
  'chaplin'
], function(Chaplin) {
  'use strict';

  var Model = Chaplin.Model.extend({
    initialize: function() {
      _.extend(this, Chaplin.SyncMachine);
      Chaplin.Model.prototype.apply(this, arguments);
      // Some events that can be leveraged (for every model)
      this.on('request', this.beginSync);
      this.on('sync', this.finishSync);
      this.on('error', this.unsync);
    }
  });

  return Model;
});
