define([
    'jscore/core',
    'template!./_assetWrapper.html'
], function (core, template) {

    return core.View.extend({

        getTemplate: function () {
            return template(this.options.template);
        }

    });

});