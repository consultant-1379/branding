define([
    "jscore/core",
    "jscore/ext/net",
    "./AssetListView"   ,
    "../../widgets/assetListItem/AssetListItem"
], function (core, net, View, AssetListItem) {

    return core.Region.extend({

        View: View,

        onStart: function () {

            net.ajax({
                dataType: 'json',
                url: 'resources/metadata.json',
                type: "GET",
                success: function (data) {
                    if (data.listItem && data.listItem.length) {

                        var baseUrl = data.baseUrl || '',
                            fileMap = data.fileMap || 'metadata.json',
                            itemsLength = data.listItem.length,
                            itemsLoaded = 0;

                        for (var i = 0; i < itemsLength; i++) {
                            var eltDiv = core.Element.parse("<div></div>");
                            this.getElement().append(eltDiv);

                            var assetUrl = baseUrl + data.listItem[i];

                            net.ajax({
                                url: assetUrl + fileMap,
                                type: "GET",
                                dataType: "json",
                                success: function (data) {
                                    data.baseUrl = this.assetUrl;

                                    var assetListItem = new AssetListItem(data);
                                    assetListItem.attachTo(this.containerDiv);

                                    this.context.getContext().eventBus.publish("assetAdded", {
                                        data: data,
                                        index: this.index,
                                        item: assetListItem.getElement()
                                    });

                                    itemsLoaded++;

                                    if (itemsLength === itemsLoaded) {
                                        this.context.getElement().trigger('loaded');
                                    }
                                }.bind({context: this, containerDiv: eltDiv, index: i, itemsLength: itemsLength, assetUrl: assetUrl})
                            });
                        }
                    }
                }.bind(this)
            });

            this.getElement().addEventHandler('loaded', function (options) {
                setTimeout(function () {
                    this.getContext().eventBus.publish('rList:loaded', options);
                    console.log('rList:loaded');
                }.bind(this), 500);
            }, this);
        }
    });

});
