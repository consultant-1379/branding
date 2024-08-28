/*global define*/
define([
    'jscore/core',
    '../../ext/ext.dom',
    'text!./_accordion.html'
], function (core, domExt, template) {
    'use strict';

    var AccordionView = core.View.extend({
        // TODO: Should be added to core.View and executed after render()
        expanded: false,
        afterRender: function () {
            this.title = this.getElement().find('.' + AccordionView.EL_TITLE);
            this.button = this.getElement().find('.' + AccordionView.EL_BUTTON);
            this.content = this.getElement().find('.' + AccordionView.EL_BODY);
            this.header = this.getElement().find('.' + AccordionView.EL_HEADER);
            this._icon = this.getElement().find('.' + AccordionView.EL_ICON);
            this._icon.setModifier('downArrow', '10px');

            this.contentHeight = 0;
        },

        getTemplate: function () {
            return template;
        },

        getTitle: function () {
            return this.title;
        },

        getButton: function () {
            return this.button;
        },

        getContent: function () {
            return this.content;
        },

        setContent: function (content) {
            if (typeof(content) === 'string') {
                this.content.append(core.Element.parse(content));
            } else if (content instanceof core.Widget) {
                content.attachTo(this.content);
            } else {
                throw new Error('Content for Accordion should be Widget or String');
            }
        },

        getHeader: function () {
            return this.header;
        },

        setEvents: function () {
            if (!this._hdrClkEvtId) {
                this._hdrClkEvtId = this.getButton().addEventHandler('click', this._onHeaderClick, this);
            }
        },

        removeEvents: function () {
            this.header.removeEventHandler(this._hdrClkEvtId);
        },

        _onHeaderClick: function (e) {
            if (this._expanded) {
                this.foldBody();
            } else {
                this.expandBody();
            }
        },

        recalculateHeight: function () {
            var contentHeight = 0;
            this.content.children().forEach(function (item) {
                contentHeight += domExt.getOuterHeight(item);
            });
            this.contentHeight = contentHeight;
        },

        foldBody: function () {
            this._icon.removeModifier('upArrow');
            this._icon.setModifier('downArrow', '10px');
            this.button.setAttribute('title', 'Expand');

            this._expanded = false;
            this.getContent().setStyle('max-height', '0');
        },

        expandBody: function () {
            this.recalculateHeight();
            this._icon.removeModifier('downArrow');
            this._icon.setModifier('upArrow', '10px');
            this.button.setAttribute('title', 'Collapse');


            this._expanded = true;
            this.getContent().setStyle('max-height', this.contentHeight + 'px');
        }
    }, {
        'EL_HEADER': 'ebAccordion-header',
        'EL_TITLE': 'ebAccordion-title',
        'EL_BUTTON': 'ebAccordion-button',
        'EL_ICON': 'ebIcon',
        'EL_BODY': 'ebAccordion-body'
    });

    return AccordionView;
});
