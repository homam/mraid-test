(function() {
    try {
        var params = {
            adTagId: "iaAdTagScript",
            adTagCidLSKeyName: "iaCID",
            defaultCid: "99999",
            resumeRfrsThresholdInMs: 2500,
            resumeRfrsCheckIntervalInMs: 250,
            rfiinms: 604800000,
            floatingBannerWasClosed: false,
            initialBodyPaddingBottom: 0,
            adDivId: "iaAdContainerDiv",
            adPlaceHolderDivId: "iaAdPlaceholder",
            isWP7: navigator.userAgent.match(/(Windows Phone 7)|(Windows Phone OS 7)/ig),
            isAndroid: navigator.userAgent.match(/Android/ig),
            isChrome: navigator.userAgent.match(/Chrome/ig),
            isWP: navigator.userAgent.match(/Windows Phone/),
            isiPadOrMini: navigator.userAgent.match(/iPad/),
            defaultAdHeight: 50,
            defaultAdHeightiPad: 90,
            noPlatformShowHideEventSupport: navigator.userAgent.match(/(Windows Phone)|(iPad)|(CriOS)/ig)
        };
        if (typeof iaAdTruthData === "undefined") {
            iaAdTruthData = ""
        }
        if (typeof fortyone === "undefined") {
            fortyone = {};
            fortyone.collect = function() {}
        }
        ia.iaAdTagInternalSettings = {
            adTagURL: ia.iaAdTagInternalSettings && ia.iaAdTagInternalSettings.adTagURL ? ia.iaAdTagInternalSettings.adTagURL : "http://ad-tag.inner-active.mobi/simpleM2M/RequestTagAd",
            adTagVersion: params.isWP7 ? null : "1.0.4"
        };
        var trackAd = function() {
            if (typeof fortyone !== "undefined" && typeof fortyone.collect === "function") {
                fortyone.collect("iaAdtruthCollectorInput")
            }
            var w = document.getElementById("iaAdtruthCollectorInput");
            ia.adSettings.AD_TRUTH = w ? w.value : ""
        };
        var removeAdTag = function() {
            var w = document.getElementById(params.adTagId);
            if (w) {
                try {
                    w.parentElement.removeChild(w)
                } catch (x) {}
            }
        };
        var setCID = function() {
            var localStorage = window.localStorage;
            var A = params.adTagCidLSKeyName + (ia.adSettings && ia.adSettings.APP_ID ? ia.adSettings.APP_ID : "");
            var x = "";
            try {
                if (localStorage) {
                    x = localStorage.getItem(A)
                }
                if (!x) {
                    var y = typeof getIACid === "function" ? getIACid() : "";
                    if (y) {
                        x = y;
                        localStorage.setItem(A, y)
                    }
                }
            } catch (B) {
                var y = typeof getIACid === "function" ? getIACid() : "";
                if (y) {
                    x = y
                }
            }
            var z = x ? x : params.defaultCid;
            ia.adSettings.CID = z
        };
        var objToQueryString = function(B, z) {
            var C = [];
            var y = "";
            if (typeof B === "object") {
                for (var A in B) {
                    var x = z ? z + "." + A : A,
                        w = B[A];
                    y = (typeof w !== "undefined" && w !== null && w !== "") ? encodeURIComponent(x) + "=" + encodeURIComponent(w) : null;
                    if (typeof w === "object" && w !== null) {
                        C.push(objToQueryString(w, x))
                    } else {
                        if (y !== null) {
                            C.push(y)
                        }
                    }
                }
            }
            return C.join("&")
        };
        var setup = function() {
            setCID();
            if (!ia.adSettings.CID || ia.adSettings.CID === params.defaultCid) {
                trackAd()
            }
            var w = {
                v: (ia.adSettings.IS_ORMMA_SUPPORT || ia.adSettings.IS_MRAID_SUPPORT) ? "2.1.0-Stag-" + ia.iaAdTagInternalSettings.adTagVersion : "2.0.1-Stag-" + ia.iaAdTagInternalSettings.adTagVersion,
                f: !ia.adSettings.IS_VIDEO_SUPPORT ? (ia.adSettings.IS_ORMMA_SUPPORT) ? ((ia.adSettings.IS_MRAID_SUPPORT) ? "116" : "52") : ((ia.adSettings.IS_MRAID_SUPPORT) ? "84" : "20") : "512",
                fs: ia.adSettings.IS_INTERSTITIAL_AD || ia.adSettings.IS_VIDEO_SUPPORT ? "true" : "false",
                aid: ia.adSettings.APP_ID,
                po: ia.adSettings.PORTAL,
                c: ia.adSettings.CATEGORY,
                k: ia.adSettings.KEYWORDS,
                test: ia.adSettings.FAILOVER ? "false" : "true",
                noadstring: ia.adSettings.FAILOVER,
                lg: ia.adSettings.GPS_COORDINATES,
                l: ia.adSettings.LOCATION,
                mw: ia.adSettings.IS_MOBILE_WEB ? "true" : "false",
                iemd: ia.adSettings.IMEI_MD5,
                iesha: ia.adSettings.IMEI_SHA1,
                mmd: ia.adSettings.MAC_MD5,
                msha: ia.adSettings.MAC_SHA1,
                dmd: ia.adSettings.UDID_MD5,
                dsha: ia.adSettings.UDID_SHA1,
                ismd: ia.adSettings.IMSI_MD5,
                issha: ia.adSettings.IMSI_SHA1,
                amd: ia.adSettings.ANDROID_ID_MD5,
                asha: ia.adSettings.ANDROID_ID_SHA1,
                idfa: ia.adSettings.IDFA,
                idfv: ia.adSettings.IDFV,
                a: ia.adSettings.AGE,
                g: ia.adSettings.GENDER,
                w: ia.adSettings.DEVICE_WIDTH,
                h: ia.adSettings.DEVICE_HEIGHT,
                mnc: ia.adSettings.MOBILE_NETWORK_CODE,
                mcc: ia.adSettings.MOBILE_COUNTRY_CODE,
                nt: ia.adSettings.NETWORK,
                ow: ia.adSettings.OPTIONAL_WIDTH,
                oh: ia.adSettings.OPTIONAL_HEIGHT,
                rw: ia.adSettings.REQUIRED_WIDTH,
                rh: ia.adSettings.REQUIRED_HEIGHT,
                bid: ia.adSettings.PACKAGE_NAME,
                cid: ia.adSettings.CID,
                timestamp: new Date().getTime(),
                at: ia.adSettings.AD_TRUTH ? ia.adSettings.AD_TRUTH : ""
            };
            var x = ia.iaAdTagInternalSettings.adTagURL + "?" + objToQueryString(w);
            removeAdTag();
            if (!params.isWP7) {
                (function(B, z) { // creating a script element
                    var y = B.createElement(z),
                        A = B.getElementsByTagName(z)[0]; // get the first script in the page
                    y.id = params.adTagId;
                    y.type = "text/javascript";
                    y.src = x;
                    A.parentNode.insertBefore(y, A); // add the new script before the first script of the page
                }(document, "script"))
            } else {
                document.write('<script type="text/javascript" id="iaAdTagScript" src="' + x + '">><\/script>')
            }
        };

        function v(B, w) {
            var x = B ? B.text || B.textContent || B.innerHTML || "" : "";
            var z = document.getElementsByTagName("head")[0] || document.documentElement;
            var y = document.createElement("script");
            y.type = "text/javascript";
            y.async = false;
            if (B && B.src) {
                y.src = B.src
            } else {
                try {
                    y.appendChild(document.createTextNode(x))
                } catch (A) {
                    y.text = x
                }
            }
            if (y && y.src || x) {
                if (Array.isArray(w) && w.length) {
                    w.splice(0, 1);
                    y.onload = function() {
                        v(w[0], w)
                    }
                }
                z.insertBefore(y, z.firstChild)
            }
            return arguments ? arguments.callee : undefined
        }
        var d = function(y) {
            var D = y && typeof y.getElementsByTagName === "function" ? y.getElementsByTagName("script") : [];
            var w = [];
            for (var C = 0; D[C]; C++) {
                if (!D[C].type || D[C].type.toLowerCase() === "text/javascript") {
                    w.push(D[C])
                }
            }
            var B = navigator.userAgent;
            var A = parseFloat(B.slice(B.indexOf("Android") + 8));
            if (B.indexOf("Android") >= 0 && A < 5) {
                for (var x = 0; w[x]; x++) {
                    if (w[x].parentNode) {
                        w[x].parentNode.removeChild(w[x])
                    }
                }
                v(w[0], w)
            } else {
                for (var z = 0; w[z]; z++) {
                    if (w[z].parentNode) {
                        w[z].parentNode.removeChild(w[z])
                    }
                    v(w[z])
                }
            }
        };
        var a = function(y) {
            var x = document.createElement("style");
            if (x.styleSheet) {
                x.styleSheet.cssText = y
            } else {
                if (!params.isWP7) {
                    x.appendChild(document.createTextNode(y))
                } else {
                    document.body.innerHTML += "<style>" + y + "<style>"
                }
            }
            var w = document.getElementsByTagName("head");
            w = w && w.length ? w[0] : null;
            return w ? w.appendChild(x) : false
        };
        var n = function() {
            if (typeof ia.onXClicked !== "function") {
                ia.onXClicked = function() {
                    params.floatingBannerWasClosed = true;
                    ia.clrRfItvl();
                    o()
                }
            }
            var w = document.getElementById("ad_align");
            if (w) {
                w.insertAdjacentHTML("afterbegin", "<a id='iaXButton' href='javascript:void(0);' onclick='if (typeof ia !== \"undefined\" && typeof ia.onXClicked === \"function\") ia.onXClicked.apply()'><img style='display:block' src='http://cdn2.inner-active.mobi/wv-css/ia_x01.png' id='iaXButtonImage'></img></a>")
            }
        };
        var t = function() {
            var y = document.getElementById("ad");
            var x = params.isWP ? params.defaultAdHeightWinPhone : (params.isiPadOrMini ? params.defaultAdHeightiPad : params.defaultAdHeight);
            var w = y && y.clientHeight ? y.clientHeight : x;
            a("#iaXButton {-webkit-tap-highlight-color: transparent; position:absolute; right:0px; bottom:" + w + "px;} body {padding-bottom:" + params.initialBodyPaddingBottom + w + "px}")
        };
        var b = function() {
            t();
            a("#ad_align{bottom:0px; position:fixed;z-index:9999;} #iaXButtonImage {position:relative; width:25px; height:25px; border:none;z-index:9999;}}")
        };
        var h = function() {
            var B = document.getElementById("ad_align");
            var x = document.getElementById("iaXButton");
            var A = document.getElementById("ad");
            if (B && x) {
                var w = B.style ? B.style.textAlign : "";
                var z = B.style ? B.style.width : "";
                if (!w) {
                    if (typeof window.getComputedStyle === "function") {
                        var y = window.getComputedStyle(B, null);
                        if (y && typeof y.getPropertyValue === "function") {
                            w = y.getPropertyValue("text-align");
                            z = parseInt(y.getPropertyValue("width"))
                        } else {
                            if (y.textAlign) {
                                w = y.textAlign;
                                z = parseInt(y.width)
                            }
                        }
                    }
                }
                if (w === "center" || w === "-webkit-center") {
                    if (x.style) {
                        x.style.right = z && A ? (z - A.width) / 2 + "px" : 0
                    }
                }
            }
        };
        var m = function() {
            b();
            n()
        };
        var u = function() {
            if (ia.adSettings.IS_FLOATING_BANNER && !ia.adSettings.IS_INTERSTITIAL_AD) {
                params.initialBodyPaddingBottom = document.body && typeof window.getComputedStyle === "function" ? parseInt(window.getComputedStyle(document.body).paddingBottom) : 0;
                if (isNaN(params.initialBodyPaddingBottom)) {
                    params.initialBodyPaddingBottom = 0
                }
            }
        }();
        ia.onBannerImgLoaded = function() {
            if (ia.adSettings.IS_FLOATING_BANNER && !ia.adSettings.IS_INTERSTITIAL_AD) {
                t();
                h()
            }
        };
        ia.adWasLoaded = function() {
            if (document.getElementById("ad")) {
                a("#ad {display:block}")
            }
            setCID();
            if (ia.adSettings.IS_FLOATING_BANNER && !ia.adSettings.IS_INTERSTITIAL_AD) {
                m()
            }
            var x = document.getElementById(params.adPlaceHolderDivId);
            var w = document.getElementById(params.adDivId);
            if (w) {
                if (x) {
                    x.appendChild(w)
                }
                d(w)
            } else {}
        };
        setup();
        var o = function() {
            var y = ["iaAdTagScript", "append", "track_href", "iaRichMediaBridge", "iaAdContainerDiv", "ad_align", "iaXButtonImage", "iaXButton"];
            for (var x = 0; x < y.length; x++) {
                var w = document.getElementById(y[x]);
                if (w) {
                    try {
                        if (w.style) {
                            w.style.display = "none"
                        }
                        w.parentElement.removeChild(w)
                    } catch (z) {}
                }
            }
            if (ia.adSettings.IS_FLOATING_BANNER && !ia.adSettings.IS_INTERSTITIAL_AD) {
                a("body {padding-bottom:" + params.initialBodyPaddingBottom + "px}")
            }
        };
        var e = (function() {
            var w = window.addEventListener ? window.addEventListener : window.attachEvent;
            w("orientationchange", function() {
                h()
            }, false);
            w("onorientationchange", function() {
                h()
            }, false)
        })();
        var i = function() {
            var z = true;
            var y = window.addEventListener ? window.addEventListener : window.attachEvent;
            var C = false;
            var w = function() {
                C = true
            };
            var B = function() {
                if (C) {
                    C = false;
                    ia.rfAd()
                }
            };
            if (!params.isAndroid) {
                y("pagehide", function(D) {
                    w()
                }, false);
                y("pageshow", function(D) {
                    B()
                }, false)
            } else {
                if (params.isChrome) {
                    document.addEventListener("webkitvisibilitychange", function() {
                        if (document.hidden || document.msHidden || document.webkitHidden) {
                            w()
                        } else {
                            B()
                        }
                    })
                } else {
                    y("blur", function(D) {
                        w()
                    }, false);
                    var x = 0;
                    var A = new Date().getTime();
                    y("focus", function(D) {
                        x = new Date().getTime();
                        if (x - A > 1000) {
                            A = new Date().getTime();
                            B()
                        }
                    }, false)
                }
            }
        };
        var g = function() {
            var z = false;
            var w = true;
            window.onscroll = function() {
                w = true
            };
            var x = function() {
                w = false;
                z = true
            };
            if (document.addEventListener) {
                document.addEventListener("touchmove", x, false)
            }
            var y = new Date().getTime();

            function A() {
                if (w && !z) {
                    var C = new Date().getTime();
                    if (C - y > params.resumeRfrsThresholdInMs) {
                        document.addEventListener("focus", function() {
                            this.removeEventListener("focus", arguments.callee, false);
                            ia.rfAd()
                        }, false);
                        var B = document.createEvent("Events");
                        B.initEvent("focus", true, true);
                        document.dispatchEvent(B)
                    }
                    y = C
                } else {
                    z = false;
                    y = new Date().getTime()
                }
            }
            window.setInterval(A, params.resumeRfrsCheckIntervalInMs)
        };
        var j = function() {
            if (!params.noPlatformShowHideEventSupport) {
                i()
            } else {
                g()
            }
        };
        var s = function() {
            ia.rfAd = function() {
                if (!params.floatingBannerWasClosed && !ia.adSettings.IS_VIDEO_SUPPORT && !ia.adSettings.IS_INTERSTITIAL_AD) {
                    if (document.getElementById("iaAdContainerDiv")) {
                        o();
                        setTimeout(function() {
                            setup();
                        }, 500)
                    } else {
                        setup();
                    }
                }
            };
            j();
            if (!params.isWP7) {
                var w = setInterval(function() {
                    ia.rfAd()
                }, params.rfiinms);
                ia.clrRfItvl = function() {
                    if (typeof w !== "undefined" && w) {
                        window.clearInterval(w)
                    }
                }
            }
        }()
    } catch (q) {}
})();