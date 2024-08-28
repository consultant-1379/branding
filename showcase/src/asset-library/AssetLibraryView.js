define([
    'jscore/core',
	"text!./_assetLibrary.html",
	"styles!./_assetLibrary.less"
], function (core, template, style) {
	return core.View.extend({
		
		getTemplate: function() {
			return template;
		},
		
		getStyle: function() {
			return style;
		}
		
	});

});