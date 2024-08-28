/*global define*/
define([
    'jscore/base/jquery'
], function ($) {
    'use strict';

    var dom = {};

    dom.getTagName = function (element) {
        return element._getHTMLElement().tagName.toLowerCase();
    };

    dom.getOuterHeight = function (element) {
        return $(element._getHTMLElement()).outerHeight(true);
    };

    return dom;

});