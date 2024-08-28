define([
    'jscore/core',
    './AssetListItemView',
    '../assetWrapper/AssetWrapper'
], function (core, View, AssetWrapper) {

    var AssetListItem = core.Widget.extend({

        View: View,

        onViewReady: function () {
            // TODO: not yet in jsCore. Will be removed in the future.
            this.view.afterRender();

            var data = this.options,
                baseUrl = data.baseUrl || '',
                status = data.status || 'beta';

            if (data.title) {
                this.view.getHeader().setText(data.title);
            }

            // set-up status
            this.getElement().setModifier('status', status);
            this.view.getStatus().setText(status);

            if (data.items && data.items.length) {
                data.items.forEach(function (item) {
                    var wrapper = new AssetWrapper({baseUrl: baseUrl, item: item});
                    wrapper.attachTo(this.context.getElement());
                }.bind({context: this, baseUrl: baseUrl}));
            }

            if (data.assetId) {
                this.getElement().setModifier(data.assetId);
                this.getElement().setAttribute('id', data.assetId);
                this.view.getAnchor().setAttribute('name', data.assetId);
            }

        }
    });

    return AssetListItem;
});