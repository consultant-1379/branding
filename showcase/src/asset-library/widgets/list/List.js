/*global define*/
define([
    'jscore/core',
    './ListView'
], function (core, View) {
    'use strict';

    return core.Widget.extend({

        init: function (options) {
            this.view = new View({
                template: {items: options.items}
            });
        }

    });

});
