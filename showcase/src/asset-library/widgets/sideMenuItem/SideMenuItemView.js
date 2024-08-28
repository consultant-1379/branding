define([
    "jscore/core",
    "text!./SideMenuItem.html",
    "text!./SideMenuItemHeader.html",
    "text!./SideMenuItemLink.html"
], function (core, template, headerTemplate, anchorTemplate) {

    return core.View.extend({

        getTemplate: function () {
            return template;
        },
        getHeader: function () {
            return core.Element.parse(headerTemplate);
        },
        getAnchor: function () {
            return core.Element.parse(anchorTemplate);
        }
    });
});