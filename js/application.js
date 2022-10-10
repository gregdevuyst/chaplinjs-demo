define(['chaplin'], function(Chaplin) {
  'use strict';

  // Bootstrapping of the application
  var Application = Chaplin.Application.extend({
    // Name of app
    title: 'Chaplinjs-demo',
    start: function() {
      var args = [].slice.call(arguments);
      // Bootstrap
      Chaplin.Application.prototype.start.apply(this, args);
    }
  });
  return Application;
});
