define([
    'jscore/core',
    './AssetLibraryView',
    './controllers/LocationController',
    './regions/AssetList/AssetList',
    './regions/SideMenu/SideMenu'
], function (core, View, LocationController, AssetList, SideMenu) {

    var AssetLibraryApp = core.App.extend({

        View: View,

        onStart: function (parent) {
            var locationC = new LocationController({context: this.getContext()});
            locationC.start();

            this.AssetListRegion = new AssetList({context: this.getContext()});
            this.AssetListRegion.start(this.getElement().find('.' + AssetLibraryApp.BODY_VIEW));

            var sideMenuContainer = this.getElement().find('.' + AssetLibraryApp.BODY_SIDE_MENU);

            this.sideMenuRegion = new SideMenu({
                context: this.getContext(),
                parent:sideMenuContainer,
                overviewElement: this.getElement().find('.' + AssetLibraryApp.OVERVIEW)
            });
            this.sideMenuRegion.start(sideMenuContainer);
        }
    }, {
        BODY_VIEW: 'eaAssetLibrary-Body-View',
        BODY_SIDE_MENU: 'eaAssetLibrary-Body-SideMenu',
        OVERVIEW: 'eaAssetLibrary-Overview'
    });
    return AssetLibraryApp;
});