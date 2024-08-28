define([
    'jscore/core',
    'text!./_assetListItem.html'
], function (core, template) {

    var AssetListItemView = core.View.extend({

        // TODO: Should be added to core.View and executed after render()
        afterRender: function () {
            var element = this.getElement();
            this.header = element.find('.' + AssetListItemView.EL_HEADER);
            this.anchor = element.find('.' + AssetListItemView.EL_ANCHOR);
            this.status = element.find('.' + AssetListItemView.EL_STATUS);
        },

        getTemplate: function () {
            return template;
        },

        getHeader: function () {
            return this.header;
        },

        getAnchor: function () {
            return this.anchor;
        },

        getStatus: function () {
            return this.status;
        }

    }, {
        EL_HEADER: 'eaAssetLibrary-AssetListItem-header',
        EL_ANCHOR: 'eaAssetLibrary-AssetListItem-anchor',
        EL_STATUS: 'eaAssetLibrary-AssetListItem-status'
    });

    return AssetListItemView;

});