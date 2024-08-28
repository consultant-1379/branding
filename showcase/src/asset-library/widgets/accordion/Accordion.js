/*global define*/
define([
    'jscore/core',
    '../../ext/ext.dom',
    './AccordionView'
], function (core, domExt, View) {
    'use strict';

    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            // TODO: not yet in jsCore. Will be removed in the future.
            this.view.afterRender();

            this.setTitle(this.options.title || 'Accordion Header');

            this.setContent(this.options.content);

            if (this.options.enabled === false) {
                this.disable();
            }
        },

        setTitle: function (title) {
            if (typeof(title) === 'string') {
                this.view.getTitle().setText(title);
            } else if (title instanceof core.Element) {
                var tagName = domExt.getTagName(title);

                if (tagName === 'a' || tagName === 'span' || tagName === 'div') {
                    this.view.getTitle().append(title);
                }
            }
        },

        setContent: function (content) {
            if (content) {
                this.enable();
                this.view.setContent(content);
            } else {
                this.disable();
            }
        },

        enable: function () {
            this.enabled = true;
            this.getElement().removeModifier('disabled');
            this.view.getButton().setAttribute('title', 'Expand');
            this.view.setEvents();
        },

        disable: function () {
            this.enabled = false;
            this.getElement().setModifier('disabled');
            this.view.foldBody();
            this.view.removeEvents();
            this.view.getButton().setAttribute('title', 'Disabled');
        }

    });

});
