define([
    'jscore/core',
    './SideMenuItemView',
    '../accordion/Accordion',
    '../list/List'
], function (core, View, Accordion, List) {

    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            var options = this.options;

            this.anchor = this.view.getAnchor();
            this.anchor.setText(options.data.title);
            this.anchor.setAttribute('href', '#' + options.data.assetId);

            var accordionList = [];

            for (var i = 0; i < options.data.items.length; i++) {
                var item = options.data.items[i];

                if (item.anchorName && item.anchorTitle) {
                    accordionList.push({
                        title: item.anchorTitle,
                        name: item.anchorTitle,
                        href: '#' + item.anchorName
                    });
                }
            }

            if (accordionList.length) {
                // create list with links
                var contentList = new List({
                    items: accordionList
                });

                var accordion = new Accordion({
                    title: this.anchor,
                    content: contentList
                });
                accordion.attachTo(this.getElement())
            } else {
                var wrapper = this.view.getHeader();
                wrapper.append(this.anchor);
                wrapper.setModifier('standAlone');
                this.getElement().append(wrapper);
            }
        },

        getAnchor: function () {
            return this.anchor;
        },

        setCurrent: function () {
            this.getElement().setModifier('current');
        },

        removeCurrent: function () {
            this.getElement().removeModifier('current');
        }

    });

});