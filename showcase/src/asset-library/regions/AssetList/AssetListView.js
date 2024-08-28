define([
    "jscore/core",
    "text!./AssetList.html"
], function (core, template) {

    return core.View.extend({


        getTemplate: function () {
            return template;
        }
    });

});

