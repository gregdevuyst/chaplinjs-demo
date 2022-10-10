define(function() {
  'use strict';

  // Routes are defined in this file in the format (url, controller#method)
  return function(match) {
    match('', 'user#show');
  };
});
