define([
    'jscore/core',
    'jscore/ext/net',
    './AssetWrapperView'
], function (core, net, AssetWrapperView) {

    var AssetWrapper = core.Widget.extend({

        onAttach: function () {
            var data = this.options,
                baseUrl = data.baseUrl || '';

            if (data.item) {
                var item = data.item;
                net.ajax({
                    url: baseUrl + data.item.file,
                    type: 'GET',
                    success: function (asset) {
                        var view = new AssetWrapperView({
                            template: {
                                content: asset,
                                anchorName: item.anchorName,
                                status: item.status || 'beta'
                            }
                        });
                        view.render();

                        this.getElement().append(view.getElement());
                    }.bind(this)
                });
            }

        }
    });

    return AssetWrapper;
});
