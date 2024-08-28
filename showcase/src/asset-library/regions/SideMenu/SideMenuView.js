define([
    'jscore/core',
    '../../widgets/sideMenuItem/SideMenuItem',
    'text!./SideMenu.html'
], function (core, SideMenuItem, template) {

    var currentSectionId;

    //---------------------------------------------------------------------------------
    var __nativeST__ = window.setTimeout;

    var customTimeout = function (vCallback, nDelay) {
        var oThis = this, aArgs = Array.prototype.slice.call(arguments, 2);
        return __nativeST__(vCallback instanceof Function ? function () {
            vCallback.apply(oThis, aArgs);
        } : vCallback, nDelay);
    };

    function getScroll() {
        var scrOfX = 0, scrOfY = 0;
        if (typeof( window.pageYOffset ) == 'number') {
            //Netscape compliant
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
        } else if (document.body && ( document.body.scrollLeft || document.body.scrollTop )) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
        } else if (document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop )) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
        }
        return {scrollLeft: scrOfX, scrollTop: scrOfY };
    }

    //---------------------------------------------------------------------------------
    var resizeTimer;

    //---------------------------------------------------------------------------------
    function getElementPosition(el) {
        var l = 0, t = 0;
        while (el.offsetParent) {
            l += el.offsetLeft;
            t += el.offsetTop;
            el = el.offsetParent;
        }
        return {left: l, top: t};
    }

//---------------------------------------------------------------------------------
    function scrollTo(to, duration) {
        if (duration < 0) return;

        var difference = to - getScroll().scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            var scrollValue = getScroll();
            scrollValue.scrollTop = scrollValue.scrollTop + perTick;
            scrollTo(to, duration - 100);
        }, 10);
    }

    //------------------------------------------------------------------------------------------------------------------
    function getNativeElement(elt) {
        return  elt._getHTMLElement();
    }

    return core.View.extend({

        init: function () {
            this.entryIndex = [];
            this.assetSectionList = [];
            this.sideMenuItemList = [];

            this.addResponsiveEvents();
        },
        getTemplate: function () {
            return template;
        },
        setElementRelativeTo: function (elt) {
            this.elementRelativeTo = elt;
        },
        setSideMenuParent: function (elt) {
            this.sideMenuParent = elt;
        },
        getSideMenuParent: function () {
            return this.sideMenuParent;
        },
        getElementRelativeTo: function () {
            return this.elementRelativeTo;
        },
        setMenuLocationRelativeToElement: function () {
            if (document.documentElement.offsetWidth > 480) {

                var eltRelativeNative = getNativeElement(this.getElementRelativeTo());
                var eltRelativeTopLocation = parseInt(eltRelativeNative.offsetHeight);
                var eltRelativeMarginTop = parseInt(window.getComputedStyle(eltRelativeNative, null).marginTop);

                var topLocation = eltRelativeTopLocation + eltRelativeMarginTop +
                    getElementPosition(eltRelativeNative).top - parseInt(getScroll().scrollTop) + 20;

                if (topLocation < 40) {
                    topLocation = 40;
                }

                this.getSideMenuParent().setStyle({
                    position: 'fixed',
                    top: topLocation + 'px'
                });
            }
            else {
                this.getSideMenuParent().setStyle({
                    position: 'relative',
                    top: 0
                });
            }
        },

        addResponsiveEvents: function () {
            window.addEventListener('scroll', function () {
                this._windowScrollEvt();
            }.bind(this), false);
            window.addEventListener('resize', function () {
                this._windowResizeEvt();
            }.bind(this), false);
        },

        addSideMenuEntry: function (options) {
            // this list contains the assets displayed in the other View,
            // we need it to get their offsetPosition

            this.assetSectionList[options.index] = options.item;

            var sideMenuItem = new SideMenuItem(options);

            // the widget list is ordered, however they are loaded asynchronously,
            // need to reorder the side menu entries each time one is added

            this.sideMenuItemList[options.data.assetId] = sideMenuItem;

            this.entryIndex[options.index] = sideMenuItem;

            for (var i = 0; i < this.entryIndex.length; i++) {
                var tmp = this.entryIndex[i];
                if (tmp) {
                    tmp.detach();
                    tmp.attachTo(this.getElement());
                }
            }
        },

        _windowResizeEvt: function () {
            clearTimeout(resizeTimer);
            resizeTimer = customTimeout.call(this, this.setMenuLocationRelativeToElement, 100);
        },

        _windowScrollEvt: function () {
            this.setMenuLocationRelativeToElement();

            // Get document scroll position
            var fromTop = getScroll().scrollTop + 50;

            // Get id of current scroll item
            var tmp;

            for (var i = 0; i < this.assetSectionList.length; i++) {
                var nativeElt = getNativeElement(this.assetSectionList[i]);

                if (nativeElt.offsetTop < fromTop) {
                    tmp = nativeElt;
                }
            }
            var id = tmp ? tmp.id : '';

            if (currentSectionId !== id) {
                if (this.sideMenuItemList[currentSectionId]) {
                    this.sideMenuItemList[currentSectionId].removeCurrent();
                }
                this.sideMenuItemList[id].setCurrent();
                currentSectionId = id;
            }
        }
    });

});
