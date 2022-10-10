define([
    'views/base/view',
    'text!templates/user.hbs'
], function(View, template) {
    'use strict';

    var UserView = View.extend({
        autoRender: true,
        className: 'user',
        template: template
    });

    return UserView;
});
