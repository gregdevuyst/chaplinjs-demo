// Wrapper for controller
define(['chaplin', 'views/site-view'], function(Chaplin, SiteView) {
  'use strict';

  var Controller = Chaplin.Controller.extend({
    // This controller implementation re-uses the SiteView as a BaseView
    beforeAction: function() {
      this.reuse('site', SiteView);
    }
  });

  return Controller;
});
