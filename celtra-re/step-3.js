 (function() {
     // payload delivery

     if (!window.celtra)
         window.celtra = {};
     if (!window.celtra.payloads)
         window.celtra.payloads = {};

     window.celtra.payloads["step-3.js?v=13-fe0e22efad&secure=0"] = 

        
       function(script, runtimeParams, trackers, openWebsiteOverrideUrls, getAppOverrideUrls, brand) {
          //script : the dynamically injected script in step-1

         // HOMAM: INTERESTING STUFF
         function ViewportManager(t) {
             this.container = t.container, this.width = this.originalWidth = t.width || 0, this.height = this.originalHeight = t.height || 0, this.iframe = this.container.ownerDocument.defaultView.frameElement, this.init()
         }
         extend(ViewportManager.prototype, EventEmitter), ViewportManager.prototype.init = function() {
             this.container.style.overflow = "hidden", this.container.style.position = "absolute", this.container.style.left = this.container.style.top = 0, this.iframe.style.display = "block", this.update()
         }, 
         ViewportManager.prototype.update = function() {
             this.container.style.width = this.width + "px", this.container.style.height = this.height + "px", this.iframe.style.width = this.width + "px", this.iframe.style.height = this.height + "px", this.iframe.width = this.width, this.iframe.height = this.height
         }, 
         ViewportManager.prototype.setSize = function(t, e) {
             this.width = t, this.height = e, this.update()
         };

         function Placement(t) {
             // t: {positioning}
             this.root = null, this._isPopulated = !1,
             // width = height = 100%
             // left = top = 0px
             // this._positioning = screen | container
             // this._origin = horizontal: left vertical: top
         }


         function DivPlacement() {
             Placement.apply(this, arguments)
         }


         extend(Placement.prototype, EventEmitter), Placement.prototype._setInterval = function(t, e) {
             return this.getRootWindow().setInterval(t, e)
         }, 

         Placement.prototype.getRootWindow = function() {
             return this.root.ownerDocument.defaultView
         }, 
         Placement.prototype.attachTo = function() {
             throw Error("Placement.attachTo not implemented")
         }, 
         Placement.prototype.getContainer = function() {
             throw Error("Placement.getContainer not implemented")
         }, 
         Object.defineProperty(Placement.prototype, "creative", {
             get: function() {
                 return this.getContainer().ownerDocument.defaultView.creative
             }
         }), Object.defineProperty(Placement.prototype, "positioning", {
             get: function() {
                 return this._positioning
             },
             set: function(t) {
                 this._positioning = t, this.update()
             }
         }), Object.defineProperty(Placement.prototype, "_canUseFixedPositioning", {
             get: function() {
                 return this.usesFixedPositioning && this.supportsFixedPositioning
             },
             enumerable: !1
         }), 
         Placement.prototype.hide = function() {
             this.root.style.display = "none", this._visible = !1, this.emit("hidden")
         }, 
         Placement.prototype.show = function() {
             this.root.style.display = "block", this._visible = !0, this.emit("shown")
         }, 
         Placement.prototype.destroy = function() {
             this.root && this.root.parentNode && this.root.parentNode.removeChild(this.root), this.root = null
         }, 
         Placement.prototype.setZIndex = function(t) {
             0 > t && (t = Placement.ZINDEX_MAX + t), "max" == t && (t = Placement.ZINDEX_MAX), this.root.style.zIndex = t
         }, 
         Placement.prototype.createElement = function() {
             throw Error("Not implemented")
         }, 
         Placement.prototype.querySelector = function() {
             throw Error("Not implemented")
         }, 
         Placement.prototype.getViewportGeometry = function() {
             var t = this.getRootWindow(),
                 e = t.document.documentElement;
             return {
                 width: this.hacks.useAlternativeWindowDimensions ? e.clientWidth : t.innerWidth,
                 height: this.hacks.useAlternativeWindowDimensions ? e.clientHeight : t.innerHeight,
                 left: t.scrollX || e && e.scrollLeft || 0,
                 top: t.scrollY || e && e.scrollTop || 0
             }
         }, 
         Placement.prototype.getPlacementGeometry = function() {
             if ("screen" == this.positioning && this._canUseFixedPositioning) return {
                 width: this.root.offsetWidth,
                 height: this.root.offsetHeight,
                 left: this.root.offsetLeft,
                 top: this.root.offsetTop
             };
             var t = offset(this.root),
                 e = this.getViewportGeometry();
             return {
                 width: this.root.offsetWidth,
                 height: this.root.offsetHeight,
                 left: t.left - e.left,
                 top: t.top - e.top
             }
         }, 
         Placement.prototype._parseLength = function(t) {
             if (!isNaN(t)) return {
                 value: t,
                 unit: "px"
             };
             var e = t.match(/^(-?[\d.]+)(px|%)$/);
             if (!e) throw Error('Cannot parse length "' + t + '"');
             return {
                 value: parseFloat(e[1], 10),
                 unit: e[2]
             }
         }, 
         Placement.prototype.getUnitGeometry = function(t) {
             var e = this.getPlacementGeometry(),
                 i = {
                     left: e.left,
                     top: e.top,
                     width: t.size.width,
                     height: t.size.height
                 },
                 n = t.horizontalPosition || "center",
                 o = t.verticalPosition || "center";
             return "center" == n ? i.left += (e.width - t.size.width) / 2 : "right" == n && (i.left += e.width - t.size.width), "center" == o ? i.top += (e.height - t.size.height) / 2 : "bottom" == o && (i.top += e.height - t.size.height), i.left = Math.round(i.left), i.top = Math.round(i.top), i
         }, 
         Placement.prototype.getRelativeUnitGeometry = function(t) {
             var e = offset(t.node);
             return e.width = t.node.offsetWidth, e.height = t.node.offsetHeight, e
         }, 
         Placement.prototype.populate = function(t, e) {
             // HOMAM: INTERESTING
             this._isPopulated || (this.getContainer().appendChild(t), this.emit("populated"), this._isPopulated = !0), e && defer(e)
         }, 
         Placement.prototype._getViewportElement = function() {
             throw Error("Not implemented")
         }, 

         inherit(DivPlacement, Placement),

         // IMPORTANT: Create root element
         // t : InAppAdapter.prototype._parentForPlacement ()
         DivPlacement.prototype.attachTo = function(t) {
             this.root = t.ownerDocument.createElement("div"),
             this.root.style.overflow = "hidden",
             this.root.style.webkitTransform = "translateZ(0)",
             this.hide(),
             t.appendChild(this.root);
         }, 
         DivPlacement.prototype.destroy = function() {
             DivPlacement.uber.destroy.apply(this, arguments)
         }, 
         DivPlacement.prototype.getContainer = function() {
             return this.root
         }, 
         DivPlacement.prototype.createElement = function(t) {
             return this.root.ownerDocument.createElement(t)
         }, 
         DivPlacement.prototype.querySelector = function(t) {
             return this.root.querySelector(t)
         }, 
         DivPlacement.prototype.querySelectorAll = function(t) {
             return this.root.querySelectorAll(t)
         }, 
         DivPlacement.prototype._getViewportElement = function() {
             return this.root
         }, 
         inherit(StickyPlacement, IframePlacement), StickyPlacement.prototype.setPosition = StickyPlacement.prototype.setZIndex = noop, StickyPlacement.prototype.show = function() {
             IframePlacement.prototype.show.apply(this, arguments), IframePlacement.prototype.setZIndex.call(this, "max"), this.enableDocumentPadding(), this.update()
         }, 
         StickyPlacement.prototype.hide = function() {
             IframePlacement.prototype.hide.apply(this, arguments), this.disableDocumentPadding()
         }, 
         StickyPlacement.prototype.populate = function() {
             this.stickyOptions.showDismissButton && this.once("populated", this.createDismissButton.bind(this)), IframePlacement.prototype.populate.apply(this, arguments)
         }, 
         StickyPlacement.prototype.update = function(t) {
             this.root && this.root.parentNode && (IframePlacement.prototype.setSize.call(this, this.width.value + this.width.unit, this.height.value + this.height.unit, !0), IframePlacement.prototype.setPosition.call(this, 0, 0, !0), defer(t))
         }, 
         StickyPlacement.prototype.createDismissButton = function() {
             with(this.getViewportGeometry(), this.root.style.overflow = "visible", this._dismissButton = this.root.ownerDocument.createElement("img"), this._dismissButton.src = this.stickyOptions.baseUrl + "runner/clazzes/Sticky/sticky-dismiss-button.png", this._dismissButton.style) switch (position = "absolute", left = "auto", right = "6px", width = "32px", height = "32px", zIndex = 10, this.stickyOptions.stickiness) {
                 case "top":
                     top = "auto", bottom = "-16px";
                     break;
                 case "bottom":
                     top = "-16px", bottom = "auto"
             }
             attach(this._dismissButton, "touchend", this._handleDismissTouchEnd, !1), this.root.appendChild(this._dismissButton)
         }, 
         StickyPlacement.prototype._handleDismissTouchEnd = function(t) {
             t.preventDefault(), t.stopPropagation(), this.disableDocumentPadding(), (this.stickyOptions.dismissCallback || noop)()
         }, 
         StickyPlacement.prototype.enableDocumentPadding = function() {
             var t = this.getRootWindow(),
                 e = t.document.documentElement;
             this._originalDocumentPadding || (this._originalDocumentPadding = t.getComputedStyle(e)["padding-" + this.stickyOptions.stickiness]), e.style["padding-" + this.stickyOptions.stickiness] = this.root.offsetHeight + "px"
         }, 
         StickyPlacement.prototype.disableDocumentPadding = function() {
             var t = this.getRootWindow(),
                 e = t.document.documentElement;
             e.style["padding-" + this.stickyOptions.stickiness] = this._originalDocumentPadding, this._originalDocumentPadding = null
         };;

         function Format(t, e) {
             this.adapter = t, this.state = null, this.units = e, this.observesViewability = !0, this.observingViewability = function(t) {
                 return this.observesViewability && this.adapter.viewabilityMeasurable["viewable" + t]
             }.bind(this)
         }; 
 

         // INTERESTING STUFF
         function InterstitialFormat(t) {
             Format.apply(this, arguments), t.adBehavior.interstitial = !0, t.adBehavior.expandable = !1, this.adapter.on("stateChange", function(t) {
                 this.transitionTo(t)
             }.bind(this)), this.setup(), this.adapter.on("needRestart", function() {
                 this.destroy(), this.state = null, t.restart(), this.setup()
             }.bind(this))
         }
         inherit(InterstitialFormat, Format), InterstitialFormat.prototype.setup = function() {
             var t = new TaskScheduler;
             t.when("ready").run(function() {
                 this.adapter.createPlacements({
                     banner: {
                         attachment: "body",
                         positioning: "screen",
                         type: "unit"
                     }
                 }
             }.bind(this)), t.when("bannerPopulated").run(function() {
                 var e = this.placements.banner,
                     i = this.units.banner = e.creative.units.banner,
                     n = !1;
                 e.creative.trackCreativeLoaded(this.observingViewability), this.adapter.triggerLoadedEvent(), this.adapter.viewabilityMeasurable.viewable00 ? "1" === this.adapter.runtimeParams._afterstitial && this.adapter.waitForComeback ? this.adapter.waitForComeback(function() {
                     e.creative.track({
                         name: "viewable00"
                     }), t.notify("placementViewable")
                 }) : (n = "1" == this.adapter.runtimeParams.immediateAppear, e.show(), this.adapter.waitForViewable00(e, i.node, function() {
                     e.creative.track({
                         name: "viewable00"
                     }), n || t.notify("placementViewable")
                 })) : n = !0, n && defer(t.notifies("placementViewable")), this.adapter.viewabilityMeasurable.viewable501 && this.adapter.waitForViewable501(e, i.node, function() {
                     e.creative.track({
                         name: "viewable501"
                     })
                 })
             }.bind(this)), t.when("placementViewable").run(function() {
                 t.pause(), this.transitionTo("default")
             }.bind(this)), this.adapter.on("ready", t.notifies("ready"))
         }, 
         InterstitialFormat.prototype.populateBanner = function(t, e) {
             var i = t.creative.units.banner;
             i.swipeable = "1" == runtimeParams.swipeable, i.showCloseButton = !this.adapter.providesCloseButton, i.fillsContainer = !0, i.usePlaceboBar = i.loadingScreen && i.loadingScreen.loaderVisible !== void 0 ? i.loadingScreen.loaderVisible : !0, i.closeAction = i.dismissAction;
             var n = i.getNode(function() {
                     t.populate(n, e), t.setZIndex(-2), t.setSize("100%", "100%"), t.setPosition(0, 0), t.setBackground(t.creative.units.banner.backgroundColor)
                 }),
                 o = i.orientation;
             "portrait" === o || "landscape" === o ? i.enableWrongOrientationPrompt() : i.wrongOrientationHandling && (o = this._getBackwardCompatibleOrientation(i), this.adapter.setOrientationLock(o) || "noOrientation" === o || (i.enableWrongOrientationPrompt(), i.setCorrectOrientation(o)))
         }, 
         InterstitialFormat.prototype.transitionTo = function(t, e, i) {
             if (e || (e = {}), null == this.state && "default" == t) this.adapter.maximizeViewport(function() {
                 this.placements.banner.show(), this.units.banner.enterRenderTree(), this.units.banner.show(), this.adapter.startObscuringContent(), i && defer(i)
             }.bind(this));
             else if ("default" == this.state && "dismissed" == t) 
                this.adapter.stopObscuringContent(),
                this.placements.banner.hide(),
                this.units.banner.exitRenderTree(),
                this.units.banner.hide(),
                this.destroy();
             else {
                 if (null != this.state || "dismissed" != t) throw Error("Invalid state transition request! (" + this.state + " => " + t + ")");
                 this.destroy()
             }
             this.state = t
         };;

         function SDKAdapter(t, e, i, n, o, r) {
             this.runtimeParams = t, 
             this.trackingCenter = e, 
             this.aggregatorTracking = i, 
             this.experiments = n, 
             this.scriptElement = script, 

             this.adapterWindow = this.scriptElement.ownerDocument.defaultView,  // HOMAM: INTERESTING

             this.getAppOverrideUrls = r, 
             this.openWebsiteOverrideUrls = o, 
             this.providesCloseButton = !1, 
             this.enableCustomStateTransitions = !1, 
             this.adBehavior = {
                 interstitial: !1,
                 expandable: !1,
                 expanded: !1,
                 sticky: !1
             }, 
             this.viewabilityMeasurable = {
                 viewable00: !1,
                 viewable501: !1
             }, 
             this.videoCapabilites = {
                 html5: !0,
                 inline: !1,
                 autoplay: !1,
                 fallbackToMpeg1: !0,
                 fullscreenLandscapeButtonsHack: !1
             }, 
             this.useFSVP = !0, this.hacks = {}, 
             this._hooks = {}, 
             this.placements = {}, 
             this._handleResize = this._handleResize.bind(this), 
             this._handleOrientationChange = this._handleOrientationChange.bind(this), 
             this._handleViewportChange = this._handleViewportChange.bind(this), 
             this._handleDetachedFromDocument = this._handleDetachedFromDocument.bind(this), 
             this._updatePlacements = this._updatePlacements.bind(this), 
             this._keyboardShown = !1, 
             this._onKeyboardShown = this._onKeyboardShown.bind(this), 
             this._onKeyboardHidden = this._onKeyboardHidden.bind(this), 
             this._resizeTimer = null, 
             this._listening = !1, 
             this._touchEventSimulator = null, 
             this.hostWindow = window, 
             defer(this._startObservingEnvironment.bind(this)), 
             this._displayed = !1, 
             this.on("displayed", function() {
                this._initSdk();
             }
         }
         extend(SDKAdapter.prototype, EventEmitter), Object.defineProperty(SDKAdapter.prototype, "__CELTRA", {
             get: function() {
                 return this.getTopWindow().__CELTRA || (this.getTopWindow().__CELTRA = {
                     formats: []
                 }), this.getTopWindow().__CELTRA
             },
             enumerable: !0
         }), 
         SDKAdapter.prototype._startObservingEnvironment = function() {
             if (!this._listening) {
                 this.resizeListener = this._createViewportListener(), this.resizeListener.start(this._handleResize, this._handleViewportChange), this.orientationObserver = this._createOrientationObserver(), this.orientationObserver.start(), Object.defineProperty(this, "orientation", {
                     get: function() {
                         return this.orientationObserver.getOrientation()
                     }.bind(this),
                     configurable: !0
                 }), this.containerViewabilityObserver = this._createContainerViewabilityObserver(), this.containerViewabilityObserver.start(), Object.defineProperty(this, "containerIsViewable", {
                     get: function() {
                         return this.containerViewabilityObserver.isViewable
                     }.bind(this),
                     configurable: !0
                 }), this.documentAttachmentObserver = this._createDocumentAttachmentObserver(), this.documentAttachmentObserver.start(this._handleDetachedFromDocument), this.on("domReady", function() {
                     this._initDocument(deferred(this.emits("documentReady")))
                 }.bind(this)), this.once("sdkReady", function() {
                    
                 }.bind(this));
                 var t = !1;
                 this._waitForDomReady(function() {
                     t || (this.emit("domReady"), t = !0)
                 }.bind(this)), this._listening = !0
             }
         }, 
         SDKAdapter.prototype._initSdk = function(t) {
             t()
         }, 
         SDKAdapter.prototype._initDocument = function(t) {
             t()
         },  

         SDKAdapter.prototype.triggerLoadedEvent = function() {
             var t = this.getHostElement().ownerDocument.createEvent("HTMLEvents");
             t.initEvent("celtraLoaded", !0, !1), 
             this.getHostElement().dispatchEvent(t)
         }, 
         SDKAdapter.prototype.waitForDisplayed = function(t) {
             return this._displayed ? defer(t) : (this.once("displayed", t), void 0)
         }, 
         SDKAdapter.prototype.waitForContainerViewable = function(t) {
             if (this.containerIsViewable) return defer(t);
             var e = function(i) {
                 i && (this.off(e), defer(t))
             }.bind(this);
             this.on("containerViewableChange", e)
         }, 
         SDKAdapter.prototype.getHostElement = function() {
             return this.scriptElement.parentNode // the parent node of the dynamically injected script in step-1
         }, 

         // FUN
         SDKAdapter.prototype._waitForDomReady = function(t) {
             var e = this.getTopWindow().document;
             "interactive" === e.readyState || "loaded" === e.readyState || "complete" === e.readyState ? defer(t) : e.addEventListener("DOMContentLoaded", t, !1)
         }, 


         SDKAdapter.prototype.createPlacements = function(t, e) {
            // t : {positioning}
            // it just calls InAppAdapter.prototype.createPlacement t
            /*
                t  = {
                     banner: {
                         attachment: "body",
                         positioning: "screen",
                         type: "unit"
                     }
                 }
            */

             var i = Object.keys(t),
                 n = Object.keys(this.placements),
                 o = i.filter(function(t) {
                     return -1 == n.indexOf(t)
                 });
             if (0 == o.length) defer(e);
             else {
                 var r = new TaskScheduler;
                 r.when(o).run(function() {
                     defer(e)
                 }), o.forEach(function(e) {
                     this.createPlacement(t[e], function(t) {
                         this.placements[e] = t, defer(r.notifies(e))
                     }.bind(this))
                 }, 
                 this)
             }
         }, 
         SDKAdapter.prototype.createPlacement = function() {
             throw Error("SDKAdapter.createPlacement not implemented!")
         }, 
         SDKAdapter.prototype.destroyPlacement = function(t) {
             for (var e in this.placements) e == t && (this.placements[e].destroy(), delete this.placements[e])
         }, 
     SDKAdapter.prototype.hook = function(t, e) {
             this._hooks[t] = e
         }, 
         SDKAdapter.prototype.waitForHook = function(t, e) {
             var i = Array.prototype.slice.call(arguments, 1);
             this._hooks[t] ? this._hooks[t].apply(null, i) : e()
         }, 
         SDKAdapter.prototype.getPlacementRect = function(t) {
             return t.root ? CRect.adopt(t.root.getBoundingClientRect()) : null
         }, 
         SDKAdapter.prototype.getViewportRect = function() {
             var t = this.getTopWindow();
             return CRect.adopt({
                 left: 0,
                 top: 0,
                 width: t.innerWidth,
                 height: t.innerHeight
             })
         }, 
         SDKAdapter.prototype.expand = function() {
             throw Error("SDKAdapter.expand not implemented!")
         }, 
         SDKAdapter.prototype.collapse = function() {
             throw Error("SDKAdapter.collapse not implemented!")
         }, 
         SDKAdapter.prototype.dismiss = function() {
             throw Error("SDKAdapter.dismiss not implemented!")
         }, 
         SDKAdapter.prototype.resize = function() {
             throw Error("SDKAdapter.resize not implemented!")
         }, 
         SDKAdapter.prototype.playVideoInPlayer = function() {
             throw Error("SDKAdapter.playVideoInPlayer not implemented!")
         }, 
         SDKAdapter.prototype.callPhone = function(t) {
             window.location.href = "tel:" + encodeURIComponent(t)
         }, 
         SDKAdapter.prototype.openBrowser = function() {
             throw Error("SDKAdapter.openBrowser not implemented!")
         }, 
         SDKAdapter.prototype.getApp = function() {
             throw Error("SDKAdapter.getApp not implemented!")
         }, 
         SDKAdapter.prototype.canSaveImage = function() {
             throw Error("SDKAdapter.canSaveImage not implemented!")
         }, 
         SDKAdapter.prototype.saveImage = function() {
             throw Error("SDKAdapter.saveImage not implemented!")
         }, 

         // Overloaded in InAppAdapter
         SDKAdapter.prototype.getTopWindow = function() {
             if (this._topWindow) return this._topWindow;
             var t = window;
             try {
                 for (; t.parent.location.href !== void 0 && t.parent.document !== t.document;) t = t.parent
             } catch (e) {}
             return this._topWindow = t
         }, 

         // FUN
         SDKAdapter.prototype._getNesting = function(t) {
             var e = {
                 iframe: t !== window.top,
                 friendlyIframe: !1,
                 iabFriendlyIframe: !1,
                 hostileIframe: !1,
                 iframeDepth: 0
             };
             if (e.iframe) {
                 var i = t;
                 try {
                     for (e.friendlyIframe = e.iframe && !!window.top.location.href, e.iabFriendlyIframe = e.friendlyIframe && t.inDapIF !== void 0 && t.inDapIF; i.parent.location.href !== void 0 && i.parent.document !== i.document;) i = i.parent, e.iframeDepth++
                 } catch (n) {
                     e.hostileIframe = !0
                 }
             }
             return e
         };;

         function InAppAdapter() {
             SDKAdapter.apply(this, arguments), this.isSingleOccupant = true
         }
         inherit(InAppAdapter, SDKAdapter), 

        // IMPORTANT
         InAppAdapter.prototype._initDocument = function(cb) {
             with(document.documentElement.style) 
                margin = 0, padding = 0, width = "100%", height = "100%";
             with(document.body.style) 
                margin = 0, padding = 0, width = "100%", height = "100%";
             
             this.viewport = this._createViewportElement(); // absolute 100% width and height div with id = viewport

             if (!document.querySelector("meta[name=viewport]")) { // fixViewPort: fixed viewport meta tag
                 var meta = document.createElement("meta");
                 meta.name = "viewport", meta.content = "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no", 
                 document.getElementsByTagName("head").item(0).appendChild(meta)
             }
             this.hostElement = this.getHostElement() // the parent node of the dynamically injected script in step-1

             if ((!this.hostElement.offsetParent || this.hostElement.offsetParent === document.body && "static" === getComputedStyle(document.body, null).position) {
                this.hostElement.style.position = "relative", this.hostElement.style.width = this.hostElement.style.height = "100%"
             }
         }, 
         InAppAdapter.prototype.getTopWindow = function() {
               return window
         }, 

         // IMPORTANT

         InAppAdapter.prototype._createViewportElement = function() {
             var t = document.createElement("div");
             return t.id = "viewport", 
              t.style.cssText = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;",
              document.body.appendChild(t), t
         }, 
         InAppAdapter.prototype._getViewportElement = function() {
             return this.viewport // div
         }, 

         // IMPORTANT: The placement (banner / LP) gets attaches to this element
         InAppAdapter.prototype._parentForPlacement = function(t) { // viewport div or document.body
             for (var e = "static" == t.positioning ? script.parentNode : 
                    this._getViewportElement(), i = e; i !== script.ownerDocument;) {
                 if (/body/i.test(i.tagName)) return e;
                 i = i.parentNode
             }
             return document.body
         }, 
         InAppAdapter.prototype.createPlacement = function(t, e) {
             e = e || noop;
             var i = new DivPlacement(t.positioning); // positioning = screen
             i.attachTo(this._parentForPlacement(t),  // viewport div or document.body
                function() {
                 e(i)
             })
         }, 
         InAppAdapter.prototype.setMinimumSize = function(w, h) {
             this.hostElement.style.minWidth = w + "px", // the parent node of the dynamically injected script in step-1
             this.hostElement.style.minHeight = h + "px"
         };;

         function MRAIDAdapter() {
             InAppAdapter.apply(this, arguments),
             this.providesCloseButton = !1,

            this.on("documentReady", function() {
                 if (android("4")) {
                     var t = this.getTopWindow();
                     "static" == t.document.defaultView.getComputedStyle(t.document.body, null).getPropertyValue("position") && (t.document.body.style.position = "relative")
                 }
             });
         }
         inherit(MRAIDAdapter, InAppAdapter),

         MRAIDAdapter.prototype.getMraidVersion = function() {
             var t = ("" + mraid.getVersion()).match(/^(\d+)(\.\d+)?/);
             return t ? parseInt(t[1], 10) : null
         }, 

         // IMPORTANT
         MRAIDAdapter.prototype._initSdk = function(t) {
            if ("undefined" == typeof mraid)
                throw "ERROR: mraid is undefined"''
             
            this.mraidVersion = this.getMraidVersion(), 
            mraid.addEventListener("viewableChange", function(t) {
                if(t === void 0)  
                    t = mraid.isViewable();
            }

            if("loading" === mraid.getState()) {
                mraid.addEventListener("ready", function() {
                    //ready!
                }
            } else {
                // ready!
            }
                
         }, 
         // IMPORTANT
         MRAIDAdapter.prototype.prepare = function() {
             // use custom close button
             if (mraid.useCustomClose) 
                mraid.useCustomClose(!0);
             else {
                 var t = mraid.getExpandProperties();
                 t.useCustomClose = !0, 
                 mraid.setExpandProperties(t)
             }
         }, 


         MRAIDAdapter.prototype.onStateChange = function(t) {
             if (this.mraidIsReady) {
                 for (var e = document.querySelectorAll("video,audio"), i = 0; e.length > i; i++) e[i].pause();
                 switch (t) {
                     case "loading":
                         Logger("mraid").warn("MRAID SDK transitioned to state 'loading'?");
                         break;
                     case "default":
                         this.emit("stateChange", "default");
                         break;
                     case "expanded":
                         this.emit("stateChange", "expanded");
                         break;
                     case "hidden":
                         this.emit("stateChange", "dismissed");
                         break;
                     default:
                         Logger("mraid").error("Unexpected MRAID state: " + t)
                 }
             }
         }, 
         MRAIDAdapter.prototype.expand = function(t) {
                this._stopAllMedia()
                mraid.expand()
         }, 
         MRAIDAdapter.prototype.collapse = function(t) {
             this._stopAllMedia()
             if ("expanded" != mraid.getState()) 
               throw Error("Ad is not expanded and cannot be collapsed!");
             mraid.close()
         }, 
         MRAIDAdapter.prototype.dismiss = function() {
             this._stopAllMedia();
             mraid.close()
             if ("expanded" == mraid.getState()) 
                this.collapse();
             else {
                 if ("default" != mraid.getState()) 
                    throw Error("Can't dismiss from current state (" + mraid.getState() + ").");
             }
         }, 
         MRAIDAdapter.prototype.openBrowser = function(t) {
             mraid.open(t)
         }, 

         // IMPORTANT
         MRAIDAdapter.prototype.setOrientationLock = function(t) {
             if (2 != this.mraidVersion || !mraid.setOrientationProperties) 
                return false;

             mraid.setOrientationProperties({
                 allowOrientationChange: !1,
                 forceOrientation: "none" // | "portrait" | "landscape"
             });
         }, 
         MRAIDAdapter.prototype.waitForViewable00 = function(t, e, i) {
             this.waitForContainerViewable(i)
         };;


         // Initialization (dynamic)

         // Adapter and Format are the only objects needed for displaying an ad
         // InAppAdapter only works with DivPlacement

         var urls = {
             "creativeUrl": "https:\/\/hub-user.celtra.com\/api\/creatives\/e706ef80\/compiled\/",
             "apiUrl": "https:\/\/hub.celtra.com\/api\/",
             "cachedApiUrl": "https:\/\/cache-ssl.celtra.com\/api\/",
             "staticUrl": "https:\/\/cache-ssl.celtra.com\/api\/static\/vfe0e22efad\/",
             "insecureCreativeUrl": "http:\/\/hub-user.celtra.com\/api\/creatives\/e706ef80\/compiled\/",
             "insecureApiUrl": "http:\/\/hub.celtra.com\/api\/",
             "insecureCachedApiUrl": "http:\/\/cache.celtra.com\/api\/",
             "insecureStaticUrl": "http:\/\/cache.celtra.com\/api\/static\/vfe0e22efad\/",
             "trackingUrl": "https:\/\/track.celtra.com\/",
             "insecureTrackingUrl": "http:\/\/track.celtra.com\/",
             "geoUrl": "https:\/\/geo.celtra.com\/",
             "insecureGeoUrl": "http:\/\/geo.celtra.com\/",
             "fingerprintUrl": "https:\/\/fingerprint.celtra.com",
             "insecureFingerprintUrl": "http:\/\/fingerprint.celtra.com"
         };


         var unitName = 'banner';
         var requiredDeviceType = 'Phone';

         var adapter = new MRAIDAdapter(runtimeParams, trackingCenter, aggregatorTracking, experiments, openWebsiteOverrideUrls, getAppOverrideUrls);


         var format = new InterstitialFormat(adapter, {
             "banner": {
                 "size": null,
                 "layouts": [{
                     "orientation": "portrait",
                     "minSize": {
                         "width": 0,
                         "height": 0
                     },
                     "unitSize": {
                         "width": 320,
                         "height": 372
                     },
                     "designTimeSize": {
                         "width": 320,
                         "height": 372
                     },
                     "unitAlignment": {
                         "horizontal": "center",
                         "vertical": "center"
                     }
                 }]
             }
         });


         // HOMAM: NOT IMPORTANT
         (function() {
             // Add head or body, if they do not yet exist
             var html = document.documentElement;
             var head = document.querySelector('head');
             if (!head) {
                 head = document.createElement('head');
                 html.insertBefore(head, html.firstChild);
             }
             var body = document.querySelector('body');
             if (!body) {
                 body = document.createElement('body');
                 html.appendChild(body);
             }


             // Add CSS
             var styles = document.createElement('style');
             styles.textContent = "\/* Disables green outline on tapped objects on HTC phones running Android *\/\n\n* {\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  tap-highlight-color: rgba(0,0,0,0);\n}\n\n.celtra-creative-unit {\n  font-family: Helvetica;\n  font-size: 12pt;\n  position: relative;\n  \/* so contained elements are positioned OK and 'overflow: hidden' works *\/\n  \/*\n      z-indices:\n        10 - screenHolder\n        20 - placeboBar\n        40 - alert\n        30 - displayImageAction overlay\n        100 - close button\n    *\/\n}\n\n.celtra-screen-holder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 10;\n}\n\n.celtra-creative-unit,\n.celtra-creative-unit * {\n  text-size-adjust: none;\n  tap-highlight-color: transparent;\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  \/* override to 'text' manually if needed *\/\n  margin: 0;\n  padding: 0;\n}\n\n.celtra-close-button {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  z-index: 99999999;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n}\n\n.celtra-close-button-text {\n  font-family: Arial, Helvetica, Tahoma, sans-serif;\n  font-size: 12px;\n  line-height: 12px;\n  padding: 10px;\n  white-space: nowrap;\n  width: auto;\n  height: auto;\n  cursor: pointer;\n}\n\n.celtra-close-button.touched {\n  visibility: hidden;\n}\n\n.celtra-close-button-down {\n  visibility: hidden;\n}\n\n.celtra-close-button-up.touched+.celtra-close-button-down {\n  visibility: visible;\n}\n\n.celtra-close-button-text.touched {\n  visibility: visible;\n  padding-top: 11px;\n  padding-right: 9px;\n}\n\n.celtra-creative-unit input,\n.celtra-creative-unit textarea,\n.celtra-creative-unit .text-box-underlay,\n.transplanted-form-element-container input,\n.transplanted-form-element-container textarea,\n.transplanted-form-element {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  text-align: center;\n}\n\n.celtra-select-box {\n  text-align: center;\n}\n\n.celtra-display-image-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 30;\n  -webkit-transform: translateZ(0);\n  background-repeat: no-repeat;\n  background-position: center center;\n  \/* background-color and background-image set in code *\/\n}\n\n.celtra-display-image-overlay .celtra-back-button {\n  position: absolute;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  background: url('http:\/\/cache.celtra.com\/api\/static\/vfe0e22efad\/runner\/clazzes\/CreativeUnit\/back.png');\n  -webkit-background-size: 30px 60px;\n  background-size: 30px 60px;\n  -webkit-transform: translateZ(0);\n}\n\n.celtra-display-image-overlay .celtra-back-button.left {\n  left: 0;\n}\n\n.celtra-display-image-overlay .celtra-back-button.right {\n  right: 0;\n}\n\n.celtra-display-image-overlay .celtra-back-button.touched {\n  background-position: 0 100%;\n}\n\n.celtra-fit-to-container {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.celtra-center-content {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.celtra-center-content::before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.celtra-center-content > * {\n  vertical-align: middle;\n}\n\n\/* Custom alert box *\/\n\n#alert,\n#alert-dark-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 40;\n  width: 100%;\n  height: 100%;\n}\n\n#alert-dark-overlay {\n  background-color: #000;\n  opacity: .5;\n}\n\n#alert-box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 220px;\n  text-align: center;\n  padding: 13px 10px;\n  margin: -93px 0 0 -120px;\n  -webkit-border-radius: 7px;\n  border-radius: 7px;\n  display: none;\n  z-index: 41;\n  font-size: 14px;\n  background: rgba(50,50,50,1);\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(64,64,64,1)), to(rgba(39,39,39,1)));\n  background: -webkit-linear-gradient(top, rgba(64,64,64,1) 0%, rgba(39,39,39,1) 100%);\n  background: linear-gradient(top, rgba(64,64,64,1) 0%, rgba(39,39,39,1) 100%);\n  border: 1px solid #191919;\n  -webkit-box-shadow: 0 3px 20px rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.3);\n  box-shadow: 0 3px 20px rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2), inset 0 -1px 0 0 rgba(0,0,0,0.3);\n}\n\n#alert-title {\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 17px;\n  color: white;\n  text-align: center;\n  margin-bottom: 10px;\n  text-shadow: 0 1px 0 rgba(0,0,0,1);\n}\n\n#alert-dark-line,\n#alert-light-line {\n  width: 100%;\n  height: 1px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: rgba(45,44,45,1);\n  background: -webkit-gradient(linear, left top, right top, from(rgba(45,44,45,0)), color-stop(20%, rgba(45,44,45,1)), color-stop(80%, rgba(45,44,45,1)), to(rgba(45,44,45,0)));\n  background: -webkit-linear-gradient(left, rgba(45,44,45,0) 0%, rgba(45,44,45,1) 20%, rgba(45,44,45,1) 80%, rgba(45,44,45,0) 100%);\n  background: linear-gradient(left, rgba(45,44,45,0) 0%, rgba(45,44,45,1) 20%, rgba(45,44,45,1) 80%, rgba(45,44,45,0) 100%);\n}\n\n#alert-light-line {\n  margin: 0 0 10px 0;\n  background: rgba(73,74,73,1);\n  background: -webkit-gradient(linear, left top, right top, from(rgba(73,74,73,0)), color-stop(20%, rgba(73,74,73,1)), color-stop(80%, rgba(73,74,73,1)), to(rgba(73,74,73,0)));\n  background: -webkit-linear-gradient(left, rgba(73,74,73,0) 0%, rgba(73,74,73,1) 20%, rgba(73,74,73,1) 80%, rgba(73,74,73,0) 100%);\n  background: linear-gradient(left, rgba(73,74,73,0) 0%, rgba(73,74,73,1) 20%, rgba(73,74,73,1) 80%, rgba(73,74,73,0) 100%);\n}\n\n#alert-message {\n  font-family: Helvetica, Arial, sans-serif;\n  color: #999999;\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 10px;\n  text-shadow: 0 1px 0 rgba(0,0,0,1);\n}\n\n#alert-input {\n  display: block;\n  width: 178px;\n  height: 37px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #1a1a1a;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  color: white;\n  background: rgba(29,29,29,1);\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(26,26,26,1)), to(rgba(33,33,33,1)));\n  background: -webkit-linear-gradient(top, rgba(26,26,26,1) 0%, rgba(33,33,33,1) 100%);\n  background: linear-gradient(top, rgba(26,26,26,1) 0%, rgba(33,33,33,1) 100%);\n  -webkit-box-shadow: 0 1px 0 0 rgba(255,255,255,0.1);\n  box-shadow: 0 1px 0 0 rgba(255,255,255,0.1);\n  margin: 0 auto;\n}\n\n#alert-ok,\n#alert-cancel {\n  margin: 10px auto 0;\n  display: inline-block;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 178px;\n  height: 37px;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.2)));\n  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);\n  background: linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%);\n  border: 1px solid rgba(0,0,0,0.8);\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n  color: white;\n  line-height: 37px;\n  text-transform: uppercase;\n  text-shadow: 0 -1px 0 rgba(0,0,0,0.8);\n  -webkit-box-shadow: 0 1px 0 0 rgba(255,255,255,0.1), inset 0 1px 0 0 rgba(255,255,255,0.3);\n  box-shadow: 0 1px 0 0 rgba(255,255,255,0.1), inset 0 1px 0 0 rgba(255,255,255,0.3);\n  cursor: pointer;\n}\n\n#alert-ok.with-cancel {\n  width: 84px;\n}\n\n#alert-ok.no-margin-top {\n  margin-top: 0;\n}\n\n#alert-cancel {\n  margin-left: 10px;\n  width: 84px;\n}\n.celtra-screen {\n  \/*\n      Screens themselves have 0 area and visible overflow (default), so\n      click-through from base to master screen works.\n      \n      The master has z-index 0 and the primary screen has z-index 1.\n    *\/\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n.celtra-screen > * {\n  pointer-events: auto;\n}\n\/*\nThis extra CSS attribute is required for Internet Explorer 10+ to correctly\nroute Pointer events to the object being touched. This is mutually exclusive\nwith scrolling, so there's no way to have both at the same time. This will\nalso prevent swipeable banners if any element on stage has the `touchable`\nCSS class, but will generate `tap` events.\n*\/\n\n.touchable {\n  -ms-touch-action: none;\n}\n\n\/*\nOn IE, if a background is not set on an element, it is\ntransparent to mouse and touch events. This forces the\nelement to become opaque to user events.\n*\/\n\n.celtra-screen-object {\n  background: rgba(0,0,0,0);\n}\n\n\/*\nPointer cursor for hotspot component on desktop.\n*\/\n\n.celtra-hotspot {\n  cursor: pointer;\n}\n.celtra-button {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\n.celtra-button div {\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: transparent;\n  background-color: transparent;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.celtra-button div,\n.celtra-button img {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n\n.celtra-button .call-to-action {\n  padding: 0 3px;\n  white-space: nowrap;\n}\n\n.celtra-button .image-fit div {\n  -webkit-background-size: auto;\n  background-size: auto;\n}\n\n.celtra-button .image-stretch div {\n  -webkit-background-size: 100% 100%;\n  background-size: 100% 100%;\n}\n.celtra-text-box,\n.celtra-text-box * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.celtra-text-box input,\n.celtra-text-box textarea,\n.celtra-text-box > img,\n.celtra-text-box > canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.celtra-text-box > img {\n  display: block;\n  margin: 0;\n  padding: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.celtra-text-box input,\n.celtra-text-box textarea {\n  z-index: 3;\n  padding: 4px;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  -webkit-border-radius: 0;\n  border-radius: 0;\n  background: none;\n  outline: none;\n}\n.celtra-texty .scroll-container {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 1px solid transparent;\n  \/* node looses overflow: hidden if object is translated on Android native browser ... line below magically solves that *\/\n}\n\n.celtra-texty .scroll-container > div {\n  position: absolute;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.celtra-texty .scrollbar {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 5px;\n}\n\n.celtra-texty .scrollbar.outer {\n  right: -5px;\n}\n.celtra-shapey {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.celtra-shapey div {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: transparent;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n";
             head.appendChild(styles);

             // Add JS
             var js = document.createElement('script');
             head.appendChild(js);



         })();
     };
 })()