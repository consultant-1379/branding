define([
    'jscore/core',
    './SideMenuView'
], function (core, View) {

    return core.Region.extend({

        View: View,
        onStart: function (parent) {
            var options = this.options;

            this.view.setElementRelativeTo(options.overviewElement);
            this.view.setSideMenuParent(options.parent);

            this.getContext().eventBus.subscribe('assetAdded', function (data) {
                this.view.addSideMenuEntry(data);
            }.bind(this));
        }
    });

});