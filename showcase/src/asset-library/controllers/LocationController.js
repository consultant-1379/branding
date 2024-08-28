/*global define*/
define([
    'jscore/ext/locationController',
    '../ext/ext.url'
], function (LocationController, urlExt) {
    'use strict';

    return LocationController.extend({
        init: function (options) {
            var eventBus = options.context.eventBus;

            eventBus.subscribe('rList:loaded', function () {
                if(this.getLocation() !== ''){
                    urlExt.triggerChange();
                }
                eventBus.unsubscribe('rList:loaded');
            }, this);
        }
    });
});