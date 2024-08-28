/*global define*/
define([
    'jscore/core',
    'template!./_list.html'
], function (core, template) {
    'use strict';

    return core.View.extend({

        getTemplate: function () {
            return template(this.options.template);
        }

    });

});