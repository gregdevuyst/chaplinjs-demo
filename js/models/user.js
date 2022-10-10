define([
  'models/base/model'
], function(Model) {
  'use strict';

  var User = Model.extend({
    defaults: {
      name: 'Greg',
      age: 23
    }
  });
  return User;
});
