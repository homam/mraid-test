(function() {
    // payload delivery

    if (!window.celtra)
        window.celtra = {};
    if (!window.celtra.payloads)
        window.celtra.payloads = {};

    window.celtra.payloads["http:\/\/cache.celtra.com\/api\/creatives\/e706ef80\/compiled\/mraid-ad.js?v=13-fe0e22efad&secure=0"] = function(script, runtimeParams, trackers, openWebsiteOverrideUrls, getAppOverrideUrls, brand) {
        function inherit(t, e) {
            var i = function() {};
            i.prototype = e.prototype, t.prototype = new i, t.uber = e.prototype, t.uberConstructor = e, t.prototype.constructor = t
        }

        function extend(t, e) {
            for (var i = 1; arguments.length > i; i++) {
                var e = arguments[i];
                if (e instanceof Object)
                    for (var n in e) t[n] = e[n]
            }
            return t
        }

        function deep(t, e) {
            for (var i in e) t[i] instanceof Object && e[i] instanceof Object ? deep(t[i], e[i]) : t[i] = e[i]
        }

        function delayed(t, e) {
            var i = null;
            return function() {
                i && clearTimeout(i), i = setTimeout(t, e)
            }
        }

        function throttled(t, e) {
            var i = null;
            return function() {
                i || (i = setTimeout(function() {
                    i = null, t()
                }, e))
            }
        }

        function deferred(t, e) {
            return function() {
                defer(t, e)
            }
        }

        function hasClass(t, e) {
            return -1 != (" " + t.className + " ").indexOf(" " + e + " ")
        }

        function addClass(t, e) {
            hasClass(t, e) || (t.className += " " + e)
        }

        function removeClass(t, e) {
            t.className = t.className.replace(RegExp("(\\s|^)" + e + "(\\s|$)"), " ")
        }

        function toggleClass(t, e) {
            hasClass(t, e) ? removeClass(t, e) : addClass(t, e)
        }

        function cssurl(t) {
            return "url('" + t.replace(/'/g, "\\'") + "')"
        }

        function ucfirst(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function zeroPad(t, e) {
            null == e && (e = 2);
            var i = Math.max(0, e - ("" + t).length),
                n = ("" + Math.pow(10, i)).slice(1);
            return n + t
        }

        function htmlentitize(t) {
            return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function trim(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }

        function to_utf8(t) {
            return unescape(encodeURIComponent(t))
        }

        function randInt() {
            return (Math.random() + "").slice(2)
        }

        function attach(t, e, i, n) {
            var o = CStyler._eventNames[e.toLowerCase()] || e;
            t.addEventListener(o, i, !!n)
        }

        function detach(t, e, i, n) {
            var o = CStyler._eventNames[e.toLowerCase()] || e;
            t.removeEventListener(o, i, !!n)
        }

        function once(t, e, i, n) {
            attach(t, e, function o() {
                detach(t, e, o, n), i.apply(this, arguments)
            }, n)
        }

        function trigger(t, e, i, n) {
            var o = document.createEvent("HTMLEvents");
            o.initEvent(e, i, n);
            var r = "on" + ucfirst(e);
            return "function" == typeof t[r] && t[r](), t.dispatchEvent(o)
        }

        function fakeclick(t, e) {
            e = e || window;
            var i = e.document.createElement("a");
            i.cssText = "visibility: hidden", i.addEventListener("click", function(e) {
                t(), e.preventDefault(), e.stopPropagation(), i.parentNode.removeChild(i)
            }, !0), e.document.body.appendChild(i);
            var n = document.createEvent("MouseEvents");
            n.initEvent("click", !0, !0), i.dispatchEvent(n)
        }

        function fakeClickAhrefBlank(t, e, i) {
            e = e || noop, i = i || window;
            var n = i.document.createElement("a");
            n.style.cssText = "visibility: hidden", n.setAttribute("href", t), n.setAttribute("target", "_blank"), n.addEventListener("click", function(t) {
                t.stopPropagation(), e(), n.parentNode.removeChild(n)
            }, !0), i.document.body.appendChild(n);
            var o = i.document.createEvent("MouseEvents");
            o.initEvent("click", !0, !0), n.dispatchEvent(o)
        }

        function noop() {}

        function nullai(t, e) {
            e()
        }

        function retTrue() {
            return !0
        }

        function retFalse() {
            return !1
        }

        function offset(t) {
            var e = t.getBoundingClientRect(),
                i = t.ownerDocument,
                n = i.documentElement,
                o = i.defaultView;
            return {
                top: e.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: e.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }
        }

        function addCssRule(t, e, i) {
            var n = document.createElement("style");
            n.textContent = t + " {" + e + "}", i ? i.document.getElementsByTagName("head")[0].appendChild(n) : document.getElementsByTagName("head")[0].appendChild(n)
        }

        function redrawAndroidIframe() {
            var t = document.createElement("style");
            document.body.appendChild(t), document.body.removeChild(t)
        }

        function parseQuery(t) {
            var e = {};
            return t = t.replace(/\&$/, "").replace(/\+/g, "%20"), t.split("&").forEach(function(t) {
                var i = t.split("=").map(decodeURIComponent);
                e[i[0]] = i[1]
            }), e
        }

        function buildQuery(t) {
            var e = [];
            for (var i in t) e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return e.join("&")
        }

        function postBlob(t, e) {
            var i = new XMLHttpRequest;
            i.open("POST", creative.apiUrl + "blobs?base64=1"), i.setRequestHeader("Content-Type", "application/octet-stream"), i.onreadystatechange = function() {
                4 === i.readyState && e(i.responseText, i.status)
            }, i.send(t)
        }

        function tmpl(t, e) {
            function i(t) {
                return "  p.push('" + t.replace(/'/g, "\\'").split(/\r?\n/g).join("\\n');\n  p.push('") + "');\n"
            }
            if (!t) return "";
            var n;
            if (-1 == t.indexOf("<%")) n = function() {
                return t
            };
            else {
                var o = t.split(/<%\s*|\s*%>/g),
                    r = "var p = []; with(o) {\n",
                    s = !1;
                o.forEach(function(t) {
                    s ? r += "=" == t[0] ? "  p.push(" + t.replace(/^=\s*|\s*$/g, "") + ");\n" : "  " + t + "\n" : t && (r += i(t)), s = !s
                }), r += '} return p.join("");';
                try {
                    n = Function("o", r)
                } catch (a) {
                    var h = Error("Cannot parse template! (see `template` property)");
                    throw h.template = r, h
                }
            }
            return e ? n(e) : n
        }

        function flash() {
            var t = document.createElement("div");
            t.style.background = "white", t.style.opacity = .005, t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.width = "100%", t.style.height = "100%", t.style.zIndex = 1e6, document.body.appendChild(t), setTimeout(function() {
                t.parentNode.removeChild(t)
            }, 0)
        }

        function crc32(t) {
            "use strict";
            var e = -1,
                i = 0,
                n = [0, -227835133, -516198153, 324072436, -946170081, 904991772, 648144872, -724933397, -1965467441, 2024987596, 1809983544, -1719030981, 1296289744, -1087877933, -1401372889, 1578318884, 274646895, -499825556, -244992104, 51262619, -675000208, 632279923, 922689671, -996891772, -1702387808, 1760304291, 2075979607, -1982370732, 1562183871, -1351185476, -1138329528, 1313733451, 549293790, -757723683, -1048117719, 871202090, -416867903, 357341890, 102525238, -193467851, -1436232175, 1477399826, 1264559846, -1187764763, 1845379342, -1617575411, -1933233671, 2125378298, 820201905, -1031222606, -774358714, 598981189, -143008082, 85089709, 373468761, -467063462, -1170599554, 1213305469, 1526817161, -1452612982, 2107672161, -1882520222, -1667500394, 1861252501, 1098587580, -1290756417, -1606390453, 1378610760, -2032039261, 1955203488, 1742404180, -1783531177, -878557837, 969524848, 714683780, -655182201, 205050476, -28094097, -318528869, 526918040, 1361435347, -1555146288, -1340167644, 1114974503, -1765847604, 1691668175, 2005155131, -2047885768, -604208612, 697762079, 986182379, -928222744, 476452099, -301099520, -44210700, 255256311, 1640403810, -1817374623, -2130844779, 1922457750, -1503918979, 1412925310, 1197962378, -1257441399, -350237779, 427051182, 170179418, -129025959, 746937522, -554770511, -843174843, 1070968646, 1905808397, -2081171698, -1868356358, 1657317369, -1241332974, 1147748369, 1463399397, -1521340186, -79622974, 153784257, 444234805, -401473738, 1021025245, -827320098, -572462294, 797665321, -2097792136, 1889384571, 1674398607, -1851340660, 1164749927, -1224265884, -1537745776, 1446797203, 137323447, -96149324, -384560320, 461344835, -810158936, 1037989803, 781091935, -588970148, -1834419177, 1623424788, 1939049696, -2114449437, 1429367560, -1487280117, -1274471425, 1180866812, 410100952, -367384613, -112536529, 186734380, -538233913, 763408580, 1053836080, -860110797, -1572096602, 1344288421, 1131464017, -1323612590, 1708204729, -1749376582, -2065018290, 1988219213, 680717673, -621187478, -911630946, 1002577565, -284657034, 493091189, 238226049, -61306494, -1307217207, 1082061258, 1395524158, -1589280451, 1972364758, -2015074603, -1800104671, 1725896226, 952904198, -894981883, -638100751, 731699698, -11092711, 222117402, 510512622, -335130899, -1014159676, 837199303, 582374963, -790768336, 68661723, -159632680, -450051796, 390545967, 1230274059, -1153434360, -1469116676, 1510247935, -1899042540, 2091215383, 1878366691, -1650582816, -741088853, 565732008, 854102364, -1065151905, 340358836, -433916489, -177076669, 119113024, 1493875044, -1419691417, -1204696685, 1247431312, -1634718085, 1828433272, 2141937292, -1916740209, -483350502, 291187481, 34330861, -262120466, 615137029, -691946490, -980332558, 939183345, 1776939221, -1685949482, -1999470558, 2058945313, -1368168502, 1545135305, 1330124605, -1121741762, -210866315, 17165430, 307568514, -532767615, 888469610, -962626711, -707819363, 665062302, 2042050490, -1948470087, -1735637171, 1793573966, -1104306011, 1279665062, 1595330642, -1384295599];
            for (i = 0; t.length > i; i++) e = e >>> 8 ^ n[255 & (e ^ t.charCodeAt(i))];
            return (-1 ^ e) >>> 0
        }

        function isArray(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }

        function isDefAndNotNull(t) {
            return null != t
        }

        function updateQueryStringParameter(t, e, i) {
            e = encodeURIComponent(e), i = encodeURIComponent(i);
            var n = RegExp("([?|&])" + e + "=.*?(&|$)", "i");
            return separator = -1 !== t.indexOf("?") ? "&" : "?", t.match(n) ? t.replace(n, "$1" + e + "=" + i + "$2") : t + separator + e + "=" + i
        }

        function fetchShortenedUrl(t, e, i) {
                function n(e, i) {
                    r[t].forEach(function(t) {
                        t[e](i)
                    }), delete r[t]
                }
                i = i || noop;
                var o = !1,
                    r = fetchShortenedUrl.inProgress,
                    s = fetchShortenedUrl.cache;
                if (s[t]) return defer(function() {
                    e(s[t])
                }), void 0;
                if (r[t] || (r[t] = [], o = !0), r[t].push({
                        success: e,
                        error: i
                    }), o) {
                    var a = creative.runtimeParams.secure ? creative.cachedApiUrl : creative.insecureCachedApiUrl,
                        h = a + "/services/shortener",
                        l = {
                            longUrl: t
                        },
                        c = btoa(to_utf8(t));
                    c = c.replace(/\//g, "$").replace(/\+/g, "_").replace(/=/g, "");
                    var d = {
                        cbName: "shortener_" + c
                    };
                    loadJSONP(h + "?" + buildQuery(l), d, function(e) {
                        s[t] = e.id, n("success", e.id)
                    }, function() {
                        n("error")
                    })
                }
            }(function(t) {
                try {
                    for (; t.parent.location.href !== void 0 && t.parent.document !== t.document;) t = t.parent
                } catch (e) {}
                this.defer = function(e, i) {
                    e && t.setTimeout(e, 0 | i)
                }
            })(window), Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e = this;
                return function() {
                    return e.apply(t, arguments)
                }
            }), Date.now || (Date.now = function() {
                return +new Date
            }), Array.prototype.waitForEach || Object.defineProperty(Array.prototype, "waitForEach", {
                value: function(t, e, i) {
                    var n = this.length;
                    n ? this.forEach(function(o, r, s) {
                        var a = !1;
                        t.call(i, o, function() {
                            if (a) throw "Called `done` multiple times for element " + r;
                            a = !0, --n || e()
                        }, r, s)
                    }, i) : e()
                }
            }),
            function(t) {
                t.loadJS = function(e, i, n, o) {
                    var r = t.loadJS.externals,
                        s = {
                            success: i || noop,
                            error: n || noop
                        };
                    if (e in r && !o) r[e].loaded ? setTimeout(s.success, 0) : r[e].cbs.push(s);
                    else {
                        r[e] = {
                            cbs: [s]
                        };
                        var a = document.createElement("script");
                        a.type = "text/javascript", a.onload = function() {
                            r[e].loaded = !0, r[e].cbs.forEach(function(t) {
                                t.success()
                            }), r[e].cbs = []
                        }, a.onerror = function() {
                            r[e].cbs.forEach(function(t) {
                                t.error()
                            }), r[e].cbs = [], delete r[e]
                        }, a.src = e, t.loadJS.appendToRoot(a)
                    }
                }, t.loadJS.externals = {}, t.loadJS.appendToRoot = function(t) {
                    return document.querySelector("head").appendChild(t)
                }, t.loadJSONP = function(e, i, n, o) {
                    "function" == typeof i && (o = n, n = i, i = {});
                    var r = i.cbName || "__jsonp" + randInt();
                    e += (-1 == e.indexOf("?") ? "?" : "&") + (i.paramName || "jsonp") + "=" + r, t[r] = function(e) {
                        n(e), delete t[r]
                    }, loadJS(e, noop, o, !0)
                }
            }(window), Function.prototype.name === void 0 && function() {
                var t = /^function\s+(\w+?)\s*?\(/;
                Object.defineProperty(Function.prototype, "name", {
                    get: function() {
                        var e = this.constructor.prototype.toString.call(this);
                        return t.test(e) ? e.match(t)[1] : ""
                    }
                })
            }(), fetchShortenedUrl.cache = {}, fetchShortenedUrl.inProgress = {};;

        function CPoint(t, e) {
            this.x = 1 * t || 0, this.y = 1 * e || 0
        }

        function CRect(t, e, i, n) {
            this.left = 1 * t || 0, this.top = 1 * e || 0, this.width = 1 * i || 0, this.height = 1 * n || 0
        }(function() {
            CPoint.offset = function(t) {
                var e = offset(t);
                return new CPoint(e.left, e.top)
            };
            var t = null;
            try {
                t = new WebKitPoint(0, 0)
            } catch (e) {}
            CPoint.convertPointFromNodeToPage = null, CPoint.convertPointFromPageToNode = null, t ? (CPoint.convertPointFromNodeToPage = function(e, i) {
                return i ? (t.x = i.x, t.y = i.y) : (t.x = 0, t.y = 0), i = webkitConvertPointFromNodeToPage(e, t), i ? new CPoint(i.x, i.y) : null
            }, CPoint.convertPointFromPageToNode = function(e, i) {
                return i ? (t.x = i.x, t.y = i.y) : (t.x = 0, t.y = 0), i = webkitConvertPointFromPageToNode(e, t), i ? new CPoint(i.x, i.y) : null
            }) : (CPoint.convertPointFromNodeToPage = function(t, e) {
                if (!t || t.x !== void 0) return null;
                var i = CPoint.offset(t);
                return new CPoint((e ? e.x : 0) + (i ? i.x : 0), (e ? e.y : 0) + (i ? i.y : 0))
            }, CPoint.convertPointFromPageToNode = function(t, e) {
                if (!t || t.x !== void 0) return null;
                var i = CPoint.offset(t);
                return new CPoint((e ? e.x : 0) - (i ? i.x : 0), (e ? e.y : 0) - (i ? i.y : 0))
            })
        })(), CPoint.sample = function(t, e, i) {
            for (var n = Math.floor(Math.sqrt(t.width * e / t.height)), o = Math.floor(Math.sqrt(t.height * e / t.width)), r = t.width / n, a = t.height / o, s = 0; o > s; s++)
                for (var h = 0; n > h; h++) i((h + .5) * r + t.left, (s + .5) * a + t.top)
        }, CPoint.epsilon = function(t, e, i) {
            return i > Math.abs(t - e)
        }, CPoint.prototype.equals = function(t) {
            return CPoint.epsilon(this.x, t.x, .25) && CPoint.epsilon(this.y, t.y, .25)
        }, Object.defineProperties(CRect.prototype, {
            right: {
                get: function() {
                    return this.left + this.width
                },
                set: function(t) {
                    var e = this.left;
                    this.left > t && (this.left = t, t = e), this.width = t - this.left
                },
                enumerable: !0
            },
            bottom: {
                get: function() {
                    return this.top + this.height
                },
                set: function(t) {
                    var e = this.top;
                    this.top > t && (this.top = t, t = e), this.height = t - this.top
                },
                enumerable: !0
            },
            tl: {
                get: function() {
                    return new CPoint(this.left, this.top)
                }
            },
            tr: {
                get: function() {
                    return new CPoint(this.right, this.top)
                }
            },
            bl: {
                get: function() {
                    return new CPoint(this.left, this.bottom)
                }
            },
            br: {
                get: function() {
                    return new CPoint(this.right, this.bottom)
                }
            },
            area: {
                get: function() {
                    return this.width * this.height
                }
            }
        }), CRect.adopt = function(t) {
            return new CRect(t.left, t.top, t.width, t.height)
        }, CRect.prototype.intersect = function(t) {
            if (!t) return !1;
            var e = Math.max(this.left, t.left),
                i = Math.max(this.top, t.top),
                n = Math.min(this.right, t.right),
                o = Math.min(this.bottom, t.bottom),
                r = n - e,
                a = o - i;
            return 0 > r || 0 > a ? null : new CRect(e, i, r, a)
        }, CRect.prototype.contains = function(t) {
            return t instanceof CPoint ? t.x >= this.left && t.x <= this.right && t.y >= this.top && t.y <= this.bottom : t instanceof CRect ? t.left >= this.left && t.right <= this.right && t.top >= this.top && t.bottom <= this.bottom : void 0
        }, CRect.prototype.map = function(t, e) {
            var i = e.width / t.width,
                n = e.height / t.height;
            return new CRect((this.left - t.left) * i + e.left, (this.top - t.top) * n + e.top, this.width * i, this.height * n)
        };;
        (function(t) {
            function e() {
                var t = p().match(/iP(ad|hone|od).*OS ([0-9_]+)/);
                return !!t && d(t[2].replace(/_/g, "."), arguments)
            }

            function i() {
                var t = p().match(/Android ([0-9.]+)/);
                return !!t && d(t[1], arguments)
            }

            function n() {
                var t = p().match(/Windows Phone ([0-9.]+)/);
                return !!t && d(t[1], arguments)
            }

            function o() {
                var t = p().match(/AppleWebKit\/*([0-9.]+)/i);
                return !!t && d(t[1], arguments)
            }

            function r() {
                var t = p().match(/Gecko\/*([0-9.]+)/i);
                return !!t && d(t[1], arguments)
            }

            function a() {
                var t = p().match(/MSIE ([0-9]{1,}[.0-9]{0,})|Trident.* rv:([0-9]{1,}[.0-9]{0,})/i);
                return !!t && d(t[1] || t[2], arguments)
            }

            function s() {
                var t = p().match(/Silk\/([0-9.]+)/);
                return !!t && d(t[1], arguments)
            }

            function h() {
                var t = p().toLowerCase();
                return /kftt|kfot|kfjwi|kfjwa|kfso|kfth|kfapwi|kfthwi|kfsowi|kfthwa|kfapwa|kfap/.test(t) ? d("2", arguments) : /kindle fire/.test(t) && i("2") ? d("1", arguments) : !1
            }

            function l() {
                return !c() && (t.document.body.offsetWidth, t.Math.min(innerWidth, innerHeight) > 550) || /iPad/.test(p())
            }

            function c() {
                return !(i() || e() || n())
            }

            function d(e, i) {
                function n(e, i) {
                    for (var n = 0; t.Math.min(e.length, i.length) > n; n++) {
                        if (e[n] < i[n]) return -1;
                        if (e[n] > i[n]) return 1
                    }
                    return 0
                }
                var o, r, a = function(e) {
                    return t.parseInt(e, 10)
                };
                if (0 == i.length) o = null, r = null;
                else if (1 == i.length) o = i[0], r = i[0];
                else {
                    if (2 != i.length) throw "Invalid number of arguments";
                    o = i[0], r = i[1]
                }
                e = e.split("."), o = o ? o.split(".").map(a) : [], r = r ? r.split(".").map(a) : [];
                for (var s = t.Math.max(o.length, r.length) - e.length; s >= 0; s--) e.push(0);
                return !(-1 == n(e, o) || 1 == n(e, r))
            }

            function u() {
                return t.top !== t
            }
            t.ios = e, t.android = i, t.webkit = o, t.windowsPhone = n, t.gecko = r, t.windows = a, t.kindleSilk = s, t.kindle = h, t.iframe = u, t.desktop = c, t.tablet = l;
            var p = function() {
                return t.userAgentOverride !== void 0 ? t.userAgentOverride : t.navigator.userAgent
            }
        })(window);;
        var EventEmitter = {
            emit: function(t) {
                var e = this._listeners;
                if (e && e[t]) {
                    var r = [].slice.call(arguments, 1);
                    e[t].forEach(function(t) {
                        t.apply(window, r)
                    })
                }
            },
            emits: function() {
                var t = arguments;
                return function() {
                    this.emit.apply(this, t)
                }.bind(this)
            },
            addListener: function(t, e) {
                var r = this._listeners;
                r || (r = this._listeners = {}), r[t] || (r[t] = []), r[t].push(e)
            },
            removeListener: function(t, e) {
                var r = this._listeners;
                r && r[t] && (r[t] = r[t].filter(function(t) {
                    return t !== e
                }))
            },
            once: function(t, e) {
                var r = this;
                r.on(t, function i() {
                    r.off(t, i), e.apply(this, arguments)
                })
            },
            onAll: function(t, e) {
                t.split(" ").waitForEach(function(t, e) {
                    this.once(t, e)
                }, e, this)
            }
        };
        EventEmitter.on = EventEmitter.addListener, EventEmitter.off = EventEmitter.removeListener;;

        function TaskScheduler() {
            this.hub = extend({}, EventEmitter)
        }
        TaskScheduler.prototype.when = function() {
            var t, e = this;
            return t = Array.isArray(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments), {
                run: function(i) {
                    t.waitForEach(function(t, i) {
                        e.hub.once(t, i)
                    }, i)
                }
            }
        }, TaskScheduler.prototype.notify = function(t) {
            this.paused || this.hub.emit(t)
        }, TaskScheduler.prototype.notifies = function(t) {
            return function() {
                this.notify(t)
            }.bind(this)
        }, TaskScheduler.prototype.pause = function() {
            this._paused = !0
        };;

        function TrackingCenter(t, e, i) {
            var n = this;
            this._sessionId = t, this._trackingUrl = e, this._trackers = i, this.windowForPixels = window, this._instantiation = randInt(), this._eventIndex = 0, this._pendingEvents = [], this._eventsInProgress = [], this._pendingPixels = [], this._unloadImminent = !1, this._waitingTrackingRequests = 0, n.on("trackingQueueEnlarged", function() {
                n._unlessUnloadImminent(function() {
                    n.flush()
                })
            })
        }
        extend(TrackingCenter.prototype, EventEmitter), TrackingCenter.eventCountLimit = 500, TrackingCenter.prototype.isTrackingLimitReached = function() {
            return this._eventIndex >= TrackingCenter.eventCountLimit
        }, TrackingCenter.prototype._createTrackingEvent = function(t) {
            return t = JSON.parse(JSON.stringify(t)), extend({
                sessionId: this._sessionId,
                instantiation: this._instantiation,
                index: this._eventIndex++,
                clientTimestamp: new Date / 1e3
            }, t)
        }, TrackingCenter.prototype._addEventPendingToQueues = function(t) {
            var e = this._resolvePixelsAndEventsForQueue([t]);
            this.isTrackingLimitReached() && e.events.push(this._createTrackingEvent({
                name: "eventLimitReached"
            })), e.events.forEach(function(t) {
                Logger("tracking").log("Queuing event " + JSON.stringify(t))
            }), e.pixels.forEach(function(t) {
                Logger("tracking").log("Queuing pixel " + JSON.stringify(t))
            }), this._pendingEvents = this._pendingEvents.concat(e.events), this._pendingPixels = this._pendingPixels.concat(e.pixels)
        }, TrackingCenter.prototype.track = function(t, e) {
            return this.isTrackingLimitReached() ? (console.warn("Tracking limit reached: 500 events."), void 0) : (e = e || noop, this._addEventPendingToQueues(t), this.emit("trackingQueueEnlarged"), this.once("trackingQueueEmptied", e), void 0)
        }, TrackingCenter.prototype.trackNoLaterThan = function(t, e, i) {
            function n(t) {
                return parseInt(t, 10) === t
            }
            if (this.isTrackingLimitReached()) return console.warn("Tracking limit reached: 500 events."), void 0;
            n(e) ? 0 > e && (e = 0) : e = 1500, i = i || noop;
            var o = null;
            this._addEventPendingToQueues(t), this.once("trackingQueueEmptied", function() {
                o && (clearTimeout(o), o = null), i()
            }), o = setTimeout(this.emits("trackingQueueEnlarged"), e)
        }, TrackingCenter.prototype._resolvePixelsAndEventsForQueue = function(t) {
            function e(t, n, o) {
                if (0 == t.length) return {
                    events: n,
                    pixels: o
                };
                var s = t[0],
                    r = i._createTrackingEvent(s),
                    a = i._trackers.urlsAndEventsFor(r);
                return e(t.slice(1).concat(a.events || []), n.concat(r), o.concat(a.urls || []))
            }
            var i = this;
            return e(t, [], [])
        }, TrackingCenter.prototype._firePixel = function(t, e) {
            var i = this.windowForPixels.document.createElement("img");
            i.onload = i.onerror = e, i.src = t
        }, TrackingCenter.prototype.flush = function(t) {
            function e() {
                --i._waitingTrackingRequests || (i.emit("trackingQueueEmptied"), t())
            }
            var i = this;
            t = t || noop;
            var n = i._pendingEvents;
            i._pendingEvents = [], i._eventsInProgress = i._eventsInProgress.concat(n), n.length && (i._waitingTrackingRequests++, i._firePixel(i._getTrackerPixelUrl(n), function() {
                i._eventsInProgress = i._eventsInProgress.filter(function(t) {
                    return -1 === n.indexOf(t)
                }), e()
            })), i._pendingPixels.forEach(function(t) {
                i._waitingTrackingRequests++, i._firePixel(t, e)
            }), i._pendingPixels = [], 0 === i._waitingTrackingRequests && this.windowForPixels.setTimeout(t, 0)
        }, TrackingCenter.prototype._getTrackerUrl = function(t) {
            return base64json = this.windowForPixels.btoa(to_utf8(JSON.stringify(t))), this._trackingUrl + "json/" + base64json + "?crc32c=" + crc32(base64json)
        }, TrackingCenter.prototype._getTrackerPixelUrl = function(t) {
            return this._getTrackerUrl({
                events: t
            })
        }, TrackingCenter.prototype._getTrackerRedirectUrl = function(t, e, i, n) {
            n = n || {};
            var o = {
                events: t,
                pixels: e,
                requestedCookies: n.cookies || [],
                dest: i
            };
            return n.jsRedirectFunc && (o.redirectFunc = n.jsRedirectFunc), this._getTrackerUrl(o)
        }, TrackingCenter.prototype.wrapRedirectPageUrl = function(t, e) {
            this._unloadImminent = !0;
            var i = this;
            return this.windowForPixels.setTimeout(function() {
                i._pendingEvents = [], i._pendingPixels = [], i._unloadImminent = !1
            }, 1e3), this._getTrackerRedirectUrl(this._pendingEvents.concat(this._eventsInProgress), this._pendingPixels, t, e)
        }, TrackingCenter.prototype.wrapTentativeRedirectPageUrl = function(t, e, i) {
            var n = this._resolvePixelsAndEventsForQueue(e);
            return this._getTrackerRedirectUrl(this._pendingEvents.concat(n.events, this._eventsInProgress), this._pendingPixels.concat(n.pixels), t, i)
        }, TrackingCenter.prototype._unlessUnloadImminent = function(t) {
            var e = this;
            this.windowForPixels.setTimeout(function() {
                e._unloadImminent || t()
            }, 0)
        };;

        function Experiments(t, e) {
            this._instances = {};
            for (var r in t) this._instances[r] = new Experiment(r, t[r], e)
        }

        function Experiment(t, e, r) {
            this.key = t, this.chosenVariant = e, this._trackingCenter = r, this._variantExposedTracked = !1, this._variantSucceededTracked = !1, this.trackExposure = function() {
                this._track("variantExposed")
            }.bind(this), this.trackSuccess = function() {
                this._track("variantSucceeded")
            }.bind(this)
        }
        Experiments.prototype.get = function(t, e) {
            var r = [t].concat(e || []).map(encodeURIComponent).join("/");
            return this._instances[r] || null
        }, Experiment.prototype._track = function(t) {
            this["_" + t + "Tracked"] || (this["_" + t + "Tracked"] = !0, this._trackingCenter.track({
                name: t,
                experimentKey: this.key,
                variant: this.chosenVariant
            }))
        };;

        function TouchEventSimulator(t) {
            this.el = t, this.doc = t.ownerDocument ? t.ownerDocument : t, this.win = this.doc.defaultView, this.touch = null, this._initialised = !1, this._firstEventFired = !1, this.handleFirstEvent = this.handleFirstEvent.bind(this), this.handleMouseDown = this.handleMouseDown.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleMouseUp = this.handleMouseUp.bind(this), this.handleMouseOut = this.handleMouseOut.bind(this), this.handlePointerDown = this.handlePointerDown.bind(this), this.handlePointerMove = this.handlePointerMove.bind(this), this.handlePointerUp = this.handlePointerUp.bind(this), this.handlePointerCancel = this.handlePointerCancel.bind(this), this.captureBubbleEvents = this.captureBubbleEvents.bind(this)
        }
        TouchEventSimulator.mode = null, TouchEventSimulator.prototype.start = function() {
            return this._initialised ? (Logger("TouchEventSimulator").warn("Touch event simulator already initialised!"), void 0) : (Logger("TouchEventSimulator").log("Enabling touch event simulation"), this.doc.defaultView.msPointerEnabled ? this.startPointers() : this.startMouse(), this.el.addEventListener("touchstart", this.captureBubbleEvents, !1), this.el.addEventListener("touchmove", this.captureBubbleEvents, !1), this.el.addEventListener("touchend", this.captureBubbleEvents, !1), this.el.addEventListener("touchcancel", this.captureBubbleEvents, !1), this.el.addEventListener("tap", this.captureBubbleEvents, !1), void 0)
        }, TouchEventSimulator.prototype.stop = function() {
            return this._initialised ? (Logger("TouchEventSimulator").log("Disabling touch event simulation"), this.doc.defaultView.msPointerEnabled ? this.stopPointers() : this.stopMouse(), this.el.removeEventListener("touchstart", this.captureBubbleEvents, !1), this.el.removeEventListener("touchmove", this.captureBubbleEvents, !1), this.el.removeEventListener("touchend", this.captureBubbleEvents, !1), this.el.removeEventListener("touchcancel", this.captureBubbleEvents, !1), this.el.removeEventListener("tap", this.captureBubbleEvents, !1), void 0) : (Logger("TouchEventSimulator").warn("Touch event simulator not running!"), void 0)
        }, TouchEventSimulator.prototype.captureBubbleEvents = function(t) {
            t.stopPropagation(), t.preventDefault()
        }, TouchEventSimulator.prototype.startMouse = function() {
            this.el.addEventListener("mousedown", this.handleMouseDown, !0), this.el.addEventListener("mousemove", this.handleMouseMove, !0), this.el.addEventListener("mouseup", this.handleMouseUp, !0), this.el.addEventListener("mouseout", this.handleMouseOut, !0), this.el.addEventListener("dragstart", this.handleDragStart, !0), this._initialised = !0
        }, TouchEventSimulator.prototype.stopMouse = function() {
            this.el.removeEventListener("mousedown", this.handleMouseDown, !0), this.el.removeEventListener("mousemove", this.handleMouseMove, !0), this.el.removeEventListener("mouseup", this.handleMouseUp, !0), this.el.removeEventListener("mouseout", this.handleMouseOut, !0), this.el.removeEventListener("dragstart", this.handleDragStart, !0), this._initialised = !1
        }, TouchEventSimulator.prototype.startPointers = function() {
            this.el.addEventListener("MSPointerDown", this.handlePointerDown, !0), this.el.addEventListener("MSPointerMove", this.handlePointerMove, !0), this.el.addEventListener("MSPointerUp", this.handlePointerUp, !0), this.el.addEventListener("MSPointerCancel", this.handlePointerCancel, !0), this._initialised = !0
        }, TouchEventSimulator.prototype.stopPointers = function() {
            this.el.removeEventListener("MSPointerDown", this.handlePointerDown, !0), this.el.removeEventListener("MSPointerMove", this.handlePointerMove, !0), this.el.removeEventListener("MSPointerUp", this.handlePointerUp, !0), this.el.removeEventListener("MSPointerCancel", this.handlePointerCancel, !0), this._initialised = !1
        }, TouchEventSimulator.prototype.init = function() {
            this.doc.defaultView.navigator.msPointerEnabled ? this.start() : (this.el.addEventListener("touchstart", this.handleFirstEvent, !0), this.el.addEventListener("mousedown", this.handleFirstEvent, !0))
        }, TouchEventSimulator.prototype.updateTouchCoordinates = function(t) {
            this.touch.screenX = t.screenX, this.touch.screenY = t.screenY, this.touch.pageX = t.pageX, this.touch.pageY = t.pageY, this.touch.clientX = t.clientX, this.touch.clientY = t.clientY
        }, TouchEventSimulator.prototype.ignorables = ["select", "input", "textarea"], TouchEventSimulator.prototype.isFormElement = function(t) {
            return this.ignorables.indexOf(t.nodeName.toLowerCase()) > -1
        }, TouchEventSimulator.prototype.isIgnorable = function(t) {
            for (var e = t; e && e instanceof HTMLElement; e = e.parentNode)
                if (hasClass(e, "google-map-container")) return !0;
            return !1
        }, TouchEventSimulator.prototype.handleFirstEvent = function(t) {
            this._firstEventFired || (this._firstEventFired = !0, this.el.removeEventListener("touchstart", this.handleFirstEvent, !0), this.el.removeEventListener("mousedown", this.handleFirstEvent, !0), "touch" != TouchEventSimulator.mode && "mousedown" == t.type ? (TouchEventSimulator.mode = "mouse", this.start(), this.handleMouseDown(t)) : TouchEventSimulator.mode = "touch")
        }, TouchEventSimulator.prototype.handleMouseDown = function(t) {
            0 != t.button || this.isIgnorable(t.target) || (this.touch = {
                identifier: 0,
                target: t.target
            }, this.updateTouchCoordinates(t), t.stopPropagation(), this.isFormElement(t.target) || t.preventDefault(), this.fireTouchEvent("touchstart", t))
        }, TouchEventSimulator.prototype.handleMouseMove = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), t.stopPropagation(), t.preventDefault(), this.fireTouchEvent("touchmove", t))
        }, TouchEventSimulator.prototype.handleMouseUp = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), t.stopPropagation(), t.preventDefault(), this.fireTouchEvent("touchend", t), this.touch = null)
        }, TouchEventSimulator.prototype.handleMouseOut = function(t) {
            this.touch && 0 == t.button && (0 > t.pageX || t.pageX > this.win.innerWidth || 0 > t.pageY || t.pageY > this.win.innerHeight) && this.cancelInteraction()
        }, TouchEventSimulator.prototype.handleDragStart = function(t) {
            return t.preventDefault(), !1
        }, TouchEventSimulator.prototype.handlePointerDown = function(t) {
            0 == t.button && (this.touch = {
                identifier: 0,
                target: t.target
            }, this.updateTouchCoordinates(t), this.fireTouchEvent("touchstart", t))
        }, TouchEventSimulator.prototype.handlePointerMove = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), this.fireTouchEvent("touchmove", t))
        }, TouchEventSimulator.prototype.handlePointerUp = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), this.fireTouchEvent("touchend", t))
        }, TouchEventSimulator.prototype.handlePointerCancel = function(t) {
            this.touch && 0 == t.button && (this.updateTouchCoordinates(t), this.fireTouchEvent("touchcancel", t), this.touch = null)
        }, TouchEventSimulator.prototype.fireTouchEvent = function(t, e) {
            var i = this.doc.createEvent("HTMLEvents");
            i.initEvent(t, !0, !0), "touchend" == t || "touchcancel" == t ? (i.touches = i.targetTouches = [], i.changedTouches = [this.touch]) : i.touches = i.targetTouches = i.changedTouches = [this.touch], e.target.dispatchEvent(i)
        }, TouchEventSimulator.prototype.cancelInteraction = function() {
            this.touch && (this.fireTouchEvent("touchcancel", this.touch), this.touch = null)
        };;

        function CStyler(e) {
            this._node = e
        }
        CStyler.initialised = !1, CStyler.prototype.enableWarnings = !1, CStyler.prototype.enableTraces = !1, CStyler.flags = {
            isWebKit: /WebKit/.test(navigator.userAgent),
            isIE: /MSIE|Trident\//.test(navigator.userAgent),
            isGecko: /rv:.*Gecko\//.test(navigator.userAgent)
        }, CStyler.engine = function() {
            return CStyler.flags.isWebKit ? "WebKit" : CStyler.flags.isIE ? "IE" : CStyler.flags.isGecko ? "Gecko" : "Unknown"
        }(), CStyler.prefix = function() {
            return "WebKit" == CStyler.engine ? "-webkit-" : "Gecko" == CStyler.engine ? "-moz-" : "IE" == CStyler.engine ? "-ms-" : ""
        }(), CStyler._isOldWebKit = function(e) {
            var t = e.match(/AppleWebKit\/(\d+)/);
            return t && 540 > ~~t[1]
        }(navigator.userAgent), CStyler.ucfirst = function(e) {
            return e += "", e ? e[0].toUpperCase() + e.slice(1) : ""
        }, CStyler.lcfirst = function(e) {
            return e += "", e ? e[0].toLowerCase() + e.slice(1) : ""
        }, CStyler.camelize = function(e) {
            var t = e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            });
            return this.flags.isGecko ? t : this.lcfirst(t)
        }, CStyler.dasherize = function(e) {
            return e.replace(/[A-Z]/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }, CStyler._prefixTester = /^-?([mM]oz|[wW]eb[kK]it|[mM]s)-?/, CStyler.isPrefixed = function(e) {
            return this._prefixTester.test(e)
        }, CStyler.stripPrefix = function(e) {
            return this.lcfirst(e.replace(this._prefixTester, ""))
        }, CStyler._cssAttributes = [], CStyler._prefixedCSSLookup = {}, CStyler._unprefixedCSSLookup = {}, CStyler._prefixedLookup = {}, CStyler._unprefixedLookup = {}, CStyler._eventNames = {}, CStyler._cssDirectives = {}, CStyler._prefixer = null, CStyler._unprefixer = null, CStyler.ignorableAttributes = ["cssText", "applyCSS", "length", "getPropertyValue", "getPropertyPriority", "getPropertyCSSValue", "getPropertyShorthand", "isPropertyImplicit", "removeProperty", "setProperty", "item", "parentRule"], CStyler.criticalAttributes = ["background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "background-composite", "border", "border-bottom-width", "border-left-width", "border-right-width", "border-top-width", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "border-bottom-style", "border-left-style", "border-right-style", "border-top-style", "border-collapse", "border-fit", "border-horizontal-spacing", "border-vertical-spacing", "border-image", "border-style", "border-color", "border-width", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius", "bottom", "clear", "color", "cursor", "direction", "display", "float", "font", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "margin-bottom-collapse", "margin-top-collapse", "max-height", "max-width", "min-height", "min-width", "opacity", "outline", "outline-color", "outline-style", "outline-width", "overflow", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "pointer-events", "position", "right", "table-layout", "text-align", "text-decoration", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-stroke", "text-fill-color", "top", "unicode-bidi", "vertical-align", "visibility", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "backface-visibility", "highlight", "perspective", "perspective-origin", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "white-space", "width", "word-break", "word-spacing", "word-wrap", "z-index"], CStyler.oldWebKitProperties = ["transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "appearance", "backface-visibility", "perspective", "perspective-origin"], CStyler.init = function() {
            var e = getComputedStyle(document.body) || document.body.style,
                t = [];
            for (var i in e) - 1 == this.ignorableAttributes.indexOf(i) && "" != i && (isNaN(parseInt(i, 10)) || (i = this.camelize(e[i])), -1 == t.indexOf(i) && t.push(i));
            t = t.sort(), t.forEach(function(e) {
                var t = e;
                CStyler._cssAttributes.push(e), this.isPrefixed(e) && (t = this.stripPrefix(e), this._prefixedLookup[t] = e, this._unprefixedLookup[e] = t, this._prefixedCSSLookup[this.dasherize(t)] = "-" + this.dasherize(e), this._unprefixedCSSLookup["-" + this.dasherize(e)] = this.dasherize(t)), t in this.prototype || Object.defineProperty(this.prototype, t, {
                    get: function() {
                        return this._node.style[e]
                    },
                    set: function(t) {
                        this._node.style[e] = t
                    },
                    enumerable: !0
                }), t != e && Object.defineProperty(this.prototype, e, {
                    get: function() {
                        return this.enableWarnings && (console.warn("Using prefixed getter! (" + e + ")"), this.enableTraces && console.trace()), this._node.style[e]
                    },
                    set: function(t) {
                        this.enableWarnings && (console.warn("Using prefixed setter! (" + e + ")"), this.enableTraces && console.trace()), this._node.style[e] = t
                    },
                    enumerable: !1
                })
            }, this), this.criticalAttributes.forEach(function(e) {
                var t = this.camelize(this.prefix + e),
                    i = this.camelize(e);
                t in this.prototype || Object.defineProperty(this.prototype, t, {
                    get: function() {
                        return this.enableWarnings && (console.warn("Getting potentially nonexistent prefixed CSS attribute: " + t), this.enableTraces && console.trace()), this._node.style[t]
                    },
                    set: function(e) {
                        this.enableWarnings && (console.warn("Setting potentially nonexistent prefixed CSS attribute: " + t), this.enableTraces && console.trace()), this._node.style[t] = e
                    },
                    enumerable: !0
                }), i in this.prototype || Object.defineProperty(this.prototype, i, {
                    get: function() {
                        return this.enableWarnings && (console.warn("Getting potentially nonexistent unprefixed CSS attribute: " + e), this.enableTraces && console.trace()), this._node.style[CStyler._isOldWebKit && CStyler.oldWebKitProperties.indexOf(e) > -1 ? t : i]
                    },
                    set: function(r) {
                        this.enableWarnings && (console.warn("Setting potentially nonexistent unprefixed CSS attribute: " + e), this.enableTraces && console.trace()), this._node.style[CStyler._isOldWebKit && CStyler.oldWebKitProperties.indexOf(e) > -1 ? t : i] = r
                    },
                    enumerable: !0
                })
            }, this), CStyler._prefixer = RegExp("(?:[^-]|^)(" + Object.keys(this._prefixedCSSLookup).join("|") + ")(?::)", "g"), CStyler._unprefixer = RegExp("(?:[^-]|^)(" + Object.keys(this._unprefixedCSSLookup).join("|") + ")(?::)", "g"), Object.defineProperty(this.prototype, "cssText", {
                get: function() {
                    return this._node.style.cssText.replace(CStyler._unprefixer, function(e, t) {
                        return CStyler._unprefixedCSSLookup[t]
                    })
                },
                set: function(e) {
                    this._node.style.cssText = e.replace(CStyler._prefixer, function(e, t) {
                        return CStyler._prefixedCSSLookup[t]
                    })
                },
                enumerable: !0
            }), "WebKitAnimationEvent" in window && (CStyler._eventNames.animationstart = "webkitAnimationStart", CStyler._eventNames.animationiteration = "webkitAnimationIteration", CStyler._eventNames.animationend = "webkitAnimationEnd", CStyler._cssDirectives.keyframes = "-webkit-keyframes"), "WebKitTransitionEvent" in window && (CStyler._eventNames.transitionend = "webkitTransitionEnd"), this.initialised = !0
        }, CStyler.prototype.applyCSS = function(e) {
            for (var t in e) this[CStyler.camelize(t)] = e[t]
        }, CStyler.prototype.getComputedStyle = function() {
            var e = this._node.ownerDocument.defaultView.getComputedStyle(this._node),
                t = {};
            return CStyler._cssAttributes.forEach(function(i) {
                var r = CStyler._unprefixedLookup[i] || i;
                t[r] = e[i]
            }, this), t
        }, CStyler.init();;

        function AggregatorTracking(t) {
            this._trackingCenter = t
        }
        AggregatorTracking.prototype.trackAggregator = function(t, e, r) {
            "object" == typeof e && (r = e, e = void 0), r = r || {}, e = void 0 !== e ? e : 1, this._trackingCenter.track({
                name: "aggregator",
                metric: t,
                value: e,
                customDimensions: r
            })
        }, AggregatorTracking.prototype.trackAggregatorTime = function(t, e, r) {
            this.trackAggregator(t, Math.round(e), r)
        }, AggregatorTracking.prototype.trackAggregatorUsingTimer = function(t, e) {
            var r = new Date;
            return function() {
                this.trackAggregatorTime(t, new Date - r, e)
            }.bind(this)
        }, AggregatorTracking.prototype.trackAggregatorMagicTriplet = function(t, e, r) {
            this.trackAggregator(t + "Attempts", e);
            var n = new Date;
            return function() {
                var i = new Date - n;
                (!r || r > i) && (this.trackAggregator(t + "Successes", e), this.trackAggregatorTime(t + "Time", i, e))
            }.bind(this)
        };;

        function Logger(t) {
            if (!(this instanceof Logger)) return new Logger(t);
            t = t || "";
            var e = noop;
            (Logger.enabledNames.indexOf(t) >= 0 || Logger.enabledNames.indexOf("all") >= 0) && (e = function() {
                var t = [].slice.apply(arguments);
                t.unshift(Logger._ts() + " [" + Logger.sessionId + (this.name ? " " + this.name : "") + "]"), console.log.apply(console, t)
            }), this.name = t, this.log = e, this.warn = e, this.debug = e, this.error = e
        }
        Logger._ts = function() {
            function t(t, e) {
                for (t += ""; e > t.length;) t = "0" + t;
                return t
            }
            var e = new Date;
            return e.getFullYear() + "-" + t(e.getMonth() + 1, 2) + "-" + t(e.getDate(), 2) + " " + t(e.getHours(), 2) + ":" + t(e.getMinutes(), 2) + ":" + t(e.getSeconds(), 2) + "." + t(e.getTime() - 1e3 * Math.floor(e.getTime() / 1e3), 3)
        }, Logger.init = function(t, e) {
            Logger.enabledNames = t, Logger.sessionId = e || (Math.random() + "").slice(15)
        }, Logger.initFromRuntimeParams = function(t) {
            Logger.init(t.debug ? t.debug.split(",") : [], t.sessionId)
        };;
        (function() {
            var t = {},
                e = new Image;
            t.LANDSCAPE = 1, t.PORTRAIT = 2, t.ZINDEX_MAX = 2147483647, t.ENDED = 0, t.PLAYING = 1, t.PAUSED = 2, t.BUFFERING = 3, t.VIDEO_CUED = 5, t.UNSTARTED = 6, t.SEEKING = 7, t.STATE = {
                0: "ENDED",
                1: "PLAYING",
                2: "PAUSED",
                3: "BUFFERING",
                5: "VIDEO_CUED",
                6: "UNSTARTED",
                7: "SEEKING"
            }, t.TRUTHY_REGEX = /^(yes|true|1)$/i, t.isTruthy = function(e) {
                return t.TRUTHY_REGEX.test(e)
            }, t.isTouchDevice = !!("ontouchstart" in window), t.validFor = function(t, e, i) {
                var r = Date.now() + e;
                return function() {
                    r >= Date.now() && t.apply(i || null, arguments)
                }
            }, t.exists = function(t, e) {
                return -1 !== t.indexOf(e)
            }, t.POSSIBLE_DOUBLING_EVENTS = ["touchstart", "touchend"], t.isPossibleDoublingEvent = function(t) {
                return -1 !== CeltraPlayerUtils.POSSIBLE_DOUBLING_EVENTS.indexOf(t) && android() && webkit("534.30")
            }, t.eventTimes = {}, t.preventDoubling = function(e, i, r) {
                return t.eventTimes[e] = Date.now(),
                    function() {
                        var n = Date.now(),
                            o = n - t.eventTimes[e];
                        o > 400 && i.apply(r, arguments), t.eventTimes[e] = n
                    }
            }, t.isFunction = function(t) {
                return "function" == typeof t
            }, t.constantly = function(t) {
                return function() {
                    return t
                }
            }, t.mergeObjects = function() {
                var t = {};
                return Array.prototype.slice.call(arguments).forEach(function(e) {
                    extend(t, e)
                }), t
            }, t.hash = function() {
                for (var t = Array.prototype.slice.apply(arguments), e = 0, i = 0; t.length > i; i += 1) e += 1e3 * t[i] + e << 1;
                return e
            }, t.curry = Function.prototype.curry || function() {
                var t = this,
                    e = Array.prototype.slice.call(arguments);
                return function() {
                    return t.apply(this, e.concat(Array.prototype.slice.call(arguments)))
                }
            }, t.offset = function(t, e) {
                var i = t.getBoundingClientRect() || {
                        top: 0,
                        left: 0
                    },
                    r = e || document,
                    n = r.documentElement,
                    o = r.defaultView;
                return {
                    top: i.top + (o.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                    left: i.left + (o.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
                }
            }, t.attachHandlers = function(t, e, i) {
                for (var r in i) {
                    var n;
                    n = isArray(i[r]) ? i[r] : [i[r]], n.forEach(function(i) {
                        var n = t[i];
                        n && e.on(r, n.bind(t))
                    })
                }
            }, t.idempotented = function(e, i) {
                var r = !1;
                if (!t.isFunction(e)) throw "idempotented called with no function.";
                return function() {
                    if (!r) {
                        var t = Array.prototype.slice.call(arguments);
                        r = !0, e.call(i || window, t)
                    }
                }
            }, t.delayed = function(t, e, i) {
                var r = null;
                return function() {
                    var n = arguments;
                    clearTimeout(r), r = setTimeout(function() {
                        t.apply(i, n)
                    }, e)
                }
            }, t.swapClass = function(t, e, i) {
                hasClass(t, e) ? (removeClass(t, e), addClass(t, i)) : (removeClass(t, i), addClass(t, e))
            }, t.memoize = function(t) {
                return function() {
                    var e = Array.prototype.slice.call(arguments),
                        i = "",
                        r = e.length,
                        n = null;
                    for (t.memoize = t.memoize || {}; r--;) n = e[r], i += n === Object(n) ? JSON.stringify(n) : n, t.memoize || (t.memoize = {});
                    return i in t.memoize ? t.memoize[i] : t.memoize[i] = t.apply(this, e)
                }
            }, t.toMMSS = function(t) {
                var e = Math.floor(t / 36e5),
                    i = Math.floor((t - 36e5 * e) / 60),
                    r = Math.round(t - 36e5 * e - 60 * i);
                return 10 > i && (i = "0" + i), 10 > r && (r = "0" + r), i + ":" + r
            }, t.fitComponent = function(t, e, i, r, n) {
                var o, s, a, l, h = 1 - i / r * (e / t) > 0,
                    c = !!n;
                return (c ? !h : h) ? (o = i, s = Math.round(e * (i / t) + .5), a = 0, l = r - s) : (s = r, o = Math.round(t * (r / e) + .5), a = i - o, l = 0), {
                    width: Math.round(o),
                    height: Math.round(s),
                    marginHorizontal: a >> 1,
                    marginVertical: l >> 1
                }
            }, t.removeUnits = function(t) {
                return parseInt(t.replace(/[a-z]+/, ""))
            }, t.capitaliseFirstLetter = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, t.createHandlerName = function(e, i) {
                return i = i || "on", i + t.capitaliseFirstLetter(e)
            }, t.forEach = function(t, e, i) {
                for (var r in t) e.call(i, t[r], r, t)
            }, t.changeDisplay = function(t, e) {
                for (var i, r = 0; e.length > r; r += 1) i = e[r], i && (i.style.display = t)
            }, t.show = function() {
                t.changeDisplay("", arguments)
            }, t.hide = function() {
                t.changeDisplay("none", arguments)
            }, t.removeElements = function() {
                for (var t = 0; arguments.length > t; t += 1) {
                    var e = arguments[t];
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
            }, t.removeChildren = function(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild)
            }, t.urlSerialize = function(t) {
                var e = [];
                for (var i in t) e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
                return e.join("&")
            }, t.track = function(i) {
                e.src = "/logger.gif?" + ("string" == typeof i ? i : t.urlSerialize(i || {})) + "&" + (new Date).getTime()
            }, t.xBindFactory = function(t) {
                return function(e) {
                    var i = e.getAttribute("x-bind");
                    i && (t[i] = e, e.removeAttribute("x-bind"))
                }
            }, t.createDom = function(t, e, i, r) {
                function n(t) {
                    for (var e = t.children || [], i = 0; e.length > i; i += 1) n(e[i]);
                    return r(t), t
                }
                var o = t.createElement("div"),
                    r = r || noop;
                return o.innerHTML = tmpl("string" == typeof e ? e : e.join(""), i || {}), n(o).children[0]
            }, t.createStyleTag = function(t, e) {
                var i = t.createElement("link");
                return i.setAttribute("rel", "stylesheet"), i.setAttribute("href", e), i
            }, t.createSourceTag = function(t, e) {
                var i = t.createElement("source");
                return i.setAttribute("src", e), i
            }, t.composeUrl = function() {
                for (var t = [], e = 0; arguments.length > e; e += 1) {
                    var i = arguments[e] || "",
                        r = 0 === e ? i.replace(/\/$/, "") : i.replace(/^\//, "").replace(/\/$/, "");
                    r && t.push(r)
                }
                return t.join("/")
            }, t.hasValue = function(t) {
                return null !== t && void 0 !== t && 0 / 0 !== t && "" !== t
            }, t.filterObject = function(t, e) {
                var i, r = {};
                for (i in t) t.hasOwnProperty(i) && e(t[i]) && (r[i] = t[i]);
                return r
            }, t.complement = function(t) {
                return function() {
                    return !t.apply(this, arguments)
                }
            }, t.EMPTY_PIXEL = "R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", this.CeltraPlayerUtils = t, t.forEach = function(t, e, i) {
                if (t.forEach) t.forEach(e, i);
                else
                    for (var r in t) {
                        var n = t[r];
                        e.call(i, r, n)
                    }
            }, t.canManipulateVolume = t.memoize(function() {
                var t = document.createElement("audio"),
                    e = t.volume,
                    i = 1 > e ? e + .1 : e - .1;
                return t.volume = i, t.volume === i
            }), t.isTouchDevice = !!("ontouchstart" in window), t.isTopNode = function(t) {
                return "BODY" === t.tagName || "viewport" === t.id || "celtra-modal" === t.id
            }, t.saveStyle = function(t, e) {
                var i, r = window.getComputedStyle(t),
                    n = {
                        node: t,
                        style: {}
                    };
                for (var o in e) {
                    var i = e[o];
                    null !== i && (n.style[o] = {
                        old: r[o],
                        changed: i
                    }, t.style[o] = i)
                }
                return n
            }, t.orientationLockHandler = function(t, e) {
                var i = t.getControlsElement(),
                    r = t.getWrapperElement();
                r && (e ? (t.__playAfterRotate = t.isState(CeltraPlayerUtils.PLAYING) ? !0 : !1, t.pause(), i && (i.style.display = "none"), r.style.zIndex = -1) : (i && (i.style.display = ""), t.__playAfterRotate && t.play(), r.style.zIndex = ""))
            }, t.restoreStyle = function(t, e, i) {
                var r = window.getComputedStyle(t),
                    n = null;
                for (var o in e.style) n = e.style[o], i && "" + n.changed != "" + r[o] || (t.style[o] = n.old)
            }
        })(),
        function() {
            this.StatefulEventEmitter = {
                changeState: function(t) {
                    var e = this._state;
                    this._state != t && (this._state = t, this.emit("statechange", t, e))
                },
                getState: function() {
                    return this._state
                },
                isState: function() {
                    var t = Array.prototype.slice.apply(arguments);
                    return -1 !== t.indexOf(this._state)
                }
            }, extend(this.StatefulEventEmitter, EventEmitter)
        }(),
        function() {
            function t(t, o, s) {
                this.intervalId = null, this.containerEl = null, this.externalResize = noop, this.lastWidth = 0, this.lastHeight = 0, this.lastScrollX = 0, this.lastScrollY = 0, this.doc = t.ownerDocument, this.win = "defaultView" in this.doc ? this.doc.defaultView : this.doc.parentWindow, this.initialHostOffset = {
                    left: this.win.pageXOffset || document.documentElement.scrollLeft,
                    top: this.win.pageYOffset || document.documentElement.scrollTop
                }, this.containerEl = t;
                var a = this.containerEl.style;
                a.position = s ? "fixed" : "absolute", a.zIndex = CeltraPlayerUtils.ZINDEX_MAX, a.width = "100%", a.height = "100%", a.left = "0px", a.top = "0px", o || (a.background = "#000"), this.containerEl.addEventListener("touchmove", r), this.containerEl.addEventListener("touchstart", r), this.win.document.body.appendChild(this.containerEl), this.resize = i.bind(this), this.tick = e.bind(this), this.intervalId = setInterval(this.tick, n), this.touchEventSimulator = new TouchEventSimulator(this.containerEl), this.touchEventSimulator.init()
            }

            function e() {
                var t = Math.max(this.win.document.documentElement.clientWidth, this.win.innerWidth || 0),
                    e = Math.max(this.win.document.documentElement.clientHeight, this.win.innerHeight || 0);
                (this.lastWidth !== t || this.lastHeight !== e || (ios("7") || ios("6")) && o) && (this.lastWidth = t, this.lastHeight = e, defer(this.resize))
            }

            function i() {
                var t = this.containerEl.style;
                t.width = this.lastWidth + "px", t.height = this.lastHeight + "px", this.emit("resize", {
                    width: this.lastWidth,
                    height: this.lastHeight,
                    scrollX: this.lastScrollX,
                    scrollY: this.lastScrollY
                })
            }

            function r(t) {
                t.preventDefault(), t.stopPropagation()
            }
            var n = 60,
                o = -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("CriOS");
            extend(t.prototype, EventEmitter), t.prototype.getElement = function() {
                return this.containerEl
            }, t.prototype.destroy = function() {
                this.containerEl && (this.containerEl.removeEventListener("touchmove", r), this.containerEl.removeEventListener("touchstart", r), clearInterval(this.intervalId), this.containerEl.innerHTML = "", this.touchEventSimulator.stop(), this.touchEventSimulator = null)
            }, window.FullScreenHandler = t
        }();;
        (function() {
            function t() {
                videoEventsAdapter = null, l = null, i = null, h = !1, r = null
            }

            function e() {
                videoEventsAdapter && (videoEventsAdapter.destroy(), videoEventsAdapter = null), l && (l.destroy(), r.destroy(), t())
            }
            var i, r, n, o = {
                    fsvp: {
                        attachment: "body",
                        positioning: "screen",
                        type: "layer"
                    }
                },
                s = function() {},
                a = {},
                l = null,
                h = !1,
                d = null;
            s.init = function(e) {
                t(), a = extend({
                    hostWindow: window,
                    hideControls: !1,
                    baseUrl: urls.staticUrl + "runner/FullscreenVideoPlayer/"
                }, e || {}), adapter.createPlacements(o, function() {
                    d = adapter.placements.fsvp
                })
            }, s.play = function(t, n) {
                adapter._stopAllMedia(), e();
                var o = function(e) {
                    return new Html5VideoEngine(CeltraPlayerUtils.constantly(t.url), e)
                };
                adapter.videoCapabilites, h = !1, r = android("2") ? new c(a.hostWindow) : new FullScreenHandler(d.getContainer(), !1, android("4") && !a.forceAbsolutePositioning), i = n;
                try {
                    var u = parseFloat(t.file.meta.duration)
                } catch (p) {
                    var u = null
                }
                l = new VideoPlayer(a.baseUrl, adapter, r.getElement(), o, function(t, e) {
                    return a.hideControls ? new NullVideoControls : new VideoControls(t, adapter, e)
                }, {
                    autoplay: !1,
                    baseUrl: a.baseUrl,
                    closeFSOnEnd: !0,
                    fullscreenMode: "permanent",
                    autohideTime: 3,
                    duration: u
                }), s.attachListeners(n), videoEventsAdapter = new VideoEventsAdapter(l), t.registerSource(videoEventsAdapter), l.on("userInteraction", function() {
                    t.trackUserInteraction()
                }), d.setPosition(0, 0), d.show(), l.play()
            }, s.attachListeners = function(t) {
                n = CeltraPlayerUtils.idempotented(function() {
                    t(h)
                }), l.on("timeupdate", s.onTimeUpdate), l.on("close", s.close), l.on("ended", s.close), l.on("error", s.close), l.on("exitfullscreen", s.close), adapter.once("dismissed", s.close), adapter.once("collapsed", s.close)
            }, s.removeListeners = function() {
                l.off("timeupdate", s.onTimeUpdate), l.off("close", s.close), l.off("ended", s.close), l.off("error", s.close), l.off("exitfullscreen", s.close), adapter.off("dismissed", s.close), adapter.off("collapsed", s.close)
            }, s.onTimeUpdate = function() {
                l.currentTime > .5 && (h = !0)
            }, s.close = function() {
                null !== l && (d.hide(), s.removeListeners(), l.pause(), l.hide(), n(), defer(e, "undefined" != typeof ADMARVEL ? 1e3 : 100))
            };
            var c = function(t) {
                var e = ['<div style="width: 0px; height: 0px; position: absolute"></div>'];
                this.hostWindow = t, this.container = CeltraPlayerUtils.createDom(t.document, e);
                var i = (this.container.style, t.document.body);
                i.appendChild(this.container)
            };
            c.prototype.getElement = function() {
                return this.container
            }, c.prototype.destroy = function() {
                this.container && (CeltraPlayerUtils.removeElements(this.container), this.container = null)
            }, window.FullscreenVideoPlayer = s
        })();;
        (function() {
            var t = function(t, e) {
                this._srcProvider = t, this._opts = extend({}, this.DEFAULTS, e), this._state = CeltraPlayerUtils.UNSTARTED, this.videoWidth = e.videoWidth, this.videoHeight = e.videoHeight, this._playingEmitted = !1, this._lastTimeUpdateEmitted = 0, this._timeUpdateCounter = 0, this._propertyHistory = {}, this.currentTime = null, this.continuePlaying = function() {
                    this.play()
                }
            };
            extend(t.prototype, StatefulEventEmitter), t.prototype.reportsSeeking = !0, Object.defineProperty(t.prototype, "paused", {
                get: function() {
                    return this._videoEl && this._videoEl.paused
                }
            }), Object.defineProperty(t.prototype, "duration", {
                get: function() {
                    return this._videoEl && this._videoEl.duration
                }
            });
            var e = t.prototype;
            e.DOM_TEMPLATE = ['<video src= "<%= src %>" x-bind="_videoEl" <%= playsInline %> <%= muted %> x-stop-all-media-ignore>', "</video>"], e.DEFAULTS = {
                playsInline: !1,
                muted: !1,
                currentTimeStill: 2e3
            }, e.VIDEO_EVENTS = ["loadedMetaData", "loadedData", "durationChange", "progress", "timeUpdate", "canPlay", "seeking", "seeked", "play", "playing", "pause", "ended", "webkitEndFullScreen"], e.reset = function() {
                this._playingEmitted = !1, this._timeUpdateCounter = 0;
                try {
                    this._videoEl.currentTime = 0
                } catch (t) {}
            }, e.destroy = function() {
                this._videoEl && this._videoEl.pause && (this._videoEl.pause(), CeltraPlayerUtils.removeElements(this._videoEl), this._videoEl = null, clearInterval(this.pullerInterval))
            }, e.render = function(t) {
                this._videoEl || (CeltraPlayerUtils.createDom(t, this.DOM_TEMPLATE, {
                    src: this._srcProvider(),
                    playsInline: this._opts.playsInline ? "webkit-playsinline" : "",
                    muted: this._opts.muted ? "muted" : "",
                    preload: "auto"
                }, CeltraPlayerUtils.xBindFactory(this)), this._opts.muted ? this.mute() : this.unMute(), android("4.0", "4.2") && (this._videoEl.style.height = "auto", this._videoEl.style.minHeight = "auto"), this._attachListeners());
                try {
                    this._videoEl.load()
                } catch (e) {}
                return this._videoEl
            }, e.addEventListener = function() {
                this.on.call(arguments)
            }, e._attachListeners = function() {
                this.VIDEO_EVENTS.forEach(function(t) {
                    var e = CeltraPlayerUtils.createHandlerName(t),
                        i = this[e] || this._reemit(t.toLowerCase());
                    this._videoEl.addEventListener(t.toLowerCase(), i.bind(this))
                }, this)
            }, e.onLoadedMetaData = function() {
                this._videoEl && (this.videoWidth = this._videoEl.videoWidth, this.videoHeight = this._videoEl.videoHeight, this.emit("loadedmetadata"), this.emit("refresh"), this.emit("canunmute"))
            }, e.onTimeUpdate = function() {
                if (this._videoEl) {
                    this._timeUpdateCounter += 1, !this._playingEmitted && this._timeUpdateCounter > 2 && (this._playingEmitted = !0, this.emit("playing")), this.currentTime = this._videoEl.currentTime;
                    var t = Date.now();
                    this._timeUpdateCounter > 1 && t - this._lastTimeUpdateEmitted > 300 && (this._lastTimeUpdateEmitted = t, this.emit("timeupdate", this.currentTime))
                }
            }, PULLER_PROPERTIES = [{
                name: "currentTime",
                copyToWrapper: !0
            }, {
                name: "buffered",
                copyToWrapper: !0
            }, {
                name: "muted",
                copyToWrapper: !0
            }], e.puller = function() {
                PULLER_PROPERTIES.forEach(function(t) {
                    var e = this._propertyHistory[t.name],
                        i = this._videoEl[t.name],
                        n = Date.now;
                    e || (e = this._propertyHistory[t.name] = {
                        value: void 0,
                        lastChecked: 0,
                        lastChanged: 0
                    }), e.value !== i && (e.lastChanged = n), this.propertyChecked(t.name, e.value, i, n - e.lastChanged), e.value = i, e.lastChecked = n, t.copyToWrapper && (this[t.name] = i)
                }.bind(this))
            }, e.propertyChecked = function(t, e, i, n) {
                var r = this.getState();
                switch (t) {
                    case "muted":
                        i !== e && this.emit(i === !0 ? "muted" : "unmuted");
                        break;
                    case "currentTime":
                        i === e && r === CeltraPlayerUtils.PLAYING && n >= this._opts.currentTimeStill && !this.buffering && (this.buffering = !0, this._playingEmitted = !1, this.emit("buffering"), this.changeState(CeltraPlayerUtils.PLAYING)), i !== e && r == CeltraPlayerUtils.BUFFERING && i >= .1 && (this.emit("endbuffering"), this.changeState(CeltraPlayerUtils.PLAYING))
                }
            }, e.onDurationChange = function() {
                this._videoEl && (this.duration > 1 && this.emit("durationchange"), defer(this.onProgress.bind(this)))
            }, e.onProgress = function() {
                this._videoEl && this._videoEl.buffered.length > 0 && (this.buffered = this._videoEl.buffered.end(0), this.emit("progress"))
            }, e.onPlay = function() {
                this.changeState(CeltraPlayerUtils.PLAYING), this.emit("play")
            }, e.onSeeking = function() {
                this._state !== CeltraPlayerUtils.SEEKING && (this._stateBeforeSeeking = this._state), this.changeState(CeltraPlayerUtils.SEEKING), this.emit("seeking")
            }, e.onSeeked = function() {
                this.changeState(this._stateBeforeSeeking), this.emit("seeked")
            }, e.onBeforeResize = function() {}, e.onPlaying = function() {}, e.onPause = function() {
                this._playingEmitted = !1, this.changeState(CeltraPlayerUtils.PAUSED), this.emit("pause")
            }, e.onEnded = function() {
                this._playingEmitted = !1, this.changeState(CeltraPlayerUtils.ENDED), this._videoEl.removeEventListener("progress", this.continuePlaying), this.emit("ended")
            }, e.onWebkitEndFullScreen = function() {
                this.emit("spinnerhide"), this.emit("exitfullscreen")
            }, e._reemit = function(t) {
                var e = this;
                return function() {
                    e.emit(t)
                }
            }, e.seekToRatio = function(t) {
                this.isReady() && (this._videoEl.currentTime = this._videoEl.duration * t)
            }, e.setCurrentTime = function(t) {
                this.isReady() && (this._videoEl.currentTime = t)
            }, e.getCurrentTime = function() {
                return this.isReady() ? this._videoEl.currentTime : 0
            }, e.getVideoWidth = function() {
                return this._videoEl ? this._videoEl.videoWidth : 0 / 0
            }, e.getVideoHeight = function() {
                return this._videoEl ? this._videoEl.videoHeight : 0 / 0
            }, e.play = function() {
                (this._videoEl || this._videoEl.play) && (this.emit("playattempted"), this._videoEl.src != this._srcProvider() && (this._videoEl.src = this._srcProvider()), this.isState(CeltraPlayerUtils.UNSTARTED, CeltraPlayerUtils.ENDED) ? (this.changeState(CeltraPlayerUtils.BUFFERING), this.emit("buffering"), clearInterval(this.pullerInterval), this.pullerInterval = setInterval(this.puller.bind(this), this._opts.pullingInterval)) : this.changeState(CeltraPlayerUtils.PLAYING), this._checkVolumeManipulation(), fakeclick(function() {
                    this._videoEl && this._videoEl.play && this._videoEl.play()
                }.bind(this)), defer(function() {
                    this._videoEl && this._videoEl.play && this._videoEl.play()
                }.bind(this)), this._videoEl.addEventListener("progress", this.continuePlaying))
            }, e.pause = function() {
                this._videoEl && (this._videoEl.removeEventListener("progress", this.continuePlaying), this._videoEl && this._videoEl.pause && this._videoEl.pause())
            }, e.mute = function() {
                this._videoEl.muted = !0, this.emit("muted")
            }, e.isMuted = function() {
                return this._videoEl && this._videoEl.muted
            }, e.unMute = function() {
                this._videoEl.muted = !1, this.emit("unmuted")
            }, e.isReady = function() {
                return this._videoEl && 0 !== this._videoEl.readyState
            }, e.getFPS = function() {
                return 0
            }, e._checkVolumeManipulation = function() {
                this.emit("canmanipulatesound", !ios())
            }, window.Html5VideoEngine = t
        })();;
        (function() {
            function t(t, e, i) {
                Html5VideoEngine.call(this, t, i), this._srcProvider = t, this._audioSrcProvider = e, this._progressCounter = 0, this._audioEngine = null, this.mutedAudio = this._opts.muted, this._createAudioEngine()
            }
            inherit(t, Html5VideoEngine), t.prototype.render = function(e) {
                var i = t.uber.render.call(this, e);
                return this.once("timeupdate", function() {
                    this.emit("canmanipulatesound", !0)
                }.bind(this)), this.emit("canmanipulatesound", !1), i
            }, t.prototype._createAudioEngine = function() {
                this._audioEngine || (this._audioSrcProvider ? (this._audioEngine = new Html5AudioEngine(this._audioSrcProvider), ["timeUpdate"].forEach(function(t) {
                    var e = CeltraPlayerUtils.createHandlerName(t) + "Audio",
                        i = this[e] || this.emit.bind(this, t.toLowerCase());
                    this._audioEngine.on(t.toLowerCase(), i.bind(this))
                }, this)) : this._audioEngine = new NullAudioEngine)
            }, t.prototype.onTimeUpdateAudio = function() {
                this._audioEngine.status === JsVideoEngine.SOUND_PLAYING && !this._audioStartedPlaying && this.currentTime > .1 && (this._audioEngine.currentTime = this.currentTime, .2 > Math.abs(this._audioEngine.currentTime - this.currentTime) && (this._audioStartedPlaying = !0))
            }, t.prototype.reset = function() {
                t.uber.reset.call(this), this._audioEngine.currentTime = 0
            }, t.prototype.destroy = function() {
                t.uber.destroy.call(this), this._audioEngine && this._audioEngine.destroy()
            }, t.prototype.play = function() {
                t.uber.play.call(this), this.mutedAudio || (this._audioEngine.currentTime = this.currentTime, this._audioEngine.play())
            }, t.prototype.pause = function() {
                t.uber.pause.call(this), this._audioEngine && this._audioEngine.pause()
            }, t.prototype.mute = function() {
                this._audioEngine && this._audioEngine.pause(), this.mutedAudio = !0, this.emit("muted")
            }, t.prototype.isMuted = function() {
                return this.mutedAudio
            }, t.prototype.unMute = function() {
                this._audioEngine && (this.previouslyUnMuted ? (this.isState(CeltraPlayerUtils.PLAYING) && (this._audioEngine.currentTime = this.currentTime, this._audioEngine.play()), this.mutedAudio = !1, this.emit("unmuted")) : (this.previouslyUnMuted = !0, this.isSoundSyncing = !0, this._audioEngine.once("timeupdate", function() {
                    this.isState(CeltraPlayerUtils.PLAYING) ? this._videoEl.play() : this._audioEngine.pause(), this.isSoundSyncing = !1, this.mutedAudio = !1, this.emit("unmuted")
                }.bind(this)), this._videoEl.pause(), this._audioEngine.play()))
            }, t.prototype.onPause = function() {
                this.isSoundSyncing || t.uber.onPause.call(this)
            }, t.prototype._checkVolumeManipulation = function() {}, window.Html5VideoSoundSyncEngine = t
        })();;
        var NullVideoControls = function() {};
        extend(NullVideoControls.prototype, EventEmitter), extend(NullVideoControls.prototype, {
            render: function(t) {
                var e = t.createElement("div");
                return e.style.display = "none", e
            },
            hide: noop,
            show: noop,
            setMonitorText: noop,
            disable: noop,
            enable: noop,
            reset: noop,
            attachDomListeners: noop,
            removeDomListeners: noop,
            destroy: noop
        });
        var VideoControls = function(t, e, i) {
            this._videoPlayer = t, this._adapter = e, this._opts = extend({}, VideoControls.DEFAULTS, i), this._elements = {}, this.isVisible = !1, this._toggleFn = null, this._lastTouchStart = 0, this._seekingEnabled = !0, this._controlsInitiallyDisabled = !1, this._isFirstPlay = !0, this._playAfterSeeking = !1, this._canManipulateVolume = !0, this._isMuted = !!this._opts.muted, CeltraPlayerUtils.attachHandlers(this, t, VideoControls.PLAYER_EVENTS, !0), this._touchMoveStart = null, this._isSeeking = !1, this._changeVisibility = this._changeVisibility.bind(this), this._listeners = []
        };
        extend(VideoControls.prototype, EventEmitter), VideoControls.TEMPLATE = ['<div class="video-controls-wrapper <%= desktop %>" x-bind="wrapper">', '  <div class="video-controls-hiddable" x-bind="duringPlaySet">', '    <div class="video-controls-button video-controls-button-shadow video-controls-button-bottom-right touchable" x-bind="mute"><div class="icon-mute"></div></div>', '    <div class="video-controls-button video-controls-button-shadow video-controls-button-bottom-right touchable" x-bind="unMute"><div class="icon-unmute"></div></div>', '    <div class="video-controls-button video-controls-button-shadow video-controls-button-top-right touchable" x-bind="close"><div class="icon-close"></div></div>', '    <div class="video-controls-button video-controls-button-shadow video-controls-button-top-right touchable" x-bind="enterFullScreen"><div class="icon-enter-full-screen"></div></div>', '    <div class="video-controls-button video-controls-button-shadow video-controls-button-top-right touchable" x-bind="exitFullScreen"><div class="icon-exit-full-screen"></div></div>', '    <div class="video-controls-slider-container touchable"  x-bind="sliderContainer">', '        <div class="video-controls-progress-bar" x-bind="progressBar"></div>', '        <div class="video-controls-time-bar" x-bind="timeBar"></div>', "    </div>", "  </div>", '  <div x-bind="outOfPlaySet">', '    <div class="center-button touchable" x-bind="pause"><div class="icon-pause"></div></div>', '    <div class="center-button touchable" x-bind="play"><div class="icon-play"></div></div>', '    <div class="center-button touchable" x-bind="replay"><div class="icon-replay"></div></div>', "  </div>", '  <div class="video-controls-monitor" x-bind="monitor"></div>', "</div>"], VideoControls.DEFAULTS = {
            autohideTime: 0,
            progressbar: !0,
            progressbarColour: "#4589ce",
            startInFullScreen: !1,
            controlsHidden: !1,
            fullscreenMode: "both",
            minLengthToSeek: 30,
            muteUnmuteEnabled: !0
        }, VideoControls.DOM_EVENTS = {
            wrapper: {
                touchstart: "onTouchStart",
                touchend: "onTouchEnd",
                touchmove: "onSeek"
            },
            mute: {
                touchend: "onMute"
            },
            unMute: {
                touchend: "onUnMute"
            },
            close: {
                touchend: "onClose"
            },
            enterFullScreen: {
                touchend: "onEnterFullScreen"
            },
            exitFullScreen: {
                touchend: "onExitFullScreen"
            },
            pause: {
                touchend: "onPause"
            },
            play: {
                touchend: "onPlay"
            },
            replay: {
                touchend: "onReplay"
            }
        }, VideoControls.PLAYER_EVENTS = {
            statechange: "onVPStateChange",
            durationchange: "onVPDurationChange",
            muted: "onVPMuted",
            unmuted: "onVPUnmuted",
            progress: "onVPProgress",
            play: "onVPPlay",
            userpaused: "onVPUserPaused",
            userplayed: "onVPUserPlayed",
            ended: "onVPUserPaused",
            timeupdate: "onVPTimeupdate",
            seekto: "onVPSeekto",
            enterfullscreen: "onVPEnterFullscreen",
            exitfullscreen: "onVPExitFullscreen",
            orientationchange: "onVPOrientationChange",
            canunmute: "onVPCanUnmute",
            canmanipulatesound: "onVPCanManipulateSound"
        }, extend(VideoControls.prototype, {
            render: function(t) {
                return this._elements.wrapper || (CeltraPlayerUtils.createDom(t, VideoControls.TEMPLATE, {
                    desktop: desktop() ? "video-controls-desktop" : ""
                }, CeltraPlayerUtils.xBindFactory(this._elements)), this._elements.progressBar.style.backgroundColor = this._opts.progressbarColour, this._elements.timeBar.style.backgroundColor = this._opts.progressbarColour, this.attachDomListeners()), this.init(), this._opts.muteUnmuteEnabled || (this._getElements("mute")[0].innerHTML = "", this._getElements("unMute")[0].innerHTML = ""), this._elements.wrapper
            },
            attachDomListeners: function() {
                var t = CeltraPlayerUtils.forEach;
                t(VideoControls.DOM_EVENTS, function(e, i) {
                    var n = this._elements[e];
                    t(i, function(t, i) {
                        var r = CeltraPlayerUtils.isPossibleDoublingEvent(t) ? CeltraPlayerUtils.preventDoubling(t, this[i], this) : this[i].bind(this),
                            s = this._withUserInteraction(r, -1 != ["play", "replay"].indexOf(e));
                        n.addEventListener(t, s), this._listeners.push([n, t, s])
                    }, this)
                }, this)
            },
            _withUserInteraction: function(t, e) {
                return function() {
                    (this.isVisible || e) && defer(this.emit.bind(this, "userInteraction")), t.apply(this, arguments)
                }.bind(this)
            },
            removeDomListeners: function() {
                this._listeners.forEach(function(t) {
                    var e = t[0],
                        i = t.slice(1);
                    e.removeEventListener.apply(e, i)
                })
            },
            init: function() {
                this._changeVisibilityTimed(!1), this._opts.progressbar || this.hide("sliderContainer"), this._isMuted ? (this.show("unMute"), this.hide("mute")) : (this.show("mute"), this.hide("unMute")), "permanent" == this._opts.fullscreenMode ? (this.hide("enterFullScreen", "exitFullScreen"), this.show("close")) : (this.hide("close", "exitFullScreen"), this.show("enterFullScreen")), "disabled" == this._opts.fullscreenMode && this.hide("enterFullScreen", "exitFullScreen", "close"), this._opts.debug ? this.show("monitor") : this.hide("monitor"), this._canManipulateVolume || (this.hide("mute"), this.hide("unMute")), this.hide("pause", "replay", "play"), this._opts.autoplay || this.show("play")
            },
            show: function() {
                CeltraPlayerUtils.show.apply(null, this._getElements.apply(this, arguments))
            },
            hide: function() {
                CeltraPlayerUtils.hide.apply(null, this._getElements.apply(this, arguments))
            },
            setProgressBarWidth: function(t) {
                this._elements.progressBar.style.width = 100 * t + "%"
            },
            setTimeBarWidth: function(t) {
                this._elements.timeBar.style.width = 100 * t + "%"
            },
            setMonitorText: function(t) {
                this._elements.monitor.innerText = t
            },
            reset: function() {
                this._controlsInitiallyDisabled = !1, this.hide("pause", "replay"), this.show("play"), defer(function() {
                    this.hide("duringPlaySet")
                }.bind(this), 500)
            },
            destroy: function() {
                this._elements.wrapper && (this.removeDomListeners(), CeltraPlayerUtils.removeElements(this._elements.wrapper), this._elements.wrapper = null)
            },
            onTogglePausePlay: function(t) {
                if (!(this._opts.controlsHidden || t.target !== this._elements.wrapper && t.target !== this._elements.duringPlaySet || this._controlsInitiallyDisabled)) {
                    if (this._videoPlayer.isState(CeltraPlayerUtils.UNSTARTED)) return this._videoPlayer.play(), t.preventDefault(), void 0;
                    clearTimeout(this._delayedTogglePause), this.isVisible ? (this._delayedTogglePause = setTimeout(function() {
                        this._toggleFn && this._toggleFn()
                    }.bind(this), 300), t.preventDefault()) : this._changeVisibilityTimed(!0)
                }
            },
            onPlay: function(t) {
                this._controlsInitiallyDisabled || (t.stopPropagation(), t.preventDefault(), this._videoPlayer.play(), this.hide("play"), this.emit("playButtonPressed"))
            },
            onPause: function(t) {
                t.stopPropagation(), t.preventDefault(), this._controlsInitiallyDisabled || this._videoPlayer.pause()
            },
            onReplay: function(t) {
                t.stopPropagation(), t.preventDefault(), this._changeVisibilityTimed(!1), this._videoPlayer.replay()
            },
            onMute: function(t) {
                t.stopPropagation(), t.preventDefault(), this._videoPlayer.mute(), addClass(this._elements.mute, "video-controls-pending"), this._makeControlsDisapear()
            },
            onUnMute: function(t) {
                t.stopPropagation(), t.preventDefault(), this._videoPlayer.unMute(), addClass(this._elements.unMute, "video-controls-pending"), this._makeControlsDisapear()
            },
            onEnterFullScreen: function(t) {
                t.stopPropagation(), t.preventDefault(), this._videoPlayer.enterFullScreen(), this._makeControlsDisapear()
            },
            onExitFullScreen: function(t) {
                t.stopPropagation(), t.preventDefault(), this._videoPlayer.exitFullScreen(), this._makeControlsDisapear()
            },
            onClose: function(t) {
                t.stopPropagation(), t.preventDefault(), this._videoPlayer.close()
            },
            onSeek: function(t) {
                if (!this._opts.controlsHidden && this._seekingEnabled && !this._controlsInitiallyDisabled && this._videoPlayer.getState() !== CeltraPlayerUtils.ENDED) {
                    clearTimeout(this._delayedTogglePause), this._changeVisibilityTimed(!0);
                    var e = t.changedTouches[t.changedTouches.length - 1];
                    if (null !== this._touchMoveStart) {
                        var i = CeltraPlayerUtils.offset(this._elements.wrapper),
                            n = Math.abs(e.clientX - this._touchMoveStart),
                            r = (e.clientX - i.left) / this._elements.wrapper.clientWidth;
                        this._isSeeking ? this._videoPlayer.seekTo(Math.max(0, Math.min(1, r))) : (this._isSeeking = n >= this._opts.minLengthToSeek, this._isSeeking && this._videoPlayer.silentPause())
                    } else this._touchMoveStart = e.clientX;
                    t.preventDefault()
                }
            },
            onTouchStart: function() {
                this._touchMoveStart = null, this._lastTouchStart = Date.now(), this._isSeeking = !1, this._touchMoveStart = null, clearTimeout(this._changeVisibilityTimeout)
            },
            onTouchEnd: function(t) {
                this.isVisible && !this._isSeeking && this.onTogglePausePlay(t), this._changeVisibilityTimed(!0), clearTimeout(this._changeVisibilityTimeout), this._tryPlaying(), this._makeControlsDisapear(), t.preventDefault()
            },
            onVPStateChange: function(t) {
                var e = this._opts.autohideTime;
                switch (this._toggleFn = null, t) {
                    case CeltraPlayerUtils.UNSTARTED:
                        this._toggleFn = this._videoPlayer.play, this._changeVisibilityTimed(!1);
                        break;
                    case CeltraPlayerUtils.BUFFERING:
                        this.hide("play");
                        break;
                    case CeltraPlayerUtils.PLAYING:
                        this.hide("play", "pause", "replay"), CeltraPlayerUtils.hide(this._elements.play), this._toggleFn = this._videoPlayer.pause, this._playAfterSeeking = !0, e && this._changeVisibilityTimed(!1, 1e3 * e);
                        break;
                    case CeltraPlayerUtils.PAUSED:
                        this._isSeeking || (this._changeVisibilityTimed(!0), this.show("play")), this._toggleFn = this._videoPlayer.play;
                        break;
                    case CeltraPlayerUtils.ENDED:
                        this._changeVisibilityTimed(!1), this.hide("play", "pause"), this._opts.pauseOnEnd || this._opts.controlsHidden || this.show("replay")
                }
            },
            onVPUserPaused: function() {
                this._playAfterSeeking = !1
            },
            onVPUserPlayed: function() {
                this._playAfterSeeking = !0
            },
            onVPCanManipulateSound: function(t) {
                this._canManipulateVolume = t, t ? this._isMuted ? (this.hide("mute"), this.show("unMute")) : (this.show("mute"), this.hide("unMute")) : (this.hide("mute"), this.hide("unMute"))
            },
            onVPCanUnmute: function() {
                removeClass(this._elements.mute, "video-controls-mute-disabled"), removeClass(this._elements.unMute, "video-controls-mute-disabled")
            },
            onVPMuted: function() {
                this._isMuted = !0, this._canManipulateVolume && (this.hide("mute"), this.show("unMute"), removeClass(this._elements.unMute, "video-controls-pending"), removeClass(this._elements.mute, "video-controls-pending"))
            },
            onVPUnmuted: function() {
                this._isMuted = !1, this._canManipulateVolume && (this.hide("unMute"), this.show("mute"), removeClass(this._elements.unMute, "video-controls-pending"), removeClass(this._elements.mute, "video-controls-pending"))
            },
            onVPPlay: function() {
                this._hideAndShowWrapper(), this._isFirstPlay && (this._isFirstPlay = !1, this._controlsInitiallyDisabled = !0), this._changeVisibility(!0), this.hide("play")
            },
            onVPProgress: function(t) {
                this._progressRatio = t, this.setProgressBarWidth(t), this._seekingEnabled = this._progressRatio > .95
            },
            onVPTimeupdate: function(t) {
                var e = this._videoPlayer.duration,
                    i = e && t / e || 0;
                this.setTimeBarWidth(i), this._controlsInitiallyDisabled && (this._controlsInitiallyDisabled = !1), this._isSeeking || this._videoPlayer.paused || (this.hide("play"), this.hide("pause"), this.hide("replay"))
            },
            onVPEnterFullscreen: function() {
                this._hideAndShowWrapper(), this.hide("enterFullScreen"), this.show("exitFullScreen"), this._makeControlsDisapear()
            },
            onVPOrientationChange: function(t) {
                this._adapter.videoCapabilites.fullscreenLandscapeButtonsHack && (this._elements.close.style.bottom = this._elements.exitFullScreen.style.bottom = this._elements.mute.style.bottom = this._elements.unMute.style.bottom = t === CeltraPlayerUtils.LANDSCAPE && this._videoPlayer.isFullScreen ? "26px" : "")
            },
            onVPExitFullscreen: function() {
                this._hideAndShowWrapper(), this.hide("exitFullScreen"), this.show("enterFullScreen"), this._makeControlsDisapear()
            },
            onVPSeekto: function(t) {
                this.setTimeBarWidth(t)
            },
            _changeVisibility: function(t) {
                return this._opts.controlsHidden ? (this.isVisible = !0, this.hide("duringPlaySet"), void 0) : (t ? (this.show("duringPlaySet"), this.isVisible = !0) : this._seeking || (this.hide("duringPlaySet"), this.isVisible = !1), void 0)
            },
            _changeVisibilityTimed: function(t, e) {
                clearTimeout(this._changeVisibilityTimeout), e ? this._changeVisibilityTimeout = setTimeout(this._changeVisibility.bind(this, t), e) : this._changeVisibility(t)
            },
            _makeControlsDisapear: function() {
                var t = this._opts.autohideTime;
                t && this._changeVisibilityTimed(!1, 1e3 * t)
            },
            _hideAndShowWrapper: function() {
                this.hide("wrapper"), defer(function() {
                    this.show("wrapper")
                }.bind(this))
            },
            _getElements: function() {
                for (var t = [], e = 0; arguments.length > e; e += 1) element = this._elements[arguments[e]], element && t.push(element);
                return t
            },
            _tryPlaying: function() {
                this._videoPlayer && this._playAfterSeeking && this._videoPlayer.paused && (this._videoPlayer.silentPlay(), defer(this._tryPlaying.bind(this), 2e3))
            }
        });;
        (function() {
            var t = function(t, i, n, r, s, o) {
                this._baseUrl = t, this._adapter = i, this._containerEl = n, this._opts = extend({}, e, o), this._videoEngine = r(o), this._videoControls = s(this, o), this._videoControls.on("userInteraction", this.emit.bind(this, "userInteraction")), this._doc = n.ownerDocument, this._win = this._doc.defaultView, this._aspectRatio = this._opts.videoWidth / this._opts.videoHeight, this.isFullScreen = !this.playsInline(), this.buffered = 0, this._state = null, this._videoShown = !0, this._spinnerShown = !0, this._posterShown = !0, this._seeked = !1, this._repeated = 0, this.playSucceeded = !1, this._continueAfterSeek = CeltraPlayerUtils.delayed(this._continueAfterSeek, 1e3, 0), this._init(), this.play = this.play.bind(this), this.silentPlay = this.silentPlay.bind(this), this.pause = this.pause.bind(this), this.silentPause = this.silentPause.bind(this), this.mute = this.mute.bind(this), this.unMute = this.unMute.bind(this), this.enterFullScreen = this.enterFullScreen.bind(this), this.enterFullScreenDesktop = this.enterFullScreenDesktop.bind(this), this.enterFullScreenMobile = this.enterFullScreenMobile.bind(this), this.exitFullScreen = this.exitFullScreen.bind(this), this.exitFullScreenDesktop = this.exitFullScreenDesktop.bind(this), this.exitFullScreenMobile = this.exitFullScreenMobile.bind(this), this.changeState(CeltraPlayerUtils.UNSTARTED), this._fullScreenAncestors = []
            };
            extend(t.prototype, StatefulEventEmitter), Object.defineProperty(t.prototype, "paused", {
                get: function() {
                    return this._videoEngine && this._videoEngine.paused
                }
            }), Object.defineProperty(t.prototype, "duration", {
                get: function() {
                    return this._videoEngine && this._videoEngine.duration || 0
                }
            }), Object.defineProperty(t.prototype, "serverReportedDuration", {
                get: function() {
                    return this._opts.duration
                }
            }), Object.defineProperty(t.prototype, "currentTime", {
                get: function() {
                    return this._videoEngine && this._videoEngine.currentTime || 0
                },
                set: function(t) {
                    this._videoEngine && this._videoEngine.setCurrentTime(t)
                }
            }), Object.defineProperty(t.prototype, "reportsSeeking", {
                get: function() {
                    return !(!this._videoEngine || !this._videoEngine.reportsSeeking)
                }
            });
            var e = {
                    autoplay: !1,
                    canShowSpinner: !0,
                    closeFSOnEnd: !1,
                    debug: !1,
                    fitting: "fit",
                    fullscreenMode: "both",
                    muted: !1,
                    pauseOnEnd: !1,
                    playFrom: null,
                    playTo: null,
                    poster: "data:image/gif;base64," + CeltraPlayerUtils.EMPTY_PIXEL,
                    repeatTimes: 0,
                    videoWidth: 160,
                    videoHeight: 100
                },
                i = {
                    loadedmetadata: "onLoadedMetaData",
                    durationchange: "onDurationChange",
                    progress: "onProgress",
                    timeupdate: ["onTimeUpdate", "onTimeUpdateRepeat"],
                    playattempted: "onPlayAttempted",
                    play: "onPlay",
                    playing: "onPlaying",
                    pause: "onPause",
                    ended: "onEnded",
                    buffering: "onBuffering",
                    endbuffering: "onEndBuffering",
                    muted: "onMuted",
                    unmuted: "onUnMuted",
                    statechange: "onStateChange",
                    seeking: "onSeeking",
                    seeked: "onSeeked",
                    canmanipulatesound: "onCanManipulateSound",
                    exitfullscreen: "onExitFullScreen",
                    error: "onError",
                    canunmute: "onCanUnMute",
                    spinnerhide: "_spinnerHide"
                };
            t.DOM = ['<div class="video-player-wrapper" x-bind="_wrapperEl">', '    <div class="video-player-resizable" x-bind="_resizableEl">', '        <div class="video-player-cover-pane" x-bind="_coverPaneEl"></div>', '        <div class="video-player-engine" x-bind="_engineContainerEl"></div>', "    </div>", '    <div x-bind="_resizableEl2Anchor">', '        <div class="video-player-resizable video-player-fitting-<%= fitting %>" x-bind="_resizableEl2">', '            <div x-bind="_posterEl" class="video-player-poster" style="background-image: url(\'<%= poster %>\')"></div>', '            <div class="video-controls-container" x-bind="_controlsWrapperEl"></div>', '            <div class="video-sizable"><div class="video-player-spinner-big" x-bind="_spinnerEl"></div></div>', "        </div>", "    </div>", "</div>"], t.prototype._init = function() {
                CeltraPlayerUtils.createDom(this._doc, t.DOM, this._opts, CeltraPlayerUtils.xBindFactory(this)), this._styleEl = CeltraPlayerUtils.createStyleTag(this._doc, CeltraPlayerUtils.composeUrl(this._baseUrl, "VideoPlayer.css")), this._doc.getElementsByTagName("head")[0].appendChild(this._styleEl), this._wrapperEl.style.width = this._containerEl.style.width, this._wrapperEl.style.height = this._containerEl.style.height, defer(function() {
                    this._wrapperEl.style.width = "", this._wrapperEl.style.height = ""
                }.bind(this), 1e3), this._controlsEl = this._videoControls.render(this._doc), this._controlsWrapperEl.appendChild(this._controlsEl), this._engineEl = this._videoEngine.render(this._doc, {
                    playsInline: this.playsInline()
                }), this._engineContainerEl.appendChild(this._engineEl), this._containerEl.appendChild(this._wrapperEl), CeltraPlayerUtils.attachHandlers(this, this._videoEngine, i), this._posterShow(), this._videoHide(), this._spinnerHide(), this.onResizeDelayed = CeltraPlayerUtils.delayed(this.onResize, 300, this), this.onResizeDelayed(), this._videoEngine.on("refresh", this.onResize), this._win.addEventListener("resize", this.onResizeDelayed), this._fixSpinnerSize(), this._adapter.on("beforeResize", function(t) {
                    "undefined" != typeof ADMARVEL && android() && this._videoEngine && this._videoEngine.onBeforeResize(t)
                }.bind(this))
            }, t.prototype.getVideoElement = function() {
                return this._videoEngine
            }, t.prototype.getControlsElement = function() {
                return this._controlsEl
            }, t.prototype.getWrapperElement = function() {
                return this._wrapperEl
            }, t.prototype._fixSpinnerSize = function() {
                this._spinnerEl.className = 80 > this._containerEl.clientHeight ? "video-player-spinner-small" : "video-player-spinner-big"
            }, t.prototype._spinnerHide = function() {
                this._spinnerShown && (this._spinnerShown = !1, this._spinnerEl.style.display = "none")
            }, t.prototype._spinnerShow = function() {
                !this._spinnerShown && this._opts.canShowSpinner && (this._fixSpinnerSize(), this._spinnerShown = !0, this._spinnerEl.style.display = "")
            }, t.prototype._videoHide = function() {
                if (this._videoShown) {
                    this._videoShown = !1;
                    var t = Math.round(48 * this._aspectRatio);
                    this._engineEl.style.width = t + "px", this._engineEl.style.height = "48px", this._engineEl.style.left = -t + "48px"
                }
            }, t.prototype._videoShow = function() {
                this._videoShown || (this._videoShown = !0, this._engineEl.style.width = "", this._engineEl.style.height = "", this._engineEl.style.left = "")
            }, t.prototype._posterHide = function() {
                this._posterShown && (this._posterShown = !1, this._posterEl.style.display = "none")
            }, t.prototype._posterShow = function() {
                this._posterShown || (this._posterShown = !0, this._posterEl.style.display = "")
            }, extend(t.prototype, {
                onLoadedMetaData: function() {
                    this.onResize()
                },
                onPlayAttempted: function() {
                    this._spinnerShow(), this.emit("playattempted")
                },
                onDurationChange: function() {
                    this.emit("durationchange")
                },
                onBuffering: function() {
                    this._spinnerShow.bind(this), this.emit("buffering")
                },
                onEndBuffering: function() {
                    this._spinnerHide(), this._posterHide(), this._videoShow(), this.emit("endbuffering")
                },
                onMuted: function() {
                    this.muted = !0, this.emit("muted")
                },
                onUnMuted: function() {
                    this.muted = !1, this.emit("unmuted")
                },
                onProgress: function() {
                    this.buffered = this._videoEngine.buffered, this.emit("progress", this.buffered / (this.duration || 1))
                },
                onTimeUpdate: function(t) {
                    this._videoShow(), this._spinnerHide(), this.emit("timeupdate", t)
                },
                onTimeUpdateRepeat: function(t) {
                    this._opts.playTo && t >= this._opts.playTo && (this._hasToBeRepeated() ? this._doRepeat() : (this.pause(), this._doEnd()))
                },
                onPlay: function() {
                    this.emit("play")
                },
                onPlaying: function() {
                    this.onResize(), this.emit("playing"), this.playSucceeded = !0, this._posterHide()
                },
                onPause: function() {
                    this.emit("pause")
                },
                onExitFullScreen: function() {
                    this.exitFullScreen()
                },
                onEnded: function() {
                    this._hasToBeRepeated() ? this._doRepeat() : this._doEnd()
                },
                onResize: function() {
                    function t(t) {
                        var e = o._resizableEl2.style;
                        if (t) e.width = n + "px", e.height = r + "px", e.left = 0, e.top = 0;
                        else {
                            var i = CeltraPlayerUtils.fitComponent(100 * o._aspectRatio, 100, n, r);
                            e.width = i.width + "px", e.height = i.height + "px", e.left = t ? 0 : i.marginHorizontal + "px", e.top = t ? 0 : i.marginVertical + "px"
                        }
                    }

                    function e(t) {
                        var e = o._resizableEl.style,
                            i = CeltraPlayerUtils.fitComponent(100 * o._aspectRatio, 100, n, r, !!t),
                            a = o.isFullScreen && !desktop() ? s.left : 0,
                            h = o.isFullScreen && !desktop() ? s.top : 0;
                        e.width = i.width + "px", e.height = i.height + "px", e.left = Math.round(i.marginHorizontal - a) + "px", e.top = Math.round(i.marginVertical - h) + "px";
                        var l = o._coverPaneEl.style;
                        l.width = (n << 1) + "px", l.height = (r << 1) + "px", l.left = -(n >> 1) + "px", l.top = -(r >> 1) + "px"
                    }
                    if (this._wrapperEl && this._wrapperEl.parentNode) {
                        var i = desktop() ? this._wrapperEl : this.playsInline() ? this.isFullScreen ? this._resizableEl2.parentNode : this._containerEl : this._containerEl,
                            n = i.clientWidth,
                            r = i.clientHeight,
                            s = CeltraPlayerUtils.offset(this._wrapperEl.parentNode),
                            o = this,
                            a = CeltraPlayerUtils.hash(this._aspectRatio, n, r, s.left, s.top);
                        if (a !== this._lastContainerHash) {
                            var h = "fit" !== this._opts.fitting;
                            t(h), e(h), this._lastContainerHash = a
                        }
                        defer(this.onResizeDelayed, 200)
                    }
                },
                onStateChange: function(t, e) {
                    this._state = t, this.emit("statechange", t, e)
                },
                onSeeking: function() {
                    this.emit("seeking")
                },
                onSeeked: function() {
                    if (this._seeked) {
                        switch (this._seeked = !1, this._stateBeforeSeek) {
                            case CeltraPlayerUtils.PLAYING:
                                this.play();
                                break;
                            case CeltraPlayerUtils.PAUSED:
                                this.silentPause()
                        }
                        this._stateBeforeSeek = void 0
                    }
                    this.emit("seeked")
                },
                onCanManipulateSound: function(t) {
                    this.emit("canmanipulatesound", t)
                },
                onError: function() {
                    this.emit("error")
                },
                onCanUnMute: function() {
                    this.emit("canunmute")
                }
            }), extend(t.prototype, {
                getEngineState: function() {
                    return this._videoEngine.getState()
                },
                getState: function() {
                    return this._state
                },
                mute: function() {
                    this._videoEngine.mute()
                },
                isMuted: function() {
                    return this._videoEngine.isMuted()
                },
                unMute: function() {
                    this._videoEngine.unMute()
                },
                silentPlay: function() {
                    this._videoEngine.play()
                },
                play: function() {
                    this.getState() !== CeltraPlayerUtils.PLAYING && this._videoEngine.play(), this.emit("userplayed")
                },
                silentPause: function() {
                    this._videoEngine.pause()
                },
                pause: function() {
                    this._videoEngine.pause(), this.emit("userpaused")
                },
                close: function() {
                    this.playsInline() ? this.exitFullScreen() : this.emit("close")
                },
                replay: function() {
                    this.setCurrentTime(0), this.play()
                },
                reset: function() {
                    this._videoEngine.pause(), this._videoEngine.reset(), this._videoHide(), this._posterShow(), this._spinnerHide(), this._videoControls.reset()
                },
                enterFullScreen: function() {
                    !this.isFullScreen && this.playsInline() && (desktop() ? this.enterFullScreenDesktop() : this.enterFullScreenMobile()), this.isFullScreen = !0, this.onResize(), this._adapter.emit("resize"), this.emit("enterfullscreen"), defer(function() {
                        this.play()
                    }.bind(this))
                },
                enterFullScreenDesktop: function() {
                    for (var t = this._containerEl, e = !this.isState(CeltraPlayerUtils.PAUSED); t.parentNode && "viewport" !== t.parentNode.getAttribute("id");) t = t.parentNode;
                    t.appendChild(this._wrapperEl), e && this._videoEngine.play(), this.once("pause", CeltraPlayerUtils.validFor(this.play, 2e3, this))
                },
                enterFullScreenMobile: function() {
                    var t, e = this._wrapperEl;
                    for (this._fullScreenAncestors = [], this._fullScreenHandler = new FullScreenHandler(this._win.document.createElement("div"), !0), this._videoControls.removeDomListeners(), this._fullScreenHandler.getElement().appendChild(this._resizableEl2), this._videoControls.attachDomListeners(), addClass(this._resizableEl2, "video-controls-fs"), this._coverPaneEl.style.display = "block"; e;) {
                        var i = CeltraPlayerUtils.isTopNode(e);
                        if (t = CeltraPlayerUtils.saveStyle(e, {
                                overflow: "visible",
                                position: i ? "relative" : null,
                                zIndex: e === this._containerEl ? CeltraPlayerUtils.ZINDEX_MAX : null
                            }), this._fullScreenAncestors.push(t), CeltraPlayerUtils.isTopNode(e)) break;
                        e = e.parentNode
                    }
                    Array.prototype.slice.call(this._doc.getElementsByClassName("celtra-close-button")).forEach(function(t) {
                        t.style.display = "none"
                    })
                },
                exitFullScreen: function() {
                    var t = !this.isState(CeltraPlayerUtils.PAUSED, CeltraPlayerUtils.ENDED);
                    (this.isFullScreen || !this._opts.fullScreenOnly) && (desktop() ? this.exitFullScreenDesktop() : this.exitFullScreenMobile(), t && this._videoEngine.play()), this.isFullScreen = !1, this.onResize(), this._adapter.emit("resize"), this.emit("exitfullscreen")
                },
                exitFullScreenDesktop: function() {
                    this._containerEl.appendChild(this._wrapperEl), this.once("pause", CeltraPlayerUtils.validFor(this.play, 2e3))
                },
                exitFullScreenMobile: function() {
                    removeClass(this._resizableEl2, "video-controls-fs"), this._videoControls.removeDomListeners(), defer(CeltraPlayerUtils.removeElements(null, this._resizableEl2.parentNode)), this._resizableEl2Anchor.appendChild(this._resizableEl2), this._videoControls.attachDomListeners(), this._fullScreenHandler && this._fullScreenHandler.destroy(), this._coverPaneEl.style.display = "";
                    for (var t = function(t) {
                            return t.node === e
                        }, e = this._wrapperEl; e;) {
                        var i = this._fullScreenAncestors.filter(t);
                        i.length > 0 && CeltraPlayerUtils.restoreStyle(e, i[0], !0), e = e.parentNode
                    }
                    Array.prototype.slice.call(this._doc.getElementsByClassName("celtra-close-button")).forEach(function(t) {
                        t.style.display = ""
                    }), this._fullScreenAncestors = null
                },
                hide: function() {
                    this._wrapperEl && (this._wrapperEl.style.display = "none")
                },
                destroy: function() {
                    function t() {
                        CeltraPlayerUtils.removeElements(this._resizableEl2), CeltraPlayerUtils.removeElements(this._wrapperEl), this._wrapperEl = null
                    }
                    this._wrapperEl && (this._videoEngine.pause(), this._videoEngine.destroy(), this._videoControls.destroy(), "undefined" != typeof TouchEventSimulator ? defer(t.bind(this), 100) : t())
                },
                getDuration: function() {
                    return this.duration
                },
                getCurrentTime: function() {
                    return this._videoEngine.getCurrentTime()
                },
                setCurrentTime: function(t) {
                    this._videoEngine.setCurrentTime(t)
                },
                seekTo: function(t) {
                    this.emit("seekto", t), this._seeked || (this._stateBeforeSeek = this.getState(), this.getState() === CeltraPlayerUtils.PLAYING && this.pause()), this._seeked = !0, this._videoEngine.seekToRatio(t)
                }
            }), t.prototype._hasToBeRepeated = function() {
                return this._repeated < this._opts.repeatTimes
            }, t.prototype._doRepeat = function() {
                this._repeated += 1, this.setCurrentTime(this._opts.playFrom || 0), this.play(), this.emit("repeat")
            }, t.prototype._doEnd = function() {
                this._opts.pauseOnEnd ? this.pause() : (this._videoHide(), this._posterShow()), this._opts.closeFSOnEnd && this.isFullScreen && this.exitFullScreen(), this.emit("ended")
            }, t.prototype._monitorText = function() {
                var t = this._videoEngine.getFPS();
                return tmpl("fps: <%= fps %>, sdev: <%= stdev %>, ct: <%= canvasTime %>", {
                    state: CeltraPlayerUtils.STATE[this._state],
                    currentTime: Math.round(this.currentTime, 2),
                    ended: this.ended,
                    fps: t && t.fps,
                    stdev: t && t.stdev,
                    canvasTime: t && t.canvasTime
                })
            }, t.prototype.addEventListener = t.prototype.on, t.prototype.removeEventListener = t.prototype.removeListener, t.prototype.playsInline = function() {
                return "permanent" !== this._opts.fullscreenMode
            }, window.VideoPlayer = t
        })();;
        (function() {
            var t = 2.1,
                e = .4,
                i = function(t, e) {
                    this.maxPlayingSegmentLength = t, this.callback = e, this.reset()
                };
            i.prototype.init = function(t) {
                this._startPlayingPosition = t, this._lastPlayingPosition = t, this._startCallTime = Date.now()
            }, i.prototype.addEvent = function(e) {
                var i = Date.now(),
                    n = e - this._startPlayingPosition,
                    s = i - this._startCallTime,
                    o = 1e3 * n / s,
                    r = n >= this.maxPlayingSegmentLength;
                Math.abs(1 - o) > t ? this.flush() : r && (this._lastPlayingPosition = e, this.flush()), this._lastPlayingPosition = e
            }, i.prototype.flush = function() {
                if (null != this._startPlayingPosition) {
                    var i = Date.now(),
                        n = 1e3 * (this._lastPlayingPosition - this._startPlayingPosition) / (i - this._startCallTime),
                        s = this._startPlayingPosition,
                        o = this._lastPlayingPosition;
                    o - s > e && this._lastPlayingPosition > this._startPlayingPosition && t >= Math.abs(n) && this.callback({
                        from: s,
                        to: o
                    }), this._startPlayingPosition = this._lastPlayingPosition, this._startCallTime = Date.now()
                }
            }, i.prototype.reset = function() {
                this._startPlayingPosition = null, this._startCallTime = null, this._lowerBound = 0
            }, "undefined" != typeof module && module.exports ? module.exports = i : this.PlayedSegmentComputationUnit = i
        })();;

        function Tapper(t) {
            attach(t, "touchstart", function(e) {
                for (var i, n = e.target; 1 != n.nodeType;) n = n.parentNode;
                for (; n && n instanceof HTMLElement;) {
                    if (hasClass(n, "touchable") || "a" === n.tagName.toLowerCase() && n.href || "button" === n.tagName.toLowerCase() || "input" === n.tagName.toLowerCase() && "button" === n.type.toLowerCase()) {
                        i = n;
                        break
                    }
                    n = n.parentNode
                }
                if (i) {
                    var s = !1;
                    if (iframe()) {
                        var o = function() {
                                var t = ("undefined" != typeof creative && creative.adapter || adapter).getTopWindow();
                                return [t.scrollX, t.scrollY, t.innerWidth, t.innerHeight]
                            },
                            r = o();
                        s = !0
                    }
                    var a = 20,
                        l = "undefined" != typeof creative && creative.experiments.get("TapperRadius");
                    l && (a = 1 * l.chosenVariant);
                    var h = e.targetTouches[0].clientX - a,
                        d = e.targetTouches[0].clientX + a,
                        c = e.targetTouches[0].clientY - a,
                        u = e.targetTouches[0].clientY + a;
                    addClass(i, "touched");
                    var p = !1,
                        g = !1,
                        f = !1,
                        m = !1,
                        _ = new Date,
                        y = function(t) {
                            if (!p && !g) {
                                var e = t.targetTouches[0].clientX,
                                    n = t.targetTouches[0].clientY;
                                p = s && "" + r != "" + o(), g = !(e >= h && d >= e && n >= c && u >= n), g || p ? removeClass(i, "touched") : addClass(i, "touched")
                            }
                        },
                        v = function() {
                            if (!m && (m = !0, detach(t, "touchmove", y, !1), detach(t, "touchend", arguments.callee, !1), hasClass(i, "touched"))) {
                                if (removeClass(i, "touched"), g || p || f || new Date - _ > 400 && !desktop()) return;
                                var e = t.ownerDocument.createEvent("MouseEvents");
                                e.initEvent("tap", !0, !0), i.dispatchEvent(e)
                            }
                        },
                        b = function() {
                            detach(t, "touchend", b, !0), nextFrame(function() {
                                f = !0, v()
                            })
                        };
                    attach(t, "touchcancel", function(t) {
                        removeClass(i, "touched"), v(t)
                    }, !1), attach(t, "touchmove", y, !1), attach(t, "touchend", v, !1), attach(t, "touchend", b, !0)
                }
            }, !0)
        };
        (function() {
            function t(t, e, i) {
                return i >= Math.abs(t.to - e.from) ? {
                    from: t.to,
                    to: e.to
                } : {
                    from: e.from,
                    to: e.to
                }
            }
            var e = {
                    maxPlayedSegmentLength: 3,
                    samplingFrequency: 4
                },
                i = .5,
                n = [, null, 0, 1],
                s = [100, 300, 6e3],
                o = function(t, i) {
                    this._video = t, this._lastObservedDuration = null, this._lastObservedPosition = null, this._intervalId = null, this._running = !1, this._runBeforeFirstPlayedSegment = [], this._playedSegmentsCount = 0, this._options = CeltraPlayerUtils.mergeObjects(e, i), this._playedSegmentComputationUnit = new PlayedSegmentComputationUnit(this._options.maxPlayedSegmentLength, this.emitVideoPlayedSegment.bind(this)), this._lastVideoPlayedSegment = {
                        from: 0,
                        to: 0
                    }, this.stop = this.stop.bind(this), this.stopAndReset = this.stopAndReset.bind(this), this.start = this.start.bind(this), this.tick = this.tick.bind(this);
                    var n = t.serverReportedDuration;
                    n ? (defer(function() {
                        this.emit("videoDurationUpdate", {
                            duration: n
                        })
                    }.bind(this)), this.checkDuration = !1) : (this.checkDuration = !0, t.on("durationchange", this.tick)), t.on("pause", this.stop), t.on("timeupdate", this.start), t.on("ended", this.stopAndReset), t.on("playing", this.start), t.on("seeked", this.start), r().on("mediaStopRequested", this.stop)
                };
            extend(o.prototype, EventEmitter);
            var r = function() {
                return "undefined" != typeof creative ? creative.adapter : adapter
            };
            o.prototype.emitVideoPlayedSegment = function(e) {
                var n = t(this._lastVideoPlayedSegment, e, i);
                0 === this._playedSegmentsCount && this._runBeforeFirstPlayedSegment.forEach(function(t) {
                    t()
                }), this._lastVideoPlayedSegment = n, this.emit("videoPlayedSegment", n), this._playedSegmentsCount += 1
            }, o.prototype.start = function() {
                this._running || (this._running = !0, this._playedSegmentComputationUnit.init(this._video.currentTime), clearInterval(this._intervalId), this._intervalId = setInterval(this.tick, 1e3 / this._options.samplingFrequency))
            }, o.prototype.stopAndReset = function() {
                this.stop()
            }, o.prototype.stop = function() {
                if (this._running) {
                    this._running = !1;
                    var t = this._video.currentTime;
                    this._playedSegmentComputationUnit.addEvent(t), this._playedSegmentComputationUnit.flush(), clearInterval(this._intervalId)
                }
            }, o.prototype.tick = function() {
                if (this.checkDuration) {
                    var t = this._video.duration;
                    if (this._lastObservedDuration !== t && !CeltraPlayerUtils.exists(n, t)) {
                        this._lastObservedDuration = t;
                        var e = function() {
                            this.emit("videoDurationUpdate", {
                                duration: t
                            })
                        }.bind(this);
                        CeltraPlayerUtils.exists(s, t) ? this._runBeforeFirstPlayedSegment.push(e) : e()
                    }
                }
                var i = this._video.currentTime,
                    o = Date.now() - (this._lastTickTime || Date.now());
                i == this._lastObservedPosition && o > 1e3 && this.stop(), this._playedSegmentComputationUnit.addEvent(i), this._lastObservedPosition = i, this._lastTickTime = Date.now()
            }, o.prototype.destroy = function() {
                var t = this._video;
                this.stop(), t.off("pause", this.stop), t.off("ended", this.stopAndReset), t.off("playing", this.start), t.off("timeupdate", this.start), t.off("durationchange", this.tick), r().off("mediaStopRequested", this.stop), this._playedSegmentComputationUnit.flush(), this._playedSegmentComputationUnit = null
            }, this.VideoEventsAdapter = o
        })();;

        function StateObject(t) {
            this.values = {}, Object.keys(t).forEach(function(e) {
                this.registerValue(e, t[e])
            }, this), this._isDirty = !1
        }
        extend(StateObject.prototype, EventEmitter), StateObject.prototype.registerValue = function(t, e) {
            this.values[t] = {
                dirty: !1,
                value: e
            }, Object.defineProperty(this, t, {
                get: function() {
                    return this.values[t].value
                },
                set: function(e) {
                    var i = this.values[t],
                        n = i.value;
                    e != n && (i.dirty = !0, i.value = e, this._isDirty = !0, this.emit("change:" + t, e, n))
                }
            })
        }, StateObject.prototype.markClean = function(t) {
            Object.keys(this.values).forEach(function(e) {
                t && e !== t || (this[e].dirty = !1)
            }, this.values), this._isDirty = !1
        }, StateObject.prototype.getDirtyValues = function() {
            var t = this.values;
            return Object.keys(t).filter(function(e) {
                return t[e].dirty
            }).reduce(function(e, i) {
                return e[i] = t[i].value, e
            }, {})
        }, StateObject.prototype.isDirty = function(t) {
            return t === void 0 ? this._isDirty : this.values[t].dirty
        }, StateObject.prototype.anyDirty = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.apply(t));
            for (var e = Object.keys(this.values).filter(function(t) {
                    return this[t].dirty
                }, this.values), i = 0; e.length > i; i++)
                if (t.indexOf(e[i]) > -1) return !0;
            return !1
        };;

        function StateAnimation(t, e) {
            this.stateObject = t, this.propertyName = e, this.running = !1, this.lastUpdateTime = null, this.tick = this.tick.bind(this), this._callback = null
        }

        function SpringyAnimation(t, e, i) {
            StateAnimation.apply(this, arguments), this.options = extend({}, SpringyAnimation.defaults, i || {}), this.state = {
                x: t[e],
                v: 0
            }, this.derivative = {
                dx: 0,
                dv: 0
            }
        }

        function EasingAnimation(t, e, i) {
            StateAnimation.apply(this, arguments), this.options = extend({}, EasingAnimation.defaults, i || {}), this._startValue = null, this._startTime = null, this._targetValue = null, this._targetTime = null
        }
        StateAnimation.prototype.start = function() {
            this.running || (this.lastUpdateTime = null, this.running = !0, Ticker.frame(this.tick, "update"))
        }, StateAnimation.prototype.pause = function() {
            Ticker.removeFrame(this.tick, "update"), this.running = !1
        }, StateAnimation.prototype.tick = function() {
            var t = Date.now();
            this.update(t - (this.lastUpdateTime || t)), this.lastUpdateTime = t
        }, StateAnimation.prototype.update = function() {
            throw Error("Not implemented")
        }, Object.defineProperty(StateAnimation.prototype, "value", {
            get: function() {
                return this.stateObject[this.propertyName]
            },
            set: function(t) {
                this.stateObject[this.propertyName] = t
            },
            enumerable: !0
        }), inherit(SpringyAnimation, StateAnimation), SpringyAnimation.defaults = {
            springForce: 1e3,
            damping: 20,
            restThreshold: 1
        }, SpringyAnimation.prototype.animateTo = function(t, e, i) {
            this.running && this.pause(), "function" == typeof e && (i = e, e = 0), this.d = t, this.state.v = "number" == typeof e ? e : 0, this.state.x = this.value, this._callback = i, this.start()
        }, SpringyAnimation.prototype.update = function(t) {
            var e = Math.min(.03, t / 1e3),
                i = Math.abs(this.state.x - this.d);
            this.options.restThreshold > i && Math.abs(this.state.v) < this.options.restThreshold ? (this.pause(), this.value = this.d, this.d = null, defer(this._callback || noop), this._callback = null) : (this._integrate(this.state, e), this.value = this.state.x)
        }, SpringyAnimation.prototype._integrate = function(t, e) {
            var i = this._getDerivative(this.state),
                n = this._getDerivative(this.state, .5 * e, i),
                o = this._getDerivative(this.state, .5 * e, n),
                a = this._getDerivative(this.state, e, o);
            t.x += e / 6 * (i.dx + 2 * (n.dx + o.dx) + a.dx), t.v += e / 6 * (i.dv + 2 * (n.dv + o.dv) + a.dv)
        }, SpringyAnimation.prototype._getDerivative = function(t, e, i) {
            if (i === void 0) return {
                dx: t.v,
                dv: this._acceleration(t)
            };
            var n = {
                x: t.x + i.dx * e,
                v: t.v + i.dv * e
            };
            return {
                dx: n.v,
                dv: this._acceleration(n, e)
            }
        }, SpringyAnimation.prototype._acceleration = function(t) {
            return -this.options.springForce * (t.x - this.d) - this.options.damping * t.v
        }, inherit(EasingAnimation, StateAnimation), EasingAnimation.defaults = {
            exp: 1.8
        }, EasingAnimation.presets = {
            easeIn: .6,
            easeOut: 1.8,
            linear: 1
        }, EasingAnimation.prototype.animateTo = function(t, e, i) {
            this.running && this.pause(), this._callback = i, this._startValue = this.value, this._startTime = Date.now(), this._targetValue = t, this._targetTime = e, this.start()
        }, EasingAnimation.prototype.update = function() {
            var t = Date.now() - this._startTime,
                e = this._targetValue - this._startValue;
            e / Math.abs(e), this.value = Math.pow(t / this._targetTime, this.options.exp) * e + this._startValue, t >= this._targetTime && (this.pause(), this.value = this._targetValue, defer(this._callback || noop), this._startValue = null, this._startTime = null, this._targetValue = null, this._targetTime = null, this._callback = null)
        };;

        function ViewportManager(t) {
            this.container = t.container, this.width = this.originalWidth = t.width || 0, this.height = this.originalHeight = t.height || 0, this.iframe = this.container.ownerDocument.defaultView.frameElement, this.init()
        }
        extend(ViewportManager.prototype, EventEmitter), ViewportManager.prototype.init = function() {
            this.container.style.overflow = "hidden", this.container.style.position = "absolute", this.container.style.left = this.container.style.top = 0, this.iframe.style.display = "block", this.update()
        }, ViewportManager.prototype.update = function() {
            this.container.style.width = this.width + "px", this.container.style.height = this.height + "px", this.iframe.style.width = this.width + "px", this.iframe.style.height = this.height + "px", this.iframe.width = this.width, this.iframe.height = this.height
        }, ViewportManager.prototype.setSize = function(t, e) {
            this.width = t, this.height = e, this.update()
        };;

        function Placement(t) {
            this.root = null, this._isPopulated = !1, this.width = {
                value: 100,
                unit: "%"
            }, this.height = {
                value: 100,
                unit: "%"
            }, this.left = {
                value: 0,
                unit: "px"
            }, this.top = {
                value: 0,
                unit: "px"
            }, this._positioning = t || "container", this.origin = {
                horizontal: "left",
                vertical: "top"
            }, this._usesFixedPositioning = !1, this._minWidth = {
                value: 0,
                unit: "px"
            }, this._minHeight = {
                value: 0,
                unit: "px"
            }, this.touchEventSimulator = null
        }

        function IframePlacement(t, e, i, n) {
            Placement.apply(this, arguments), this.frame = null, this.vm = null, this.unitScript = e, this.windowVarsByRef = i, this.windowVarsByCopy = n, this._syncInterval = null, this._syncIframeSize = this._syncIframeSize.bind(this)
        }

        function DivPlacement() {
            Placement.apply(this, arguments)
        }

        function StickyPlacement(t, e, i, n, o) {
            IframePlacement.apply(this, arguments), this.stickyOptions = o, this._handleDismissTouchEnd = this._handleDismissTouchEnd.bind(this), this.origin.horizontal = "center", this.origin.vertical = this.stickyOptions.stickiness, this.usesFixedPositioning = !0, this._originalDocumentPadding = null
        }
        extend(Placement.prototype, EventEmitter), Placement.prototype._setInterval = function(t, e) {
            return this.getRootWindow().setInterval(t, e)
        }, Placement.prototype._clearInterval = function(t, e) {
            return this.getRootWindow().clearInterval(t, e)
        }, Placement.ZINDEX_MAX = 2147483647, Placement.prototype.getRootWindow = function() {
            return this.root.ownerDocument.defaultView
        }, Placement.prototype.attachTo = function() {
            throw Error("Placement.attachTo not implemented")
        }, Placement.prototype.getContainer = function() {
            throw Error("Placement.getContainer not implemented")
        }, Object.defineProperty(Placement.prototype, "creative", {
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
        }), Placement.prototype.setMinimumSize = function(t, e) {
            var i = this._parseLength(t),
                n = this._parseLength(e);
            this._minWidth.value = i.value, this._minWidth.unit = i.unit, this._minHeight.value = n.value, this._minHeight.unit = n.unit, this._visible && this.update()
        }, Placement.prototype.setSize = function(t, e, i) {
            var n, o, r = this._parseLength(t),
                a = this._parseLength(e),
                s = this.getViewportGeometry(),
                h = extend({}, this._minWidth),
                l = extend({}, this._minHeight);
            i || (this.width = {
                value: r.value,
                unit: r.unit
            }, this.height = {
                value: a.value,
                unit: a.unit
            }), "screen" == this.positioning ? (n = s.width, o = s.height) : "page" == this.positioning ? (n = this.root.ownerDocument.documentElement.offsetWidth, o = this.root.ownerDocument.documentElement.offsetHeight) : (n = this.root.parentNode.offsetWidth, o = this.root.parentNode.offsetHeight), "%" == r.unit && (r.value = Math.round(r.value * n / 100), r.unit = "px"), "%" == a.unit && (a.value = Math.round(a.value * o / 100), a.unit = "px"), "%" == h.unit && (h.value = Math.round(h.value * n / 100), h.unit = "px"), "%" == l.unit && (l.value = Math.round(l.value * o / 100), l.unit = "px"), this.root.style.width = Math.max(r.value, h.value) + r.unit, this.root.style.height = Math.max(a.value, l.value) + a.unit, defer(this.emits("resized"))
        }, Placement.prototype.getBaseOffset = function() {
            var t = this.root.ownerDocument.createElement("div"),
                e = this.root.parentNode;
            t.style.left = 0, t.style.top = 0, t.style.position = "absolute", e.appendChild(t);
            var i = offset(t);
            return e.removeChild(t), i
        }, Placement.prototype.setPosition = function(t, e, i) {
            var n = this._parseLength(t),
                o = this._parseLength(e),
                r = this.getViewportGeometry(),
                a = this.getBaseOffset();
            switch (i || (this.left.value = n.value, this.left.unit = n.unit, this.top.value = o.value, this.top.unit = o.unit), this.positioning) {
                case "screen":
                    if (this._canUseFixedPositioning) this.root.style.position = "fixed", "left" == this.origin.horizontal ? (this.root.style.left = n.value + n.unit, this.root.style.right = "auto", this.root.style.marginLeft = "") : "center" == this.origin.horizontal ? (this.root.style.left = n.value + n.unit, this.root.style.right = "auto", this.root.style.marginLeft = (r.width - this.root.offsetWidth) / 2 + "px") : (this.root.style.right = n.value + n.unit, this.root.style.left = "auto", this.root.style.marginLeft = ""), "top" == this.origin.vertical ? (this.root.style.top = o.value + o.unit, this.root.style.bottom = "auto", this.root.style.marginTop = "") : "center" == this.origin.vertical ? (this.root.style.top = o.value + o.unit, this.root.style.bottom = "auto", this.root.style.marginTop = (r.height - this.root.offsetHeight) / 2 + "px") : (this.root.style.bottom = o.value + o.unit, this.root.style.top = "auto", this.root.style.marginTop = "");
                    else {
                        var s = "",
                            h = "";
                        if ("%" == n.unit && (n.value *= r.width / 100, n.unit = "px"), "%" == o.unit && (o.value *= r.height / 100, o.unit = "px"), "left" == this.origin.horizontal) n.value += r.left;
                        else if ("center" == this.origin.horizontal) n.value += r.left, s = (r.width - this.root.offsetWidth) / 2 + "px";
                        else {
                            var l = "%" == this.width.unit ? this.width.value / 100 * r.width : this.width.value;
                            n.value = r.left + r.width - l - n.value
                        }
                        if ("top" == this.origin.vertical) o.value += r.top;
                        else if ("center" == this.origin.vertical) o.value += r.top, h = (r.height - this.root.offsetHeight) / 2 + "px";
                        else {
                            var c = "%" == this.height.unit ? this.height.value / 100 * r.height : this.height.value;
                            o.value = r.top + r.height - c - o.value
                        }
                        this.root.style.position = "absolute", this.root.style.left = n.value - a.left + "px", this.root.style.top = o.value - a.top + "px", this.root.style.marginLeft = s, this.root.style.marginTop = h, this.root.style.right = this.root.style.bottom = "auto"
                    }
                    break;
                case "container":
                    this.root.style.position = "absolute", "left" == this.origin.horizontal ? (this.root.style.left = n.value + n.unit, this.root.style.right = "auto", this.root.style.marginLeft = "") : "center" == this.origin.horizontal ? (this.root.style.left = n.value + n.unit, this.root.style.right = "auto", this.root.style.marginLeft = "px" == this.height.unit ? -Math.round(this.width.value / 2) + "px" : -(this.root.offsetWidth / 2) + "px") : (this.root.style.left = "auto", this.root.style.right = n.value + n.unit, this.root.style.marginLeft = ""), "top" == this.origin.vertical ? (this.root.style.top = o.value + o.unit, this.root.style.bottom = "auto", this.root.style.marginTop = "") : "center" == this.origin.vertical ? (this.root.style.top = o.value + o.unit, this.root.style.bottom = "auto", this.root.style.marginTop = "px" == this.height.unit ? -Math.round(this.height.value / 2) + "px" : -(this.root.offsetHeight / 2) + "px") : (this.root.style.top = "auto", this.root.style.bottom = o.value + o.unit, this.root.style.marginTop = "");
                    break;
                case "page":
                    var d = {
                        width: this.root.ownerDocument.documentElement.clientWidth,
                        height: this.root.ownerDocument.documentElement.clientHeight
                    };
                    "%" == n.unit && (n.value = Math.round(n.value * d.width / 100), n.unit = "px"), "%" == o.unit && (o.value = Math.round(o.value * d.height / 100), o.unit = "px"), this.root.style.position = "absolute", "left" == this.origin.horizontal ? (this.root.style.left = n.value - a.left + "px", this.root.style.top = o.value - a.top + "px") : "center" == this.origin.horizontal ? (this.root.style.left = (d.width - this.root.offsetWidth) / 2 - a.left + n.value + "px", this.root.style.top = (d.height - this.root.offsetHeight) / 2 - a.top + o.value + "px") : (this.root.style.left = d.width - this.root.offsetWidth - a.left - n.value + "px", this.root.style.top = d.height - this.root.offsetHeight - a.top - o.value + "px"), this.root.style.right = this.root.style.bottom = "auto";
                    break;
                case "static":
                    this.root.style.position = "static", this.root.style.left = this.root.style.top = 0, this.root.style.right = this.root.style.bottom = "auto", this.root.style.marginLeft = this.root.style.marginTop = ""
            }
            defer(this.emits("repositioned"))
        }, Placement.prototype.update = function(t) {
            this.setSize(this.width.value + this.width.unit, this.height.value + this.height.unit, !0), this.setPosition(this.left.value + this.left.unit, this.top.value + this.top.unit, !0), defer(t || noop)
        }, Placement.prototype.supportsFixedPositioning = !(android("2") || ios(null, "4") || kindleSilk("1")), Object.defineProperty(Placement.prototype, "usesFixedPositioning", {
            get: function() {
                return this._usesFixedPositioning
            },
            set: function(t) {
                this._usesFixedPositioning = !!t, this.update()
            },
            enumerable: !0
        }), Placement.prototype.hacks = {
            preventScreenFlickering: kindle("1") || android("2"),
            useAlternativeWindowDimensions: desktop()
        }, Placement.prototype.hide = function() {
            this.root.style.display = "none", this._visible = !1, this.emit("hidden")
        }, Placement.prototype.show = function() {
            this.root.style.display = "block", this._visible = !0, this.emit("shown")
        }, Placement.prototype.destroy = function() {
            this.root && this.root.parentNode && this.root.parentNode.removeChild(this.root), this.root = null
        }, Placement.prototype.setZIndex = function(t) {
            0 > t && (t = Placement.ZINDEX_MAX + t), "max" == t && (t = Placement.ZINDEX_MAX), this.root.style.zIndex = t
        }, Placement.prototype.createElement = function() {
            throw Error("Not implemented")
        }, Placement.prototype.querySelector = function() {
            throw Error("Not implemented")
        }, Placement.prototype.getViewportGeometry = function() {
            var t = this.getRootWindow(),
                e = t.document.documentElement;
            return {
                width: this.hacks.useAlternativeWindowDimensions ? e.clientWidth : t.innerWidth,
                height: this.hacks.useAlternativeWindowDimensions ? e.clientHeight : t.innerHeight,
                left: t.scrollX || e && e.scrollLeft || 0,
                top: t.scrollY || e && e.scrollTop || 0
            }
        }, Placement.prototype.getPlacementGeometry = function() {
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
        }, Placement.prototype._parseLength = function(t) {
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
        }, Placement.prototype.getUnitGeometry = function(t) {
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
        }, Placement.prototype.getRelativeUnitGeometry = function(t) {
            var e = offset(t.node);
            return e.width = t.node.offsetWidth, e.height = t.node.offsetHeight, e
        }, Placement.prototype.populate = function(t, e) {
            this._isPopulated || (this.getContainer().appendChild(t), this.emit("populated"), this._isPopulated = !0), e && defer(e)
        }, Placement.prototype._getViewportElement = function() {
            throw Error("Not implemented")
        }, Placement.prototype.setBackground = function(t) {
            null == t && (t = "none"), this.root.style.background = t
        }, Placement.prototype._flash = function() {
            var t = this.getContainer().ownerDocument,
                e = this.createElement("div");
            e.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.01;background:black;", t.body.appendChild(e), defer(function() {
                e.parentNode.removeChild(e)
            })
        }, inherit(IframePlacement, Placement), IframePlacement.baseHTML = tmpl('<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="initial-scale=1,maximum-scale=1"/><%= preamble %></head><body><div id="viewport"></div><script><%= script %></script></body></html>'), IframePlacement.prototype.setSize = function() {
            IframePlacement.uber.setSize.apply(this, arguments), this._syncIframeSize()
        }, IframePlacement.prototype.show = function() {
            IframePlacement.uber.show.apply(this, arguments), this._syncIframeSize()
        }, IframePlacement.prototype._syncIframeSize = function() {
            this._visible && this.vm && (this.root.offsetWidth != this.vm.width || this.root.offsetHeight != this.vm.height) && this.vm.setSize(0 | this.root.offsetWidth, 0 | this.root.offsetHeight)
        }, IframePlacement.prototype.startSyncingIframeSize = function() {
            this._syncInterval = this._setInterval(this._syncIframeSize, 100)
        }, IframePlacement.prototype.stopSyncingIframeSize = function() {
            this._syncInterval && this._clearInterval(this._syncInterval), this._syncInterval = null
        }, IframePlacement.prototype.getContainer = function() {
            if (!this.root) throw Error("Root node not attached to document yet!");
            return this.querySelector("#viewport")
        }, IframePlacement.prototype.attachTo = function(t, e) {
            this.root = t.ownerDocument.createElement("div"), this.root.style.overflow = "hidden", this.hide(), t.appendChild(this.root), this.startSyncingIframeSize(), this.frame = t.ownerDocument.createElement("iframe"), this.frame.style.border = "0px", this.frame.setAttribute("frameborder", "0"), this.frame.setAttribute("scrolling", "no"), this.root.appendChild(this.frame), defer(function() {
                if (!this.frame.contentWindow) throw Error("Can't access contentWindow of an iframe, skip placement initialization.");
                this.frame.contentDocument.open();
                for (var t in this.windowVarsByRef) this.frame.contentWindow[t] = this.windowVarsByRef[t];
                var i = "<script>\n";
                for (var t in this.windowVarsByCopy) i += "window." + t + " = " + JSON.stringify(this.windowVarsByCopy[t]) + ";\n";
                i += "</script>", this.frame.contentDocument.write(IframePlacement.baseHTML({
                    preamble: i,
                    script: this.unitScript
                })), attach(this.frame, "load", function() {
                    var t = this.frame.contentDocument.createElement("script");
                    t.textContent = "window.touchEventSimulator = new TouchEventSimulator(document);window.touchEventSimulator.init();function __parseJSON(s){return JSON.parse(s);}", this.frame.contentDocument.querySelector("head").appendChild(t), this.touchEventSimulator = this.frame.contentWindow.touchEventSimulator, this.vm = new ViewportManager({
                        container: this._getViewportElement()
                    }), e && defer(e)
                }.bind(this)), this.frame.contentDocument.close(), this.frame.contentWindow.onunload = this.emits("unload")
            }.bind(this))
        }, IframePlacement.prototype.update = function() {
            IframePlacement.uber.update.apply(this, arguments), android("2") && this._flash()
        }, IframePlacement.prototype.destroy = function() {
            this.stopSyncingIframeSize(), IframePlacement.uber.destroy.apply(this, arguments)
        }, IframePlacement.prototype.createElement = function(t) {
            return this.frame.contentDocument.createElement(t)
        }, IframePlacement.prototype.querySelector = function(t) {
            return this.frame.contentDocument ? this.frame.contentDocument.querySelector(t) : null
        }, IframePlacement.prototype.querySelectorAll = function(t) {
            return this.frame.contentDocument ? this.frame.contentDocument.querySelectorAll(t) : []
        }, IframePlacement.prototype._getViewportElement = function() {
            return this.querySelector("#viewport")
        }, inherit(DivPlacement, Placement), DivPlacement.prototype.attachTo = function(t, e) {
            this.root = t.ownerDocument.createElement("div"), this.root.style.overflow = "hidden", this.hacks.preventScreenFlickering && (this.root.style.webkitTransform = "translateZ(0)"), this.hide(), t.appendChild(this.root), this.touchEventSimulator = new TouchEventSimulator(this.root), this.touchEventSimulator.init(), e && setTimeout(e, 0)
        }, DivPlacement.prototype.destroy = function() {
            DivPlacement.uber.destroy.apply(this, arguments), this.touchEventSimulator.stop(), this.touchEventSimulator = null
        }, DivPlacement.prototype.getContainer = function() {
            return this.root
        }, DivPlacement.prototype.createElement = function(t) {
            return this.root.ownerDocument.createElement(t)
        }, DivPlacement.prototype.querySelector = function(t) {
            return this.root.querySelector(t)
        }, DivPlacement.prototype.querySelectorAll = function(t) {
            return this.root.querySelectorAll(t)
        }, DivPlacement.prototype._getViewportElement = function() {
            return this.root
        }, inherit(StickyPlacement, IframePlacement), StickyPlacement.prototype.setPosition = StickyPlacement.prototype.setZIndex = noop, StickyPlacement.prototype.show = function() {
            IframePlacement.prototype.show.apply(this, arguments), IframePlacement.prototype.setZIndex.call(this, "max"), this.enableDocumentPadding(), this.update()
        }, StickyPlacement.prototype.hide = function() {
            IframePlacement.prototype.hide.apply(this, arguments), this.disableDocumentPadding()
        }, StickyPlacement.prototype.populate = function() {
            this.stickyOptions.showDismissButton && this.once("populated", this.createDismissButton.bind(this)), IframePlacement.prototype.populate.apply(this, arguments)
        }, StickyPlacement.prototype.update = function(t) {
            this.root && this.root.parentNode && (IframePlacement.prototype.setSize.call(this, this.width.value + this.width.unit, this.height.value + this.height.unit, !0), IframePlacement.prototype.setPosition.call(this, 0, 0, !0), defer(t))
        }, StickyPlacement.prototype.createDismissButton = function() {
            with(this.getViewportGeometry(), this.root.style.overflow = "visible", this._dismissButton = this.root.ownerDocument.createElement("img"), this._dismissButton.src = this.stickyOptions.baseUrl + "runner/clazzes/Sticky/sticky-dismiss-button.png", this._dismissButton.style) switch (position = "absolute", left = "auto", right = "6px", width = "32px", height = "32px", zIndex = 10, this.stickyOptions.stickiness) {
                case "top":
                    top = "auto", bottom = "-16px";
                    break;
                case "bottom":
                    top = "-16px", bottom = "auto"
            }
            attach(this._dismissButton, "touchend", this._handleDismissTouchEnd, !1), this.root.appendChild(this._dismissButton)
        }, StickyPlacement.prototype._handleDismissTouchEnd = function(t) {
            t.preventDefault(), t.stopPropagation(), this.disableDocumentPadding(), (this.stickyOptions.dismissCallback || noop)()
        }, StickyPlacement.prototype.enableDocumentPadding = function() {
            var t = this.getRootWindow(),
                e = t.document.documentElement;
            this._originalDocumentPadding || (this._originalDocumentPadding = t.getComputedStyle(e)["padding-" + this.stickyOptions.stickiness]), e.style["padding-" + this.stickyOptions.stickiness] = this.root.offsetHeight + "px"
        }, StickyPlacement.prototype.disableDocumentPadding = function() {
            var t = this.getRootWindow(),
                e = t.document.documentElement;
            e.style["padding-" + this.stickyOptions.stickiness] = this._originalDocumentPadding, this._originalDocumentPadding = null
        };;

        function Format(t, e) {
            this.adapter = t, this.state = null, this.units = e, this.observesViewability = !0, this.observingViewability = function(t) {
                return this.observesViewability && this.adapter.viewabilityMeasurable["viewable" + t]
            }.bind(this)
        }
        extend(Format.prototype, EventEmitter), Object.defineProperty(Format.prototype, "placements", {
            get: function() {
                return this.adapter.placements
            },
            enumerable: !0
        }), Format.prototype.transitionTo = function() {
            throw Error("transitionTo not implemented")
        }, Format.prototype.destroy = function() {
            for (var t in this.placements) this.adapter.destroyPlacement(t), delete this.placements[t];
            this.adapter._stopObservingEnvironment()
        }, Format.prototype.hacks = {}, Format.prototype._getBackwardCompatibleOrientation = function(t) {
            function e() {
                var e = t.size;
                return e.width < e.height ? "portrait" : e.width > e.height ? "landscape" : "noOrientation"
            }
            var i = void 0;
            return i = this.adapter.runtimeParams.lockOrientation || this.adapter.autoLock() ? this.adapter.determineLockOrientation() : "prompt" === t.wrongOrientationHandling && t ? e() : "noOrientation"
        };;

        function UnitViewabilityObserver(t, e, i) {
            this.adapter = t, this.placement = e, this.element = i, this._listeners = [], this._calc = this._calc.bind(this), this._active = !1, this._currentViewability = null, this._previousViewability = null, this._timer = null
        }
        UnitViewabilityObserver.observationInterval = 100, UnitViewabilityObserver.samplingCount = 200, UnitViewabilityObserver.minimumOpacity = .95, UnitViewabilityObserver.prototype._getUnitVisibleGeometry = function() {
            var t = this.adapter.getPlacementRect(this.placement),
                e = this.adapter.getViewportRect(),
                i = CRect.adopt({
                    left: 0,
                    top: 0,
                    width: this.placement.getContainer().offsetWidth,
                    height: this.placement.getContainer().offsetHeight
                }),
                n = CRect.adopt(this.element.getBoundingClientRect()),
                s = n.intersect(i);
            return {
                globalUnitRect: n.map(i, t),
                intersect: s ? s.map(i, t).intersect(e) : null
            }
        }, UnitViewabilityObserver.prototype._getUnitInteractionSamples = function(t) {
            var e = 0,
                i = 0;
            if (!this.adapter.isSingleOccupant) {
                for (var n = this.placement.root, s = n.ownerDocument, o = s.defaultView, r = this.placement.getContainer(), a = null, l = 1, h = 1;
                    (n = n.parentNode) && n !== s.body;) a = o.getComputedStyle(n), l *= a.opacity, h *= ("visible" == a.visibility ? 1 : 0) * ("none" != a.display ? 1 : 0);
                l * h > UnitViewabilityObserver.minimumOpacity && CPoint.sample(t, UnitViewabilityObserver.samplingCount, function(t, n) {
                    var o = s.elementFromPoint(Math.round(t), Math.round(n));
                    if (e++, this.placement.frame && o === this.placement.frame) i++;
                    else {
                        for (; o && o !== r && o !== s;) o = o.parentNode;
                        o === r && i++
                    }
                }.bind(this))
            }
            return {
                samples: e,
                positives: i
            }
        }, UnitViewabilityObserver.prototype.getUnitInteractableRatio = function() {
            if (!this.element.parentNode || !this.placement.root.parentNode) return 0;
            if (!this.adapter.containerIsViewable || !this.element.ownerDocument.defaultView) return 0;
            var t = this._getUnitVisibleGeometry(),
                e = t.intersect && t.globalUnitRect.area > 0 ? t.intersect.area / t.globalUnitRect.area : 0,
                i = null;
            return e > 0 && (i = this._getUnitInteractionSamples(t.intersect)), i && i.samples > 0 && (e *= i.positives / i.samples), e
        }, UnitViewabilityObserver.prototype.addListener = function(t) {
            this._listeners.push(t), this._start()
        }, UnitViewabilityObserver.prototype.removeListener = function(t) {
            this._listeners = this._listeners.filter(function(e) {
                return e !== t
            }), 0 === this._listeners.length && this.stop()
        }, UnitViewabilityObserver.prototype._calc = function() {
            this._active && (this._currentViewability = this.getUnitInteractableRatio(), this._currentViewability != this._previousViewability && (this._previousViewability = this._currentViewability, this._listeners.forEach(function(t) {
                t(this._currentViewability)
            }, this)))
        }, UnitViewabilityObserver.prototype._start = function() {
            this._active || (this._active = !0, this.adapter.on("viewportChange", this._calc), this.adapter.on("containerViewableChange", this._calc), this._timer = setInterval(this._calc, UnitViewabilityObserver.observationInterval), defer(this._calc))
        }, UnitViewabilityObserver.prototype.stop = function() {
            this._active && (this._active = !1, this.adapter.off("viewportChange", this._calc), this.adapter.off("containerViewableChange", this._calc), clearInterval(this._timer), this._timer = null)
        }, UnitViewabilityObserver.prototype.waitForViewable = function(t, e, i) {
            var n, s = function(o) {
                o >= t && !n ? n = setTimeout(function() {
                    this.removeListener(s), defer(i)
                }.bind(this), e) : t > o && n && (clearTimeout(n), n = null)
            }.bind(this);
            this.addListener(s)
        }, UnitViewabilityObserver.prototype.waitForViewable00 = function(t) {
            this.waitForViewable(.001, 0, t)
        }, UnitViewabilityObserver.prototype.waitForViewable501 = function(t) {
            this.waitForViewable(.5, 1e3, t)
        };;

        function Slicer(t) {
            this.options = extend({}, Slicer.defaults, t || {}), this.source = null, this.canvas = null
        }
        Slicer.defaults = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }, Slicer.prototype.loadImage = function(t, e) {
            this.source = new Image, this.source.onload = e, this.source.src = t
        }, Slicer.prototype.getCanvas = function(t, e) {
            this.canvas || (this.canvas = document.createElement("canvas"));
            var i = this.canvas.getContext("2d");
            return this.canvas.width = t, this.canvas.height = e, i.clearRect(0, 0, t, e), i.drawImage(this.source, 0, 0, this.options.left, this.options.top, 0, 0, this.options.left, this.options.top), i.drawImage(this.source, 0, this.options.top, this.options.left, this.source.naturalHeight - this.options.top - this.options.bottom, 0, this.options.top, this.options.left, e - this.options.top - this.options.bottom), i.drawImage(this.source, 0, this.source.naturalHeight - this.options.bottom, this.options.left, this.options.bottom, 0, e - this.options.bottom, this.options.left, this.options.bottom), i.drawImage(this.source, this.options.left, 0, this.source.naturalWidth - this.options.left - this.options.right, this.options.top, this.options.left, 0, t - this.options.left - this.options.right, this.options.top), i.drawImage(this.source, this.options.left, this.options.top, this.source.naturalWidth - this.options.left - this.options.right, this.source.naturalHeight - this.options.top - this.options.bottom, this.options.left, this.options.top, t - this.options.left - this.options.right, e - this.options.top - this.options.bottom), i.drawImage(this.source, this.options.left, this.source.naturalHeight - this.options.bottom, this.source.naturalWidth - this.options.left - this.options.right, this.options.bottom, this.options.left, e - this.options.bottom, t - this.options.left - this.options.right, this.options.bottom), i.drawImage(this.source, this.source.naturalWidth - this.options.right, 0, this.options.right, this.options.top, t - this.options.right, 0, this.options.right, this.options.top), i.drawImage(this.source, this.source.naturalWidth - this.options.right, this.options.top, this.options.right, this.source.naturalHeight - this.options.top - this.options.bottom, t - this.options.right, this.options.top, this.options.right, e - this.options.top - this.options.bottom), i.drawImage(this.source, this.source.naturalWidth - this.options.right, this.source.naturalHeight - this.options.bottom, this.options.right, this.options.bottom, t - this.options.right, e - this.options.bottom, this.options.right, this.options.bottom), this.canvas
        }, Slicer.prototype.getDataURL = function(t, e) {
            return this.getCanvas(t, e).toDataURL("image/png")
        };;

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
                }, function() {
                    this.placements.banner.on("resized", function() {
                        this.placements.banner.creative.units.banner.updateWindowMetrics()
                    }.bind(this)), this.populateBanner(this.placements.banner, t.notifies("bannerPopulated"))
                }.bind(this))
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
        }, InterstitialFormat.prototype.populateBanner = function(t, e) {
            var i = t.creative.units.banner;
            i.swipeable = "1" == runtimeParams.swipeable, i.showCloseButton = !this.adapter.providesCloseButton, i.fillsContainer = !0, i.usePlaceboBar = i.loadingScreen && i.loadingScreen.loaderVisible !== void 0 ? i.loadingScreen.loaderVisible : !0, i.closeAction = i.dismissAction;
            var n = i.getNode(function() {
                    t.populate(n, e), t.setZIndex(-2), t.setSize("100%", "100%"), t.setPosition(0, 0), t.setBackground(t.creative.units.banner.backgroundColor)
                }),
                o = i.orientation;
            "portrait" === o || "landscape" === o ? i.enableWrongOrientationPrompt() : i.wrongOrientationHandling && (o = this._getBackwardCompatibleOrientation(i), this.adapter.setOrientationLock(o) || "noOrientation" === o || (i.enableWrongOrientationPrompt(), i.setCorrectOrientation(o)))
        }, InterstitialFormat.prototype.transitionTo = function(t, e, i) {
            if (e || (e = {}), null == this.state && "default" == t) this.adapter.maximizeViewport(function() {
                this.placements.banner.show(), this.units.banner.enterRenderTree(), this.units.banner.show(), this.adapter.startObscuringContent(), i && defer(i)
            }.bind(this));
            else if ("default" == this.state && "dismissed" == t) this.adapter.stopObscuringContent(), this.placements.banner.hide(), this.units.banner.exitRenderTree(), this.units.banner.hide(), this.destroy();
            else {
                if (null != this.state || "dismissed" != t) throw Error("Invalid state transition request! (" + this.state + " => " + t + ")");
                this.destroy()
            }
            this.state = t
        };;

        function SDKAdapter(t, e, i, n, o, r) {
            this.runtimeParams = t, this.trackingCenter = e, this.aggregatorTracking = i, this.experiments = n, this.scriptElement = script, this.adapterWindow = this.scriptElement.ownerDocument.defaultView, this.getAppOverrideUrls = r, this.openWebsiteOverrideUrls = o, this.providesCloseButton = !1, this.enableCustomStateTransitions = !1, this.adBehavior = {
                interstitial: !1,
                expandable: !1,
                expanded: !1,
                sticky: !1
            }, this.viewabilityMeasurable = {
                viewable00: !1,
                viewable501: !1
            }, this.videoCapabilites = {
                html5: !0,
                inline: !1,
                autoplay: !1,
                fallbackToMpeg1: !0,
                fullscreenLandscapeButtonsHack: !1
            }, this.useFSVP = !0, this.hacks = {}, this._hooks = {}, this.placements = {}, this._handleResize = this._handleResize.bind(this), this._handleOrientationChange = this._handleOrientationChange.bind(this), this._handleViewportChange = this._handleViewportChange.bind(this), this._handleDetachedFromDocument = this._handleDetachedFromDocument.bind(this), this._updatePlacements = this._updatePlacements.bind(this), this._keyboardShown = !1, this._onKeyboardShown = this._onKeyboardShown.bind(this), this._onKeyboardHidden = this._onKeyboardHidden.bind(this), this._resizeTimer = null, this._listening = !1, this._touchEventSimulator = null, this.hostWindow = window, defer(this._startObservingEnvironment.bind(this)), ios("7", null) ? this.on("viewportChange", this._updatePlacements) : this.on("resize", this._updatePlacements), this._displayed = !1, this.on("displayed", function() {
                this._displayed = !0
            }.bind(this)), this.sdkReady = !1, this._initRequestAnimationFrame(), defer(function() {
                this._initSdk(deferred(function() {
                    this.sdkReady = !0, this.emit("sdkReady")
                }.bind(this)))
            }.bind(this)), this.on("documentReady", function() {
                android("4.0") && this.getTopWindow().setInterval(function() {
                    for (var t in this.placements) this.placements[t]._flash()
                }.bind(this), 250)
            }.bind(this))
        }
        extend(SDKAdapter.prototype, EventEmitter), Object.defineProperty(SDKAdapter.prototype, "__CELTRA", {
            get: function() {
                return this.getTopWindow().__CELTRA || (this.getTopWindow().__CELTRA = {
                    formats: []
                }), this.getTopWindow().__CELTRA
            },
            enumerable: !0
        }), SDKAdapter.prototype._startObservingEnvironment = function() {
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
                    this.collectAndTrackData(function(t) {
                        var e = ["webkit", "moz", "ms", ""].some(function(t) {
                                return (t ? t + "Hidden" : "hidden") in this.getTopWindow().document
                            }, this),
                            i = {
                                width: this.getTopWindow().innerWidth,
                                height: this.getTopWindow().innerHeight
                            },
                            n = {
                                width: this.hostWindow.innerWidth,
                                height: this.hostWindow.innerHeight
                            },
                            o = {
                                scope: "global",
                                userAgent: window.navigator.userAgent,
                                orientation: this.orientation,
                                topmostReachableWindow: i,
                                hostWindow: n,
                                nesting: this._getNesting(this.hostWindow),
                                pageVisibilityApi: e,
                                clientTimeZoneOffsetInMinutes: (new Date).getTimezoneOffset()
                            };
                        t(o)
                    }.bind(this), "environmentInfo")
                }.bind(this));
                var t = !1;
                this._waitForDomReady(function() {
                    t || (this.emit("domReady"), t = !0)
                }.bind(this)), this._listening = !0
            }
        }, SDKAdapter.prototype._initRequestAnimationFrame = function() {
            function t(t) {
                var e = Date.now(),
                    i = Math.max(0, 16 - (e - o)),
                    n = window.setTimeout(function() {
                        t(e + i)
                    }, i);
                return o = e + i, n
            }

            function e(t) {
                clearTimeout(t)
            }
            var i = this,
                n = /(iP(ad|hone|od).*OS 6)|(Android.*\b[SG]\w{1,2}-\w\d{3,4}\w?\b)/.test(window.navigator.userAgent),
                o = 0,
                r = window.requestAnimationFrame || null,
                a = window.cancelAnimationFrame || null;
            ["webkit", "moz"].forEach(function(t) {
                r = r || window[t + "RequestAnimationFrame"] || null, a = a || window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"] || null
            }), this.nextFrame = function() {
                var e = n || null === r ? t : r;
                return e.apply(this.getTopWindow(), arguments)
            }.bind(this), this.cancelFrame = function() {
                var t = n || null === a ? e : a;
                return t.apply(this.getTopWindow(), arguments)
            }.bind(this), this.Ticker = {
                update: [],
                render: [],
                next: []
            }, this.Ticker.frame = function(t, e) {
                var i = this[e || "render"];
                0 > i.indexOf(t) && i.push(t)
            }, this.Ticker.removeFrame = function(t, e) {
                var i = this[e || "render"],
                    n = i.indexOf(t);
                ~n && i.splice(n, 1)
            }, this.Ticker.init = function() {
                i.nextFrame(this.tick)
            }, this.Ticker.tick = function(t) {
                function e(e) {
                    e(t)
                }
                i.nextFrame(this.tick), this.update.length && this.update.forEach(e), this.render.length && this.render.forEach(e), this.next.length && (this.next.forEach(e), this.next = [])
            }.bind(this.Ticker), this.Ticker.init(), window.nextFrame = this.nextFrame, window.cancelFrame = this.cancelFrame, window.Ticker = this.Ticker
        }, SDKAdapter.prototype._initSdk = function(t) {
            t()
        }, SDKAdapter.prototype._initDocument = function(t) {
            t()
        }, SDKAdapter.prototype._onKeyboardShown = function() {
            this._keyboardShown = !0
        }, SDKAdapter.prototype._onKeyboardHidden = function() {
            this._keyboardShown = !1, defer(this._updatePlacements)
        }, SDKAdapter.prototype._createViewportListener = function() {
            var t = this,
                e = {
                    _resizeCallback: null,
                    _viewportChangeCallback: null,
                    start: function(e, i) {
                        var n = t.getTopWindow();
                        this._resizeCallback = e, this._viewportChangeCallback = i, n.addEventListener("resize", this._resizeHandler, !1), n.addEventListener("scroll", this._scrollHandler, !1), ios() && (n.addEventListener("focus", this._focusHandler, !0), n.addEventListener("blur", this._blurHandler, !0))
                    },
                    stop: function() {
                        var e = t.getTopWindow();
                        e.removeEventListener("resize", this._resizeHandler, !1), e.removeEventListener("scroll", this._scrollHandler, !1), ios() && (e.removeEventListener("focus", this._focusHandler, !0), e.removeEventListener("blur", this._blurHandler, !0))
                    }
                };
            return e._resizeHandler = function() {
                "undefined" != typeof window ? (this._resizeCallback(), this._viewportChangeCallback()) : t.dismiss()
            }.bind(e), e._scrollHandler = function() {
                "undefined" != typeof window ? this._viewportChangeCallback() : t.dismiss()
            }.bind(e), e._focusHandler = function(e) {
                ["INPUT", "TEXTAREA"].indexOf(e.target.nodeName) > -1 && (t._keyboardShown = !0)
            }, e._blurHandler = function() {
                t._keyboardShown = !1, defer(function() {
                    t._keyboardShown || (e._resizeCallback(), e._viewportChangeCallback())
                })
            }, e
        }, SDKAdapter.prototype._createOrientationObserver = function() {
            var t = this,
                e = this.getTopWindow(),
                i = {
                    _orientationChangeEventQueued: !1,
                    start: function() {
                        e.addEventListener("orientationchange", this._handler, !1)
                    },
                    stop: function() {
                        e.removeEventListener("orientationchange", this._handler, !1)
                    },
                    getOrientation: function() {
                        return t._normalizeOrientation(e.orientation) || 0
                    },
                    _handler: function() {
                        "undefined" != typeof window ? (t.emit("_rawOrientationChange"), i._orientationChangeEventQueued = !0, t.once("resize", i._trigger), setTimeout(i._trigger, 1e3)) : t.dismiss()
                    },
                    _trigger: function() {
                        i._orientationChangeEventQueued && (i._orientationChangeEventQueued = !1, defer(t.emits("orientationchange")))
                    }
                };
            return i
        }, SDKAdapter.prototype._createContainerViewabilityObserver = function() {
            var t = this;
            return {
                isViewable: !1,
                start: function() {
                    defer(function() {
                        this.isViewable = !0, t.emit("containerViewableChange", this.isViewable)
                    }.bind(this))
                },
                stop: function() {}
            }
        }, SDKAdapter.prototype.triggerLoadedEvent = function() {
            var t = this.getHostElement().ownerDocument.createEvent("HTMLEvents");
            t.initEvent("celtraLoaded", !0, !1), this.getHostElement().dispatchEvent(t)
        }, SDKAdapter.prototype.waitForDisplayed = function(t) {
            return this._displayed ? defer(t) : (this.once("displayed", t), void 0)
        }, SDKAdapter.prototype.waitForContainerViewable = function(t) {
            if (this.containerIsViewable) return defer(t);
            var e = function(i) {
                i && (this.off(e), defer(t))
            }.bind(this);
            this.on("containerViewableChange", e)
        }, SDKAdapter.prototype._createDocumentAttachmentObserver = function() {
            var t = this,
                e = t.getHostElement(),
                i = {
                    _handler: null,
                    _interval: 60,
                    _timer: null,
                    start: function(e) {
                        this._handler = e, this._timer = t.getTopWindow().setTimeout(this.tick, this._interval)
                    },
                    stop: function() {
                        t.getTopWindow().clearTimeout(this._timer), this._timer = null
                    },
                    tick: function() {
                        if (e.parentNode && null !== window) {
                            for (var i = e;
                                (i = i.parentNode) && i && i !== i.ownerDocument.documentElement;);
                            i ? this._timer = t.getTopWindow().setTimeout(this.tick, this._interval) : (this._handler(), this._timer = null)
                        } else this._handler()
                    }
                };
            return i.tick = i.tick.bind(i), i
        }, SDKAdapter.prototype.getHostElement = function() {
            return this.scriptElement.parentNode
        }, SDKAdapter.prototype._normalizeOrientation = function(t) {
            var e = this.getTopWindow().navigator.userAgent,
                i = ["Nexus 10", "GT-N8", "SM-P60", "GT-P5", "SCH-19", "GT-P7", "SM-T9", "SM-T5", "SM-T8"];
            return i.some(function(t) {
                return -1 != e.indexOf(t)
            }) && (t += 90, 270 == t && (t = -90)), t
        }, SDKAdapter.prototype._waitForDomReady = function(t) {
            var e = this.getTopWindow().document;
            "interactive" === e.readyState || "loaded" === e.readyState || "complete" === e.readyState ? defer(t) : e.addEventListener("DOMContentLoaded", t, !1)
        }, SDKAdapter.prototype._stopObservingEnvironment = function() {
            this._listening && (this.resizeListener.stop(this._handleResize), this.orientationObserver.stop(), this.documentAttachmentObserver.stop(), this._listening = !1)
        }, SDKAdapter.prototype.setMinimumSize = function() {}, SDKAdapter.prototype._handleResize = function() {
            var t = !1;
            this.emit("beforeResize", function(e) {
                t = e
            }), t ? defer(function() {
                this.emit("resize")
            }.bind(this), 700) : this.emit("resize")
        }, SDKAdapter.prototype._handleViewportChange = function() {
            this.emit("viewportChange")
        }, SDKAdapter.prototype._handleOrientationChange = function(t) {
            this.emit("orientationchange", t)
        }, SDKAdapter.prototype._handleDetachedFromDocument = function() {
            this.dismiss()
        }, SDKAdapter.prototype._updatePlacements = function(t) {
            function e() {
                --i || (t && t(), defer(n.emits("placementsUpdated")))
            }
            if (t = t || noop, this._keyboardShown) return t();
            var i = 0,
                n = this;
            for (var o in this.placements) i++, "undefined" != typeof window && this.placements[o].update(e)
        }, SDKAdapter.prototype._stopAllMedia = function() {
            for (var t in this.placements)
                for (var e = this.placements[t].querySelectorAll("audio,video"), i = 0; e.length > i; i++) null === e[i].getAttribute("x-stop-all-media-ignore") && "function" == typeof e[i].pause && e[i].pause();
            var n = this.adapterWindow.FullscreenVideoPlayer;
            n !== void 0 && n.close(), this.emit("mediaStopRequested")
        }, SDKAdapter.prototype.createPlacements = function(t, e) {
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
                }, this)
            }
        }, SDKAdapter.prototype.createPlacement = function() {
            throw Error("SDKAdapter.createPlacement not implemented!")
        }, SDKAdapter.prototype.destroyPlacement = function(t) {
            for (var e in this.placements) e == t && (this.placements[e].destroy(), delete this.placements[e])
        }, SDKAdapter.prototype.hook = function(t, e) {
            this._hooks[t] = e
        }, SDKAdapter.prototype.waitForHook = function(t, e) {
            var i = Array.prototype.slice.call(arguments, 1);
            this._hooks[t] ? this._hooks[t].apply(null, i) : e()
        }, SDKAdapter.prototype.getPlacementRect = function(t) {
            return t.root ? CRect.adopt(t.root.getBoundingClientRect()) : null
        }, SDKAdapter.prototype.getViewportRect = function() {
            var t = this.getTopWindow();
            return CRect.adopt({
                left: 0,
                top: 0,
                width: t.innerWidth,
                height: t.innerHeight
            })
        }, SDKAdapter.prototype.expand = function() {
            throw Error("SDKAdapter.expand not implemented!")
        }, SDKAdapter.prototype.collapse = function() {
            throw Error("SDKAdapter.collapse not implemented!")
        }, SDKAdapter.prototype.dismiss = function() {
            throw Error("SDKAdapter.dismiss not implemented!")
        }, SDKAdapter.prototype.resize = function() {
            throw Error("SDKAdapter.resize not implemented!")
        }, SDKAdapter.prototype.playVideoInPlayer = function() {
            throw Error("SDKAdapter.playVideoInPlayer not implemented!")
        }, SDKAdapter.prototype.callPhone = function(t) {
            window.location.href = "tel:" + encodeURIComponent(t)
        }, SDKAdapter.prototype.openBrowser = function() {
            throw Error("SDKAdapter.openBrowser not implemented!")
        }, SDKAdapter.prototype.getApp = function() {
            throw Error("SDKAdapter.getApp not implemented!")
        }, SDKAdapter.prototype.canSaveImage = function() {
            throw Error("SDKAdapter.canSaveImage not implemented!")
        }, SDKAdapter.prototype.saveImage = function() {
            throw Error("SDKAdapter.saveImage not implemented!")
        }, SDKAdapter.prototype.getTopWindow = function() {
            if (this._topWindow) return this._topWindow;
            var t = window;
            try {
                for (; t.parent.location.href !== void 0 && t.parent.document !== t.document;) t = t.parent
            } catch (e) {}
            return this._topWindow = t
        }, SDKAdapter.prototype.saveCalendarEvent = function(t, e) {
            var i = CCalendar.getEventICSUrl(t);
            i ? (this.openBrowser(i), e(!0)) : e(!1)
        }, SDKAdapter.prototype.maximizeViewport = function(t) {
            defer(t)
        }, SDKAdapter.prototype.startObscuringContent = function() {}, SDKAdapter.prototype.stopObscuringContent = function() {}, SDKAdapter.prototype.setOrientationLock = function() {
            return !1
        }, SDKAdapter.prototype.autoLock = function() {
            return !1
        }, SDKAdapter.prototype._getDefaultLockOrientation = function() {
            return "a"
        }, SDKAdapter.prototype.determineLockOrientation = function() {
            function t() {
                return 0 == this.orientation % 180 ? "portrait" : "landscape"
            }
            var e = creative.unitSizes.modal,
                i = void 0,
                n = (this.runtimeParams.lockOrientation || this._getDefaultLockOrientation()).toLowerCase();
            return i = "n" === n ? "noOrientation" : "l" === n ? "landscape" : "p" === n ? "portrait" : "a" === n && e ? e.width < e.height ? "portrait" : e.width > e.height ? "landscape" : t() : t()
        }, SDKAdapter.prototype.collectAndTrackData = function(t, e) {
            function i() {
                try {
                    t(function(t) {
                        t.name = e, this.trackingCenter.trackNoLaterThan(t, n)
                    }.bind(this))
                } catch (i) {
                    this.trackingCenter.trackNoLaterThan({
                        name: e,
                        error: i.message + "\n" + i.stack
                    }, n)
                }
            }
            if ("function" != typeof t) throw Error("The dataCollector param was not a function.");
            if (e === void 0) throw Error("The eventName param was not defined.");
            var n = 1e3;
            defer(i.bind(this))
        }, SDKAdapter.prototype._getNesting = function(t) {
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
            SDKAdapter.apply(this, arguments), this.isSingleOccupant = !0, this.hasDeadZones = !1, this.fixViewport = !1, this.videoCapabilites = extend(this.videoCapabilites, {
                inline: ios(),
                autoplay: ios(),
                fallbackToMpeg1: !ios()
            }), Placement.prototype.supportsFixedPositioning = Placement.prototype.supportsFixedPositioning && !/\bHTC One S\b/.test(navigator.userAgent), "undefined" != typeof FullscreenVideoPlayer && (FullscreenVideoPlayer.playVideoInCeltraPlayer = "1" == this.runtimeParams.playVideoInCeltraPlayer), this.on("containerViewableChange", this.emits("displayed"))
        }
        inherit(InAppAdapter, SDKAdapter), InAppAdapter.prototype._initDocument = function(cb) {
            with(document.documentElement.style) margin = 0, padding = 0, width = "100%", height = "100%";
            with(document.body.style) margin = 0, padding = 0, width = "100%", height = "100%";
            if (this.viewport = this._createViewportElement(), this.fixViewport) {
                var meta = document.createElement("meta");
                meta.name = "viewport", meta.content = "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no", document.getElementsByTagName("head").item(0).appendChild(meta)
            }
            if (this.hostElement = this.getHostElement(), (!this.hostElement.offsetParent || this.hostElement.offsetParent === document.body && "static" === getComputedStyle(document.body, null).position) && (this.hostElement.style.position = "relative", this.hostElement.style.width = this.hostElement.style.height = "100%"), android("4.0") && 240 == window.innerHeight && window.innerHeight != creative.unitSizes[unitName].height) {
                var sizeWaitInterval, done, callCbOnce = function() {
                    if (240 != window.innerHeight) {
                        if (done) return;
                        done = !0, clearInterval(sizeWaitInterval), cb()
                    }
                };
                sizeWaitInterval = setInterval(callCbOnce, 0), setTimeout(callCbOnce, 1e3)
            } else defer(cb)
        }, InAppAdapter.prototype.getTopWindow = function() {
            return window
        }, InAppAdapter.prototype._createViewportElement = function() {
            var t = document.createElement("div");
            return t.id = "viewport", t.style.cssText = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;", document.body.appendChild(t), t
        }, InAppAdapter.prototype._getViewportElement = function() {
            return this.viewport
        }, InAppAdapter.prototype._parentForPlacement = function(t) {
            for (var e = "static" == t.positioning ? script.parentNode : this._getViewportElement(), i = e; i !== script.ownerDocument;) {
                if (/body/i.test(i.tagName)) return e;
                i = i.parentNode
            }
            return document.body
        }, InAppAdapter.prototype.createPlacement = function(t, e) {
            e = e || noop;
            var i = new DivPlacement(t.positioning);
            i.attachTo(this._parentForPlacement(t), function() {
                e(i)
            })
        }, InAppAdapter.prototype.setMinimumSize = function(t, e) {
            this.hostElement.style.minWidth = t + "px", this.hostElement.style.minHeight = e + "px"
        };;

        function MRAIDAdapter() {
            InAppAdapter.apply(this, arguments), this.providesCloseButton = !1, this.mraidIsReady = !1, Placement.prototype.supportsFixedPositioning = Placement.prototype.supportsFixedPositioning && !ios("5"), Placement.prototype.hacks.preventScreenFlickering = !1, this.viewabilityMeasurable = {
                viewable00: !0,
                viewable501: !1
            }, this.fixViewport = !document.querySelector("meta[name=viewport]"), this.onAll("sdkReady documentReady", this.prepare.bind(this)), this.on("documentReady", function() {
                if (android("4")) {
                    var t = this.getTopWindow();
                    "static" == t.document.defaultView.getComputedStyle(t.document.body, null).getPropertyValue("position") && (t.document.body.style.position = "relative")
                }
            }.bind(this)), this.once("sdkReady", function() {
                this.collectAndTrackData(function(t) {
                    var e = {
                        scope: "mraid",
                        version: this.mraidVersion
                    };
                    this.mraidVersion >= 2 && (mraid.supports && (e = extend({
                        calendar: mraid.supports("calendar"),
                        inlineVideo: mraid.supports("inlineVideo"),
                        storePicture: mraid.supports("storePicture"),
                        tel: mraid.supports("tel"),
                        sms: mraid.supports("sms")
                    }, e)), mraid.getScreenSize && (e.screenSize = mraid.getScreenSize())), t(e)
                }.bind(this), "environmentInfo")
            }.bind(this))
        }
        inherit(MRAIDAdapter, InAppAdapter), MRAIDAdapter.prototype.getMraidVersion = function() {
            var t = ("" + mraid.getVersion()).match(/^(\d+)(\.\d+)?/);
            return t ? parseInt(t[1], 10) : null
        }, MRAIDAdapter.prototype._initSdk = function(t) {
            return "undefined" == typeof mraid ? (Logger("mraid").error("mraid object not available"), this.trackingCenter.track({
                name: "userError",
                userErrorId: "missingMraidObject"
            }), void 0) : (this.mraidVersion = this.getMraidVersion(), Logger("mraid").log("MRAID version " + this.mraidVersion), this.mraidEventProxy = {}, extend(this.mraidEventProxy, EventEmitter), this.mraidEventProxy.on("ready", function() {
                this.mraidIsReady = !0, t()
            }.bind(this)), mraid.addEventListener("viewableChange", function(t) {
                t === void 0 && (Logger("mraid").log('mraid:viewableChange ERROR - received "undefined", fallback to mraid.isViewable() if available'), t = mraid.isViewable()), Logger("mraid").log("mraid:viewableChange " + t), this.mraidEventProxy.emit("viewableChange", t)
            }.bind(this)), Logger("mraid").log("state = " + mraid.getState()), "loading" === mraid.getState() ? mraid.addEventListener("ready", function() {
                Logger("mraid").log("mraid:ready"), this.mraidEventProxy.emit("ready")
            }.bind(this)) : this.mraidEventProxy.emit("ready"), mraid.addEventListener("stateChange", function(t) {
                Logger("mraid").log("mraid:stateChange " + t), this.mraidEventProxy.emit("stateChange", t)
            }.bind(this)), this.mraidEventProxy.on("stateChange", this.onStateChange.bind(this)), void 0)
        }, MRAIDAdapter.prototype.prepare = function() {
            if (mraid.useCustomClose) Logger("mraid").log("call useCustomClose"), mraid.useCustomClose(!0);
            else {
                var t = mraid.getExpandProperties();
                t.useCustomClose = !0, mraid.setExpandProperties(t), Logger("mraid").log("call getExpandProperties/setExpandProperties to hide close button")
            }
            var e = !1;
            1 == this.mraidVersion ? e = ios() : 2 == this.mraidVersion && (e = mraid.supports("inlineVideo") === !0 || ios(), this.videoCapabilites = extend(this.videoCapabilites, {
                inline: mraid.supports("inlineVideo") === !0
            })), this.useFSVP = (e || "1" == this.runtimeParams.playVideoInCeltraPlayer) && "undefined" != typeof FullscreenVideoPlayer && "0" != this.runtimeParams.playVideoInCeltraPlayer, this.useFSVP && FullscreenVideoPlayer.init({
                hideControls: ios() && !tablet(),
                baseUrl: (runtimeParams.secure ? urls.staticUrl : urls.insecureStaticUrl) + "runner/FullscreenVideoPlayer/"
            }), this.emit("ready")
        }, MRAIDAdapter.prototype._createContainerViewabilityObserver = function() {
            var t = this,
                e = {
                    isViewable: !1,
                    start: function() {
                        t.on("sdkReady", function() {
                            mraid.isViewable() && defer(function() {
                                this.handleViewableChange(!0)
                            }.bind(this)), t.mraidEventProxy.on("viewableChange", this.handleViewableChange)
                        }.bind(this))
                    },
                    stop: function() {
                        t.mraidEventProxy.off("viewableChange", this.handleViewableChange)
                    },
                    handleViewableChange: function(i) {
                        var n = e.isViewable;
                        e.isViewable = !!i, n != i && t.emit("containerViewableChange", e.isViewable)
                    }
                };
            return e
        }, MRAIDAdapter.prototype._createOrientationObserver = function() {
            var t;
            if (2 == this.getMraidVersion() && mraid.getScreenSize && mraid.getScreenSize()) {
                var e = this;
                t = {
                    start: function() {
                        this._orientation = this._calculateOrientation(), this._handler = function() {
                            var t = this._orientation;
                            this._orientation = this._calculateOrientation(), t !== this._orientation && e.emit("orientationchange", this._orientation)
                        }.bind(this), mraid.addEventListener("sizeChange", this._handler, !1), window.addEventListener("orientationchange", this._handler, !1)
                    },
                    stop: function() {
                        mraid.removeEventListener("sizeChange", this._handler, !1), window.removeEventListener("orientationchange", this._handler, !1)
                    },
                    getOrientation: function() {
                        return this._orientation
                    },
                    _calculateOrientation: function() {
                        var t = mraid.getScreenSize();
                        return 90 * (t.width > t.height)
                    }
                }
            } else t = this.constructor.uber._createOrientationObserver.apply(this, arguments);
            return t
        }, MRAIDAdapter.prototype.onStateChange = function(t) {
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
        }, MRAIDAdapter.prototype.waitForState = function(t, e) {
            if (mraid.getState() === t) defer(e);
            else {
                var i = this;
                i.mraidEventProxy.on("stateChange", function n(o) {
                    t === o && (i.mraidEventProxy.off("stateChange", n), e())
                })
            }
        }, MRAIDAdapter.prototype.expand = function(t) {
            this._stopAllMedia(), this.waitForHook("beforeExpand", function() {
                mraid.expand(), t && t()
            }.bind(this))
        }, MRAIDAdapter.prototype.collapse = function(t) {
            this._stopAllMedia(), this.waitForHook("beforeCollapse", function() {
                if ("expanded" != mraid.getState()) throw Error("Ad is not expanded and cannot be collapsed!");
                t && this.waitForState("default", t), mraid.close()
            }.bind(this))
        }, MRAIDAdapter.prototype.dismiss = function() {
            this._stopAllMedia();
            var t = function() {
                this.trackingCenter.flush(function() {
                    mraid.close()
                })
            }.bind(this);
            if ("expanded" == mraid.getState()) this.collapse(t);
            else {
                if ("default" != mraid.getState()) throw Error("Can't dismiss from current state (" + mraid.getState() + ").");
                t()
            }
        }, MRAIDAdapter.prototype.openBrowser = function(t) {
            mraid.open(t)
        }, MRAIDAdapter.prototype.getApp = function(t) {
            this.openBrowser(t)
        }, MRAIDAdapter.prototype.playVideoInPlayer = function(t, e) {
            if (this.runtimeParams.playVideoJS) Function("url", this.runtimeParams.playVideoJS)(t.url), e(!0);
            else {
                var i = this,
                    n = function() {
                        2 == i.mraidVersion && mraid.playVideo ? mraid.playVideo(t.url) : i.openBrowser(t.url), e(!0)
                    };
                this.useFSVP ? FullscreenVideoPlayer.play(t, function(t) {
                    t ? e(!0) : android("2") ? n() : e(!1)
                }) : n()
            }
        }, MRAIDAdapter.prototype.callPhone = function(t) {
            mraid.open("tel:" + encodeURIComponent(t))
        }, MRAIDAdapter.prototype.saveCalendarEvent = function(t, e) {
            if (2 == this.mraidVersion && mraid.supports("calendar") === !0) {
                var i = {
                        formattedTimezoneOffset: function() {
                            function t(t) {
                                return t += "", 1 == t.length && (t = "0" + t), t
                            }
                            var e = (new Date).getTimezoneOffset(),
                                i = Math.abs(e),
                                n = Math.floor(i / 60);
                            return (e / i > 0 ? "-" : "+") + t(n) + ":" + t(i - 60 * n)
                        },
                        w3cifyDateTime: function(t) {
                            return t.value.substring(0, 16).replace(" ", "T") + ("user" == t.tz ? i.formattedTimezoneOffset() : "+00:00")
                        },
                        w3cifyReminder: function(t, e) {
                            var n;
                            if (n = t.match(/^([0-9]+)([mhd])$/)) {
                                var o = 1 * n[1];
                                return "h" != n[2] && "m" != n[2] && (o *= 24), "m" != n[2] && (o *= 60), o *= 60, o *= 1e3, o.toFixed()
                            }
                            return "date" == t && e ? e.substring(0, 10) + "T00:00" + i.formattedTimezoneOffset() : void 0
                        }
                    },
                    n = {
                        description: t.eventName,
                        location: t.location,
                        summary: t.notes,
                        start: i.w3cifyDateTime(t.start),
                        end: i.w3cifyDateTime(t.end),
                        status: "tentative",
                        transparency: "transparent",
                        recurrence: null,
                        reminder: i.w3cifyReminder(t.reminder, t.start.value)
                    };
                mraid.createCalendarEvent(n), e(!0)
            } else MRAIDAdapter.uber.saveCalendarEvent.apply(this, arguments)
        }, MRAIDAdapter.prototype._getDefaultLockOrientation = function() {
            return "n"
        }, MRAIDAdapter.prototype.setOrientationLock = function(t) {
            if (2 != this.mraidVersion || !mraid.setOrientationProperties) return !1;
            t || (t = 0 === this.orientation % 180 ? "portrait" : "landscape");
            var e = {
                allowOrientationChange: !1,
                forceOrientation: "none"
            };
            return e.forceOrientation = t, mraid.setOrientationProperties(e), !0
        }, SDKAdapter.prototype.autoLock = function() {
            return !0
        }, MRAIDAdapter.prototype.waitForViewable00 = function(t, e, i) {
            this.waitForContainerViewable(i)
        };;

        Logger.initFromRuntimeParams(runtimeParams);

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
        urls.resourceUrl = runtimeParams.secure ? urls.staticUrl : urls.insecureStaticUrl;

        var trackingCenter = new TrackingCenter(
            runtimeParams.sessionId,
            runtimeParams.secure ? urls.trackingUrl : urls.insecureTrackingUrl,
            trackers
        );

        var aggregatorTracking = new AggregatorTracking(trackingCenter);

        var experiments = new Experiments(runtimeParams.variantChoices, trackingCenter);

        var trackingLoadingTimesExperiment = experiments.get('TrackingLoadingTimes');

        // Track redirect download time (won't be available on SRM)
        var redirectTimeDiff = (runtimeParams.redirectJsClientTimestamp - runtimeParams.clientTimestamp) * 1000;
        if (trackingLoadingTimesExperiment && runtimeParams.clientTimestamp && (redirectTimeDiff / 1000 < 30)) {
            aggregatorTracking.trackAggregatorTime('redirectDownloadTime', Math.round(redirectTimeDiff), {
                isPhone: !desktop() && !tablet()
            });
            aggregatorTracking.trackAggregator('redirectDownloadSuccesses', {
                isPhone: !desktop() && !tablet()
            });
        }

        // Track payload download time
        var payloadTimeDiff = (runtimeParams.payloadJsClientTimestamp * 1000) - (runtimeParams.redirectJsClientTimestamp * 1000);
        if (trackingLoadingTimesExperiment && (payloadTimeDiff / 1000 < 30)) {
            aggregatorTracking.trackAggregatorTime('payloadDownloadTime', Math.round(payloadTimeDiff), {
                isPhone: !desktop() && !tablet()
            });
            aggregatorTracking.trackAggregator('payloadDownloadSuccesses', {
                isPhone: !desktop() && !tablet()
            });
        }

        var unitName = 'banner';
        var requiredDeviceType = 'Phone';

        var adapter = new MRAIDAdapter(runtimeParams, trackingCenter, aggregatorTracking, experiments, openWebsiteOverrideUrls, getAppOverrideUrls);
        trackingCenter.windowForPixels = adapter.getTopWindow();

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
            js.textContent = "function inherit(t,e){var i=function(){};i.prototype=e.prototype,t.prototype=new i,t.uber=e.prototype,t.uberConstructor=e,t.prototype.constructor=t}function extend(t,e){for(var i=1;arguments.length>i;i++){var e=arguments[i];if(e instanceof Object)for(var n in e)t[n]=e[n]}return t}function deep(t,e){for(var i in e)t[i]instanceof Object&&e[i]instanceof Object?deep(t[i],e[i]):t[i]=e[i]}function delayed(t,e){var i=null;return function(){i&&clearTimeout(i),i=setTimeout(t,e)}}function throttled(t,e){var i=null;return function(){i||(i=setTimeout(function(){i=null,t()},e))}}function deferred(t,e){return function(){defer(t,e)}}function hasClass(t,e){return-1!=(\" \"+t.className+\" \").indexOf(\" \"+e+\" \")}function addClass(t,e){hasClass(t,e)||(t.className+=\" \"+e)}function removeClass(t,e){t.className=t.className.replace(RegExp(\"(\\\\s|^)\"+e+\"(\\\\s|$)\"),\" \")}function toggleClass(t,e){hasClass(t,e)?removeClass(t,e):addClass(t,e)}function cssurl(t){return\"url('\"+t.replace(\/'\/g,\"\\\\'\")+\"')\"}function ucfirst(t){return t.charAt(0).toUpperCase()+t.slice(1)}function zeroPad(t,e){null==e&&(e=2);var i=Math.max(0,e-(\"\"+t).length),n=(\"\"+Math.pow(10,i)).slice(1);return n+t}function htmlentitize(t){return t.replace(\/&\/g,\"&amp;\").replace(\/\"\/g,\"&quot;\").replace(\/<\/g,\"&lt;\").replace(\/>\/g,\"&gt;\")}function trim(t){return t.replace(\/^\\s+|\\s+$\/g,\"\")}function to_utf8(t){return unescape(encodeURIComponent(t))}function randInt(){return(Math.random()+\"\").slice(2)}function attach(t,e,i,n){var o=CStyler._eventNames[e.toLowerCase()]||e;t.addEventListener(o,i,!!n)}function detach(t,e,i,n){var o=CStyler._eventNames[e.toLowerCase()]||e;t.removeEventListener(o,i,!!n)}function once(t,e,i,n){attach(t,e,function o(){detach(t,e,o,n),i.apply(this,arguments)},n)}function trigger(t,e,i,n){var o=document.createEvent(\"HTMLEvents\");o.initEvent(e,i,n);var r=\"on\"+ucfirst(e);return\"function\"==typeof t[r]&&t[r](),t.dispatchEvent(o)}function fakeclick(t,e){e=e||window;var i=e.document.createElement(\"a\");i.cssText=\"visibility: hidden\",i.addEventListener(\"click\",function(e){t(),e.preventDefault(),e.stopPropagation(),i.parentNode.removeChild(i)},!0),e.document.body.appendChild(i);var n=document.createEvent(\"MouseEvents\");n.initEvent(\"click\",!0,!0),i.dispatchEvent(n)}function fakeClickAhrefBlank(t,e,i){e=e||noop,i=i||window;var n=i.document.createElement(\"a\");n.style.cssText=\"visibility: hidden\",n.setAttribute(\"href\",t),n.setAttribute(\"target\",\"_blank\"),n.addEventListener(\"click\",function(t){t.stopPropagation(),e(),n.parentNode.removeChild(n)},!0),i.document.body.appendChild(n);var o=i.document.createEvent(\"MouseEvents\");o.initEvent(\"click\",!0,!0),n.dispatchEvent(o)}function noop(){}function nullai(t,e){e()}function retTrue(){return!0}function retFalse(){return!1}function offset(t){var e=t.getBoundingClientRect(),i=t.ownerDocument,n=i.documentElement,o=i.defaultView;return{top:e.top+(o.pageYOffset||n.scrollTop)-(n.clientTop||0),left:e.left+(o.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}}function addCssRule(t,e,i){var n=document.createElement(\"style\");n.textContent=t+\" {\"+e+\"}\",i?i.document.getElementsByTagName(\"head\")[0].appendChild(n):document.getElementsByTagName(\"head\")[0].appendChild(n)}function redrawAndroidIframe(){var t=document.createElement(\"style\");document.body.appendChild(t),document.body.removeChild(t)}function parseQuery(t){var e={};return t=t.replace(\/\\&$\/,\"\").replace(\/\\+\/g,\"%20\"),t.split(\"&\").forEach(function(t){var i=t.split(\"=\").map(decodeURIComponent);e[i[0]]=i[1]}),e}function buildQuery(t){var e=[];for(var i in t)e.push(encodeURIComponent(i)+\"=\"+encodeURIComponent(t[i]));return e.join(\"&\")}function postBlob(t,e){var i=new XMLHttpRequest;i.open(\"POST\",creative.apiUrl+\"blobs?base64=1\"),i.setRequestHeader(\"Content-Type\",\"application\/octet-stream\"),i.onreadystatechange=function(){4===i.readyState&&e(i.responseText,i.status)},i.send(t)}function tmpl(t,e){function i(t){return\"  p.push('\"+t.replace(\/'\/g,\"\\\\'\").split(\/\\r?\\n\/g).join(\"\\\\n');\\n  p.push('\")+\"');\\n\"}if(!t)return\"\";var n;if(-1==t.indexOf(\"<%\"))n=function(){return t};else{var o=t.split(\/<%\\s*|\\s*%>\/g),r=\"var p = []; with(o) {\\n\",s=!1;o.forEach(function(t){s?r+=\"=\"==t[0]?\"  p.push(\"+t.replace(\/^=\\s*|\\s*$\/g,\"\")+\");\\n\":\"  \"+t+\"\\n\":t&&(r+=i(t)),s=!s}),r+='} return p.join(\"\");';try{n=Function(\"o\",r)}catch(a){var h=Error(\"Cannot parse template! (see `template` property)\");throw h.template=r,h}}return e?n(e):n}function flash(){var t=document.createElement(\"div\");t.style.background=\"white\",t.style.opacity=.005,t.style.position=\"absolute\",t.style.top=0,t.style.left=0,t.style.width=\"100%\",t.style.height=\"100%\",t.style.zIndex=1e6,document.body.appendChild(t),setTimeout(function(){t.parentNode.removeChild(t)},0)}function crc32(t){\"use strict\";var e=-1,i=0,n=[0,-227835133,-516198153,324072436,-946170081,904991772,648144872,-724933397,-1965467441,2024987596,1809983544,-1719030981,1296289744,-1087877933,-1401372889,1578318884,274646895,-499825556,-244992104,51262619,-675000208,632279923,922689671,-996891772,-1702387808,1760304291,2075979607,-1982370732,1562183871,-1351185476,-1138329528,1313733451,549293790,-757723683,-1048117719,871202090,-416867903,357341890,102525238,-193467851,-1436232175,1477399826,1264559846,-1187764763,1845379342,-1617575411,-1933233671,2125378298,820201905,-1031222606,-774358714,598981189,-143008082,85089709,373468761,-467063462,-1170599554,1213305469,1526817161,-1452612982,2107672161,-1882520222,-1667500394,1861252501,1098587580,-1290756417,-1606390453,1378610760,-2032039261,1955203488,1742404180,-1783531177,-878557837,969524848,714683780,-655182201,205050476,-28094097,-318528869,526918040,1361435347,-1555146288,-1340167644,1114974503,-1765847604,1691668175,2005155131,-2047885768,-604208612,697762079,986182379,-928222744,476452099,-301099520,-44210700,255256311,1640403810,-1817374623,-2130844779,1922457750,-1503918979,1412925310,1197962378,-1257441399,-350237779,427051182,170179418,-129025959,746937522,-554770511,-843174843,1070968646,1905808397,-2081171698,-1868356358,1657317369,-1241332974,1147748369,1463399397,-1521340186,-79622974,153784257,444234805,-401473738,1021025245,-827320098,-572462294,797665321,-2097792136,1889384571,1674398607,-1851340660,1164749927,-1224265884,-1537745776,1446797203,137323447,-96149324,-384560320,461344835,-810158936,1037989803,781091935,-588970148,-1834419177,1623424788,1939049696,-2114449437,1429367560,-1487280117,-1274471425,1180866812,410100952,-367384613,-112536529,186734380,-538233913,763408580,1053836080,-860110797,-1572096602,1344288421,1131464017,-1323612590,1708204729,-1749376582,-2065018290,1988219213,680717673,-621187478,-911630946,1002577565,-284657034,493091189,238226049,-61306494,-1307217207,1082061258,1395524158,-1589280451,1972364758,-2015074603,-1800104671,1725896226,952904198,-894981883,-638100751,731699698,-11092711,222117402,510512622,-335130899,-1014159676,837199303,582374963,-790768336,68661723,-159632680,-450051796,390545967,1230274059,-1153434360,-1469116676,1510247935,-1899042540,2091215383,1878366691,-1650582816,-741088853,565732008,854102364,-1065151905,340358836,-433916489,-177076669,119113024,1493875044,-1419691417,-1204696685,1247431312,-1634718085,1828433272,2141937292,-1916740209,-483350502,291187481,34330861,-262120466,615137029,-691946490,-980332558,939183345,1776939221,-1685949482,-1999470558,2058945313,-1368168502,1545135305,1330124605,-1121741762,-210866315,17165430,307568514,-532767615,888469610,-962626711,-707819363,665062302,2042050490,-1948470087,-1735637171,1793573966,-1104306011,1279665062,1595330642,-1384295599];for(i=0;t.length>i;i++)e=e>>>8^n[255&(e^t.charCodeAt(i))];return(-1^e)>>>0}function isArray(t){return\"[object Array]\"===Object.prototype.toString.call(t)}function isDefAndNotNull(t){return null!=t}function updateQueryStringParameter(t,e,i){e=encodeURIComponent(e),i=encodeURIComponent(i);var n=RegExp(\"([?|&])\"+e+\"=.*?(&|$)\",\"i\");return separator=-1!==t.indexOf(\"?\")?\"&\":\"?\",t.match(n)?t.replace(n,\"$1\"+e+\"=\"+i+\"$2\"):t+separator+e+\"=\"+i}function fetchShortenedUrl(t,e,i){function n(e,i){r[t].forEach(function(t){t[e](i)}),delete r[t]}i=i||noop;var o=!1,r=fetchShortenedUrl.inProgress,s=fetchShortenedUrl.cache;if(s[t])return defer(function(){e(s[t])}),void 0;if(r[t]||(r[t]=[],o=!0),r[t].push({success:e,error:i}),o){var a=creative.runtimeParams.secure?creative.cachedApiUrl:creative.insecureCachedApiUrl,h=a+\"\/services\/shortener\",l={longUrl:t},c=btoa(to_utf8(t));c=c.replace(\/\\\/\/g,\"$\").replace(\/\\+\/g,\"_\").replace(\/=\/g,\"\");var d={cbName:\"shortener_\"+c};loadJSONP(h+\"?\"+buildQuery(l),d,function(e){s[t]=e.id,n(\"success\",e.id)},function(){n(\"error\")})}}(function(t){try{for(;t.parent.location.href!==void 0&&t.parent.document!==t.document;)t=t.parent}catch(e){}this.defer=function(e,i){e&&t.setTimeout(e,0|i)}})(window),Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;return function(){return e.apply(t,arguments)}}),Date.now||(Date.now=function(){return+new Date}),Array.prototype.waitForEach||Object.defineProperty(Array.prototype,\"waitForEach\",{value:function(t,e,i){var n=this.length;n?this.forEach(function(o,r,s){var a=!1;t.call(i,o,function(){if(a)throw\"Called `done` multiple times for element \"+r;a=!0,--n||e()},r,s)},i):e()}}),function(t){t.loadJS=function(e,i,n,o){var r=t.loadJS.externals,s={success:i||noop,error:n||noop};if(e in r&&!o)r[e].loaded?setTimeout(s.success,0):r[e].cbs.push(s);else{r[e]={cbs:[s]};var a=document.createElement(\"script\");a.type=\"text\/javascript\",a.onload=function(){r[e].loaded=!0,r[e].cbs.forEach(function(t){t.success()}),r[e].cbs=[]},a.onerror=function(){r[e].cbs.forEach(function(t){t.error()}),r[e].cbs=[],delete r[e]},a.src=e,t.loadJS.appendToRoot(a)}},t.loadJS.externals={},t.loadJS.appendToRoot=function(t){return document.querySelector(\"head\").appendChild(t)},t.loadJSONP=function(e,i,n,o){\"function\"==typeof i&&(o=n,n=i,i={});var r=i.cbName||\"__jsonp\"+randInt();e+=(-1==e.indexOf(\"?\")?\"?\":\"&\")+(i.paramName||\"jsonp\")+\"=\"+r,t[r]=function(e){n(e),delete t[r]},loadJS(e,noop,o,!0)}}(window),Function.prototype.name===void 0&&function(){var t=\/^function\\s+(\\w+?)\\s*?\\(\/;Object.defineProperty(Function.prototype,\"name\",{get:function(){var e=this.constructor.prototype.toString.call(this);return t.test(e)?e.match(t)[1]:\"\"}})}(),fetchShortenedUrl.cache={},fetchShortenedUrl.inProgress={};;\nfunction CPoint(t,e){this.x=1*t||0,this.y=1*e||0}function CRect(t,e,i,n){this.left=1*t||0,this.top=1*e||0,this.width=1*i||0,this.height=1*n||0}(function(){CPoint.offset=function(t){var e=offset(t);return new CPoint(e.left,e.top)};var t=null;try{t=new WebKitPoint(0,0)}catch(e){}CPoint.convertPointFromNodeToPage=null,CPoint.convertPointFromPageToNode=null,t?(CPoint.convertPointFromNodeToPage=function(e,i){return i?(t.x=i.x,t.y=i.y):(t.x=0,t.y=0),i=webkitConvertPointFromNodeToPage(e,t),i?new CPoint(i.x,i.y):null},CPoint.convertPointFromPageToNode=function(e,i){return i?(t.x=i.x,t.y=i.y):(t.x=0,t.y=0),i=webkitConvertPointFromPageToNode(e,t),i?new CPoint(i.x,i.y):null}):(CPoint.convertPointFromNodeToPage=function(t,e){if(!t||t.x!==void 0)return null;var i=CPoint.offset(t);return new CPoint((e?e.x:0)+(i?i.x:0),(e?e.y:0)+(i?i.y:0))},CPoint.convertPointFromPageToNode=function(t,e){if(!t||t.x!==void 0)return null;var i=CPoint.offset(t);return new CPoint((e?e.x:0)-(i?i.x:0),(e?e.y:0)-(i?i.y:0))})})(),CPoint.sample=function(t,e,i){for(var n=Math.floor(Math.sqrt(t.width*e\/t.height)),o=Math.floor(Math.sqrt(t.height*e\/t.width)),r=t.width\/n,a=t.height\/o,s=0;o>s;s++)for(var h=0;n>h;h++)i((h+.5)*r+t.left,(s+.5)*a+t.top)},CPoint.epsilon=function(t,e,i){return i>Math.abs(t-e)},CPoint.prototype.equals=function(t){return CPoint.epsilon(this.x,t.x,.25)&&CPoint.epsilon(this.y,t.y,.25)},Object.defineProperties(CRect.prototype,{right:{get:function(){return this.left+this.width},set:function(t){var e=this.left;this.left>t&&(this.left=t,t=e),this.width=t-this.left},enumerable:!0},bottom:{get:function(){return this.top+this.height},set:function(t){var e=this.top;this.top>t&&(this.top=t,t=e),this.height=t-this.top},enumerable:!0},tl:{get:function(){return new CPoint(this.left,this.top)}},tr:{get:function(){return new CPoint(this.right,this.top)}},bl:{get:function(){return new CPoint(this.left,this.bottom)}},br:{get:function(){return new CPoint(this.right,this.bottom)}},area:{get:function(){return this.width*this.height}}}),CRect.adopt=function(t){return new CRect(t.left,t.top,t.width,t.height)},CRect.prototype.intersect=function(t){if(!t)return!1;var e=Math.max(this.left,t.left),i=Math.max(this.top,t.top),n=Math.min(this.right,t.right),o=Math.min(this.bottom,t.bottom),r=n-e,a=o-i;return 0>r||0>a?null:new CRect(e,i,r,a)},CRect.prototype.contains=function(t){return t instanceof CPoint?t.x>=this.left&&t.x<=this.right&&t.y>=this.top&&t.y<=this.bottom:t instanceof CRect?t.left>=this.left&&t.right<=this.right&&t.top>=this.top&&t.bottom<=this.bottom:void 0},CRect.prototype.map=function(t,e){var i=e.width\/t.width,n=e.height\/t.height;return new CRect((this.left-t.left)*i+e.left,(this.top-t.top)*n+e.top,this.width*i,this.height*n)};;\nfunction Logger(t){if(!(this instanceof Logger))return new Logger(t);t=t||\"\";var e=noop;(Logger.enabledNames.indexOf(t)>=0||Logger.enabledNames.indexOf(\"all\")>=0)&&(e=function(){var t=[].slice.apply(arguments);t.unshift(Logger._ts()+\" [\"+Logger.sessionId+(this.name?\" \"+this.name:\"\")+\"]\"),console.log.apply(console,t)}),this.name=t,this.log=e,this.warn=e,this.debug=e,this.error=e}Logger._ts=function(){function t(t,e){for(t+=\"\";e>t.length;)t=\"0\"+t;return t}var e=new Date;return e.getFullYear()+\"-\"+t(e.getMonth()+1,2)+\"-\"+t(e.getDate(),2)+\" \"+t(e.getHours(),2)+\":\"+t(e.getMinutes(),2)+\":\"+t(e.getSeconds(),2)+\".\"+t(e.getTime()-1e3*Math.floor(e.getTime()\/1e3),3)},Logger.init=function(t,e){Logger.enabledNames=t,Logger.sessionId=e||(Math.random()+\"\").slice(15)},Logger.initFromRuntimeParams=function(t){Logger.init(t.debug?t.debug.split(\",\"):[],t.sessionId)};;\n(function(t){function e(){var t=p().match(\/iP(ad|hone|od).*OS ([0-9_]+)\/);return!!t&&d(t[2].replace(\/_\/g,\".\"),arguments)}function i(){var t=p().match(\/Android ([0-9.]+)\/);return!!t&&d(t[1],arguments)}function n(){var t=p().match(\/Windows Phone ([0-9.]+)\/);return!!t&&d(t[1],arguments)}function o(){var t=p().match(\/AppleWebKit\\\/*([0-9.]+)\/i);return!!t&&d(t[1],arguments)}function r(){var t=p().match(\/Gecko\\\/*([0-9.]+)\/i);return!!t&&d(t[1],arguments)}function a(){var t=p().match(\/MSIE ([0-9]{1,}[.0-9]{0,})|Trident.* rv:([0-9]{1,}[.0-9]{0,})\/i);return!!t&&d(t[1]||t[2],arguments)}function s(){var t=p().match(\/Silk\\\/([0-9.]+)\/);return!!t&&d(t[1],arguments)}function h(){var t=p().toLowerCase();return\/kftt|kfot|kfjwi|kfjwa|kfso|kfth|kfapwi|kfthwi|kfsowi|kfthwa|kfapwa|kfap\/.test(t)?d(\"2\",arguments):\/kindle fire\/.test(t)&&i(\"2\")?d(\"1\",arguments):!1}function l(){return!c()&&(t.document.body.offsetWidth,t.Math.min(innerWidth,innerHeight)>550)||\/iPad\/.test(p())}function c(){return!(i()||e()||n())}function d(e,i){function n(e,i){for(var n=0;t.Math.min(e.length,i.length)>n;n++){if(e[n]<i[n])return-1;if(e[n]>i[n])return 1}return 0}var o,r,a=function(e){return t.parseInt(e,10)};if(0==i.length)o=null,r=null;else if(1==i.length)o=i[0],r=i[0];else{if(2!=i.length)throw\"Invalid number of arguments\";o=i[0],r=i[1]}e=e.split(\".\"),o=o?o.split(\".\").map(a):[],r=r?r.split(\".\").map(a):[];for(var s=t.Math.max(o.length,r.length)-e.length;s>=0;s--)e.push(0);return!(-1==n(e,o)||1==n(e,r))}function u(){return t.top!==t}t.ios=e,t.android=i,t.webkit=o,t.windowsPhone=n,t.gecko=r,t.windows=a,t.kindleSilk=s,t.kindle=h,t.iframe=u,t.desktop=c,t.tablet=l;var p=function(){return t.userAgentOverride!==void 0?t.userAgentOverride:t.navigator.userAgent}})(window);;\nvar Freezer={};Freezer.unfreeze=function(t,e,i){function r(t){if(t instanceof Array)return t.map(r);if(t instanceof Object){var i;if(\"ActionInvocation\"===t.clazz)i=function(e,r){if(!e)throw\"Cannot execute an action without a context.\";r||(r=noop);var n=i.isStatic;if(n===void 0&&(n=!i.instance),i.disabled)return r(),void 0;if(n){if(i.instance)throw\"ActionInvocation for a static method must not have an instance assigned.\";if(\"function\"!=typeof i.actionClazz[i.method+\"Action\"])throw\"Clazz \"+i.actionClazz+' does not define the static action \"'+i.method+'\".';var o=extend({},i.args,{caller:t});i.actionClazz[i.method+\"Action\"](e,o,r)}else if(i.instance){if(!(i.instance instanceof i.actionClazz))throw\"Instance \"+i.instance+\" is not an instance of clazz \"+i.actionClazz;if(\"function\"!=typeof i.instance[i.method+\"Action\"])throw\"Instance of clazz \"+i.actionClazz+' does not define the instance action \"'+i.method+'\".';var o=extend({},i.args,{caller:t});i.instance[i.method+\"Action\"](e,o,r)}else r()};else if(t.clazz){var a=e[t.clazz];if(!a)throw Error(\"Unsupported clazz: \"+t.clazz);i=Object.create(a.prototype)}else i={};for(var s in t)t.hasOwnProperty(s)&&\"clazz\"!==s&&(i[s]=r(t[s]));n.push(i),i.localId&&(o[i.localId]&&console.error(\"Duplicate localId: \"+i.localId),o[i.localId]=i);for(var s in i)if(\"clazz\"===s.slice(-5).toLowerCase()){var c=i[s];if(!c)continue;e[c]?i[s]=e[c]:console.error(\"Unsupported clazz: \"+i.clazz)}return i}return t}var n=[],o={},a=r(t);n.forEach(function(t){for(var e in t)if(\"LocalId\"===e.slice(-7)){var i=t[e];if(i instanceof Function)continue;var r;null===i?r=null:(r=o[i],r||console.error(\"Invalid localId reference: \"+i)),t[e.slice(0,-7)]=r,delete t[e]}else if(\"LocalIds\"===e.slice(-8)){for(var n=[],a=0;t[e].length>a;a++){var s=t[e][a],r=o[s];r||console.error(\"Invalid localId reference: \"+s),n.push(r)}t[e.slice(0,-8)]=n,delete t[e]}});for(var s in i)a[s]=i[s];return n.reverse().forEach(function(t){t.awake&&t.awake()}),a};;\nfunction Batcher(e){this._cache={},this._downloadQueue={},this._base=e}Batcher.prototype.getDataUri=function(e,t){var r=this;if(\"function\"!=typeof t)throw\"getDataURI callback is not a function\";var n;if(-1!==e.indexOf(\":\/\/\"))n=e;else{if(\"\/\"===e[0])throw\"An absolute path as URL?\";n=this._base+e}var i,a;0===n.indexOf(creative.cachedApiUrl)?(i=n.slice(creative.cachedApiUrl.length),a=!0):0===n.indexOf(creative.insecureCachedApiUrl)&&(i=n.slice(creative.insecureCachedApiUrl.length),a=!1),i?i in this._cache?setTimeout(function(){t(r._cache[i])},0):(this._downloadQueue[i]||(this._downloadQueue[i]={requested:!1,secure:!1,callbacks:[]}),this._downloadQueue[i].callbacks.push(t),a&&(this._downloadQueue[i].secure=!0),setTimeout(function(){var e=[],t=!1;for(var n in r._downloadQueue){var i=r._downloadQueue[n];i.requested||(i.requested=!0,e.push(n),i.secure&&(t=!0))}e.length&&(Logger(\"batcher\").log(e.length+\" new batchable URLs requested during last runloop iteration (\"+(t?\"at least one secure\":\"none secure\")+\"):\\n - \"+e.join(\"\\n - \")),r._loadBatch(t,e,function(e){for(var t in e)r._cache[t]=e[t],r._downloadQueue[t].callbacks.forEach(function(r){r(e[t])}),delete r._downloadQueue[t]}))},0)):setTimeout(function(){t(e)},0)},Batcher.prototype._loadBatch=function(e,t,r){function n(e){var t,r=5381;for(t=0;e.length>t;t++)char=e.charCodeAt(t),r=(r<<5)+r+char;return r}var i=(e?creative.cachedApiUrl:creative.insecureCachedApiUrl)+\"batch?urls=\"+t.sort().map(encodeURIComponent).join(\",\");loadJSONP(i,{cbName:\"__batcher_jsonp_\"+Math.abs(n(i))},function(e){var t={};for(var n in e){var i=e[n];200===i.code?t[n]=i.data:(Logger(\"batcher\").warn(\"Batcher: Could not retrieve URL '\"+n+\"' using batcher, returning it directly.\"),t[n]=n)}r(t)})},Batcher._keys=function(e){var t=[];for(var r in e)t.push(r);return t};;\nfunction Tapper(t){attach(t,\"touchstart\",function(e){for(var i,n=e.target;1!=n.nodeType;)n=n.parentNode;for(;n&&n instanceof HTMLElement;){if(hasClass(n,\"touchable\")||\"a\"===n.tagName.toLowerCase()&&n.href||\"button\"===n.tagName.toLowerCase()||\"input\"===n.tagName.toLowerCase()&&\"button\"===n.type.toLowerCase()){i=n;break}n=n.parentNode}if(i){var s=!1;if(iframe()){var o=function(){var t=(\"undefined\"!=typeof creative&&creative.adapter||adapter).getTopWindow();return[t.scrollX,t.scrollY,t.innerWidth,t.innerHeight]},r=o();s=!0}var a=20,l=\"undefined\"!=typeof creative&&creative.experiments.get(\"TapperRadius\");l&&(a=1*l.chosenVariant);var h=e.targetTouches[0].clientX-a,d=e.targetTouches[0].clientX+a,c=e.targetTouches[0].clientY-a,u=e.targetTouches[0].clientY+a;addClass(i,\"touched\");var p=!1,g=!1,f=!1,m=!1,_=new Date,y=function(t){if(!p&&!g){var e=t.targetTouches[0].clientX,n=t.targetTouches[0].clientY;p=s&&\"\"+r!=\"\"+o(),g=!(e>=h&&d>=e&&n>=c&&u>=n),g||p?removeClass(i,\"touched\"):addClass(i,\"touched\")}},v=function(){if(!m&&(m=!0,detach(t,\"touchmove\",y,!1),detach(t,\"touchend\",arguments.callee,!1),hasClass(i,\"touched\"))){if(removeClass(i,\"touched\"),g||p||f||new Date-_>400&&!desktop())return;var e=t.ownerDocument.createEvent(\"MouseEvents\");e.initEvent(\"tap\",!0,!0),i.dispatchEvent(e)}},b=function(){detach(t,\"touchend\",b,!0),nextFrame(function(){f=!0,v()})};attach(t,\"touchcancel\",function(t){removeClass(i,\"touched\"),v(t)},!1),attach(t,\"touchmove\",y,!1),attach(t,\"touchend\",v,!1),attach(t,\"touchend\",b,!0)}},!0)};\nfunction TouchEventSimulator(t){this.el=t,this.doc=t.ownerDocument?t.ownerDocument:t,this.win=this.doc.defaultView,this.touch=null,this._initialised=!1,this._firstEventFired=!1,this.handleFirstEvent=this.handleFirstEvent.bind(this),this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.handlePointerDown=this.handlePointerDown.bind(this),this.handlePointerMove=this.handlePointerMove.bind(this),this.handlePointerUp=this.handlePointerUp.bind(this),this.handlePointerCancel=this.handlePointerCancel.bind(this),this.captureBubbleEvents=this.captureBubbleEvents.bind(this)}TouchEventSimulator.mode=null,TouchEventSimulator.prototype.start=function(){return this._initialised?(Logger(\"TouchEventSimulator\").warn(\"Touch event simulator already initialised!\"),void 0):(Logger(\"TouchEventSimulator\").log(\"Enabling touch event simulation\"),this.doc.defaultView.msPointerEnabled?this.startPointers():this.startMouse(),this.el.addEventListener(\"touchstart\",this.captureBubbleEvents,!1),this.el.addEventListener(\"touchmove\",this.captureBubbleEvents,!1),this.el.addEventListener(\"touchend\",this.captureBubbleEvents,!1),this.el.addEventListener(\"touchcancel\",this.captureBubbleEvents,!1),this.el.addEventListener(\"tap\",this.captureBubbleEvents,!1),void 0)},TouchEventSimulator.prototype.stop=function(){return this._initialised?(Logger(\"TouchEventSimulator\").log(\"Disabling touch event simulation\"),this.doc.defaultView.msPointerEnabled?this.stopPointers():this.stopMouse(),this.el.removeEventListener(\"touchstart\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"touchmove\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"touchend\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"touchcancel\",this.captureBubbleEvents,!1),this.el.removeEventListener(\"tap\",this.captureBubbleEvents,!1),void 0):(Logger(\"TouchEventSimulator\").warn(\"Touch event simulator not running!\"),void 0)},TouchEventSimulator.prototype.captureBubbleEvents=function(t){t.stopPropagation(),t.preventDefault()},TouchEventSimulator.prototype.startMouse=function(){this.el.addEventListener(\"mousedown\",this.handleMouseDown,!0),this.el.addEventListener(\"mousemove\",this.handleMouseMove,!0),this.el.addEventListener(\"mouseup\",this.handleMouseUp,!0),this.el.addEventListener(\"mouseout\",this.handleMouseOut,!0),this.el.addEventListener(\"dragstart\",this.handleDragStart,!0),this._initialised=!0},TouchEventSimulator.prototype.stopMouse=function(){this.el.removeEventListener(\"mousedown\",this.handleMouseDown,!0),this.el.removeEventListener(\"mousemove\",this.handleMouseMove,!0),this.el.removeEventListener(\"mouseup\",this.handleMouseUp,!0),this.el.removeEventListener(\"mouseout\",this.handleMouseOut,!0),this.el.removeEventListener(\"dragstart\",this.handleDragStart,!0),this._initialised=!1},TouchEventSimulator.prototype.startPointers=function(){this.el.addEventListener(\"MSPointerDown\",this.handlePointerDown,!0),this.el.addEventListener(\"MSPointerMove\",this.handlePointerMove,!0),this.el.addEventListener(\"MSPointerUp\",this.handlePointerUp,!0),this.el.addEventListener(\"MSPointerCancel\",this.handlePointerCancel,!0),this._initialised=!0},TouchEventSimulator.prototype.stopPointers=function(){this.el.removeEventListener(\"MSPointerDown\",this.handlePointerDown,!0),this.el.removeEventListener(\"MSPointerMove\",this.handlePointerMove,!0),this.el.removeEventListener(\"MSPointerUp\",this.handlePointerUp,!0),this.el.removeEventListener(\"MSPointerCancel\",this.handlePointerCancel,!0),this._initialised=!1},TouchEventSimulator.prototype.init=function(){this.doc.defaultView.navigator.msPointerEnabled?this.start():(this.el.addEventListener(\"touchstart\",this.handleFirstEvent,!0),this.el.addEventListener(\"mousedown\",this.handleFirstEvent,!0))},TouchEventSimulator.prototype.updateTouchCoordinates=function(t){this.touch.screenX=t.screenX,this.touch.screenY=t.screenY,this.touch.pageX=t.pageX,this.touch.pageY=t.pageY,this.touch.clientX=t.clientX,this.touch.clientY=t.clientY},TouchEventSimulator.prototype.ignorables=[\"select\",\"input\",\"textarea\"],TouchEventSimulator.prototype.isFormElement=function(t){return this.ignorables.indexOf(t.nodeName.toLowerCase())>-1},TouchEventSimulator.prototype.isIgnorable=function(t){for(var e=t;e&&e instanceof HTMLElement;e=e.parentNode)if(hasClass(e,\"google-map-container\"))return!0;return!1},TouchEventSimulator.prototype.handleFirstEvent=function(t){this._firstEventFired||(this._firstEventFired=!0,this.el.removeEventListener(\"touchstart\",this.handleFirstEvent,!0),this.el.removeEventListener(\"mousedown\",this.handleFirstEvent,!0),\"touch\"!=TouchEventSimulator.mode&&\"mousedown\"==t.type?(TouchEventSimulator.mode=\"mouse\",this.start(),this.handleMouseDown(t)):TouchEventSimulator.mode=\"touch\")},TouchEventSimulator.prototype.handleMouseDown=function(t){0!=t.button||this.isIgnorable(t.target)||(this.touch={identifier:0,target:t.target},this.updateTouchCoordinates(t),t.stopPropagation(),this.isFormElement(t.target)||t.preventDefault(),this.fireTouchEvent(\"touchstart\",t))},TouchEventSimulator.prototype.handleMouseMove=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),t.stopPropagation(),t.preventDefault(),this.fireTouchEvent(\"touchmove\",t))},TouchEventSimulator.prototype.handleMouseUp=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),t.stopPropagation(),t.preventDefault(),this.fireTouchEvent(\"touchend\",t),this.touch=null)},TouchEventSimulator.prototype.handleMouseOut=function(t){this.touch&&0==t.button&&(0>t.pageX||t.pageX>this.win.innerWidth||0>t.pageY||t.pageY>this.win.innerHeight)&&this.cancelInteraction()},TouchEventSimulator.prototype.handleDragStart=function(t){return t.preventDefault(),!1},TouchEventSimulator.prototype.handlePointerDown=function(t){0==t.button&&(this.touch={identifier:0,target:t.target},this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchstart\",t))},TouchEventSimulator.prototype.handlePointerMove=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchmove\",t))},TouchEventSimulator.prototype.handlePointerUp=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchend\",t))},TouchEventSimulator.prototype.handlePointerCancel=function(t){this.touch&&0==t.button&&(this.updateTouchCoordinates(t),this.fireTouchEvent(\"touchcancel\",t),this.touch=null)},TouchEventSimulator.prototype.fireTouchEvent=function(t,e){var i=this.doc.createEvent(\"HTMLEvents\");i.initEvent(t,!0,!0),\"touchend\"==t||\"touchcancel\"==t?(i.touches=i.targetTouches=[],i.changedTouches=[this.touch]):i.touches=i.targetTouches=i.changedTouches=[this.touch],e.target.dispatchEvent(i)},TouchEventSimulator.prototype.cancelInteraction=function(){this.touch&&(this.fireTouchEvent(\"touchcancel\",this.touch),this.touch=null)};;\nfunction SwipeListener(t){function e(t,e){return Math.abs(t)>Math.abs(e)?t>0?\"east\":\"west\":e>0?\"south\":\"north\"}function i(){d.removeEventListener(\"touchmove\",n),d.removeEventListener(\"touchend\",s)}function n(t){if(t.touches.length>1)i();else{var n=t.changedTouches[0].pageX-r,s=t.changedTouches[0].pageY-a;if(h=Math.max(Math.abs(n),Math.abs(s)),h>Math.min(50,u))if(null===l)l=e(n,s);else{var o=e(n,s);l!=o&&i()}}}function s(){i(),h>=u&&c(l,h)}function o(t){t.preventDefault(),1==t.touches.length&&(r=t.changedTouches[0].pageX,a=t.changedTouches[0].pageY,l=null,d.addEventListener(\"touchmove\",n,!1),d.addEventListener(\"touchend\",s,!1))}var r,a,l,h,d=t.target,c=t.swipe,u=t.minLength||50;d.addEventListener(\"touchstart\",o,!1)};\nfunction PlaceboBar(t,e,i,n){var s=!1,o=document.createElement(\"div\");o.className=\"celtra-placebobar\",o.style.cssText=\"position: absolute; bottom: 60px; left: 0; right: 0; margin: auto; z-index: 20; width: 215px; height: 8px;\";var r=document.createElement(\"img\");r.src=creative.resourceUrl+\"runner\/clazzes\/CreativeUnit\/loading-back.png\",r.style.position=\"absolute\",r.style.width=\"100%\",r.style.height=\"100%\",o.appendChild(r);var a=document.createElement(\"div\");a.style.position=\"absolute\",a.style.top=\"2px\",a.style.bottom=\"2px\",a.style.left=\"3px\",a.style.right=\"3px\",o.appendChild(a);var l=document.createElement(\"div\");return l.style.background=\"url(\"+creative.resourceUrl+\"runner\/clazzes\/CreativeUnit\/loading-over.png) \"+n+\" repeat-x\",l.style.position=\"absolute\",l.style.width=\"0\",l.style.height=\"100%\",a.appendChild(l),o.start=function(){function n(){if(o.parentNode){var s=Math.min((new Date-r)\/t,e);l.style.width=100*s+\"%\",e>s&&setTimeout(n,2*i*Math.random())}}if(!s){s=!0;var r=new Date;setTimeout(n,0)}},o};\nvar EventEmitter={emit:function(t){var e=this._listeners;if(e&&e[t]){var r=[].slice.call(arguments,1);e[t].forEach(function(t){t.apply(window,r)})}},emits:function(){var t=arguments;return function(){this.emit.apply(this,t)}.bind(this)},addListener:function(t,e){var r=this._listeners;r||(r=this._listeners={}),r[t]||(r[t]=[]),r[t].push(e)},removeListener:function(t,e){var r=this._listeners;r&&r[t]&&(r[t]=r[t].filter(function(t){return t!==e}))},once:function(t,e){var r=this;r.on(t,function i(){r.off(t,i),e.apply(this,arguments)})},onAll:function(t,e){t.split(\" \").waitForEach(function(t,e){this.once(t,e)},e,this)}};EventEmitter.on=EventEmitter.addListener,EventEmitter.off=EventEmitter.removeListener;;\nfunction NotificationEvent(t){this.persistent=t,this.listeners=[],this.persisted=0}NotificationEvent.prototype.listen=function(t,e){this.listeners[this.listeners.length]={cb:t,once:e};for(var i=0;this.persisted>i;i++)this._notify(this.listeners.length-1)},NotificationEvent.prototype.once=function(t){this.listen(t,!0)},NotificationEvent.prototype.trigger=function(){this.persistent&&this.persisted++;for(var t=0;this.listeners.length>t;t++)this._notify(t,arguments)},NotificationEvent.prototype._notify=function(t,e){if(this.listeners[t]){var i=this.listeners[t].cb;setTimeout(function(){i.apply(window,e)},0),this.listeners[t].once&&(this.listeners[t]=null)}};;\nfunction TaskScheduler(){this.hub=extend({},EventEmitter)}TaskScheduler.prototype.when=function(){var t,e=this;return t=Array.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments),{run:function(i){t.waitForEach(function(t,i){e.hub.once(t,i)},i)}}},TaskScheduler.prototype.notify=function(t){this.paused||this.hub.emit(t)},TaskScheduler.prototype.notifies=function(t){return function(){this.notify(t)}.bind(this)},TaskScheduler.prototype.pause=function(){this._paused=!0};;\nvar TriggerHost={_getTriggers:function(t,e){return e||(e=retTrue),this.triggers.filter(function(i){return i.type==t&&e(i.parameters)})},_fireArrayOfTriggers:function(t,e,i){var n=this;e||(e=noop),i||(i=new ActionContext(n)),t.waitForEach(function(t,e){t.onFire?t.onFire(i,e):e()},e)},hasTriggers:function(t,e){return this._getTriggers(t,e).length>0},fireTriggers:function(t,e,i,n){var o=this._getTriggers(t,e);this._fireArrayOfTriggers(o,i,n)},triggerAction:function(t,e,i){this.fireTriggers(e.eventName,null,i,t)},triggerByLocalIdAction:function(t,e,i){var n=e.event?[e.event]:[];this._fireArrayOfTriggers(n,i,t)}};;\nfunction ActionContext(e,t){if(this._id=randInt(),this.initiator=e,this.initiationTimestamp=new Date\/1e3,this.consideredUserInitiatedByBrowser=!!t,this.inUserInitiatedIteration=this.consideredUserInitiatedByBrowser,e instanceof Screen)this.screen=e,this.screenObject=null;else{if(!(e instanceof ScreenObject))throw Error(\"Initiator (\"+e+\") is not a Screen or a ScreenObject. Analytics would be confused.\");this.screen=e.parentScreen,this.screenObject=e}if(this.inUserInitiatedIteration&&setTimeout(function(){this.inUserInitiatedIteration=!1}.bind(this),0),this._isAttributable=this._isScreenReadyForEventAttribution(),!this.screen.parentUnit.name)throw\"Assertion error.\"}ActionContext.prototype._isScreenReadyForEventAttribution=function(){return this.screen.isMasterScreen()?this.screen.parentUnit.screens.some(function(e){return e.appearedAtLeastOnce&&e.isNormalScreen()}):this.screen.appearedAtLeastOnce},ActionContext.prototype.extendEvent=function(e){return extend({unitName:this.screen.parentUnit.name,screenLocalId:this.screen.localId,screenTitle:this.screen.title,screenIsMaster:this.screen.isMasterScreen(),objectLocalId:this.screenObject?this.screenObject.localId:null,objectName:this.screenObject?this.screenObject.name:null,objectClazz:this.screenObject?this.screenObject.constructor.name:null,initiationTimestamp:this.initiationTimestamp},e)},ActionContext.prototype.track=function(e,t){this._isAttributable||console.warn(\"Event '\"+e.name+\"' appears to be initated before a screen was ever shown and will be ignored.\"),creative.track(this.extendEvent(e),t)},ActionContext.prototype.trackUserInteraction=function(){creative.runtimeParams.userInteracted?creative.interactionTrackingTimeout||(this.track({name:\"interaction\"}),creative.interactionTrackingTimeout=setTimeout(function(){creative.interactionTrackingTimeout=null},1e3)):(creative.runtimeParams.userInteracted=1,this.track({name:\"firstInteraction\"}))},ActionContext.prototype.trackClickThrough=function(e){e||(e=noop),creative.runtimeParams.clickedThrough?setTimeout(e,0):(creative.runtimeParams.clickedThrough=1,this.track({name:\"firstClickThrough\"},e))};;\nfunction VideoContext(t,e,i){VideoContext.uberConstructor.call(this,t instanceof ActionContext?t.initiator:t,t&&t.userInitiated),this.file=e,this.url=e.getUrl(),this.label=i,this.source=null}inherit(VideoContext,ActionContext),VideoContext._eventNames=[\"videoDurationUpdate\",\"videoPlayAttempted\",\"videoPlayedSegment\"],VideoContext.prototype.registerSource=function(t){if(!t)throw\"Not a valid source of video events.\";this.source=t,VideoContext._eventNames.forEach(function(t){this.source.on(t,function(e){this.handleEvent(t,e)}.bind(this))}.bind(this))},VideoContext.prototype.handleEvent=function(t,e){this.track(extend(JSON.parse(JSON.stringify(e||{})),{name:t}))},VideoContext.prototype.track=function(t){var e=extend({videoSession:this._id},t);if(\"videoPlayAttempted\"==t.name){var i=this.file.url?\"URL\":\"File\";extend(e,{sourceType:i,source:\"URL\"==i?this.file.url:this.file.blobHash,label:this.label})}VideoContext.uber.track.call(this,e)};;\nfunction ShakeListener(){this.minIntensity=5,this.minDelay=300,this.canListen=!0,this.startTime=null,this.stopTime=null,this.lastX=null,this.lastY=null,this.lastZ=null,this.deltasX=[],this.deltasY=[],this.deltasZ=[]}extend(ShakeListener.prototype,EventEmitter),ShakeListener.prototype.start=function(){this.canListen=!0,creative.deviceMotionListenerAdded||(creative.deviceMotionListenerAdded=!0,window.addEventListener(\"devicemotion\",this.handleMotion.bind(this)))},ShakeListener.prototype.stop=function(){this.canListen=!1,creative.deviceMotionListenerAdded&&(creative.deviceMotionListenerAdded=!1,window.removeEventListener(\"devicemotion\",this.handleMotion))},ShakeListener.prototype.handleMotion=function(t){function e(t){for(var e=0,i=0;t.length>i;i++)e+=t[i];return e\/t.length}var i,n,s,o=this,r=0,a=0,l=0,h=0,d=0,c=0;if(this.canListen)if(this.current=t.accelerationIncludingGravity,null===this.lastX&&null===this.lastY&&null===this.lastZ&&(this.lastX=this.current.x,this.lastY=this.current.y,this.lastZ=this.current.z),r=Math.abs(this.lastX-this.current.x),a=Math.abs(this.lastY-this.current.y),l=Math.abs(this.lastZ-this.current.z),r>this.minIntensity||a>this.minIntensity||l>this.minIntensity){clearTimeout(this.reportShake),this.reportShake=null,this.startTime||(this.startTime=new Date),100>=this.deltasX.length&&(this.deltasX.push(r),this.deltasY.push(a),this.deltasZ.push(l));for(var u=0;this.deltasX.length>u;u++)h+=this.deltasX[u],d+=this.deltasY[u],c+=this.deltasZ[u];i=h\/this.deltasX.length,n=d\/this.deltasY.length,s=c\/this.deltasZ.length,i>n&&i>s?(this.direction=\"x\",this.intensity=e(this.deltasX)):n>i&&n>s?(this.direction=\"y\",this.intensity=e(this.deltasY)):s>i&&s>n&&(this.direction=\"z\",this.intensity=e(this.deltasZ))}else this.startTime&&!this.reportShake&&(this.reportShake=setTimeout(function(){o.stopTime=new Date,o.duration=o.stopTime.getTime()-o.startTime.getTime(),o.currentTime=null,o.startTime=null,o.deltasX=[],o.deltasY=[],o.deltasZ=[],o.emit(\"shake\",o.duration,o.intensity,o.direction)},this.minDelay))};;\nfunction CStyler(e){this._node=e}CStyler.initialised=!1,CStyler.prototype.enableWarnings=!1,CStyler.prototype.enableTraces=!1,CStyler.flags={isWebKit:\/WebKit\/.test(navigator.userAgent),isIE:\/MSIE|Trident\\\/\/.test(navigator.userAgent),isGecko:\/rv:.*Gecko\\\/\/.test(navigator.userAgent)},CStyler.engine=function(){return CStyler.flags.isWebKit?\"WebKit\":CStyler.flags.isIE?\"IE\":CStyler.flags.isGecko?\"Gecko\":\"Unknown\"}(),CStyler.prefix=function(){return\"WebKit\"==CStyler.engine?\"-webkit-\":\"Gecko\"==CStyler.engine?\"-moz-\":\"IE\"==CStyler.engine?\"-ms-\":\"\"}(),CStyler._isOldWebKit=function(e){var t=e.match(\/AppleWebKit\\\/(\\d+)\/);return t&&540>~~t[1]}(navigator.userAgent),CStyler.ucfirst=function(e){return e+=\"\",e?e[0].toUpperCase()+e.slice(1):\"\"},CStyler.lcfirst=function(e){return e+=\"\",e?e[0].toLowerCase()+e.slice(1):\"\"},CStyler.camelize=function(e){var t=e.replace(\/-([a-z])\/g,function(e,t){return t.toUpperCase()});return this.flags.isGecko?t:this.lcfirst(t)},CStyler.dasherize=function(e){return e.replace(\/[A-Z]\/g,function(e){return\"-\"+e.toLowerCase()})},CStyler._prefixTester=\/^-?([mM]oz|[wW]eb[kK]it|[mM]s)-?\/,CStyler.isPrefixed=function(e){return this._prefixTester.test(e)},CStyler.stripPrefix=function(e){return this.lcfirst(e.replace(this._prefixTester,\"\"))},CStyler._cssAttributes=[],CStyler._prefixedCSSLookup={},CStyler._unprefixedCSSLookup={},CStyler._prefixedLookup={},CStyler._unprefixedLookup={},CStyler._eventNames={},CStyler._cssDirectives={},CStyler._prefixer=null,CStyler._unprefixer=null,CStyler.ignorableAttributes=[\"cssText\",\"applyCSS\",\"length\",\"getPropertyValue\",\"getPropertyPriority\",\"getPropertyCSSValue\",\"getPropertyShorthand\",\"isPropertyImplicit\",\"removeProperty\",\"setProperty\",\"item\",\"parentRule\"],CStyler.criticalAttributes=[\"background\",\"background-attachment\",\"background-clip\",\"background-color\",\"background-image\",\"background-origin\",\"background-position\",\"background-repeat\",\"background-size\",\"background-composite\",\"border\",\"border-bottom-width\",\"border-left-width\",\"border-right-width\",\"border-top-width\",\"border-bottom-color\",\"border-left-color\",\"border-right-color\",\"border-top-color\",\"border-bottom-style\",\"border-left-style\",\"border-right-style\",\"border-top-style\",\"border-collapse\",\"border-fit\",\"border-horizontal-spacing\",\"border-vertical-spacing\",\"border-image\",\"border-style\",\"border-color\",\"border-width\",\"border-radius\",\"border-top-left-radius\",\"border-top-right-radius\",\"border-bottom-left-radius\",\"border-bottom-right-radius\",\"bottom\",\"clear\",\"color\",\"cursor\",\"direction\",\"display\",\"float\",\"font\",\"font-family\",\"font-size\",\"font-style\",\"font-variant\",\"font-weight\",\"height\",\"left\",\"letter-spacing\",\"line-height\",\"list-style\",\"list-style-image\",\"list-style-position\",\"list-style-type\",\"margin\",\"margin-bottom\",\"margin-left\",\"margin-right\",\"margin-top\",\"margin-bottom-collapse\",\"margin-top-collapse\",\"max-height\",\"max-width\",\"min-height\",\"min-width\",\"opacity\",\"outline\",\"outline-color\",\"outline-style\",\"outline-width\",\"overflow\",\"overflow-x\",\"overflow-y\",\"padding\",\"padding-bottom\",\"padding-left\",\"padding-right\",\"padding-top\",\"pointer-events\",\"position\",\"right\",\"table-layout\",\"text-align\",\"text-decoration\",\"text-indent\",\"text-overflow\",\"text-rendering\",\"text-shadow\",\"text-transform\",\"text-stroke\",\"text-fill-color\",\"top\",\"unicode-bidi\",\"vertical-align\",\"visibility\",\"animation-delay\",\"animation-direction\",\"animation-duration\",\"animation-fill-mode\",\"animation-iteration-count\",\"animation-name\",\"animation-play-state\",\"animation-timing-function\",\"appearance\",\"backface-visibility\",\"highlight\",\"perspective\",\"perspective-origin\",\"transform\",\"transform-origin\",\"transform-style\",\"transition\",\"transition-delay\",\"transition-duration\",\"transition-property\",\"transition-timing-function\",\"white-space\",\"width\",\"word-break\",\"word-spacing\",\"word-wrap\",\"z-index\"],CStyler.oldWebKitProperties=[\"transform\",\"transform-origin\",\"transform-style\",\"transition\",\"transition-delay\",\"transition-duration\",\"transition-property\",\"transition-timing-function\",\"animation\",\"animation-delay\",\"animation-direction\",\"animation-duration\",\"animation-fill-mode\",\"animation-iteration-count\",\"animation-name\",\"animation-play-state\",\"animation-timing-function\",\"appearance\",\"backface-visibility\",\"perspective\",\"perspective-origin\"],CStyler.init=function(){var e=getComputedStyle(document.body)||document.body.style,t=[];for(var i in e)-1==this.ignorableAttributes.indexOf(i)&&\"\"!=i&&(isNaN(parseInt(i,10))||(i=this.camelize(e[i])),-1==t.indexOf(i)&&t.push(i));t=t.sort(),t.forEach(function(e){var t=e;CStyler._cssAttributes.push(e),this.isPrefixed(e)&&(t=this.stripPrefix(e),this._prefixedLookup[t]=e,this._unprefixedLookup[e]=t,this._prefixedCSSLookup[this.dasherize(t)]=\"-\"+this.dasherize(e),this._unprefixedCSSLookup[\"-\"+this.dasherize(e)]=this.dasherize(t)),t in this.prototype||Object.defineProperty(this.prototype,t,{get:function(){return this._node.style[e]},set:function(t){this._node.style[e]=t},enumerable:!0}),t!=e&&Object.defineProperty(this.prototype,e,{get:function(){return this.enableWarnings&&(console.warn(\"Using prefixed getter! (\"+e+\")\"),this.enableTraces&&console.trace()),this._node.style[e]},set:function(t){this.enableWarnings&&(console.warn(\"Using prefixed setter! (\"+e+\")\"),this.enableTraces&&console.trace()),this._node.style[e]=t},enumerable:!1})},this),this.criticalAttributes.forEach(function(e){var t=this.camelize(this.prefix+e),i=this.camelize(e);t in this.prototype||Object.defineProperty(this.prototype,t,{get:function(){return this.enableWarnings&&(console.warn(\"Getting potentially nonexistent prefixed CSS attribute: \"+t),this.enableTraces&&console.trace()),this._node.style[t]},set:function(e){this.enableWarnings&&(console.warn(\"Setting potentially nonexistent prefixed CSS attribute: \"+t),this.enableTraces&&console.trace()),this._node.style[t]=e},enumerable:!0}),i in this.prototype||Object.defineProperty(this.prototype,i,{get:function(){return this.enableWarnings&&(console.warn(\"Getting potentially nonexistent unprefixed CSS attribute: \"+e),this.enableTraces&&console.trace()),this._node.style[CStyler._isOldWebKit&&CStyler.oldWebKitProperties.indexOf(e)>-1?t:i]},set:function(r){this.enableWarnings&&(console.warn(\"Setting potentially nonexistent unprefixed CSS attribute: \"+e),this.enableTraces&&console.trace()),this._node.style[CStyler._isOldWebKit&&CStyler.oldWebKitProperties.indexOf(e)>-1?t:i]=r},enumerable:!0})},this),CStyler._prefixer=RegExp(\"(?:[^-]|^)(\"+Object.keys(this._prefixedCSSLookup).join(\"|\")+\")(?::)\",\"g\"),CStyler._unprefixer=RegExp(\"(?:[^-]|^)(\"+Object.keys(this._unprefixedCSSLookup).join(\"|\")+\")(?::)\",\"g\"),Object.defineProperty(this.prototype,\"cssText\",{get:function(){return this._node.style.cssText.replace(CStyler._unprefixer,function(e,t){return CStyler._unprefixedCSSLookup[t]})},set:function(e){this._node.style.cssText=e.replace(CStyler._prefixer,function(e,t){return CStyler._prefixedCSSLookup[t]})},enumerable:!0}),\"WebKitAnimationEvent\"in window&&(CStyler._eventNames.animationstart=\"webkitAnimationStart\",CStyler._eventNames.animationiteration=\"webkitAnimationIteration\",CStyler._eventNames.animationend=\"webkitAnimationEnd\",CStyler._cssDirectives.keyframes=\"-webkit-keyframes\"),\"WebKitTransitionEvent\"in window&&(CStyler._eventNames.transitionend=\"webkitTransitionEnd\"),this.initialised=!0},CStyler.prototype.applyCSS=function(e){for(var t in e)this[CStyler.camelize(t)]=e[t]},CStyler.prototype.getComputedStyle=function(){var e=this._node.ownerDocument.defaultView.getComputedStyle(this._node),t={};return CStyler._cssAttributes.forEach(function(i){var r=CStyler._unprefixedLookup[i]||i;t[r]=e[i]},this),t},CStyler.init();;\nfunction Slicer(t){this.options=extend({},Slicer.defaults,t||{}),this.source=null,this.canvas=null}Slicer.defaults={left:0,top:0,right:0,bottom:0},Slicer.prototype.loadImage=function(t,e){this.source=new Image,this.source.onload=e,this.source.src=t},Slicer.prototype.getCanvas=function(t,e){this.canvas||(this.canvas=document.createElement(\"canvas\"));var i=this.canvas.getContext(\"2d\");return this.canvas.width=t,this.canvas.height=e,i.clearRect(0,0,t,e),i.drawImage(this.source,0,0,this.options.left,this.options.top,0,0,this.options.left,this.options.top),i.drawImage(this.source,0,this.options.top,this.options.left,this.source.naturalHeight-this.options.top-this.options.bottom,0,this.options.top,this.options.left,e-this.options.top-this.options.bottom),i.drawImage(this.source,0,this.source.naturalHeight-this.options.bottom,this.options.left,this.options.bottom,0,e-this.options.bottom,this.options.left,this.options.bottom),i.drawImage(this.source,this.options.left,0,this.source.naturalWidth-this.options.left-this.options.right,this.options.top,this.options.left,0,t-this.options.left-this.options.right,this.options.top),i.drawImage(this.source,this.options.left,this.options.top,this.source.naturalWidth-this.options.left-this.options.right,this.source.naturalHeight-this.options.top-this.options.bottom,this.options.left,this.options.top,t-this.options.left-this.options.right,e-this.options.top-this.options.bottom),i.drawImage(this.source,this.options.left,this.source.naturalHeight-this.options.bottom,this.source.naturalWidth-this.options.left-this.options.right,this.options.bottom,this.options.left,e-this.options.bottom,t-this.options.left-this.options.right,this.options.bottom),i.drawImage(this.source,this.source.naturalWidth-this.options.right,0,this.options.right,this.options.top,t-this.options.right,0,this.options.right,this.options.top),i.drawImage(this.source,this.source.naturalWidth-this.options.right,this.options.top,this.options.right,this.source.naturalHeight-this.options.top-this.options.bottom,t-this.options.right,this.options.top,this.options.right,e-this.options.top-this.options.bottom),i.drawImage(this.source,this.source.naturalWidth-this.options.right,this.source.naturalHeight-this.options.bottom,this.options.right,this.options.bottom,t-this.options.right,e-this.options.bottom,this.options.right,this.options.bottom),this.canvas},Slicer.prototype.getDataURL=function(t,e){return this.getCanvas(t,e).toDataURL(\"image\/png\")};;\nvar ScreenTransition={replace:function(t,e,i,n,s,o){i.style.opacity=0,i.style.display=\"block\",n.style.display=\"block\",e.style.display=\"none\",nextFrame(function(){i.style.opacity=1,t.style.opacity=0,nextFrame(function(){t.style.display=\"none\",nextFrame(o||noop)})})},fade:function(t,e,i,n,s,o){function r(){l.transition=a.transition=\"\",a.display=\"none\",nextFrame(o||noop)}var a=new CStyler(t),l=new CStyler(i);i.style.opacity=0,i.style.display=\"block\",n.style.display=\"block\",e.style.display=\"none\",once(t,\"transitionend\",r),nextFrame(function(){a.transition=l.transition=\"opacity \"+s.duration+\"ms ease-out\",nextFrame(function(){i.style.opacity=1,t.style.opacity=0})})},slide:function(t,e,i,n,s,o){var r={transition:\"all \"+s.duration+\"ms ease-out\"};switch(s.direction||\"west\"){case\"north\":r.startingFrom=\"translateY(0)\",r.endingFrom=\"translateY(\"+-s.unitSize.height+\"px)\",r.startingTo=\"translateY(\"+s.unitSize.height+\"px)\",r.endingTo=\"translateY(0)\";break;case\"south\":r.startingFrom=\"translateY(0)\",r.endingFrom=\"translateY(\"+s.unitSize.height+\"px)\",r.startingTo=\"translateY(\"+-s.unitSize.height+\"px)\",r.endingTo=\"translateY(0)\";break;case\"east\":r.startingFrom=\"translateX(0)\",r.endingFrom=\"translateX(\"+s.unitSize.width+\"px)\",r.startingTo=\"translateX(\"+-s.unitSize.width+\"px)\",r.endingTo=\"translateX(0)\";break;case\"west\":r.startingFrom=\"translateX(0)\",r.endingFrom=\"translateX(\"+-s.unitSize.width+\"px)\",r.startingTo=\"translateX(\"+s.unitSize.width+\"px)\",r.endingTo=\"translateX(0)\"}r.startingFromOpacity=1,r.startingToOpacity=0,r.endingFromOpacity=0,r.endingToOpacity=1,this._runTransition(t,e,i,n,r,s.duration,o)},flip:function(t,e,i,n,s,o){var r={transition:\"all \"+s.duration+\"ms ease-out\"},a=\"perspective(\"+2*s.unitSize.width+\"px) \";switch(s.direction||\"west\"){case\"north\":r.startingFrom=a+\"rotateX(0)\",r.endingFrom=a+\"rotateX(180deg)\",r.startingTo=a+\"rotateX(-180deg)\",r.endingTo=a+\"rotateX(0)\";break;case\"south\":r.startingFrom=a+\"rotateX(0)\",r.endingFrom=a+\"rotateX(-180deg)\",r.startingTo=a+\"rotateX(180deg)\",r.endingTo=a+\"rotateX(0)\";break;case\"east\":r.startingFrom=a+\"rotateY(0)\",r.endingFrom=a+\"rotateY(180deg)\",r.startingTo=a+\"rotateY(-180deg)\",r.endingTo=a+\"rotateY(0)\";break;case\"west\":r.startingFrom=a+\"rotateY(0)\",r.endingFrom=a+\"rotateY(-180deg)\",r.startingTo=a+\"rotateY(180deg)\",r.endingTo=a+\"rotateY(0)\"}var l=new CStyler(t),h=new CStyler(i),d=new CStyler(e),c=new CStyler(n),u=new CStyler(t.parentNode);u.transformStyle=\"preserve-3d\",l.backfaceVisibility=d.backfaceVisibility=\"hidden\",h.backfaceVisibility=c.backfaceVisibility=\"hidden\",l.transformOrigin=d.transformOrigin=\"50% 50% 0\",h.transformOrigin=c.transformOrigin=\"50% 50% 0\",this._runTransition(t,e,i,n,r,s.duration,function(){u.TransformStyle=\"\",l.backfaceVisibility=d.backfaceVisibility=\"\",h.backfaceVisibility=c.backfaceVisibility=\"\",l.transform=d.transform=\"\",h.transform=c.transform=\"\",l.transformOrigin=d.transformOrigin=\"\",h.transformOrigin=c.transformOrigin=\"\",nextFrame(o||noop)})},cube:function(t,e,i,n,s,o){var r={transition:\"all \"+s.duration+\"ms ease-out\"},a=\"perspective(\"+2*s.unitSize.width+\"px) \";switch(s.direction||\"west\"){case\"north\":r.startingFrom=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(0)     \",r.endingFrom=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(90deg) \",r.startingTo=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(-90deg)\",r.endingTo=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(0)     \";break;case\"south\":r.startingFrom=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(0)     \",r.endingFrom=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(-90deg)\",r.startingTo=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(90deg) \",r.endingTo=a+\"translateZ(\"+-s.unitSize.height\/2+\"px) rotateX(0)     \";break;case\"east\":r.startingFrom=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(0)     \",r.endingFrom=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(90deg) \",r.startingTo=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(-90deg)\",r.endingTo=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(0)     \";break;case\"west\":r.startingFrom=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(0)     \",r.endingFrom=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(-90deg)\",r.startingTo=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(90deg) \",r.endingTo=a+\"translateZ(\"+-s.unitSize.width\/2+\"px) rotateY(0)     \"}var l=new CStyler(t),h=new CStyler(i),d=new CStyler(e),c=new CStyler(n),u=new CStyler(t.parentNode);switch(u.transformStyle=\"preserve-3d\",l.backfaceVisibility=d.backfaceVisibility=\"hidden\",h.backfaceVisibility=c.backfaceVisibility=\"hidden\",s.direction||\"west\"){case\"north\":case\"south\":l.transformOrigin=d.transformOrigin=\"50% 50% \"+-s.unitSize.height\/2+\"px\",h.transformOrigin=c.transformOrigin=\"50% 50% \"+-s.unitSize.height\/2+\"px\";break;case\"east\":case\"west\":l.transformOrigin=d.transformOrigin=\"50% 50% \"+-s.unitSize.width\/2+\"px\",h.transformOrigin=c.transformOrigin=\"50% 50% \"+-s.unitSize.width\/2+\"px\"}this._runTransition(t,e,i,n,r,s.duration,function(){u.transformStyle=\"\",l.transformOrigin=d.transformOrigin=\"\",h.transformOrigin=c.transformOrigin=\"\",l.backfaceVisibility=d.backfaceVisibility=\"\",h.backfaceVisibility=c.backfaceVisibility=\"\",nextFrame(o||noop)})},_runTransition:function(t,e,i,n,s,o,r){function a(){h.transition=l.transition=\"\",c.transition=d.transition=\"\",h.transform=l.transform=\"\",c.transform=d.transform=\"\",l.display=d.display=\"none\",l.opacity=d.opacity=h.opacity=c.opacity=\"\",nextFrame(r||noop)}var l=new CStyler(t),h=new CStyler(i),d=new CStyler(e),c=new CStyler(n);l.transform=d.transform=s.startingFrom,h.transform=c.transform=s.startingTo,l.opacity=d.opacity=s.startingFromOpacity===void 0?1:s.startingFromOpacity,h.opacity=c.opacity=s.startingToOpacity===void 0?1:s.startingToOpacity,h.display=c.display=\"block\";var u=this._runOnce(a);once(i,\"transitionend\",u),setTimeout(function(){h.transition=l.transition=c.transition=d.transition=s.transition,nextFrame(function(){l.transform=d.transform=s.endingFrom,h.transform=c.transform=s.endingTo,l.opacity=d.opacity=s.endingFromOpacity===void 0?1:s.endingFromOpacity,h.opacity=c.opacity=s.endingToOpacity===void 0?1:s.endingToOpacity}),setTimeout(u,o+50)},20)},run:function(t,e,i,n,s){var o=this._getSupportedAnimation(s.animation||\"replace\");if(!(o in this))throw Error(\"The transition function does not exist!\");this[o].apply(this,arguments)},_getSupportedAnimation:function(t){return android(\"2\")?\"replace\":!android(\"4\")||window.navigator.userAgent.match(\/Chrome.*(Mobile)? Safari\/)||\"cube\"!==t&&\"flip\"!==t?t:\"fade\"},_runOnce:function(t){var e=!1;return function(){return e?void 0:(e=!0,t())}}};;\n(function(){\"use strict\";var t={stringPatternAngle:\"(?:[+-]?\\\\d*\\\\.?\\\\d+)(?:deg|grad|rad|turn)\",stringPatternColor:\"(?:#(?:[A-Fa-f0-9]{3,6})|(?:(?:rgb|hsl)a?)\\\\(\\\\s*(?:\\\\d+(?:\\\\%)?\\\\s*,\\\\s*){2,3}(?:(?:\\\\d+\\\\.)?\\\\d+)\\\\s*\\\\))\",stringPatternSideCorner:\"top|bottom|left|right\",stringPatternValue:\"(?:[+-]?\\\\d*\\\\.?\\\\d+)(?:%|[a-z]+)?\",patternHex:\/^(#|)([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$\/,matchHexHash:1,matchHexColor:2,patternRgb:\/^rgb\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$\/i,matchRgbRed:1,matchRgbGreen:2,matchRgbBlue:3,patternRgba:\/^rgba\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*((?:\\d\\.)?\\d\\d?)\\s*\\)$\/i,matchRgbaRed:1,matchRgbaGreen:2,matchRgbaBlue:3,matchRgbaAlpha:4,patternGradient:\/^\\-?(moz|webkit|o|ms|)(?:(?:-|)(?:repeating-|)(linear|radial|))-gradient\\((.*?)\\)(?:;|)$\/i,matchGradientPrefix:1,matchGradientType:2,matchGradientValues:3,generatedGradientSyntax:null,matchGradientSyntaxLine:1,matchGradientSyntaxAngle:2,matchGradientSyntaxSideCorner:3,matchGradientSyntaxStopList:4,buildGradientSyntax:function(){var e=[\"(?:to\\\\s+)?((?:\",t.stringPatternSideCorner,\")\\\\s*(?:\",t.stringPatternSideCorner,\")?)\"].join(\"\"),r=[\"(\",t.stringPatternAngle,\")\"].join(\"\"),i=[\"(\",r,\"|\",e,\")\"].join(\"\"),n=[t.stringPatternColor,\"\\\\s*(?:\",t.stringPatternValue,\")?\"].join(\"\"),o=[\"(?:\",n,\"\\\\s*,\\\\s*)*\",n].join(\"\"),a=[\"^\\\\s*\",i,\"\\\\s*,\\\\s*(\",o,\")\\\\s*$\"].join(\"\");return t.generatedGradientSyntax=RegExp(a,\"i\"),t.generatedGradientSyntax},generatedGradientStopList:null,matchGradientStopListColor:1,matchGradientStopListPosition:2,buildGradientStopList:function(){var e=[\"\\\\s*(\",t.stringPatternColor,\")\",\"(?:\\\\s+\",\"(\",t.stringPatternValue,\"))?\",\"(?:\\\\s*,\\\\s*)?\"].join(\"\");return t.generatedGradientStopList=RegExp(e,\"gi\"),t.generatedGradientStopList},gradientOldSideCorner:{\"to top\":\"left bottom, left top\",\"to left\":\"right top, left top\",\"to bottom\":\"left top, left bottom\",\"to right\":\"left top, right top\",\"to top right\":\"left bottom, right top\",\"to top left\":\"right bottom, left top\",\"to bottom right\":\"left top, right bottom\",\"to bottom left\":\"right top, left bottom\"},gradientPrefixedSideCorner:{\"to top\":\"bottom\",\"to left\":\"right\",\"to bottom\":\"top\",\"to right\":\"left\",\"to top right\":\"bottom left\",\"to top left\":\"bottom right\",\"to bottom right\":\"top left\",\"to bottom left\":\"top right\"}};Object.defineProperties(t,{patternGradientSyntax:{get:function(){return null===t.generatedGradientSyntax?t.buildGradientSyntax():t.generatedGradientSyntax}},patternGradientStopList:{get:function(){return null===t.generatedGradientStopList?t.buildGradientStopList():t.generatedGradientStopList}}}),t.convertAngleToSideCorner=function(t,e){\/\\-?(moz|webkit|o|ms)\/.test(e)&&(t=90-t);var r=(t+360)%360,i=\"to top\";return r>347||14>r?i=\"to top\":r>=14&&75>=r?i=\"to top right\":r>75&&105>r?i=\"to right\":r>=105&&167>=r?i=\"to bottom right\":r>167&&194>r?i=\"to bottom\":r>=194&&255>=r?i=\"to bottom left\":r>255&&285>r?i=\"to left\":r>=285&&347>=r&&(i=\"to left top\"),i},t.convertSideCornerToAngle=function(t,e){var r=0;switch(t){case\"bottom\":case\"to top\":r=0;break;case\"left\":case\"to right\":r=90;break;case\"right\":case\"to left\":r=270;break;case\"top\":case\"to bottom\":r=180;break;case\"to bottom right\":case\"to right bottom\":r=167;break;case\"to bottom left\":case\"to left bottom\":r=194;break;case\"to top right\":case\"to right top\":r=14;break;case\"to top left\":case\"to left top\":r=347;break;case\"bottom right\":case\"right bottom\":r=285;break;case\"bottom left\":case\"left bottom\":r=75;break;case\"top right\":case\"right top\":r=255;break;case\"top left\":case\"left top\":r=105}return\/\\-?(moz|webkit|o|ms)\/.test(e)&&(r=90-r),(r+360)%360},t.convertHexToRgba=function(e,r){var i=0,n=0,o=0,a=t.patternHex.exec(e);if(null!==a&&a[t.matchHexColor]){var s=a[t.matchHexColor];if(3==s.length){var c=s;s=c.substr(0,1)+c.substr(0,1)+c.substr(1,1)+c.substr(1,1)+c.substr(2,1)+c.substr(2,1)}i=parseInt(s.substr(0,2),16),n=parseInt(s.substr(2,2),16),o=parseInt(s.substr(4,2),16)}return r=parseInt(r,10)\/100,\"rgba(\"+i+\",\"+n+\",\"+o+\",\"+(isNaN(r)?1:r)+\")\"},t.convertRgbToHex=function(e){var r=\"00\",i=\"00\",n=\"00\",o=t.patternRgb.exec(e);return null!==o&&(o[t.matchRgbRed]&&(r=(r+parseInt(o[t.matchRgbRed],10).toString(16)).slice(-2)),o[t.matchRgbGreen]&&(i=(i+parseInt(o[t.matchRgbGreen],10).toString(16)).slice(-2)),o[t.matchRgbBlue]&&(n=(n+parseInt(o[t.matchRgbBlue],10).toString(16)).slice(-2))),(\"#\"+r+i+n).toUpperCase()},t.convertRgbaToAlpha=function(e){var r=100,i=t.patternRgba.exec(e);return null!==i&&i[t.matchRgbaAlpha]&&(r=parseInt(100*i[t.matchRgbaAlpha],10)),r+\"%\"},t.convertRgbaToHex=function(e){var r=\"00\",i=\"00\",n=\"00\",o=t.patternRgba.exec(e);return null!==o&&(o[t.matchRgbaRed]&&(r=(r+parseInt(o[t.matchRgbaRed],10).toString(16)).slice(-2)),o[t.matchRgbaGreen]&&(i=(i+parseInt(o[t.matchRgbaGreen],10).toString(16)).slice(-2)),o[t.matchRgbaBlue]&&(n=(n+parseInt(o[t.matchRgbaBlue],10).toString(16)).slice(-2))),(\"#\"+r+i+n).toUpperCase()},t.isGradient=function(e){return t.patternGradient.test(e)},t.isHex=function(e){return t.patternHex.test(e)},t.isRgb=function(e){return t.patternRgb.test(e)},t.isRgba=function(e){return t.patternRgba.test(e)},t.parseGradient=function(e){var r=null,i=t.patternGradient.exec(e);if(null!==i){r={original:i[0],oldSyntax:!i[t.matchGradientType],prefix:i[t.matchGradientPrefix],type:i[t.matchGradientType],colorStopList:[]};var n=t.patternGradientSyntax.exec(i[t.matchGradientValues]);if(null!==n){n[t.matchGradientSyntaxLine]&&(r.line=n[t.matchGradientSyntaxLine]),n[t.matchGradientSyntaxAngle]&&(r.angle=n[t.matchGradientSyntaxAngle]),n[t.matchGradientSyntaxSideCorner]&&(r.sideCorner=n[t.matchGradientSyntaxSideCorner]);for(var o,a=t.patternGradientStopList.exec(n[t.matchGradientSyntaxStopList]);null!==a;)o={color:a[t.matchGradientStopListColor]},a[t.matchGradientStopListPosition]&&(o.position=a[t.matchGradientStopListPosition]),r.colorStopList.push(o),a=t.patternGradientStopList.exec(n[t.matchGradientSyntaxStopList])}}return r},t.createGradient=function(e){var r={backgroundColor:null,webkitGradient:null,mozLinearGradient:null,msLinearGradient:null,oLinearGradient:null,webkitLinearGradient:null,linearGradient:null},i=t.parseGradient(e);if(i.oldSyntax)throw Error('[Not supported] Can not create gradient from old \"webkit-gradient\" syntax.');var n=0;i.angle!==void 0?n=parseInt(i.angle,10):i.sideCorner!==void 0&&(n=t.convertSideCornerToAngle(i.line,i.prefix));for(var o=n,a=\"\",s=\"\",c=i.colorStopList.length,l=0;c>l;l++){var d=i.colorStopList[l];if(d.color){if(0!==l?(a+=\", \",s+=\", \"):r.backgroundColor=d.color,a+=d.color,s+=\"color-stop(\",d.position)a+=\" \"+d.position,s+=d.position;else{var h=100\/(c-1)*l;s+=h+\"%\"}s+=\", \"+d.color+\")\"}}\/\\-?(moz|webkit|o|ms)\/.test(i.prefix)?n=90-o:o=90-n;var p=t.convertAngleToSideCorner(n),u=t.gradientOldSideCorner[p];return r.webkitGradient=\"-webkit-gradient(linear, \"+u+\", \"+s+\")\",r.mozLinearGradient=\"-moz-linear-gradient(\"+o+\"deg, \"+a+\")\",r.msLinearGradient=\"-ms-linear-gradient(\"+o+\"deg, \"+a+\")\",r.oLinearGradient=\"-o-linear-gradient(\"+o+\"deg, \"+a+\")\",r.webkitLinearGradient=\"-webkit-linear-gradient(\"+o+\"deg, \"+a+\")\",r.linearGradient=\"linear-gradient(\"+n+\"deg, \"+a+\")\",r},t.createGradientStyle=function(e){var r=t.createGradient(e),i=\"\";for(var n in r){var o=r[n];null!==o&&t.isGradient(o)&&(i+=\"background-image: \"+o+\";\")}return i},window.Color=t})();;\n(function(){\"use strict\";function t(t){this._family=t,this._baseUrl=\"\",this._files={},this._provider=\"\",this._stretch=\"\",this._style=\"normal\",this._variation=\"\",this._weight=400}t.prototype.getBaseUrl=function(){return this._baseUrl},t.prototype.getFamily=function(){return this._family},t.prototype.getFiles=function(){return this._files},t.prototype.getProvider=function(){return this._provider},t.prototype.getStyle=function(){return this._style},t.prototype.getBrowserCompatibleFontFamily=function(){var t=this._stretch?this._family+\" \"+this._stretch:this._family;if(t.length>25){for(var e,i=5381,r=0,n=t.length;n>r;r++)e=t.charCodeAt(r),i=(i<<5)+i+e;return\"\"+i}return t},t.prototype.getVariation=function(){return this._variation},t.prototype.getWeight=function(){return this._weight},t.prototype.setBaseUrl=function(t){this._baseUrl=t},t.prototype.setFiles=function(t){this._files=t},t.prototype.setProvider=function(t){this._provider=t},t.prototype.setStretch=function(t){this._stretch=t},t.prototype.setStyle=function(t){this._style=t},t.prototype.setVariation=function(t){this._variation=t},t.prototype.setWeight=function(t){this._weight=t},t.prototype.isBrand=function(){return\"brand\"===this._provider},t.prototype.isCustom=function(){return\"custom\"===this._provider},t.prototype.isGoogle=function(){return\"google\"===this._provider},t.prototype.isMonotype=function(){return\"monotype\"===this._provider},t.prototype.isWeb=function(){return\"web\"===this._provider},t.prototype.needsLoading=function(){return this.isMonotype()||this.isBrand()||this.isGoogle()||this.isCustom()},t.prototype.getCssProperties=function(){return{\"font-family\":this.needsLoading()?'\"'+this.getBrowserCompatibleFontFamily()+'\", Helvetica, sans-serif':this.getBrowserCompatibleFontFamily(),\"font-style\":this._style,\"font-weight\":this._weight}},t.prototype.generateFontFace=function(){var t=\"\";return this._style&&this._weight&&this._files&&(this._files.ttf||this._files.woff)&&(t=\"@font-face {\",t+='font-family: \"'+this.getBrowserCompatibleFontFamily()+'\";',t+=\"font-style: \"+this._style+\";\",t+=\"font-weight: \"+this._weight+\";\",t+=\"src:\",this._files.woff&&(t+='url(\"'+this._baseUrl+this._files.woff+'.woff\") format(\"woff\")'),this._files.ttf&&this._files.woff&&(t+=\",\"),this._files.ttf&&(t+='url(\"'+this._baseUrl+this._files.ttf+'.ttf\") format(\"truetype\")'),t+=\";}\"),t},t.prototype.loadStyle=function(t){if(t=t||function(){},\"undefined\"==typeof WebFont)return t(\"Web Font Loader is not initialized.\"),void 0;var e,i=this.getBrowserCompatibleFontFamily(),r={active:function(){t()},inactive:function(){t(\"Failed to load font files.\")}};if(this.isCustom()||this.isMonotype()||this.isBrand()){e=\"custom\";var n=\"font-style-manager\",o=document.getElementById(n);o||(o=document.createElement(\"style\"),o.id=n,document.getElementsByTagName(\"head\")[0].appendChild(o));var a=this.generateFontFace();-1==o.textContent.indexOf(a)&&(o.textContent+=a)}else{if(!this.isGoogle())return this.isWeb()?(t(),void 0):(t(\"Invalid provider.\"),void 0);e=\"google\"}this._variation&&(i+=\":\"+this._variation),r[e]={families:[i]},WebFont.load(r)},window.Font=t})();;\n(function(){\"use strict\";var t={createFontObject:function(){this.font=new Font(this.fontFamily),this.font.setBaseUrl(creative.resourceUrl+\"runner\/fonts\/\"),this.font.setFiles(this.fontFiles),this.font.setProvider(this.fontProvider),this.font.setStretch(this.fontStretch),this.font.setStyle(this.fontStyle),this.font.setVariation(this.fontVariation),this.font.setWeight(this.fontWeight)},updateTextStyle:function(){},initializeFont:function(){this.createFontObject(),this.incrementLoadingCount(),this.loadFont(this.decrementLoadingCount),this.updateTextStyle()},applyTextStyle:function(t){var e=this.font.getCssProperties(),i={fontFamily:e[\"font-family\"],fontStyle:e[\"font-style\"],fontWeight:e[\"font-weight\"],color:this.textColor,direction:\"\",letterSpacing:this.letterSpacing+\"px\",textAlign:this.textAlign,textDecoration:this.textDecoration,textShadow:\"\"};if(this.textDirection!==void 0&&(i.direction=this.textDirection),this.textShadow!==void 0&&this.textShadow){var n=this.textShadowAngle*(Math.PI\/180),s=Math.round(this.textShadowDistance*Math.cos(n)),o=Math.round(this.textShadowDistance*Math.sin(n)),r=android(\"2\")&&1>this.textShadowBlur?1:this.textShadowBlur;i.textShadow=s+\"px \"+o+\"px \"+r+\"px \"+this.textShadowColor}extend(t,i)},applyTextSize:function(t){var e=this.fontSize;this.scaleFont&&this.scaleBaseWidth>0&&(e\/=this.scaleBaseWidth\/this.size.width);var i={fontSize:e+\"px\",lineHeight:\"\"};this.lineSpacing!==void 0&&(i.lineHeight=this.lineSpacing+e+\"px\"),extend(t,i)},getWebFontLoader:function(t){t=t||noop,\"undefined\"!=typeof WebFont?t():loadJS((creative.runtimeParams.secure?\"https\":\"http\")+\":\/\/ajax.googleapis.com\/ajax\/libs\/webfont\/1.5.3\/webfont.js\",t)},loadFont:function(t){t=t||noop,this.getWebFontLoader(function(){this.font.loadStyle(function(e){!e&&this.font.isMonotype()&&this.trackMonotypeUsage(),t(e)}.bind(this))}.bind(this))},setFont:function(t){t.provider!==void 0&&(this.fontProvider=t.provider),t.family!==void 0&&(this.fontFamily=t.family),t.stretch!==void 0&&(this.fontStretch=t.stretch),t.style!==void 0&&(this.fontStyle=t.style),t.weight!==void 0&&(this.fontWeight=t.weight),t.variation!==void 0&&(this.fontVariation=t.variation),t.files!==void 0&&(this.fontFiles=t.files),this.createFontObject(),t.baseUrl!==void 0&&this.font.setBaseUrl(t.baseUrl)},trackMonotypeUsage:function(){if(creative.runtimeParams.monotypeProjectId&&!creative.runtimeParams.monotypeUsageReported){creative.runtimeParams.monotypeUsageReported=1;var t=document.createElement(\"img\");t.src=(creative.runtimeParams.secure?\"https\":\"http\")+\":\/\/fast.fonts.net\/t\/1.png?apiType=css&projectid=\"+creative.runtimeParams.monotypeProjectId;var e=new ActionContext(this);e.track({name:\"monotypeUsageReported\",monotypeProjectId:creative.runtimeParams.monotypeProjectId}),creative.aggregatorTracking.trackAggregator(\"monotypeUsageReported\",{monotypeProjectId:creative.runtimeParams.monotypeProjectId,creativeId:creative.id})}}};window.TextStyleIntegrator=t})();;\n(function(t){var e=Date.now||function(){return+new Date},i=60,n=1e3,o={},s=1;t.core?core.effect||(core.effect={}):t.core={effect:{}},core.effect.Animate={requestAnimationFrame:function(){var e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame,i=!!e;if(e&&!\/requestAnimationFrame\\(\\)\\s*\\{\\s*\\[native code\\]\\s*\\}\/i.test(\"\"+e)&&(i=!1),i)return function(t,i){e(t,i)};var n=60,o={},s=0,r=1,a=null,l=+new Date;return function(t){var e=r++;return o[e]=t,s++,null===a&&(a=setInterval(function(){var t=+new Date,e=o;o={},s=0;for(var i in e)e.hasOwnProperty(i)&&(e[i](t),l=t);t-l>2500&&(clearInterval(a),a=null)},1e3\/n)),e}}(),stop:function(t){var e=null!=o[t];return e&&(o[t]=null),e},isRunning:function(t){return null!=o[t]},start:function(t,r,a,l,h,c){var d=e(),u=d,p=0,_=0,g=s++;if(c||(c=document.body),0===g%20){var f={};for(var m in o)f[m]=!0;o=f}var v=function(s){var f=s!==!0,m=e();if(!o[g]||r&&!r(g))return o[g]=null,a&&a(i-_\/((m-d)\/n),g,!1),void 0;if(f)for(var y=Math.round((m-u)\/(n\/i))-1,b=0;Math.min(y,4)>b;b++)v(!0),_++;l&&(p=(m-d)\/l,p>1&&(p=1));var S=h?h(p):p;t(S,m,f)!==!1&&1!==p||!f?f&&(u=m,core.effect.Animate.requestAnimationFrame(v,c)):(o[g]=null,a&&a(i-_\/((m-d)\/n),g,1===p||null==l))};return o[g]=!0,core.effect.Animate.requestAnimationFrame(v,c),g}}})(window);var ZyngaScroller;(function(){var t=function(){};ZyngaScroller=function(e,i){this.__callback=e,this.options={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:t,penetrationDeceleration:.03,penetrationAcceleration:.08};for(var n in i)this.options[n]=i[n]};var e=function(t){return Math.pow(t-1,3)+1},i=function(t){return 1>(t\/=.5)?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},n={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(t,e,i,n){var o=this;t===+t&&(o.__clientWidth=t),e===+e&&(o.__clientHeight=e),i===+i&&(o.__contentWidth=i),n===+n&&(o.__contentHeight=n),o.__computeScrollMax(),o.scrollTo(o.__scrollLeft,o.__scrollTop,!0)},setPosition:function(t,e){var i=this;i.__clientLeft=t||0,i.__clientTop=e||0},setSnapSize:function(t,e){var i=this;i.__snapWidth=t,i.__snapHeight=e},activatePullToRefresh:function(t,e,i,n){var o=this;o.__refreshHeight=t,o.__refreshActivate=e,o.__refreshDeactivate=i,o.__refreshStart=n},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var t=this;t.__refreshActive=!1,t.__refreshDeactivate&&t.__refreshDeactivate(),t.scrollTo(t.__scrollLeft,t.__scrollTop,!0)},getValues:function(){var t=this;return{left:t.__scrollLeft,top:t.__scrollTop,zoom:t.__zoomLevel}},getScrollMax:function(){var t=this;return{left:t.__maxScrollLeft,top:t.__maxScrollTop}},zoomTo:function(t,e,i,n,o){var s=this;if(!s.options.zooming)throw Error(\"Zooming is not enabled!\");o&&(s.__zoomComplete=o),s.__isDecelerating&&(core.effect.Animate.stop(s.__isDecelerating),s.__isDecelerating=!1);var r=s.__zoomLevel;null==i&&(i=s.__clientWidth\/2),null==n&&(n=s.__clientHeight\/2),t=Math.max(Math.min(t,s.options.maxZoom),s.options.minZoom),s.__computeScrollMax(t);var a=(i+s.__scrollLeft)*t\/r-i,l=(n+s.__scrollTop)*t\/r-n;a>s.__maxScrollLeft?a=s.__maxScrollLeft:0>a&&(a=0),l>s.__maxScrollTop?l=s.__maxScrollTop:0>l&&(l=0),s.__publish(a,l,t,e)},zoomBy:function(t,e,i,n,o){var s=this;s.zoomTo(s.__zoomLevel*t,e,i,n,o)},scrollTo:function(t,e,i,n){var o=this;if(o.__isDecelerating&&(core.effect.Animate.stop(o.__isDecelerating),o.__isDecelerating=!1),null!=n&&n!==o.__zoomLevel){if(!o.options.zooming)throw Error(\"Zooming is not enabled!\");t*=n,e*=n,o.__computeScrollMax(n)}else n=o.__zoomLevel;o.options.scrollingX?o.options.paging?t=Math.round(t\/o.__clientWidth)*o.__clientWidth:o.options.snapping&&(t=Math.round(t\/o.__snapWidth)*o.__snapWidth):t=o.__scrollLeft,o.options.scrollingY?o.options.paging?e=Math.round(e\/o.__clientHeight)*o.__clientHeight:o.options.snapping&&(e=Math.round(e\/o.__snapHeight)*o.__snapHeight):e=o.__scrollTop,t=Math.max(Math.min(o.__maxScrollLeft,t),0),e=Math.max(Math.min(o.__maxScrollTop,e),0),t===o.__scrollLeft&&e===o.__scrollTop&&(i=!1),o.__publish(t,e,n,i)},scrollBy:function(t,e,i){var n=this,o=n.__isAnimating?n.__scheduledLeft:n.__scrollLeft,s=n.__isAnimating?n.__scheduledTop:n.__scrollTop;n.scrollTo(o+(t||0),s+(e||0),i)},doMouseZoom:function(t,e,i,n){var o=this,s=t>0?.97:1.03;return o.zoomTo(o.__zoomLevel*s,!1,i-o.__clientLeft,n-o.__clientTop)},doTouchStart:function(t,e){if(null==t.length)throw Error(\"Invalid touch list: \"+t);if(e instanceof Date&&(e=e.valueOf()),\"number\"!=typeof e)throw Error(\"Invalid timestamp value: \"+e);var i=this;i.__interruptedAnimation=!0,i.__isDecelerating&&(core.effect.Animate.stop(i.__isDecelerating),i.__isDecelerating=!1,i.__interruptedAnimation=!0),i.__isAnimating&&(core.effect.Animate.stop(i.__isAnimating),i.__isAnimating=!1,i.__interruptedAnimation=!0);var n,o,s=1===t.length;s?(n=t[0].pageX,o=t[0].pageY):(n=Math.abs(t[0].pageX+t[1].pageX)\/2,o=Math.abs(t[0].pageY+t[1].pageY)\/2),i.__initialTouchLeft=n,i.__initialTouchTop=o,i.__zoomLevelStart=i.__zoomLevel,i.__lastTouchLeft=n,i.__lastTouchTop=o,i.__lastTouchMove=e,i.__lastScale=1,i.__enableScrollX=!s&&i.options.scrollingX,i.__enableScrollY=!s&&i.options.scrollingY,i.__isTracking=!0,i.__didDecelerationComplete=!1,i.__isDragging=!s,i.__isSingleTouch=s,i.__positions=[]},doTouchMove:function(t,e,i){if(null==t.length)throw Error(\"Invalid touch list: \"+t);if(e instanceof Date&&(e=e.valueOf()),\"number\"!=typeof e)throw Error(\"Invalid timestamp value: \"+e);var n=this;if(n.__isTracking){var o,s;2===t.length?(o=Math.abs(t[0].pageX+t[1].pageX)\/2,s=Math.abs(t[0].pageY+t[1].pageY)\/2):(o=t[0].pageX,s=t[0].pageY);var r=n.__positions;if(n.__isDragging){var a=o-n.__lastTouchLeft,l=s-n.__lastTouchTop,h=n.__scrollLeft,c=n.__scrollTop,d=n.__zoomLevel;if(null!=i&&n.options.zooming){var u=d;if(d=d\/n.__lastScale*i,d=Math.max(Math.min(d,n.options.maxZoom),n.options.minZoom),u!==d){var p=o-n.__clientLeft,_=s-n.__clientTop;h=(p+h)*d\/u-p,c=(_+c)*d\/u-_,n.__computeScrollMax(d)}}if(n.__enableScrollX){h-=a*this.options.speedMultiplier;var g=n.__maxScrollLeft;(h>g||0>h)&&(n.options.bouncing?h+=a\/2*this.options.speedMultiplier:h=h>g?g:0)}if(n.__enableScrollY){c-=l*this.options.speedMultiplier;var f=n.__maxScrollTop;(c>f||0>c)&&(n.options.bouncing?(c+=l\/2*this.options.speedMultiplier,n.__enableScrollX||null==n.__refreshHeight||(!n.__refreshActive&&-n.__refreshHeight>=c?(n.__refreshActive=!0,n.__refreshActivate&&n.__refreshActivate()):n.__refreshActive&&c>-n.__refreshHeight&&(n.__refreshActive=!1,n.__refreshDeactivate&&n.__refreshDeactivate()))):c=c>f?f:0)}r.length>60&&r.splice(0,30),r.push(h,c,e),n.__publish(h,c,d)}else{var m=n.options.locking?3:0,v=5,y=Math.abs(o-n.__initialTouchLeft),b=Math.abs(s-n.__initialTouchTop);n.__enableScrollX=n.options.scrollingX&&y>=m,n.__enableScrollY=n.options.scrollingY&&b>=m,r.push(n.__scrollLeft,n.__scrollTop,e),n.__isDragging=(n.__enableScrollX||n.__enableScrollY)&&(y>=v||b>=v),n.__isDragging&&(n.__interruptedAnimation=!1)}n.__lastTouchLeft=o,n.__lastTouchTop=s,n.__lastTouchMove=e,n.__lastScale=i}},doTouchEnd:function(t){if(t instanceof Date&&(t=t.valueOf()),\"number\"!=typeof t)throw Error(\"Invalid timestamp value: \"+t);var e=this;if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging)if(e.__isDragging=!1,e.__isSingleTouch&&e.options.animating&&100>=t-e.__lastTouchMove){for(var i=e.__positions,n=i.length-1,o=n,s=n;s>0&&i[s]>e.__lastTouchMove-100;s-=3)o=s;if(o!==n){var r=i[n]-i[o],a=e.__scrollLeft-i[o-2],l=e.__scrollTop-i[o-1];e.__decelerationVelocityX=a\/r*(1e3\/60),e.__decelerationVelocityY=l\/r*(1e3\/60);var h=e.options.paging||e.options.snapping?4:1;(Math.abs(e.__decelerationVelocityX)>h||Math.abs(e.__decelerationVelocityY)>h)&&(e.__refreshActive||e.__startDeceleration(t))}else e.options.scrollingComplete()}else t-e.__lastTouchMove>100&&e.options.scrollingComplete();e.__isDecelerating||(e.__refreshActive&&e.__refreshStart?(e.__publish(e.__scrollLeft,-e.__refreshHeight,e.__zoomLevel,!0),e.__refreshStart&&e.__refreshStart()):((e.__interruptedAnimation||e.__isDragging)&&e.options.scrollingComplete(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0,e.__zoomLevel),e.__refreshActive&&(e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate()))),e.__positions.length=0}},__publish:function(t,n,o,s){var r=this,a=r.__isAnimating;if(a&&(core.effect.Animate.stop(a),r.__isAnimating=!1),s&&r.options.animating){r.__scheduledLeft=t,r.__scheduledTop=n,r.__scheduledZoom=o;var l=r.__scrollLeft,h=r.__scrollTop,c=r.__zoomLevel,d=t-l,u=n-h,p=o-c,_=function(t,e,i){i&&(r.__scrollLeft=l+d*t,r.__scrollTop=h+u*t,r.__zoomLevel=c+p*t,r.__callback&&r.__callback(r.__scrollLeft,r.__scrollTop,r.__zoomLevel))},g=function(t){return r.__isAnimating===t},f=function(t,e,i){e===r.__isAnimating&&(r.__isAnimating=!1),(r.__didDecelerationComplete||i)&&r.options.scrollingComplete(),r.options.zooming&&(r.__computeScrollMax(),r.__zoomComplete&&(r.__zoomComplete(),r.__zoomComplete=null))};r.__isAnimating=core.effect.Animate.start(_,g,f,r.options.animationDuration,a?e:i)}else r.__scheduledLeft=r.__scrollLeft=t,r.__scheduledTop=r.__scrollTop=n,r.__scheduledZoom=r.__zoomLevel=o,r.__callback&&r.__callback(t,n,o),r.options.zooming&&(r.__computeScrollMax(),r.__zoomComplete&&(r.__zoomComplete(),r.__zoomComplete=null))},__computeScrollMax:function(t){var e=this;null==t&&(t=e.__zoomLevel),e.__maxScrollLeft=Math.max(e.__contentWidth*t-e.__clientWidth,0),e.__maxScrollTop=Math.max(e.__contentHeight*t-e.__clientHeight,0)},__startDeceleration:function(){var t=this;if(t.options.paging){var e=Math.max(Math.min(t.__scrollLeft,t.__maxScrollLeft),0),i=Math.max(Math.min(t.__scrollTop,t.__maxScrollTop),0),n=t.__clientWidth,o=t.__clientHeight;t.__minDecelerationScrollLeft=Math.floor(e\/n)*n,t.__minDecelerationScrollTop=Math.floor(i\/o)*o,t.__maxDecelerationScrollLeft=Math.ceil(e\/n)*n,t.__maxDecelerationScrollTop=Math.ceil(i\/o)*o}else t.__minDecelerationScrollLeft=0,t.__minDecelerationScrollTop=0,t.__maxDecelerationScrollLeft=t.__maxScrollLeft,t.__maxDecelerationScrollTop=t.__maxScrollTop;var s=function(e,i,n){t.__stepThroughDeceleration(n)},r=t.options.snapping?4:.1,a=function(){var e=Math.abs(t.__decelerationVelocityX)>=r||Math.abs(t.__decelerationVelocityY)>=r;return e||(t.__didDecelerationComplete=!0),e},l=function(){t.__isDecelerating=!1,t.__didDecelerationComplete&&t.options.scrollingComplete(),t.scrollTo(t.__scrollLeft,t.__scrollTop,t.options.snapping)};t.__isDecelerating=core.effect.Animate.start(s,a,l)},__stepThroughDeceleration:function(t){var e=this,i=e.__scrollLeft+e.__decelerationVelocityX,n=e.__scrollTop+e.__decelerationVelocityY;if(!e.options.bouncing){var o=Math.max(Math.min(e.__maxDecelerationScrollLeft,i),e.__minDecelerationScrollLeft);o!==i&&(i=o,e.__decelerationVelocityX=0);var s=Math.max(Math.min(e.__maxDecelerationScrollTop,n),e.__minDecelerationScrollTop);s!==n&&(n=s,e.__decelerationVelocityY=0)}if(t?e.__publish(i,n,e.__zoomLevel):(e.__scrollLeft=i,e.__scrollTop=n),!e.options.paging){var r=.95;e.__decelerationVelocityX*=r,e.__decelerationVelocityY*=r}if(e.options.bouncing){var a=0,l=0,h=e.options.penetrationDeceleration,c=e.options.penetrationAcceleration;e.__minDecelerationScrollLeft>i?a=e.__minDecelerationScrollLeft-i:i>e.__maxDecelerationScrollLeft&&(a=e.__maxDecelerationScrollLeft-i),e.__minDecelerationScrollTop>n?l=e.__minDecelerationScrollTop-n:n>e.__maxDecelerationScrollTop&&(l=e.__maxDecelerationScrollTop-n),0!==a&&(0>=a*e.__decelerationVelocityX?e.__decelerationVelocityX+=a*h:e.__decelerationVelocityX=a*c),0!==l&&(0>=l*e.__decelerationVelocityY?e.__decelerationVelocityY+=l*h:e.__decelerationVelocityY=l*c)}}};for(var o in n)ZyngaScroller.prototype[o]=n[o]})();;\nfunction Creative(t,e,i,n,o,s,r,a,h,l){if(t instanceof Creative)throw\"This JSON has already been unfreezed. We do it inline, to improve performance. Duplicate it yourself before unfreezing, if you need to use it again.\";var c=extend({adapter:s,runtimeParams:e||{},openWebsiteOverrideUrls:a,getAppOverrideUrls:h},r);return t=Freezer.unfreeze(t,window,c),t.instantiation=randInt(),t.batcher=new Batcher,t.trackingCenter=i,t.aggregatorTracking=n,t.experiments=o,t.brand=l,t.platformAdvId=e.platformAdvId,t.platformAdvIdTrackingLimited=e.platformAdvIdTrackingLimited,t}Creative.toString=function(){return\"[Clazz Creative]\"},Creative.prototype.toString=function(){return\"[Creative \"+this.name+\"]\"},window.creative=null,extend(Creative.prototype,EventEmitter),Creative.init=function(t,e,i,n,o,s,r,a,h,l){if(window.creative)throw\"creative is a singleton and was already initialized.\";Logger.initFromRuntimeParams(e),window.creative=new Creative(t,e,i,n,o,s,r,a,h,l)},Creative.prototype._getRuntimeParamsWithPrefix=function(t){var e={};for(var i in this.runtimeParams)0===i.indexOf(t)&&(e[i.slice(t.length)]=this.runtimeParams[i]);return e},Object.defineProperties(Creative.prototype,{sessionId:{enumerable:!0,get:function(){return this.runtimeParams.sessionId}},placementId:{enumerable:!0,get:function(){return this.runtimeParams.placementId||null}},dataURIsEnabled:{enumerable:!1,get:function(){return 1==this.runtimeParams.dataURIsEnabled}},secure:{enumerable:!0,get:function(){return 1==this.runtimeParams.secure}},userParams:{enumerable:!0,get:function(){return this._getRuntimeParamsWithPrefix(\"user.\")}}}),Creative.prototype.awake=function(){function t(e,i,n,o){e.forEach(function(e){e.parentUnit=o,e.parentScreen=n,e.parentContainer=i;var s=e.getNestedContainers();s.forEach(function(i){i.parentUnit=o,i.parentScreen=n,i.parentObject=e,t(i.objects,i,n,o)})})}var e=this;for(var i in e.units){var n=e.units[i];n.name=i;var o=[n.master].concat(n.screens);n.loadingScreen&&(o=[n.loadingScreen].concat(o)),o.forEach(function(e){e.parentUnit=n,t(e.objects,e,e,n)})}},Creative.prototype.track=function(t,e){this.trackingCenter.track(t,e)},Creative.prototype.wrapRedirectPageUrl=function(t,e){return this.trackingCenter.wrapRedirectPageUrl(t,e)},Creative.prototype.wrapTentativeRedirectPageUrl=function(t,e,i){return this.trackingCenter.wrapTentativeRedirectPageUrl(t,e,i)},Object.defineProperty(Creative.prototype,\"sdk\",{get:function(){return this.adapter},enumerable:!0}),Creative._throw=function(t){throw t},Creative.prototype.getUserInteracted=function(){return 1==this.runtimeParams.userInteracted},Creative.trackCustomEventAction=function(t,e,i){t.track({name:\"custom\",label:e.name},i)},Creative.prototype.trackCreativeLoaded=function(t){this.track({name:\"creativeLoaded\",viewability00Measurable:t(\"00\"),viewability501Measurable:t(\"501\")})},Creative.prototype.createUserLocation=function(t){return\"undefined\"!=typeof UserLocation?new UserLocation({lat:this.runtimeParams.gpsLat,lng:this.runtimeParams.gpsLng},t):void 0},Creative.prototype.getPageUrl=function(t){return(this.secure?this.creativeUrl:this.insecureCreativeUrl)+t+\"?base64json=\"+encodeURIComponent(btoa(to_utf8(JSON.stringify(this.runtimeParams))))},Creative.prototype.shouldClickThroughToNewWindow=function(t){var e,i=creative.supportedDeviceTypes.indexOf(\"Desktop\")>=0;e=[\"same\",\"new\"].indexOf(this.runtimeParams.preferredClickThroughWindow)>=0?this.runtimeParams.preferredClickThroughWindow:i?\"new\":\"same\";var n=t&&t.inUserInitiatedIteration;return\"new\"==e&&(n||i)};;\nfunction Interstitial(){}inherit(Interstitial,Creative),Interstitial.toString=function(){return\"[Clazz Interstitial]\"},Interstitial.prototype.toString=function(){return\"[Interstitial \"+this.name+\"]\"},Interstitial.prototype.awake=function(){Interstitial.uber.awake.call(this),this.units.banner.dismissAction=function(t,e,i){t.track({name:\"creativeDismissed\"}),creative.adapter.dismiss(i,e)},this.units.banner.userLocation=this.createUserLocation(!0)};;\nvar Kernel={};Kernel.toString=function(){return\"[Clazz Kernel]\"},Kernel.runInParallelAction=function(t,e,i){e.actions.waitForEach(function(e,i){e(t,i)},i)},Kernel.runInBackgroundAction=function(t,e,i){e.action&&e.action(t,noop),i()},Kernel.runInSequenceAction=function(t,e,i){for(var n=i,o=e.actions.length-1;o>=0;o--)n=function(e,i){return function(){i(t,e)}}(n,e.actions[o]);n()},Kernel.onceAction=function(t,e){e.caller.wasExecutedOnce||(e.caller.wasExecutedOnce=!0,(e.action||nullai)(t))},Kernel.loopAction=function(t,e,i){function n(){return 0==o?i():(-1!=o&&o--,(e.action||nullai)(t,n),void 0)}var o=e.repeat;n()},Kernel.sleepAction=function(t,e,i){setTimeout(i,e.duration)},Kernel.executeJavascriptAction=function(t,e,i){try{var n=t.initiator,o=t.screen.parentUnit,r=t.screen,s=Function(\"ctx\",\"c\",\"unit\",\"screen\",e.code);s.call(n,t,i,o,r)}catch(a){console.error(a.message+\"\\n\"+a.stack)}},Kernel.randomAction=function(t,e,i){var n=0;if(e.outcomes.forEach(function(t){n+=t.weight}),!n)return i();for(var o=Math.random()*n,r=0;e.outcomes.length>r;r++){var s=e.outcomes[r];if(o-=s.weight,0>o)return(s.action||nullai)(t,i)}},Kernel.bestAction=function(t,e,i){var n=creative.experiments.get(\"Best\",[creative.id,e.experimentName]);n.trackExposure();var o=e.outcomes.filter(function(t){return t.experimentVariant==n.chosenVariant})[0];(o.action||nullai)(t,i)},Kernel.trackBestVariantSuccessAction=function(t,e,i){var n=creative.experiments.get(\"Best\",[creative.id,e.experimentName]);n.trackSuccess(),i()};;\n;\nfunction View(){}extend(View.prototype,EventEmitter),View.prototype.awake=function(){this.node=null,this._loadingCount=null,this._waitingForLoadCallbacks=[];var t=this;this.incrementLoadingCount=function(){if(t.loaded)throw\"Starting loads after the view has already finished loading?\";t._loadingCount++},this.decrementLoadingCount=function(){if(!t.loading)throw\"decrementLoadingCount called while not loading!\";if(t._loadingCount--,0===t._loadingCount){t.finishedLoading();for(var e=t._waitingForLoadCallbacks,i=0;e.length>i;i++)e[i]();t._waitingForLoadCallbacks=[]}},this.preloadImage=function(e,i){if(!(e instanceof File))throw\"file is not a File\";t.incrementLoadingCount(),e.getDataUri(function(e){var n=new Image;n.src=e,n.onload=n.onerror=function(){n.onload=n.onerror=null,i&&i(n),t.decrementLoadingCount()}})},this.hacks={}},View.prototype.finishedLoading=function(){this.emit(\"loaded\")},Object.defineProperty(View.prototype,\"loaded\",{get:function(){return this.node&&!this.loading}}),Object.defineProperty(View.prototype,\"loading\",{get:function(){return this._loadingCount>0}}),View.prototype.createNode=function(){var t=document.createElement(\"div\");this.localId&&(t.id=\"celtra-object-\"+this.localId);for(var e=this.constructor;e;e=e.uber?e.uber.constructor:void 0)t.className+=\" celtra\"+e.name.replace(\/[A-Z]\/g,function(t){return\"-\"+t.toLowerCase()});return t},View.prototype.getNode=function(t){return this.loaded?t&&setTimeout(t,0):(t&&this._waitingForLoadCallbacks.push(t),this.node||(this.incrementLoadingCount(),this.node=this.createNode(),setTimeout(this.decrementLoadingCount,0))),this.node};;\nfunction CreativeUnit(){}inherit(CreativeUnit,View),CreativeUnit.DEBUG_EXTRA_PHASE_DELAY=0,CreativeUnit.IGNORABLES=[\"INPUT\",\"SELECT\",\"TEXTAREA\"],CreativeUnit.toString=function(){return\"[Clazz CreativeUnit]\"},CreativeUnit.prototype.toString=function(){return\"[CreativeUnit \"+this.name+\" (\"+this.localId+\")]\"},Object.defineProperty(CreativeUnit.prototype,\"size\",{get:function(){if(\"responsive\"===this.sizing){if(this.screenContainer&&0!==this.screenContainer.offsetWidth&&0!==this.screenContainer.offsetHeight)return{width:this.screenContainer.offsetWidth,height:this.screenContainer.offsetHeight};throw Error(\"Cannot do that Dave.\")}return{width:this.layoutCurrent.unitSize.width,height:this.layoutCurrent.unitSize.height}},set:function(){}}),Object.defineProperty(CreativeUnit.prototype,\"sizeAvailable\",{get:function(){return\"responsive\"===this.sizing?this.screenContainer&&0!==this.screenContainer.offsetWidth&&0!==this.screenContainer.offsetHeight:!0}}),Object.defineProperty(CreativeUnit.prototype,\"unitAlignment\",{get:function(){return this.layoutCurrent.unitAlignment===void 0?{}:this.layoutCurrent.unitAlignment}}),Object.defineProperty(CreativeUnit.prototype,\"layoutCurrent\",{get:function(){return this.layouts[this.layoutCurrentIndex]}}),Object.defineProperty(CreativeUnit.prototype,\"layoutCurrentIndex\",{get:function(){var t=0,e=0===creative.adapter.orientation%180?\"portrait\":\"landscape\";if(\"fixed\"===this.sizing)t=1===this.layouts.length?0:\"portrait\"===e?\"portrait\"===this.layouts[0].orientation?0:1:\"landscape\"===this.layouts[0].orientation?0:1;else{for(var i,n=0;this.layouts.length>n;n++){var o=this.layouts[n];(\"independent\"===this.orientation||e===o.orientation)&&o.minSize.height<this.size.height&&o.minSize.width<this.size.width&&(i?o.minSize.height>this.layouts[t].minSize.height&&(i=n):i=n)}i&&(t=i)}return this._previousLayoutIndex!==t&&this._previousLayoutIndex!==void 0&&this.emit(\"layoutChanged\"),this._previousLayoutIndex=t,t}}),Object.defineProperty(CreativeUnit.prototype,\"hasOverflow\",{get:function(){return this.screens.concat([this.master]).filter(function(t){return t.showOverflow}).length>0}}),CreativeUnit.prototype.awake=function(){var t=this;CreativeUnit.uber.awake.call(this),this.shown=!1,this.currentScreen=null,this.visibleScreen=null,this._masterShown=!1,this.screens.forEach(function(t){t.objects.forEach(function(t){t.zIndex+=1e4})}),this.backgroundColor===void 0&&(this.backgroundColor=\"#000000\"),this.usePlaceboBar===void 0&&(this.usePlaceboBar=!1),this.showCloseButton===void 0&&(this.showCloseButton=!1),this.alignBackButtonHorizontal===void 0&&(this.alignBackButtonHorizontal=\"left\"),this.on(\"_firstScreenLoaded\",function(){t.placeboBar&&(t.placeboBar.parentNode.removeChild(t.placeboBar),t.placeboBar=null),this._setVisibleScreen(this.screens[0])}.bind(this)),this.onAll(\"_firstScreenLoaded _unitFirstShown\",function(){this.goToScreen(this.screens[0])}.bind(this)),this.triggerOrientationChange=this.triggerOrientationChange.bind(this),this.updateWindowMetrics=this.updateWindowMetrics.bind(this),defer(function(){creative.adapter.on(\"orientationchange\",t.triggerOrientationChange),creative.adapter.on(\"placementsUpdated\",t.updateWindowMetrics)}),this.hacks.triggerBlurWhenTappingOutsideOfInputs=ios(),this._isRendering=!1},CreativeUnit.prototype.enterRenderTree=function(){if(!this._isRendering&&(this._isRendering=!0,this.updateWindowMetrics(),this.master&&(this.master.loaded?defer(this.master.enterRenderTree.bind(this.master)):this.once(\"_firstScreenLoaded\",this.master.enterRenderTree.bind(this.master))),this.visibleScreen&&defer(this.visibleScreen.enterRenderTree.bind(this.visibleScreen)),this.hacks.triggerBlurWhenTappingOutsideOfInputs)){var t=document.createElement(\"input\");t.style.display=\"block\",t.style.position=\"relative\",t.style.opacity=\"0\",t.style.top=\"0px\",t.style.zIndex=\"0\",t.style.width=t.style.height=\"0px\",this.node.appendChild(t),attach(this.node,\"touchstart\",function(e){-1==[\"INPUT\",\"TEXTAREA\",\"SELECT\"].indexOf(e.target.nodeName)&&null!=this.lastInputElementFocused&&(t.focus(),t.blur())}.bind(this),!0),attach(this.node,\"focus\",function(t){[\"INPUT\",\"TEXTAREA\",\"SELECT\"].indexOf(t.target.nodeName)>-1&&(this.lastInputElementFocused=t.target)}.bind(this),!0),attach(this.node,\"blur\",function(t){[\"INPUT\",\"TEXTAREA\",\"SELECT\"].indexOf(t.target.nodeName)>-1&&(this.lastInputElementFocused=null)}.bind(this),!0)}},CreativeUnit.prototype.exitRenderTree=function(){this._isRendering&&(this._isRendering=!1,this.master&&this.master.exitRenderTree(),this.visibleScreen&&this.visibleScreen.exitRenderTree())},CreativeUnit.prototype.show=function(){var t=this;this.loaded||Creative._throw(\"Cannot show the unit before it has finished loading.\"),this.shown&&Creative._throw(\"The unit is already shown.\"),this.node.parentNode||Creative._throw(\"Creative unit must be added to DOM before show() is called. Animations will start on show().\"),Logger(\"unit\").log(\"Showing \"+this),this.shown=!0,this.shownBefore||(this.shownBefore=!0,this.placeboBar&&this.placeboBar.start(),this._orientationLockIsOn?this._emitUnitFirstShownAfterOrientationPrompt=!0:this.emit(\"_unitFirstShown\"),setTimeout(function(){Tapper(t.node)},0),attach(t.node,\"touchstart\",function(e){if(!t.swipeable){for(var i=e.target;1!=i.nodeType;)i=i.parentNode;-1==CreativeUnit.IGNORABLES.indexOf(i.nodeName)&&e.preventDefault()}},!1),attach(t.node,\"touchmove\",function(e){t.swipeable||e.preventDefault()},!1)),this.emit(\"shown\")},CreativeUnit.prototype.hide=function(){this.shown||Creative._throw(\"The unit is not shown.\"),Logger(\"unit\").log(\"Hiding \"+this),this.shown=!1,this.emit(\"hidden\")},CreativeUnit.prototype.createNode=function(){Logger(\"unit\").log(\"Starting to load \"+this),creative.experiments.get(\"TrackingLoadingTimes\")&&this.once(\"_firstScreenLoaded\",creative.aggregatorTracking.trackAggregatorMagicTriplet(\"unitLoad\",{unitName:this.name,isPhone:!desktop()&&!tablet()},3e4));var t=this.unitDiv=CreativeUnit.uber.createNode.call(this),e=new CStyler(t);if(t.id=\"celtra-\"+this.name.replace(\/[A-Z]\/g,function(t){return\"-\"+t.toLowerCase()}),e.background=this.backgroundColor,e.overflow=this.master.showOverflow?\"visible\":\"hidden\",this.screenContainer=document.createElement(\"div\"),this.screenContainerStyle=new CStyler(this.screenContainer),this.screenContainer.className=\"celtra-screen-container\",this.screenContainerStyle.position=\"absolute\",t.appendChild(this.screenContainer),this.screenHolder=document.createElement(\"div\"),this.screenHolderStyle=new CStyler(this.screenHolder),this.screenHolder.className=\"celtra-screen-holder\",this.screenHolderStyle.width=\"100%\",this.screenHolderStyle.height=\"100%\",this.screenContainer.appendChild(this.screenHolder),e.position=\"absolute\",this._updateSize(),this.usePlaceboBar){var i=this.loadingScreen&&this.loadingScreen.loaderColor||\"white\";this.placeboBar=new PlaceboBar(5e3,.9,200,i),this.screenContainer.appendChild(this.placeboBar)}if(this.showCloseButton){if(this.closeAction||Creative._throw(\"Close button requested, but no close action defined?\"),this.closeButtonType&&\"text\"===this.closeButtonType){var n=document.createElement(\"div\"),o=new CStyler(n);n.className=\"celtra-close-button touchable celtra-close-button-text\",n.textContent=this.closeButtonText,o.color=this.closeButtonTextColor,this.unitDiv.appendChild(n)}else{var n=document.createElement(\"img\"),o=new CStyler(n),r=document.createElement(\"img\"),s=new CStyler(r);this.closeButtonUp?(this.closeButtonDown||(this.closeButtonDown=this.closeButtonUp),this.closeButtonWidth&&this.closeButtonHeight&&(o.width=s.width=this.closeButtonWidth+\"px\",o.height=s.height=this.closeButtonHeight+\"px\")):(this.closeButtonUp=new File(\"runner\/clazzes\/CreativeUnit\/close-up.png\"),this.closeButtonDown=new File(\"runner\/clazzes\/CreativeUnit\/close-down.png\")),n.className=\"celtra-close-button touchable celtra-close-button-up\",this.preloadImage(this.closeButtonUp,function(t){n.src=t.src}),r.className=\"celtra-close-button celtra-close-button-down\",this.preloadImage(this.closeButtonDown,function(t){r.src=t.src}),this.closeButtonImage=n,this.closeButtonImagePressed=r,this.unitDiv.appendChild(this.closeButtonImage),this.unitDiv.appendChild(this.closeButtonImagePressed)}attach(n,\"tap\",function(){var t=this.currentScreen||this.visibleScreen;this.closeAction(t?new ActionContext(t):null,{},noop)}.bind(this),!1)}var a=[];a.push({name:\"loading\",fun:function(t){this.loadingScreen?this.loadingScreen.getNode(function(){setTimeout(function(){this._setVisibleScreen(this.loadingScreen),t(!0)}.bind(this),CreativeUnit.DEBUG_EXTRA_PHASE_DELAY)}.bind(this)):t(!1)}.bind(this)}),a.push({name:\"interactive\",fun:function(t){var e=2,i=function(){--e||setTimeout(function(){defer(this.emits(\"_firstScreenLoaded\")),t(!0)}.bind(this),CreativeUnit.DEBUG_EXTRA_PHASE_DELAY)}.bind(this);this.screens[0].getNode(i),this.master.getNode(i)}.bind(this)}),this.incrementLoadingCount();var h=!1,l=function(){h||Creative._throw(\"Unit still not ready to show after last phase?!\")};return a.reverse().forEach(function(t){var e=l;l=function(){Logger(\"unit\").log(\"Phase '\"+t.name+\"' started.\"),t.fun(function(i){Logger(\"unit\").log(\"Phase '\"+t.name+\"' finished, \"+(i?\"DID\":\"DID NOT\")+\" draw something.\"),i&&(h||(h=!0,this.decrementLoadingCount())),e()}.bind(this))}.bind(this)}.bind(this)),l(),creative.adapter.on(\"mediaStopRequested\",this.emits(\"mediaStopRequested\")),t},CreativeUnit.prototype._repositionCloseButton=function(t){function e(t,e,i){function n(t){return{left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}var o=n(i),r=n(e),s=n(t);s.left=r.left+r.width-s.width,s.top=r.top;var a=o.left<=s.left&&s.left+s.width-1<o.left+o.width&&o.top<=s.top&&s.top+s.height-1<o.top+o.height;return!a}if(this.closeButtonImage){var i;i=this.hasOverflow||this.orientationPrompt&&\"none\"!=this.orientationPromptStyle.display||e(this.closeButtonImage,this.screenContainer,this.unitDiv)?this.unitDiv:this.screenContainer;var n=this.closeButtonImage.parentNode;if(i!==n&&(n&&(n.removeChild(this.closeButtonImage),n.removeChild(this.closeButtonImagePressed)),i.appendChild(this.closeButtonImage),i.appendChild(this.closeButtonImagePressed)),window.navigator.userAgent.match(\/iP(hone|od)\/)&&ios(\"7\")&&creative.adapter.hasDeadZones){var o=offset(i).top,r=window.scrollY,s=0;20>o-r&&[90,-90].indexOf(t)>=0&&(s=110-(o-r)),this.closeButtonImage.style.top=this.closeButtonImagePressed.style.top=s+\"px\"}}},CreativeUnit.prototype.triggerOrientationChange=function(t){this.updateWindowMetrics(t),this.currentScreen&&this.currentScreen.triggerOrientationChange()},CreativeUnit.prototype.enableWrongOrientationPrompt=function(){if(this.unitDiv&&!this.orientationPrompt&&\"thumb\"!==creative.runtimeParams.purpose){this.orientationPrompt=document.createElement(\"img\"),this.orientationPromptStyle=new CStyler(this.orientationPrompt),this.orientationPromptStyle.cssText=\"display: none; position: absolute; left: 50%; top: 50%; z-index: 999999\";var t=this;if(this.orientationPromptImage)this.loaded||this.preloadImage(this.orientationPromptImage,function(e){var i=t.orientationPromptImage.width,n=t.orientationPromptImage.height,o=Math.round(i\/2),r=Math.round(n\/2);t.orientationPromptStyle.cssText+=\"margin-left: -\"+o+\"px; \"+\"margin-top: -\"+r+\"px; \"+\"width: \"+i+\"px; \"+\"height: \"+n+\"px;\",t.orientationPrompt.src=e.src});else{var e=\"tablet\",i=\"phone\"==e?400:640;this.orientationPromptStyle.cssText+=\"margin-left: -\"+i+\"px; margin-top: -\"+i+\"px;\",this.orientationPromptStyle.transformOrigin=\"50% 50%\",this.orientationPromptStyle.transform=\"scale(0.80)\",this.loaded||this.preloadImage(new File(\"runner\/rotate-screen_\"+e+\"_01.png\"),function(e){t.orientationPrompt.src=e.src})}this.unitDiv.appendChild(this.orientationPrompt)}},CreativeUnit.prototype._updateSize=function(){var t=function(t,e,i){var n=new CStyler(t);\"left\"==e?(n.left=\"0\",n.right=\"auto\"):\"right\"==e?(n.left=\"auto\",n.right=\"0\"):(n.left=\"50%\",n.marginLeft=\"-\"+this.size.width\/2+\"px\",n.right=\"auto\"),\"top\"==i?(n.top=\"0\",n.bottom=\"auto\"):\"bottom\"==i?(n.top=\"auto\",n.bottom=\"0\"):(n.top=\"50%\",n.marginTop=\"-\"+this.size.height\/2+\"px\",n.bottom=\"auto\")}.bind(this);if(this.unitDiv){var e=new CStyler(this.unitDiv);\"responsive\"===this.sizing?(e.width=\"100%\",e.height=\"100%\",this.screenContainerStyle.width=\"100%\",this.screenContainerStyle.height=\"100%\"):this.fillsContainer?(e.width=\"100%\",e.height=\"100%\",this.screenContainerStyle.width=this.size.width+\"px\",this.screenContainerStyle.height=this.size.height+\"px\",t(this.screenContainer,this.unitAlignment.horizontal,this.unitAlignment.vertical)):(e.width=this.size.width+\"px\",e.height=this.size.height+\"px\",t(this.unitDiv,this.unitAlignment.horizontal,this.unitAlignment.vertical),this.screenContainerStyle.width=\"100%\",this.screenContainerStyle.height=\"100%\"),this.emit(\"resize\")}},CreativeUnit.prototype.updateWindowMetrics=function(t,e,i){this._isRendering&&(this._updateSize(),t=t||creative.adapter.orientation,this._toggleWrongOrientationPrompt(t,e,i),this._repositionCloseButton(t,e,i))},CreativeUnit.prototype.setCorrectOrientation=function(t){this._correctOrientation=t},CreativeUnit.prototype._toggleWrongOrientationPrompt=function(t){if(this.orientationPrompt){t||(t=creative.adapter.orientation);var e=[0,180].indexOf(t)>=0?\"portrait\":\"landscape\",i=this.orientation;this._correctOrientation&&(i=this._correctOrientation),i!==e?(this.orientationPromptStyle.display=\"block\",this.orientationPrompt.offsetWidth,this._orientationLockIsOn!==!0&&this.emit(\"orientationLockChanged\",!0),this._orientationLockIsOn=!0):(this.orientationPromptStyle.display=\"none\",this._orientationLockIsOn!==!1&&this.emit(\"orientationLockChanged\",!1),this._orientationLockIsOn=!1,this._emitUnitFirstShownAfterOrientationPrompt&&(this._emitUnitFirstShownAfterOrientationPrompt=!1,this.emit(\"_unitFirstShown\")))}},CreativeUnit.prototype.finishedLoading=function(){CreativeUnit.uber.finishedLoading.call(this),Logger(\"unit\").log(\"Finished loading \"+this)},CreativeUnit.prototype.goToScreenAction=function(t,e,i){if(ios(\"7\")&&e.animation){var n=e.screen,o=new CStyler(n.getNode());n.showOverflow&&(o.transform=\"translatez(0)\"),this.goToScreen(n,e,function(){n.showOverflow&&(o.transform=\"none\"),i()})}else this.goToScreen(e.screen,e,i)},CreativeUnit.prototype.goToScreen=function(t,e,i){if(!this.shown){var n=Array.prototype.slice.apply(arguments);return this.once(\"shown\",function(){this.goToScreen.apply(this,n)}.bind(this)),void 0}var o=this,r=this.currentScreen;return\"function\"==typeof e&&(i=e,e=void 0),i=i||noop,e=e||{},this.goingToScreen?i():t&&r!==t?(this.goingToScreen=!0,t.triggerBeforeAppear(function(){o._setVisibleScreen(t,e,function(){o.goingToScreen=!1,o.currentScreen=t;var e=t.getNode(),n=o.master.getNode(),s=[e];n&&(s=s.concat(n)),o._masterShown||(o._masterShown=!0,o.master.emit(\"show\",r),o.master.enterRenderTree()),r&&(r.emit(\"hide\"),r.exitRenderTree()),t.emit(\"show\",r),t.enterRenderTree(),i(),setTimeout(function(){t.reachableScreens.concat(o.master.reachableScreens).forEach(function(t){t.getNode()})},0)})}),void 0):i()},CreativeUnit.prototype._setVisibleScreen=function(t,e,i){if(e=e||{},i=i||noop,this.visibleScreen==t)return i();this.visibleScreen=t;var n=t===this.loadingScreen;if(n&&t.loaded)this._screenTransition(t.getNode(),null,e,i);else if(t.loaded&&this.master.loaded)t.forceUpdateSize(),this.loadingScreen&&(this.loadingScreen.getNode().style.display=\"none\"),this._screenTransition(t.getNode(),this.master.getNode(),e,i);else{var o,r,s,a=function(){o--,o||this._screenTransition(r,s,e,i)};n?(r=this.loadingScreen.getNode(a.bind(this)),s=null,o=1):(r=t.getNode(a.bind(this)),s=this.master.getNode(a.bind(this)),o=2)}},CreativeUnit.prototype._screenTransition=function(t,e,i,n){t.style.display=\"none\",e&&(this._masterClone||this._createMasterClone(),this.screenHolder.appendChild(this._masterClone),e.parentNode||this.screenHolder.appendChild(e),this._masterClone.style.zIndex=e.style.zIndex=-1),t&&!t.parentNode&&this.screenHolder.appendChild(t),e&&(this._masterClone.style.display=\"block\",e.style.display=\"none\"),null!=this.currentScreen?(i.unitSize=extend({},this.size),ScreenTransition.run(this.currentScreen.node,this._masterClone,t,e,i,function(){e.style.display=\"block\",this._masterClone.display=\"none\",n()}.bind(this))):(e&&(e.style.display=\"block\",this._masterClone.style.display=\"none\"),t.style.display=\"block\",nextFrame(n))},CreativeUnit.prototype._createMasterClone=function(){return this._masterClone&&this._masterClone.parentNode&&this._masterClone.parentNode.removeChild(this._masterClone),this._masterClone=this.master.getNode().cloneNode(!0),this._masterClone.style.display=\"none\",this._masterClone.style.zIndex=-1,this._masterClone},CreativeUnit.prototype.alertAction=function(t,e,i){this.alert({message:e.text},i)},CreativeUnit.prototype.checkOrientationAction=function(t,e,i){var n,o=creative.adapter.orientation;0==o||180==o?n=e.onPortrait:(-90==o||90==o)&&(n=e.onLandscape),n?n(t,i):i()},CreativeUnit.prototype._processURLParams=function(t){return\"string\"!=typeof t?t:t=t.replace(\/%n\/g,randInt()).replace(\/%s\/g,creative.secure?\"https\":\"http\")},CreativeUnit.prototype.goToURLAction=function(t,e,i){var n=creative.openWebsiteOverrideUrls&&creative.openWebsiteOverrideUrls[e.reportLabel]||e.url;if(urlOpenId=randInt(),!n)return i();_stopAllMedia(),t.track({name:\"urlOpened\",url:n,label:e.reportLabel,urlOpenId:urlOpenId});var o=[];if(1==creative.brand.allowsCookies){var r=18e5,s=\"\/accountId=\"+creative.accountId+\"\/advertiserId=\"+creative.brandId+\"\/\";o=[{name:\"lastSessionId\",value:creative.trackingCenter._sessionId,maxAge:r,path:s},{name:\"lastUrlOpenId\",value:urlOpenId,maxAge:r,path:s}]}t.trackClickThrough(),creative.adapter.openBrowser(creative.wrapRedirectPageUrl(this._processURLParams(n),{cookies:o}),creative.shouldClickThroughToNewWindow(t)),i()},CreativeUnit.prototype.facebookURLAction=function(t,e,i){if(!e.url)return i();_stopAllMedia(),t.track({name:\"facebookShareAttempt\",url:e.url,label:e.reportLabel,trackable:!1}),t.trackClickThrough();var n=\"http:\/\/m.facebook.com\/sharer.php?u=\"+encodeURIComponent(e.url);creative.adapter.openBrowser(creative.wrapRedirectPageUrl(n),creative.shouldClickThroughToNewWindow(t)),i()},CreativeUnit.prototype.callURLAction=function(t,e,i){if(!e.url)return i();var n=this._processURLParams(e.url),o=new Image;o.onload=o.onerror=function(){i()},o.src=n},CreativeUnit.prototype.displayImageAction=function(t,e,i){if(!e.file)return i();var n=document.createElement(\"div\"),o=new CStyler(n);n.className=\"celtra-display-image-overlay touchable\",o.backgroundImage=\"url(\"+e.file.getUrl()+\")\",this.node.appendChild(n);var r=parseInt(window.getComputedStyle(n).getPropertyValue(\"width\"),10),s=parseInt(window.getComputedStyle(n).getPropertyValue(\"height\"),10);(e.file.meta.width>r||e.file.meta.height>s)&&(o.backgroundSize=\"contain\"),e.color&&(o.backgroundColor=e.color),attach(n,\"tap\",function(){n.parentNode.removeChild(n),i()},!1);var a=self.closeButton=document.createElement(\"div\");a.className=\"celtra-back-button touchable \"+this.alignBackButtonHorizontal,n.appendChild(a)},CreativeUnit.prototype.saveImageAction=function(t,e,i){if(!e.file)return i();var n=e.file.getUrl(),o=e.file.name,r=e.file.blobHash;if(t.track({name:\"imageSaveAttempted\",blobHash:r,label:e.reportLabel}),t.trackClickThrough(),creative.adapter.canSaveImage())creative.adapter.trackingCenter.flush(function(){creative.adapter.saveImage(n,o,i)});else{var s=new SaveImageDialog(creative.adapter,n);s.show(i)}},CreativeUnit.prototype.playSoundAction=function(t,e,i){if(!e.file)return i();var n=new Audio(e.file.getUrl());attach(n,\"ended\",function(){i()},!1),n.play()},CreativeUnit.prototype.playVideoInPlayerAction=function(t,e,i){return e.file?(videoContext=new VideoContext(t,e.file,e.reportLabel),videoContext.track({name:\"videoPlayAttempted\",videoPlayerMode:\"fullscreen\",trackable:creative.adapter.useFSVP}),creative.adapter.playVideoInPlayer(videoContext,function(n){var o=(n?e.onSuccess:e.onFailure)||nullai;o(t,i)}),void 0):i()},CreativeUnit.prototype.playVideoFromURLAction=function(t,e,i){return e.url?(_stopAllMedia(),videoContext=new VideoContext(t,new File(e.url),e.reportLabel),videoContext.track({name:\"videoPlayAttempted\",videoPlayerMode:\"fullscreen\",trackable:creative.adapter.useFSVP}),creative.adapter.playVideoInPlayer(videoContext,function(n){var o=(n?e.onSuccess:e.onFailure)||nullai;o(t,i)}),void 0):i()},CreativeUnit.prototype.vibrateAction=function(t,e,i){i()},CreativeUnit.prototype.getAppAction=function(t,e,i){var n=function(t){return RegExp(\"(^http(s)?:\/\/)|(^market:\/\/)\",\"i\").test(t)};_stopAllMedia();var o;if(creative.getAppOverrideUrls[e.reportLabel]?o=creative.getAppOverrideUrls[e.reportLabel]:ios()&&e.appStoreUrl?o=RegExp(\"^\\\\d+$\").test(e.appStoreUrl)?\"http:\/\/itunes.apple.com\/us\/app\/keynote\/id\"+e.appStoreUrl:(n(e.appStoreUrl)?\"\":\"http:\/\/\")+e.appStoreUrl:android()&&e.androidMarketAppId&&(o=n(e.androidMarketAppId)?e.androidMarketAppId:\"market:\/\/details?id=\"+e.androidMarketAppId),o){var r=2,s=function(){--r||creative.adapter.getApp(this._processURLParams(o))}.bind(this);t.track({name:\"storeOpened\",appUri:o,label:e.reportLabel},s),t.trackClickThrough(s)}i()},CreativeUnit.prototype.callPhoneAction=function(t,e,i){function n(){--o||creative.adapter.callPhone(e.number)}if(!e.number)return i();_stopAllMedia();var o=2;t.track({name:\"phoneCalled\",number:e.number,label:e.reportLabel},n),t.trackClickThrough(n),i()},CreativeUnit.prototype.expandAction=function(){console.error(\"Expand action is not available for this ad format or creative unit\")},CreativeUnit.prototype.findAll=function(t){function e(n){n.forEach(function(n){(t===void 0||n.name==t)&&i.push(n),n.getNestedContainers().forEach(function(t){e(t.objects)})})}var i=[];return this.screens.forEach(function(n){(t===void 0||n.title==t)&&i.push(n),e(n.objects)}),i},CreativeUnit.prototype.find=function(t){var e=this.findAll(t);return e.length>0?e[0]:null};var _stopAllMedia=function(){\"function\"==typeof creative.adapter._stopAllMedia&&creative.adapter._stopAllMedia()};;\nCreativeUnit.prototype.alert=function(t,e){function i(){c.parentNode&&s.node.removeChild(c),e()}var n,o,s=this,r=s.size.width,a=s.size.height,h=t.boxWidth||320,l=t.boxHeight||160;if(r>=h&&a>=l){var c=document.createElement(\"div\");c.setAttribute(\"id\",\"alert\");var d=document.createElement(\"div\");d.setAttribute(\"id\",\"alert-dark-overlay\"),c.appendChild(d);var u=document.createElement(\"div\");if(u.setAttribute(\"id\",\"alert-box\"),t.message&&\"\"!=t.message){var p=document.createElement(\"div\");p.setAttribute(\"id\",\"alert-message\"),p.innerHTML=t.message,u.appendChild(p)}var g=document.createElement(\"div\");g.setAttribute(\"id\",\"alert-ok\"),g.setAttribute(\"class\",\"no-margin-top\"),g.innerHTML=\"OK\",u.appendChild(g),attach(g,\"touchend\",i,!1),c.appendChild(u),s.node.appendChild(c),n=window.getComputedStyle(u),o=parseInt(n.height,10)+parseInt(n.paddingTop,10)+parseInt(n.paddingBottom,10)+2*parseInt(n.borderWidth,10),u.style.marginTop=-o\/2+\"px\",u.style.display=\"inline-block\"}else{var p,f=document.createElement(\"div\");f.innerHTML=t.message,p=document.all?f.innerText:f.textContent,alert(p),e()}},CreativeUnit.prototype.prompt=function(t,e){function i(t){13==t.keyCode&&(u.parentNode&&a.node.removeChild(u),e(y.value))}function n(){u.parentNode&&a.node.removeChild(u),e(y.value)}function o(){u.parentNode&&a.node.removeChild(u),e(null)}var s,r,a=this,h=a.size.width,l=a.size.height,c=t.boxWidth||320,d=t.boxHeight||190;if(h>=c&&l>=d){var u=document.createElement(\"div\");u.setAttribute(\"id\",\"alert\");var p=document.createElement(\"div\");p.setAttribute(\"id\",\"alert-dark-overlay\"),u.appendChild(p);var g=document.createElement(\"div\");if(g.setAttribute(\"id\",\"alert-box\"),t.title&&\"\"!=t.title){var f=document.createElement(\"h1\");f.setAttribute(\"id\",\"alert-title\"),f.innerHTML=t.title,g.appendChild(f)}if(t.title&&\"\"!=t.title&&t.message&&\"\"!=t.message){var m=document.createElement(\"hr\");m.setAttribute(\"id\",\"alert-dark-line\"),g.appendChild(m);var _=document.createElement(\"hr\");_.setAttribute(\"id\",\"alert-light-line\"),g.appendChild(_)}if(t.message&&\"\"!=t.message){var v=document.createElement(\"div\");v.setAttribute(\"id\",\"alert-message\"),v.innerHTML=t.message,g.appendChild(v)}var y=document.createElement(\"input\");y.setAttribute(\"id\",\"alert-input\"),y.value=t.defaultValue||\"\",g.appendChild(y),attach(y,\"keypress\",i);var b=document.createElement(\"div\");if(b.setAttribute(\"id\",\"alert-ok\"),b.innerHTML=\"OK\",g.appendChild(b),attach(b,\"touchend\",n,!1),t.showCancel){b.setAttribute(\"class\",\"with-cancel\");var S=document.createElement(\"div\");S.setAttribute(\"id\",\"alert-cancel\"),S.innerHTML=\"CANCEL\",g.appendChild(S),attach(S,\"touchend\",o,!1),attach(S,\"touchend\",o,!1)}u.appendChild(g),a.node.appendChild(u),s=window.getComputedStyle(g),r=parseInt(s.height,10)+parseInt(s.paddingTop,10)+parseInt(s.paddingBottom,10)+2*parseInt(s.borderWidth,10),g.style.marginTop=-r\/2+\"px\",g.style.display=\"inline-block\"}else{var v,C=document.createElement(\"div\");C.innerHTML=t.message,v=document.all?C.innerText:C.textContent;var w=prompt(v);e(w)}};;\nfunction ScreenObjectContainer(){}inherit(ScreenObjectContainer,View),ScreenObjectContainer.toString=function(){return\"[Clazz ScreenObjectContainer]\"},ScreenObjectContainer.prototype.toString=function(){return\"[ScreenObjectContainer \"+this.localId+\"]\"};;\nfunction Screen(){}inherit(Screen,ScreenObjectContainer),extend(Screen.prototype,TriggerHost),Screen.toString=function(){return\"[Clazz Screen]\"},Screen.prototype.toString=function(){return\"[Screen \"+this.localId+\" (name=\"+this.title+\")]\"},Object.defineProperty(Screen.prototype,\"name\",{get:function(){return this.title}}),Object.defineProperty(Screen.prototype,\"size\",{get:function(){return this.parentUnit.size}}),Object.defineProperty(Screen.prototype,\"sizeAvailable\",{get:function(){return this.parentUnit.sizeAvailable}}),Screen.prototype.awake=function(){ScreenObjectContainer.uber.awake.apply(this,arguments),this._isRendering=!1,this.appearedAtLeastOnce=!1,this._updateSize=this._updateSize.bind(this)},Screen.prototype.isLoadingScreen=function(){return this===this.parentUnit.loadingScreen},Screen.prototype.isMasterScreen=function(){return this===this.parentUnit.master},Screen.prototype.isNormalScreen=function(){return!this.isMasterScreen()&&!this.isLoadingScreen()},Screen.prototype.createNode=function(){Logger(\"unit\").log(\"Starting to load \"+this),!this.isLoadingScreen()&&creative.experiments.get(\"TrackingLoadingTimes\")&&this.once(\"loaded\",creative.aggregatorTracking.trackAggregatorMagicTriplet(\"screenLoad\",{unitName:this.parentUnit.name,screenIsFirstOnUnit:this===this.parentUnit.screens[0],isPhone:!desktop()&&!tablet()},3e4));var t=this,e=this.screenDiv=Screen.uber.createNode.call(this),i=new CStyler(e);return this._updateSize(),i.overflow=this.showOverflow?\"visible\":\"hidden\",this.objects.forEach(function(i){t.incrementLoadingCount(),e.appendChild(i.getNode(t.decrementLoadingCount))}),t.on(\"show\",function(e){var i=!t.appearedAtLeastOnce;t.appearedAtLeastOnce=!0,t!==t.parentUnit.loadingScreen&&t!==t.parentUnit.master&&new ActionContext(t).track({name:\"screenShown\",first:!e||e==t.parentUnit.loadingScreen}),i?t.fireTriggers(\"firstAppear\",null,function(){defer(function(){t.fireTriggers(\"appear\")})}):t.fireTriggers(\"appear\"),t.hasTriggers(\"shake\")&&(t.shakeListener||(t.shakeListener=new ShakeListener,t.on(\"hide\",function(){t.shakeListener.off(\"shake\",t.handleShake),t.shakeListener.stop()})),t.shakeListener.start(),t.handleShake=t.handleShake.bind(t),t.shakeListener.on(\"shake\",t.handleShake))}),e},Screen.prototype.enterRenderTree=function(){this._isRendering||(this._isRendering=!0,this._updateSize(),this.parentUnit.on(\"resize\",this._updateSize),this.emit(\"enteredRenderTree\"))},Screen.prototype.exitRenderTree=function(){this._isRendering&&(this._isRendering=!1,this.emit(\"exitedRenderTree\"),this.parentUnit.off(\"resize\",this._updateSize))},Screen.prototype._updateSize=function(){var t=this.screenDiv,e=new CStyler(t);\"responsive\"===this.parentUnit.sizing?(e.width=\"100%\",e.height=\"100%\"):(e.width=this.parentUnit.size.width+\"px\",e.height=this.parentUnit.size.height+\"px\"),this.emit(\"resize\")},Screen.prototype.forceUpdateSize=function(){this._updateSize(),this.objects.forEach(function(t){t._refreshDisplayState()})},Screen.prototype.handleShake=function(t,e,i){var n=this;if(n.parentUnit.currentScreen===n){var o=new ActionContext(n);n.fireTriggers(\"shake\",function(e){var n=t>=e.duration&&e.direction.indexOf(i)>-1;return n&&o.trackUserInteraction(),n},null,o)}},Screen.prototype.finishedLoading=function(){Screen.uber.finishedLoading.call(this),Logger(\"unit\").log(\"Finished loading \"+this)},Screen.prototype.triggerBeforeAppear=function(t){this.fireTriggers(\"beforeAppear\",null,t)},Screen.prototype.triggerOrientationChange=function(t){this.fireTriggers(\"orientationChange\",null,t)},Screen.prototype.getMaxZIndex=function(){var t=0;return this.objects.forEach(function(e){e.zIndex>t&&(t=e.zIndex)}),t},Screen.prototype.resetAction=function(t,e,i){var n=this.findAll(),o=n.length;o?n.forEach(function(n){n.resetAction(t,e,function(){--o||i()})}):i()},Screen.prototype.findAll=function(t){function e(n){n.forEach(function(n){(t===void 0||n.name==t)&&i.push(n),n.getNestedContainers().forEach(function(t){e(t.objects)})})}var i=[];return e(this.objects),i},Screen.prototype.find=function(t){var e=this.findAll(t);return e.length>0?e[0]:null};;\nfunction ScreenObject(){}inherit(ScreenObject,View),extend(ScreenObject.prototype,TriggerHost),ScreenObject.requiresRedrawToTriggerAnimationEvents=android(\"4.0\"),ScreenObject.redrawTriggerInterval=60,ScreenObject.toString=function(){return\"[Clazz ScreenObject]\"},ScreenObject.prototype.toString=function(){return\"[ScreenObject \"+this.localId+\" (name=\"+this.name+\")]\"},ScreenObject.allowPositioningAndSizingUsingTransforms=!android(\"2.2\",\"2.3\")||iframe(),ScreenObject._resettableProperties=[\"position\",\"size\",\"rotation\",\"zIndex\",\"opacity\",\"hidden\"],ScreenObject._3dTransformBlacklisted=function(t){return\/Silk\\\/\\d|Kindle Fire| KFTT | KFOT | KFJWI | KFJWA |\\bGT-I9300\\b|\\bGT-P3100\\b| HTC[ _]One[ _]S \/.test(t)}(navigator.userAgent),ScreenObject.supports3d=function(){var t=\"WebKitCSSMatrix\"in window&&\"m11\"in new WebKitCSSMatrix||\"MSCSSMatrix\"in window||\/Gecko\\\/\/.test(navigator.userAgent);return t&&!this._3dTransformBlacklisted}(),ScreenObject.dummyImageSpacer=windows(\"10\"),ScreenObject.prototype.shouldApplyChromeLayeringBugWorkaround=function(){return!(ScreenObject._3dTransformBlacklisted||android(\"2.2\",\"2.3\")||[\"Frame\",\"TextBox\",\"Map\",\"NearestStore\",\"RetailFeed\"].indexOf(this.constructor.name)>-1)},ScreenObject._toPositionPx=function(t,e,i){var n,o,r,s,a,h,l=i.width,c=i.height,d=e.width,u=e.height;return[\"left\",\"right\",\"hcenter\"].forEach(function(e){t[e]&&(n=e)}),[\"bottom\",\"top\",\"vcenter\"].forEach(function(e){t[e]&&(o=e)}),r=t[n].indexOf(\"%\")>-1?l*parseFloat(t[n])\/100:parseFloat(t[n]),a=\"hcenter\"===n?l\/2+r-d\/2:\"right\"===n?l-r-d:r,s=t[o].indexOf(\"%\")>-1?c*parseFloat(t[o])\/100:parseFloat(t[o]),h=\"vcenter\"===o?c\/2+s-u\/2:\"bottom\"===o?c-s-u:s,{x:Math.round(a),y:Math.round(h)}},ScreenObject._toSizePx=function(t,e){var i=parseFloat(t.width),n=parseFloat(t.height),o=e.width,r=e.height;return t.width.indexOf(\"%\")>-1&&(i=o*i\/100),t.height.indexOf(\"%\")>-1&&(n=r*n\/100),{width:Math.round(i),height:Math.round(n)}},Object.defineProperty(ScreenObject.prototype,\"layoutCurrent\",{get:function(){return this.layoutSpecificValues[this.parentUnit.layoutCurrentIndex]}}),Object.defineProperties(ScreenObject.prototype,{position:{get:function(){var t=ScreenObject._toPositionPx(this.layoutCurrent.position,this.size,this.parentContainer.size);return Object.defineProperties({},{x:{get:function(){return t.x}.bind(this),set:function(t){this.layoutCurrent.position.left=t+(\"number\"==typeof t?\"px\":\"\")}.bind(this)},y:{get:function(){return t.y}.bind(this),set:function(t){this.layoutCurrent.position.top=t+(\"number\"==typeof t?\"px\":\"\")}.bind(this)}})},set:function(t){this.layoutCurrent.position=t}},originalSize:{get:function(){return ScreenObject._toSizePx(JSON.parse(this.originalLayoutSpecificValues)[this.parentUnit.layoutCurrentIndex].size,this.parentContainer.size)},set:function(){throw Error(\"originalSize is not settable!\")}},size:{get:function(){var t=ScreenObject._toSizePx(this.layoutCurrent.size,this.parentContainer.size);return Object.defineProperties({},{width:{get:function(){return t.width}.bind(this),set:function(t){this.layoutCurrent.size.width=t+(\"number\"==typeof t?\"px\":\"\")}.bind(this)},height:{get:function(){return t.height}.bind(this),set:function(t){this.layoutCurrent.size.height=t+(\"number\"==typeof t?\"px\":\"\")}.bind(this)}})},set:function(t){this.layoutCurrent.size=t}},opacity:{get:function(){return this.layoutCurrent.opacity},set:function(t){this.layoutCurrent.opacity=t}},rotation:{get:function(){return this.layoutCurrent.rotation},set:function(t){this.layoutCurrent.rotation=t}},hidden:{get:function(){return this.layoutCurrent.hidden},set:function(t){this.layoutSpecificValues.forEach(function(e){e.hidden=t})}}}),ScreenObject.getCSSTranslate=function(t,e){return ScreenObject.getCSSTranslate=\"WebKitCSSMatrix\"in window&&\"m11\"in new WebKitCSSMatrix&&!ScreenObject._3dTransformBlacklisted?function(t,e){return\"translate3d(\"+t+\"px,\"+e+\"px\"+\",0)\"}:function(t,e){return\"translate(\"+t+\"px,\"+e+\"px\"+\")\"},ScreenObject.getCSSTranslate(t,e)},ScreenObject.prototype._copyChosenExperimentProperties=function(t){var e=this.experimentSpecificValues[t],i=e[0],n=void 0;this.creativeOptimizationEnabled&&(n=creative.experiments.get(t,[creative.id,this.localId]),i=e.filter(function(t){return t.id+\"\"===n.chosenVariant}.bind(this))[0]);var o={};return deep(o,i),delete o.id,delete o.label,deep(this,o),n},ScreenObject.prototype._applyExperiments=function(){throw Error(\"_applyExperiments not implemented\")},ScreenObject.prototype.awake=function(){ScreenObject.uber.awake.call(this),this.originalLayoutSpecificValues=JSON.stringify(this.layoutSpecificValues),this.layoutChanged=this.layoutChanged.bind(this),this.parentUnit.addListener(\"layoutChanged\",this.layoutChanged),this._refreshDisplayState=this._refreshDisplayState.bind(this),this.parentContainer.on(\"enteredRenderTree\",function(){this.hidden||this.enterRenderTree(),this.parentContainer.on(\"resize\",this._refreshDisplayState)}.bind(this)),this.parentContainer.on(\"exitedRenderTree\",function(){try{this.hidden||this.exitRenderTree()}catch(t){this.exitRenderTree()}this.parentContainer.off(\"resize\",this._refreshDisplayState)}.bind(this))},ScreenObject.prototype.enterRenderTree=function(){this._isRendering||(this._isRendering=!0,this.emit(\"enteredRenderTree\"),this._refreshDisplayState())},ScreenObject.prototype.exitRenderTree=function(){this._isRendering&&(this._isRendering=!1,this._isInMouseOver&&trigger(this.node,\"mouseout\",!1),this.emit(\"exitedRenderTree\"))},ScreenObject.prototype.initTemplates=function(){var t=this.templates={},e=this.constructor.templates;if(e){for(var i in e)\"string\"==typeof e[i]&&(e[i]=tmpl(e[i]));extend(t,e)}},ScreenObject.prototype.tmpl=function(t,e,i){this.templates||this.initTemplates();var n=this.templates[t];return n?n.call(i||this,e):\"Missing template: \"+t},ScreenObject.prototype.template=function(t,e,i){var n,o=document.createElement(\"div\");o.innerHTML=this.tmpl(t,e);var r=o.firstChild;if(i)for(;n=o.firstChild;)i.appendChild(n);return r},ScreenObject.prototype.createNode=function(){this.experimentSpecificValues&&this._applyExperiments(),this._isInMouseOver=!1;var t=this,e=ScreenObject.uber.createNode.call(t),i=new CStyler(e);i.position=\"absolute\",this.hasTriggers(\"tap\")&&(addClass(e,\"touchable\"),attach(e,\"tap\",function(){var e=new ActionContext(t,!0);e.trackUserInteraction(),t.fireTriggers(\"tap\",null,null,e)},!1));var n=\"mouseOver\",o=[];if(this.hasTriggers(n)){var r=this._getTriggers(n,null),s=[],a=noop;r.forEach(function(t){t.parameters&&t.parameters.delay&&0>s.indexOf(t.parameters.delay)&&s.push(t.parameters.delay)}),attach(e,\"mouseover\",function(){var e=new ActionContext(t),i=function(i){return function(){t.fireTriggers(n,function(t){return t.delay==i},null,e),e.trackUserInteraction()}};t._isInMouseOver=!0,s.forEach(function(t,e){a=i(t),o[e]=setTimeout(a,t)})},!1)}return attach(e,\"mouseout\",function(){var e=new ActionContext(t);t._isInMouseOver=!1,o.forEach(clearTimeout),o=[],t.hasTriggers(\"mouseOut\")&&(e.trackUserInteraction(),t.fireTriggers(\"mouseOut\",null,null,e))},!1),attach(e,\"touchstart\",function(){if(t.hasTriggers(\"touchstart\")){var e=new ActionContext(t,!0);e.trackUserInteraction(),t.fireTriggers(\"touchstart\",null,null,e)}},!1),attach(e,\"touchend\",function(){if(t.hasTriggers(\"touchend\")){var e=new ActionContext(t,!0);e.trackUserInteraction(),t.fireTriggers(\"touchend\",null,null,e)}},!1),this.hasTriggers(\"swipe\")&&(attach(e,\"touchstart\",function(t){t.stopPropagation()}),new SwipeListener({target:e,swipe:function(e,i){var n=new ActionContext(t,!0);n.trackUserInteraction(),t.fireTriggers(\"swipe\",function(t){return e==t.direction&&i>=t.length},null,n)}})),attach(e,\"transitionend\",function(t){t.stopPropagation()},!1),e},ScreenObject.prototype.finishedLoading=function(){ScreenObject.uber.finishedLoading.call(this),this._refreshDisplayState()},ScreenObject.prototype.positionUsingTransforms=retFalse,ScreenObject.prototype.sizeUsingTransforms=retFalse,ScreenObject.prototype.isValid=retTrue,ScreenObject.prototype.getNaturalSize=function(){Creative._throw(\"getNaturalSize() not implemented.\")},ScreenObject.prototype._calculateNewStyleAttributes=function(){var t,e={transform:\"\",transformOrigin:\"50% 50%\"},i=ScreenObject.allowPositioningAndSizingUsingTransforms;if(!this.sizeUsingTransforms()||!i||(t=this.getNaturalSize(),t&&t.width&&t.height)){if(this.positionUsingTransforms()&&i){e.left=\"0\",e.top=\"0\";var n=this.position.x,o=this.position.y;this.sizeUsingTransforms()&&i&&(n+=Math.round((this.size.width-t.width)\/2),o+=Math.round((this.size.height-t.height)\/2)),e.transform+=ScreenObject.getCSSTranslate(n,o)}else e.left=this.position.x+\"px\",e.top=this.position.y+\"px\";if(e.transform+=\" rotate(\"+(this.rotation||0)+\"deg)\",this.sizeUsingTransforms()&&i){e.width=t.width+\"px\",e.height=t.height+\"px\";var r=this.size.width\/t.width,s=this.size.height\/t.height;e.transform+=\" scale(\"+r+\", \"+s+\")\"}else e.width=this.size.width+\"px\",e.height=this.size.height+\"px\";return e.zIndex=this.zIndex,e.opacity=this.opacity,this.shouldApplyChromeLayeringBugWorkaround()&&(e.transform+=\" translateZ(0)\"),e.display=this.hidden?\"none\":\"block\",e}},ScreenObject.prototype._refreshDisplayState=function(){if(this.parentScreen.sizeAvailable&&this.node){var t=this._calculateNewStyleAttributes(),e=!1;for(var i in t){var n,o,r=(t[i]+\"\").replace(\/^\\s*|\\s*$\/g,\"\"),s=new CStyler(this.node);n=s[i];var a=new CStyler(this.node);a[i]!==r&&(a[i]=r,o=a[i],n!=o&&\"zIndex\"!=i&&\"display\"!=i&&(e=!0))}return this.redrawLayout(),e}},ScreenObject.prototype.finishAnimation=function(){if(this.node){var t=new CStyler(this.node);void 0!==t.transitionDuration&&(t.transitionDuration=\"1ms\")}},ScreenObject.prototype.layoutChanged=function(){this.finishAnimation()},ScreenObject.prototype.redrawLayout=function(){},ScreenObject.prototype.setPosition=function(t,e){this.position.x=t,this.position.y=e,this._refreshDisplayState()},ScreenObject.prototype.setSize=function(t,e){this.size.width=t,this.size.height=e,this._refreshDisplayState()},ScreenObject.prototype.setOpacity=function(t){this.opacity=t,this._refreshDisplayState()},ScreenObject.prototype.animateAction=function(t,e,i){i=i||noop;var n={properties:{position:{},size:{width:null,height:null},zIndex:null,opacity:null,rotation:null},duration:1e3,timingFunction:\"linear\"};deep(n,e),delete n.layoutSpecificValues,e.layoutSpecificValues?(layoutIndex=0,e.layoutSpecificValues.forEach(function(t){var e={position:{},size:{width:null,height:null},zIndex:null,opacity:null,rotation:null};deep(e,t);var i=e.size;null==i.width&&(i.width=this.size.width+\"px\"),null==i.height&&(i.height=this.size.height+\"px\"),this.layoutSpecificValues[layoutIndex].size=i;var n,o,r=e.position;[\"left\",\"right\",\"hcenter\"].forEach(function(t){r[t]&&(n=t)}),[\"bottom\",\"top\",\"vcenter\"].forEach(function(t){r[t]&&(o=t)}),n&&null!=r[n]||(r.left=this.position.x+\"px\"),o&&null!=r[o]||(r.top=this.position.y+\"px\"),this.layoutSpecificValues[layoutIndex].position=r,null!=e.rotation&&(this.layoutSpecificValues[layoutIndex].rotation=e.rotation),null!=e.zIndex&&(this.layoutSpecificValues[layoutIndex].zIndex=e.zIndex),null!=e.opacity&&(this.layoutSpecificValues[layoutIndex].opacity=e.opacity),layoutIndex++}.bind(this))):(null!=n.properties.position.x&&(this.layoutCurrent.position.left=n.properties.position.x+\"px\"),null!=n.properties.position.y&&(this.layoutCurrent.position.top=n.properties.position.y+\"px\"),null!=n.properties.size.width&&(this.layoutCurrent.size.width=n.properties.size.width+\"px\"),null!=n.properties.size.height&&(this.layoutCurrent.size.height=n.properties.size.height+\"px\"),null!=n.properties.rotation&&(this.layoutCurrent.rotation=n.properties.rotation),null!=n.properties.zIndex&&(this.layoutCurrent.zIndex=n.properties.zIndex),null!=n.properties.opacity&&(this.layoutCurrent.opacity=n.properties.opacity));var o=this.node,r=new CStyler(o);r.transition=\"\",r.transitionProperty=\"all\",r.transitionDuration=n.duration+\"ms\",r.transitionTimingFunction=n.timingFunction?n.timingFunction:\"linear\",android(\"2\")&&(r.transitionDelay=\"1ms\");var s=this._refreshDisplayState();if(n.duration>0&&s){var a=!1,h=function(){a||(a=!0,i())};ScreenObject.requiresRedrawToTriggerAnimationEvents&&function(){var t=Date.now(),e=t+(Number(n.duration)||0),i=function(){flash(),e>Date.now()&&setTimeout(i,ScreenObject.redrawTriggerInterval)};i()}(),setTimeout(h,(Number(n.duration)||0)+500,!0),once(o,\"transitionend\",function(){r.transition=\"\",setTimeout(h,0,!1)},!1)}else{r.transition=\"\";var l=n.duration>0?n.duration:0;setTimeout(i,l)}},ScreenObject.prototype.scaleAction=function(t,e,i){var n=e.scale\/100,o={width:this.size.width*n,height:this.size.height*n},r={x:this.position.x+this.size.width\/2-o.width\/2,y:this.position.y+this.size.height\/2-o.height\/2};this.animateAction(t,{properties:{position:r,size:o},duration:e.duration,timingFunction:e.timing},i)},ScreenObject.multiAnimateAction=function(t,e,i){var n=e.animations.length,o=0;return 0==n?(setTimeout(i,0),void 0):(e.animations.forEach(function(t){t.object.multiAnimate(t.keyframes,function(){++o,o==n&&setTimeout(i,0)})}),void 0)},ScreenObject.prototype.multiAnimate=function(t,e){var i=this,n=i.node;0!=t[0].time&&t.unshift({time:0,timingFunction:null,properties:{position:{x:null,y:null},size:{width:null,height:null},rotation:null,opacity:null}});var o=t[t.length-1].time,r=[];t.forEach(function(t){null!==t.properties.position.x&&(i.position.x=t.properties.position.x),null!==t.properties.position.y&&(i.position.y=t.properties.position.y),null!==t.properties.size.width&&(i.size.width=t.properties.size.width),null!==t.properties.size.height&&(i.size.height=t.properties.size.height),null!==t.properties.rotation&&(i.rotation=t.properties.rotation),null!==t.properties.opacity&&(i.opacity=t.properties.opacity);var e=100*(t.time\/o)+\"%\",n=i._calculateNewStyleAttributes(),s=\"\";for(var a in n){var h=n[a];a=\"transform\"==a?\"transform\":\"transformOrigin\"==a?\"transform-origin\":a,s+=a+\":\"+h+\"; \"}s=e+\" { \"+s+\" }\",r.push(s)});var s=\"animate-obj-\"+this.localId+\"-\"+ +new Date,a=\"@keyframes \"+s+\" { \"+r.join(\" \")+\"}\",h=document.getElementsByTagName(\"head\")[0],l=document.createElement(\"style\");l.textContent=a,h.appendChild(l);var c=new CStyler(n);c.animationName=s,c.animationDuration=o+\"ms\",c.animationTimingFunction=t.timingFunction?t.timingFunction:\"linear\",i._refreshDisplayState();var d=!1,u=function(){d||(d=!0,e())};setTimeout(u,(Number(o)||0)+500),once(n,\"animationend\",function(){c.animationName=\"\",c.animationDuration=0,setTimeout(u,0,!1)},!1)},ScreenObject.prototype.showAction=function(t,e,i){var n=this.hidden;this.hidden=!1,this.node.style.display=\"block\",android(\"2.2\",\"2.3\")&&iframe()&&redrawAndroidIframe(),n&&this.parentScreen._isRendering&&this.enterRenderTree(),this.node.offsetWidth,nextFrame(i)},ScreenObject.prototype.hideAction=function(t,e,i){var n=this.hidden;this.hidden=!0,new CStyler(this.node).display=\"none\",android(\"2.2\",\"2.3\")&&iframe()&&redrawAndroidIframe(),!n&&this.parentScreen._isRendering&&this.exitRenderTree(),setTimeout(i,0)},ScreenObject.prototype.resetAction=function(t,e,i){var n=android()||desktop();this.layoutSpecificValues=JSON.parse(this.originalLayoutSpecificValues),this.finishAnimation(),this._refreshDisplayState(),setTimeout(i,n?100:0)},ScreenObject.prototype.addStyle=function(t){var e=\"#celtra-object-\"+this.localId,i=this.node,n=\/^:(link|visited|active|hover|focus|first-child|nth-child|nth-last-child|nth-of-type|first-of-type|last-of-type|empty|target|checked|enabled|disabled)\/,o=\/,\\s*\/g;this.styleNode||(this.styleNode=document.createElement(\"style\"),i||(i=document.getElementsByTagName(\"head\")[0]),i.appendChild(this.styleNode));var r=[];for(var s in t)r.push({selector:s.split(o).map(function(t){return e+(n.test(t)?\"\":\" \")+t}).join(\",\"),attributes:t[s]});var a=this._styleSheetTemplate({rules:r});this.styleNode.textContent+=this._prefixAttributes(a)},ScreenObject.prototype._styleSheetTemplate=tmpl(\"<% for(var i = 0; i < rules.length; i++) { %><%= rules[i].selector %> { <%= rules[i].attributes %> }\\n<% } %>\"),ScreenObject.prototype._prefixAttributes=function(t){return t.replace(CStyler._prefixer,function(t,e){return CStyler._prefixedCSSLookup[e]+\":\"})},ScreenObject.prototype.css=function(t,e){e===void 0&&(e=t,t=this.getNode()),new CStyler(t).applyCSS(e)},ScreenObject.prototype.getNestedContainers=function(){return[]};;\nfunction Hotspot(){}inherit(Hotspot,ScreenObject),Hotspot.toString=function(){return\"[Clazz Hotspot]\"},Hotspot.prototype.toString=function(){return\"[Hotspot \"+this.localId+\"]\"};;\nfunction Picture(){}inherit(Picture,ScreenObject),Picture.toString=function(){return\"[Clazz Picture]\"},Picture.prototype.toString=function(){return\"[Picture \"+this.localId+\"]\"},Picture.prototype.awake=function(){Picture.uber.awake.call(this),this._image={naturalHeight:0,naturalWidth:0}},Picture.prototype.createNode=function(){var t=this,e=Picture.uber.createNode.call(this);return t.preloadImage(t.file,function(i){t._image=i;var n=\"\",o=\"\";switch(t.imagePosition&&(n=t.imagePosition.replace(\"-\",\" \")),t.fittingSize){case\"original\":o=\"\";break;case\"fit\":o=\"contain\";break;case\"fill\":o=\"cover\";break;case\"stretch\":default:o=\"100% 100%\"}var r=document.createElement(\"div\"),s=new CStyler(r);if(s.cssText=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-repeat: no-repeat;\",s.backgroundImage=\"url('\"+(i.src||\"\").replace(\"'\",\"-\")+\"')\",s.backgroundPosition=n,s.backgroundSize=o,ScreenObject.dummyImageSpacer){var a=document.createElement(\"img\"),h=new CStyler(a);h.cssText=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\",a.src=\"data:image\/gif;base64,R0lGODlhAQABAIAAAP\/\/\/wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\",r.appendChild(a)}e.appendChild(r)}),e},Picture.prototype.useTransforms=function(){return!(ios(\"8\")&&this.file.retina)},Picture.prototype.positionUsingTransforms=function(){return this.useTransforms()},Picture.prototype.sizeUsingTransforms=function(){return this.useTransforms()},Picture.prototype.getNaturalSize=function(){var t,e,i,n,o=this._image.naturalWidth,r=this._image.naturalHeight,s=o\/r,a=this.originalSize.width,h=this.originalSize.height,l=a\/h,c=2048;return\"original\"==this.fittingSize?{width:a,height:h}:\"stretch\"==this.fittingSize?{width:o,height:r}:(t=s>l&&\"fit\"==this.fittingSize||l>s&&\"fill\"==this.fittingSize,e=l>s&&\"fit\"==this.fittingSize||s>l&&\"fill\"==this.fittingSize,i=o,n=r,t?n=o\/a*h:e&&(i=r\/h*a),i>c&&(n*=c\/i,i=c),n>c&&(i*=c\/n,n=c),{width:i,height:n})};;\nfunction Button(){}inherit(Button,ScreenObject),extend(Button.prototype,TextStyleIntegrator),Button.toString=function(){return\"[Clazz Button]\"},Button.prototype.toString=function(){return\"[Button \"+this.localId+\"]\"},Object.defineProperties(Button.prototype,{borderRoundness:{get:function(){var t=0;if(this.border&&\"number\"==typeof this.borderRadius)t=this.borderRadius+\"px\";else if(this.border!==!1||this.roundness){if(\"number\"==typeof this.roundness&&(t=this.roundness),t>0){var e=Math.min(this.size.height,this.size.width),i=e\/2,n=Math.max(this.size.height,this.size.width),o=n\/2;if(50>t){var s=t\/50;t=i*s+\"px\"}else{var r=(t-50)\/50,a=(o-i)*r,l=i+a,h=this.size.width==e?i:l,c=this.size.height==e?i:l;t=h+\"px \"+c+\"px\"}}}else t=0;return t}},textLineHeight:{get:function(){return this.size.height-2*this.textBorder}}}),Button.prototype.awake=function(){Button.uber.awake.call(this),this.defaultValues={backgroundUpImage:\"runner\/clazzes\/Button\/button.png\",backgroundDownImage:\"runner\/clazzes\/Button\/button-down.png\"},this.hoverEnabled=-1!=this.parentUnit.deviceType.toLowerCase().indexOf(\"desktop\"),this.backgroundElement=null,this.foregroundElement=null,this.textBorder=0,this.handleTap=this.handleTap.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.redrawLayout=this.redrawLayout.bind(this)},Button.prototype.createNode=function(){var t=Button.uber.createNode.call(this);t.className+=\" touchable\",this._cssRules={},this.useBackgroundImage=\"image\"===this.background,this.useForegroundImage=\"image\"===(this.useBackgroundImage?this.foregroundForImage:this.foregroundForCss),this.createBackground(t),this.createForeground(t),this.addStyle(this._cssRules),attach(t,\"tap\",this.handleTap),attach(t,\"touchstart\",this.handleTouchStart);var e=function(){this._experimentButtonStyle&&this._experimentButtonStyle.trackExposure()}.bind(this);return this.on(\"enteredRenderTree\",e),t},Button.prototype.createBackground=function(t){if(this.backgroundElement=document.createElement(\"div\"),this.backgroundElement.className+=\" background\",this.backgroundElementStyle=new CStyler(this.backgroundElement),this.useBackgroundImage){var e=!1,i=\"normal\",n=\"focus\",o=\"pressed\",s=function(t,e){e.className+=\" \"+t,this.backgroundElement.appendChild(e)}.bind(this);this.backgroundUpImage?this.preloadImage(this.backgroundUpImage,function(t){s(i,t)}):(e=!0,this.preloadImage(new File(this.defaultValues.backgroundUpImage),function(t){s(i,t)})),this.hoverEnabled&&this.backgroundHoverImage&&this.preloadImage(this.backgroundHoverImage,function(t){s(n,t)}),this.backgroundDownImage?this.preloadImage(this.backgroundDownImage,function(t){s(o,t)}):e&&this.preloadImage(new File(this.defaultValues.backgroundDownImage),function(t){s(o,t)}),this._cssRules[\".background .\"+i]=\"display: block;\",this._cssRules[\".background .\"+n]=\"display: none;\",this._cssRules[\".background .\"+o]=\"display: none;\",this.hoverEnabled&&this.backgroundHoverImage&&(this._cssRules[\":hover .background .\"+i]=\"display: none;\",this._cssRules[\":hover .background .\"+n]=\"display: block;\",this._cssRules[\":hover .background .\"+o]=\"display: none;\"),(this.backgroundDownImage||e)&&(this._cssRules[\".background.down .\"+i]=\"display: none;\",this._cssRules[\".background.down .\"+n]=\"display: none;\",this._cssRules[\".background.down .\"+o]=\"display: block;\")}else{if(this.backgroundColor){var r=\"\";if(Color.isGradient(this.backgroundColorUp)?(r+=Color.createGradientStyle(this.backgroundColorUp),r+=\"background-color: transparent;\"):(r+=\"background-image: none;\",r+=\"background-color: \"+this.backgroundColorUp+\";\"),this._cssRules[\".background\"]=r,this.hoverEnabled&&this.backgroundColorHover){var a=\"\";Color.isGradient(this.backgroundColorHover)?(a+=Color.createGradientStyle(this.backgroundColorHover),a+=\"background-color: transparent;\"):(a+=\"background-image: none;\",a+=\"background-color: \"+this.backgroundColorHover+\";\"),this._cssRules[\":hover .background\"]=a}var l=\"\";Color.isGradient(this.backgroundColorDown)?(l+=Color.createGradientStyle(this.backgroundColorDown),l+=\"background-color: transparent;\"):(l+=\"background-image: none;\",l+=\"background-color: \"+this.backgroundColorDown+\";\"),this._cssRules[\".background.down\"]=l}if(this.border&&(this.backgroundElementStyle.borderColor=this.borderColor,this.backgroundElementStyle.borderStyle=\"solid\",this.backgroundElementStyle.borderWidth=this.borderWidth+\"px\"),this.shadow){var h=this.shadowAngle*(Math.PI\/180),c=Math.round(this.shadowDistance*Math.cos(h)),d=Math.round(this.shadowDistance*Math.sin(h));this.backgroundElementStyle.boxShadow=c+\"px \"+d+\"px \"+this.shadowBlur+\"px \"+this.shadowColor}}t.appendChild(this.backgroundElement)},Button.prototype.createForeground=function(t){var e=this.callToActionText.trim().length>0;if(this.foregroundElement=document.createElement(\"div\"),this.foregroundElement.className+=\" foreground\",this.foregroundElementStyle=new CStyler(this.foregroundElement),!this.useBackgroundImage&&this.border?(this.foregroundElementStyle.borderColor=\"transparent\",this.foregroundElementStyle.borderStyle=\"solid\",this.foregroundElementStyle.borderWidth=this.borderWidth+\"px\",this.textBorder=this.borderWidth):this.textBorder=0,this.useForegroundImage){this.foregroundElement.className+=this.foregroundStretchImage?\" image-stretch\":\" image-fit\";var i=\"normal\",n=\"focus\",o=\"pressed\",s=function(t,e){var i=document.createElement(\"div\");i.className+=\" \"+t;var n=new CStyler(i);n.backgroundImage=\"url(\"+e.src+\")\",this.foregroundElement.appendChild(i)}.bind(this);this.foregroundUpImage&&this.preloadImage(this.foregroundUpImage,function(t){s(i,t)}),this.hoverEnabled&&this.foregroundHoverImage&&this.preloadImage(this.foregroundHoverImage,function(t){s(n,t)}),this.foregroundDownImage&&this.preloadImage(this.foregroundDownImage,function(t){s(o,t)}),this._cssRules[\".foreground .\"+i]=\"display: block;\",this._cssRules[\".foreground .\"+n]=\"display: none;\",this._cssRules[\".foreground .\"+o]=\"display: none;\",this.hoverEnabled&&this.foregroundHoverImage&&(this._cssRules[\":hover .foreground .\"+i]=\"display: none;\",this._cssRules[\":hover .foreground .\"+n]=\"display: block;\",this._cssRules[\":hover .foreground .\"+o]=\"display: none;\"),this.foregroundDownImage&&(this._cssRules[\".foreground.down .\"+i]=\"display: none;\",this._cssRules[\".foreground.down .\"+n]=\"display: none;\",this._cssRules[\".foreground.down .\"+o]=\"display: block;\")}else e&&(this.foregroundElement.className+=\" call-to-action\",this.foregroundElement.textContent=this.callToActionText,this.initializeFont(),this._cssRules[\".foreground\"]=\"color: \"+this.textColor+\";\",this.hoverEnabled&&this.textColorHover&&(this._cssRules[\":hover .foreground\"]=\"color: \"+this.textColorHover+\";\"),this._cssRules[\".foreground.down\"]=\"color: \"+this.textColorDown+\";\");t.appendChild(this.foregroundElement)},Button.prototype.redrawLayout=function(){if(!this.useBackgroundImage){var t=this.borderRoundness;parseInt(t,10)>0&&(this.backgroundElement&&(this.backgroundElementStyle.borderTopLeftRadius=t,this.backgroundElementStyle.borderTopRightRadius=t,this.backgroundElementStyle.borderBottomLeftRadius=t,this.backgroundElementStyle.borderBottomRightRadius=t),this.foregroundElement&&(this.foregroundElementStyle.borderTopLeftRadius=t,this.foregroundElementStyle.borderTopRightRadius=t,this.foregroundElementStyle.borderBottomLeftRadius=t,this.foregroundElementStyle.borderBottomRightRadius=t))}var e=this.callToActionText.trim().length>0;!this.useForegroundImage&&e&&(this.applyTextSize(this.foregroundElementStyle),this.foregroundElementStyle.lineHeight=this.textLineHeight+\"px\")},Button.prototype.updateTextStyle=function(){this.foregroundElementStyle&&(this.applyTextStyle(this.foregroundElementStyle),this.foregroundElementStyle.color=\"\")},Button.prototype.handleTap=function(t){t.stopPropagation()},Button.prototype.handleTouchStart=function(){addClass(this.backgroundElement,\"down\"),addClass(this.foregroundElement,\"down\"),attach(this.parentUnit.node,\"touchend\",this.handleTouchEnd),this._experimentButtonStyle&&this._experimentButtonStyle.trackSuccess()},Button.prototype.handleTouchEnd=function(){removeClass(this.backgroundElement,\"down\"),removeClass(this.foregroundElement,\"down\"),detach(this.parentUnit.node,\"touchend\",this.handleTouchEnd)},Button.prototype._applyExperiments=function(){this._experimentButtonStyle=this._copyChosenExperimentProperties(\"ButtonStyle\")};;\nfunction TextBox(){}inherit(TextBox,ScreenObject),extend(TextBox.prototype,TextStyleIntegrator),TextBox.toString=function(){return\"[Clazz TextBox]\"},TextBox.prototype.toString=function(){return\"[TextBox \"+this.localId+\"]\"},TextBox.prototype.awake=function(){TextBox.uber.awake.call(this),this.placeholder===void 0&&(this.placeholder=\"\"),this.placeholderColor===void 0&&(this.placeholderColor=this.textColor),this.slicer=null,this.textbox=null,this.handleInputFocus=this.handleInputFocus.bind(this),this.handleValueUpdate=this.handleValueUpdate.bind(this),this.hidePlaceholder=this.hidePlaceholder.bind(this),this.showPlaceholder=this.showPlaceholder.bind(this),this.validateInput=this.validateInput.bind(this),this.redrawLayout=this.redrawLayout.bind(this)},TextBox.prototype.createNode=function(){var t=TextBox.uber.createNode.call(this);if(this.multiLine)this.textbox=document.createElement(\"textarea\");else switch(this.textbox=document.createElement(\"input\"),this.validation){case\"email\":this.textbox.type=\"email\";break;case\"url\":this.textbox.type=\"url\";break;case\"date\":this.textbox.type=creative.adapter.hacks.hasBuggyDateInputControls?\"text\":\"date\";break;case\"phone\":this.textbox.type=\"tel\";break;default:this.textbox.type=\"text\"}this.textbox.autocorrect=this.autocorrect,this.textbox.autocapitalize=this.autocapitalize,this.textbox.value=this.value,this.textboxStyle=new CStyler(this.textbox),this.initializeFont(),this.tabIndex&&this.textbox.setAttribute(\"tabindex\",this.tabIndex),\"color\"==this.backgroundType?this.preloadImage(new File(\"runner\/clazzes\/TextBox\/textbox.png\"),function(t){var e=new Slicer({left:4,top:4,right:4,bottom:4});e.loadImage(t.src,function(){this.slicer=e,this._isRendering&&this.redrawLayout()}.bind(this))}.bind(this)):this.backgroundImage&&this.preloadImage(this.backgroundImage,function(e){t.appendChild(e)}),t.appendChild(this.textbox),attach(this.textbox,\"change\",this.handleValueUpdate,!1);var e=window.navigator.userAgent,i=\"keyup\";return android(\"4\")&&e.match(\/Chrome\\\/[.0-9]* Mobile\/)&&(i=\"input\"),attach(this.textbox,i,this.handleValueUpdate,!1),attach(this.textbox,\"focus\",this.handleInputFocus),attach(this.textbox,\"blur\",this.handleValueUpdate,!1),attach(this.textbox,\"blur\",this.showPlaceholder),attach(this.textbox,\"touchstart\",function(t){t.stopPropagation()}),t},TextBox.prototype.redrawLayout=function(){if(this.applyTextSize(this.textboxStyle),this.multiLine||(this.textboxStyle.lineHeight=this.size.height-8+\"px\"),this.validateInput(),this.showPlaceholder(),\"color\"==this.backgroundType&&this.slicer){var t=this.slicer.getCanvas(this.size.width,this.size.height);this.node.appendChild(t)}},TextBox.prototype.updateTextStyle=function(){this.applyTextStyle(this.textboxStyle)},TextBox.prototype.handleInputFocus=function(){new ActionContext(this).trackUserInteraction(),this.hidePlaceholder()},TextBox.prototype.handleValueUpdate=function(){new ActionContext(this).trackUserInteraction(),this.value=this.textbox.value!=this.placeholder?this.textbox.value:\"\",this.validateInput()},TextBox.prototype.hidePlaceholder=function(){this.textbox.value==this.placeholder&&(this.textbox.value=\"\",this.textboxStyle.color=this.textColor)},TextBox.prototype.showPlaceholder=function(){(\"\"===this.textbox.value||this.textbox.value==this.placeholder)&&(this.textbox.value=this.placeholder,this.textboxStyle.color=this.placeholderColor)},TextBox.prototype.validateInput=function(){var t,e=function(t){return function(e){return t.test(e)}};switch(this.validation){case\"non-empty\":t=e(\/\\S+\/);break;case\"email\":t=e(\/^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\/);break;case\"url\":t=e(\/^(ftp|http|https):\\\/\\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\\/|\\\/([\\w#!:.?+=&%@!\\-\\\/]))?$\/);break;case\"date\":t=function(t){if(\/^(19|20)[0-9][0-9]-[01][0-9]-[0-3][0-9]$\/.test(t))return!0;var e=\"(?:0?[1-9]|10|11|12)\",i=\"(?:0?[1-9]|[1-2][0-9]|3[01])\",n=\"(?:19|20)[0-9][0-9]\",o=RegExp(\"^(?:\"+n+\"([.\/-])\\\\s*\"+e+\"\\\\1\\\\s*\"+i+\"|\"+i+\"([.\/-])\\\\s*\"+e+\"\\\\2\\\\s*\"+n+\"|\"+e+\"([.\/-])\\\\s*\"+i+\"\\\\3\\\\s*\"+n+\")$\");if(!o.test(t))return!1;var r=new Date(t);return isNaN(r.getDate())||isNaN(r.getMonth())||isNaN(r.getFullYear())||1900>r.getFullYear()||r.getFullYear()>2100?!1:!0};break;case\"phone\":t=e(\/^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$\/);break;case\"regex\":this.regex&&(t=e(RegExp(this.regex)))}t&&!t(this.value)?(addClass(this.node,\"invalid\"),this.textboxStyle.color=\"red\"):(removeClass(this.node,\"invalid\"),this.textboxStyle.color=this.textColor)},TextBox.prototype.getField=function(){return{type:\"string\",value:this.value}},TextBox.prototype.setValue=function(t){this.value=t,this.getNode(function(){this.textbox.value=this.value}.bind(this))},TextBox.prototype.isValid=function(){var t=hasClass(this.node,\"invalid\")||\"none\"!=this.validation&&0===this.value.length,e=!0;if(t)switch(this.validation){case\"non-empty\":e=\"The field cannot be empty (\"+this.name+\")\";break;case\"email\":e=\"You've entered an invalid email (\"+this.name+\")\";break;case\"url\":e=\"You've entered an invalid URL (\"+this.name+\")\";break;case\"date\":e=\"You've entered an invalid date (\"+this.name+\")\";break;case\"phone\":e=\"You've entered an invalid phone number (\"+this.name+\")\";break;default:e=\"You've entered an invalid value (\"+this.name+\")\"}return e};;\nfunction Texty(){}inherit(Texty,ScreenObject),extend(Texty.prototype,TextStyleIntegrator),Texty.toString=function(){return\"[Clazz Texty]\"},Texty.prototype.toString=function(){return\"[Texty \"+this.localId+\"]\"},Texty.prototype.awake=function(){Texty.uber.awake.call(this),this.scroller=null,this.textContainer=null,this.textContainerSize={width:0,height:0},this.scrollbarPosition===void 0&&(this.scrollbarPosition=\"\"),this.scrollbarColor===void 0&&(this.scrollbarColor=\"#000000\"),this.autoscrollEnabled===void 0&&(this.autoscrollEnabled=!1),this.autoscrollDelay===void 0&&(this.autoscrollDelay=1e3),this.autoscrollDuration===void 0&&(this.autoscrollDuration=3e3),this.autoscrollConclusion===void 0&&(this.autoscrollConclusion=\"\"),this.handleScroll=this.handleScroll.bind(this),this.handleTouchStart=this.handleTouchStart.bind(this),this.handleTouchMove=this.handleTouchMove.bind(this),this.handleTouchEnd=this.handleTouchEnd.bind(this),this.handleTouchCancel=this.handleTouchCancel.bind(this),this.redrawLayout=this.redrawLayout.bind(this)},Texty.prototype.createNode=function(){var t=Texty.uber.createNode.call(this);return new CStyler(t),this.scrollContainer=document.createElement(\"div\"),this.scrollContainerStyle=new CStyler(this.scrollContainer),this.scrollContainer.className=\"scroll-container\",this.textContainer=document.createElement(\"div\"),this.textContainerStyle=new CStyler(this.textContainer),this.autoscrollTimeouts=[],this.scrollable&&(this.scroller=new ZyngaScroller(this.handleScroll,{scrollingX:!1,bouncing:!1,animating:!0,animationDuration:this.autoscrollDuration})),this.initializeFont(),this.scrollContainer.appendChild(this.textContainer),t.appendChild(this.scrollContainer),this.startListeningForTouches(),t},Texty.prototype.redrawLayout=function(){this.applyTextSize(this.textContainerStyle),this.updateText()},Texty.prototype.updateTextStyle=function(){this.applyTextStyle(this.textContainerStyle),this.usePadding&&(this.textContainerStyle.padding=\"2px\")},Texty.prototype.updateText=function(){this.textContainer.innerHTML=this.text.replace(\/(?:\\r\\n|\\r|\\n)\/g,\"<br \/>\"),this.textContainerSize.width=this.textContainer.offsetWidth,this.textContainerSize.height=this.textContainer.offsetHeight,this.scrollable&&(this.scroller.setDimensions(this.size.width,this.size.height,this.textContainerSize.width,this.textContainerSize.height),this.scroller.scrollTo(0,0,!1),this.scrollbarStyle&&this.redrawScrollbar(),\"\"===this.scrollbarPosition||\"none\"===this.scrollbarPosition||this.scrollbar||this.createScrollbar(this.node),this.autoscrollEnabled&&(this.resetAutoScroll(),this.createAutoScroll()))},Texty.prototype.createScrollbar=function(t){this.scrollbar=document.createElement(\"div\"),this.scrollbar.className=\"scrollbar \"+this.scrollbarPosition,this.scrollbarStyle=new CStyler(this.scrollbar),t.appendChild(this.scrollbar)},Texty.prototype.createAutoScroll=function(){this.autoscrollTimeouts.push(setTimeout(function(){var t=0,e=0,i=t,n=this.scroller.__maxScrollTop;(t!=i||e!=n)&&(this.scroller.scrollTo(i,n,!0),this.scroller.autoscrolling=!0,this.autoscrollTimeouts.push(setTimeout(function(){if(this.scroller.autoscrolling){var o=this.autoscrollDuration;\"return\"==this.autoscrollConclusion?(this.scroller.scrollTo(t,e,!0),this.scroller.autoscrolling=!1):\"loop\"==this.autoscrollConclusion?(this.scroller.scrollTo(t,e,!0),this.autoscrollTimeouts.push(setTimeout(function(){this.scroller.scrollTo(i,n,!0)}.bind(this),o)),this.autoscrollLoopInterval||(this.autoscrollLoopInterval=setInterval(function(){return this.scroller.autoscrolling?(this.scroller.scrollTo(t,e,!0),this.autoscrollTimeouts.push(setTimeout(function(){this.scroller.scrollTo(i,n,!0)}.bind(this),o)),void 0):(clearInterval(this.autoscrollLoopInterval),void 0)}.bind(this),this.autoscrollDuration+o))):this.scroller.autoscrolling=!1}}.bind(this),this.autoscrollDuration)))}.bind(this),this.autoscrollDelay))},Texty.prototype.redrawScrollbar=function(){this.scrollbarStyle.backgroundColor=this.scrollbarColor,this.scrollbarStyle.height=Math.round(this.size.height\/this.textContainerSize.height*this.size.height)+\"px\",this.scrollbarStyle.display=this.size.height>=this.textContainerSize.height?\"none\":\"block\"},Texty.prototype.resetAutoScroll=function(){this.scroller.autoscrolling=!1,clearInterval(this.autoscrollLoopInterval),this.autoscrollLoopInterval=null,this.autoscrollTimeouts.forEach(function(t){clearTimeout(t)}),this.autoscrollTimeouts=[]},Texty.prototype.handleScroll=function(t,e){if(ScreenObject.allowPositioningAndSizingUsingTransforms?this.textContainerStyle.transform=ScreenObject.supports3d?\"translate3d(0, \"+-e+\"px, 0)\":\"translate(0, \"+-e+\"px)\":this.textContainerStyle.top=-e+\"px\",this.scrollbarStyle){var i=e\/(this.textContainerSize.height-this.size.height)*(this.size.height-parseInt(this.scrollbarStyle.height,10));ScreenObject.allowPositioningAndSizingUsingTransforms?this.scrollbarStyle.transform=ScreenObject.supports3d?\"translate3d(0, \"+i+\"px, 0)\":\"translate(0, \"+i+\"px)\":this.scrollbarStyle.top=i+\"px\"}},Texty.prototype.handleTouchStart=function(t){t.preventDefault(),new ActionContext(this).trackUserInteraction(),this.scrollable&&(t.stopPropagation(),this.scroller.doTouchStart(t.changedTouches,t.timeStamp),attach(this.parentUnit.node,\"touchmove\",this.handleTouchMove),attach(this.parentUnit.node,\"touchend\",this.handleTouchEnd),attach(this.parentUnit.node,\"touchcancel\",this.handleTouchCancel))},Texty.prototype.handleTouchMove=function(t){t.preventDefault(),this.scroller.doTouchMove(t.changedTouches,t.timeStamp)},Texty.prototype.handleTouchEnd=function(t){t.preventDefault(),this.scroller.doTouchEnd(t.timeStamp),detach(this.parentUnit.node,\"touchmove\",this.handleTouchMove),detach(this.parentUnit.node,\"touchend\",this.handleTouchEnd),detach(this.parentUnit.node,\"touchcancel\",this.handleTouchCancel)},Texty.prototype.handleTouchCancel=function(t){this.handleTouchEnd(t)},Texty.prototype.positionUsingTransforms=retTrue,Texty.prototype.sizeUsingTransforms=retTrue,Texty.prototype.getNaturalSize=function(){return this.originalSize},Texty.prototype.startListeningForTouches=function(){this.scrollable&&!this._listeningForTouches&&(attach(this.textContainer,\"touchstart\",this.handleTouchStart),this._listeningForTouches=!0)},Texty.prototype.stopListeningForTouches=function(){this._listeningForTouches&&(detach(this.textContainer,\"touchstart\",this.handleTouchStart),this._listeningForTouches=!1)},Texty.prototype.setText=function(t){this.text=t,this.hidden||this.updateText()},Texty.prototype.showAction=function(t,e,i){Texty.uber.showAction.call(this,t,e,function(){this.startListeningForTouches(),i()}.bind(this))},Texty.prototype.hideAction=function(t,e,i){Texty.uber.hideAction.call(this,t,e,function(){this.stopListeningForTouches(),i()}.bind(this))},Texty.prototype.setTextAction=function(t,e,i){this.setText(e.text),i()};;\nfunction Frame(){}inherit(Frame,ScreenObject),Frame.toString=function(){return\"[Clazz Frame]\"},Frame.prototype.toString=function(){return\"[Frame \"+this.localId+\"]\"},Frame.prototype.createNode=function(){var t=this,e=Frame.uber.createNode.call(this),i=new CStyler(e);switch(i.overflow=\"hidden\",this.elem=document.createElement(this.frameType),this.elemStyle=new CStyler(this.elem),this.elemStyle.cssText=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0\",e.appendChild(this.elem),this.frameType){case\"iframe\":this.elemStyle.visibility=\"hidden\",this.elem.src=this.sourceUrl,this.elem.setAttribute(\"frameborder\",0),this.elem.setAttribute(\"scrolling\",\"no\"),this.elem.onload=function(){this.elemStyle.visibility=\"visible\"}.bind(this);break;case\"img\":t.incrementLoadingCount(),this.elem.src=this.sourceUrl,this.elem.onload=t.decrementLoadingCount;break;case\"div\":t.incrementLoadingCount();var n=new ActionContext(t),o=Function(\"div\",\"ctx\",\"c\",\"unit\",\"screen\",this.initCode);try{o.call(t,this.elem,n,t.decrementLoadingCount,t.parentUnit,t.parentScreen)}catch(r){console.error(r.message+\"\\n\"+r.stack)}}return e},Frame.prototype.redrawLayout=function(){this.elemStyle.width=this.size.width,this.elemStyle.height=this.size.height};;\nfunction Shapey(){}inherit(Shapey,ScreenObject),Shapey.toString=function(){return\"[Clazz Shapey]\"},Shapey.prototype.toString=function(){return\"[Shapey \"+this.localId+\"]\"},Object.defineProperties(Shapey.prototype,{borderRoundness:{get:function(){var t=this.defaultValues.roundness;if(\"number\"==typeof this.roundness&&(t=this.roundness),t>0){var e=Math.min(this.size.height,this.size.width),i=e\/2,n=Math.max(this.size.height,this.size.width),o=n\/2;if(50>t){var r=t\/50;t=i*r+\"px\"}else{var s=(t-50)\/50,a=(o-i)*s,h=i+a,l=this.size.width==e?i:h,c=this.size.height==e?i:h;t=l+\"px \"+c+\"px\"}}return t}}}),Shapey.prototype.awake=function(){Shapey.uber.awake.call(this),this.defaultValues={backgroundColor:\"#365c99\",borderColor:\"#000000\",borderWidth:5,roundness:0,shadowAngle:0,shadowBlur:10,shadowColor:\"rgba(0,0,0,0.5)\",shadowDistance:0}},Shapey.prototype.createNode=function(){var t=Shapey.uber.createNode.call(this);if(t.className+=\" touchable\",this.shapey=document.createElement(\"div\"),this.shapeyStyle=new CStyler(this.shapey),this.backgroundColor)if(Color.isGradient(this.backgroundColor)){var e=Color.createGradientStyle(this.backgroundColor);this.addStyle({\".gradient-shapey\":e}),addClass(this.shapey,\"gradient-shapey\")}else this.shapeyStyle.backgroundColor=this.backgroundColor;if(this.border){var i=this.borderColor!==void 0?this.borderColor:this.defaultValues.borderColor,n=\"number\"==typeof this.borderWidth?this.borderWidth:this.defaultValues.borderWidth;this.shapeyStyle.borderColor=i,this.shapeyStyle.borderStyle=\"solid\",this.shapeyStyle.borderWidth=n+\"px\"}if(this.shadow){var o=(\"number\"==typeof this.shadowAngle?this.shadowAngle:this.defaultValues.shadowAngle)*(Math.PI\/180),r=\"number\"==typeof this.shadowBlur?this.shadowBlur:this.defaultValues.shadowBlur,s=this.shadowColor!==void 0?this.shadowColor:this.defaultValues.shadowColor,a=\"number\"==typeof this.shadowDistance?this.shadowDistance:this.defaultValues.shadowDistance,h=Math.round(a*Math.cos(o)),l=Math.round(a*Math.sin(o));this.shapeyStyle.boxShadow=h+\"px \"+l+\"px \"+r+\"px \"+s}return t.appendChild(this.shapey),t},Shapey.prototype.redrawLayout=function(){if(this.shapey){var t=this.borderRoundness;parseInt(t,10)>0&&(this.shapeyStyle.borderTopLeftRadius=t,this.shapeyStyle.borderTopRightRadius=t,this.shapeyStyle.borderBottomLeftRadius=t,this.shapeyStyle.borderBottomRightRadius=t)}};;\nfunction File(t){this.url=t}File.toString=function(){return\"[Clazz File]\"},File.prototype.toString=function(){return\"[File \"+this.localId+\"(\"+this.name+\"\/\"+this.url+\")]\"},File.prototype.getUrl=function(){if(this.url){if(-1!==this.url.indexOf(\":\/\/\"))return this.url;if(\"\/\"===this.url[0])throw\"An absolute path as URL?\";return creative.resourceUrl+this.url}if(this.blobHash)return(creative.secure?creative.cachedApiUrl:creative.insecureCachedApiUrl)+\"blobs\/\"+this.blobHash+\"\/\"+encodeURIComponent(this.name);throw\"Neither url nor blobHash set?\"},File.prototype.getDataUri=function(t,e){t instanceof Function&&(e=t,t={});var i=this,n=this.getUrl();this.dataUri!==void 0?setTimeout(function(){e(i.dataUri)},0):creative.dataURIsEnabled||t.force?creative.batcher.getDataUri(n,e):setTimeout(function(){e(n)},0)},Object.defineProperty(File.prototype,\"width\",{get:function(){return this.retina?Math.round(this.meta.width\/2):this.meta.width}}),Object.defineProperty(File.prototype,\"height\",{get:function(){return this.retina?Math.round(this.meta.height\/2):this.meta.height}});;\nvar Form={};Form.toString=function(){return\"[Clazz Form]\"},Form.submitAction=function(t,e,i){t.track({name:\"formSubmissionAttempted\",label:e.reportLabel}),Form.validateAction(t,{formElements:e.formElements,onSuccess:function(t,i){var n;if(\"table\"==e.submitTarget&&e.tableId)n=creative.apiUrl+\"formTables\/\"+e.tableId+\"\/rows\";else{if(\"url\"!=e.submitTarget||!e.url)return(e.onFailure||nullai)(t,i);n=e.url}var o={fields:{}};e.formElements.forEach(function(t){o.fields[t.fieldName]=t.getField()});var r=new XMLHttpRequest;r.open(\"POST\",n),r.setRequestHeader(\"Content-Type\",\"application\/json; charset=utf-8\"),r.onreadystatechange=function(){if(4===r.readyState){var n=r.status>=200&&300>r.status;n&&t.track({name:\"formSubmissionSucceeded\",label:e.reportLabel});var o=n?e.onSuccess:e.onFailure;(o||nullai)(t,i)}},r.send(JSON.stringify(o))},onFailure:e.onFailure},i)},Form.validateAction=function(t,e,i){function n(t){r(t,!0)}function o(t){r(t,!1)}function r(t,e){t.forEach(function(t){var i=t.node.querySelector(\"input, textarea\");i&&(i.disabled=!e)})}function s(){android(\"2\")&&n(e.formElements),i()}for(var a=0;e.formElements.length>a;a++){var h=e.formElements[a];h.getField();var l=e.formElements[a].isValid();if(l!==!0)return android(\"2\")&&o(e.formElements),h.parentUnit.alertAction(t,{text:l},function(){(e.onFailure||nullai)(t,s)}),void 0}(e.onSuccess||nullai)(t,i)};;\n";
            head.appendChild(js);



            // Run!
            Creative.init({
                "id": "e706ef80",
                "clazz": "Interstitial",
                "supportedDeviceTypes": ["Phone"],
                "name": "Interstitial | Azerbaijan Azerfon - MA 15 minutes rule - Ru",
                "units": {
                    "banner": {
                        "localId": 1,
                        "clazz": "CreativeUnit",
                        "deviceType": "Phone",
                        "master": {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "Master",
                            "triggers": [{
                                "localId": 101,
                                "type": "firstAppear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 102,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Mozook API",
                                                        "code": "\r\n\/* Celtra Screens *\/\r\n\r\nunit.pConfirm = unit.find('confirmation');\r\nunit.pMsisdn = unit.find('msisdn');\r\nunit.pPin = unit.find('pin');\r\nunit.pCongrats = unit.find('congratulation');\r\nunit.pMo = unit.find('mo');\r\n\r\n\/* MobiWAP API *\/\r\n\r\nunit.domainPath  = 'wap.mozook.com';\r\nunit.doubleConfirmation = 'true';\r\n\r\nvar subDirectory = \"cmps\"\r\nvar campaignId  = '12027';\r\nvar pageId      = '741';\r\nvar langId      = 'Russian_Translit';\r\n\r\nvar url = 'http:\/\/' + unit.domainPath + '\/' + subDirectory + '\/?campaignid=' + campaignId + '&ForcedPage=' + pageId + '&LangID=' + langId + '&skipgoogleplay=1&placementid=' + creative.placementId;\r\nif(!!creative.userParams.splickyImp) {\r\n    url += '&mid=' + creative.userParams.splickyImp;\r\n}\r\n\r\nloadJSONP(url, function (response) {\r\n    if(!!console && !!console.log)\r\n        console.log('Response received', response);\r\n    unit._response = response;\r\n    c();\r\n});\r\n\r\n\/* Parser *\/\r\n\r\nvar each =  function( obj, callback, args ) {\r\n    var value,\r\n        i = 0,\r\n        length = obj.length,\r\n        isArray = 'number' == typeof(obj.length);\r\n\r\n    if ( args ) {\r\n        if ( isArray ) {\r\n            for ( ; i < length; i++ ) {\r\n                value = callback.apply( obj[ i ], args );\r\n\r\n                if ( value === false ) {\r\n                    break;\r\n                }\r\n            }\r\n        } else {\r\n            for ( i in obj ) {\r\n                value = callback.apply( obj[ i ], args );\r\n\r\n                if ( value === false ) {\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n\r\n    \/\/ A special, fast, case for the most common use of each\r\n    } else {\r\n        if ( isArray ) {\r\n            for ( ; i < length; i++ ) {\r\n                value = callback.call( obj[ i ], i, obj[ i ] );\r\n\r\n                if ( value === false ) {\r\n                    break;\r\n                }\r\n            }\r\n        } else {\r\n            for ( i in obj ) {\r\n                value = callback.call( obj[ i ], i, obj[ i ] );\r\n\r\n                if ( value === false ) {\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return obj;\r\n};\r\n\r\n\r\nvar extend = function(deep, target, source) {\r\n    for(var p in source) {\r\n        if(source.hasOwnProperty(p)) {\r\n            var s = source[p];\r\n            var typeofs = typeof s;\r\n            if(['number', 'string', 'boolean', 'function'].some(function(t) { return t == typeofs; })) {\r\n                target[p] = s;\r\n            } else {\r\n                target[p] = extend(deep, {}, s);\r\n            }\r\n        }\r\n\r\n    }\r\n    return target;\r\n}\r\n\r\nnew function (global, settings) {\r\n\r\n    var $separator;\r\n    var $spaces;\r\n    var $suffix;\r\n    var $prefix;\r\n    var $hash;\r\n    var $numbers;\r\n    var $preserve_numeric_index;\r\n    assign_settings(settings);\r\n\r\n    function assign_settings(settings) {\r\n        $hash = (typeof settings.hash == 'undefined') ? '?' : settings.hash;\r\n        $prefix = settings.prefix || null;\r\n        $preserve_numeric_index = settings.preserve_numeric_index || false;\r\n\r\n        $separator = settings.separator || '&';\r\n        $spaces = settings.spaces === false ? false : true;\r\n        $suffix = settings.suffix === false ? '' : '[]';\r\n        $numbers = settings.numbers === false ? false : true;\r\n    };\r\n\r\n    global.parsequery = new function () {\r\n        var is = function (o, t) {\r\n            return o != undefined && o !== null && (!!t ? o.constructor == t : true);\r\n        };\r\n        \/\/ when path is 'testy[1]',\r\n        \/\/ then returns [\"testy\", [\"1\"]]\r\n        var parse = function (path) {\r\n            \/\/ var m, rx = \/\\[([^[]*)\\]\/g, match = \/^(\\S+?)(\\[\\S*\\])?$\/.exec(path), base = match[1], tokens = [];\r\n            var m, rx = \/\\[([^[]*)\\]\/g, match = \/^(\\S+?)(\\[\\S*\\])?$\/.exec(path), tokens = [];\r\n            if (match && match[1]) {\r\n                base = match[1];\r\n                while (m = rx.exec(match[2])) tokens.push(m[1]);\r\n            }\r\n            else {\r\n                base = path;\r\n            }\r\n            return [base, tokens];\r\n        };\r\n        var set = function (target, tokens, value) {\r\n            var o, token = tokens.shift();\r\n            if (typeof target != 'object') target = null;\r\n            if (token === \"\") {\r\n                if (!target) target = [];\r\n                if (is(target, Array)) {\r\n                    target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));\r\n                } else if (is(target, Object)) {\r\n                    var i = 0;\r\n                    while (target[i++] != null);\r\n                    target[--i] = tokens.length == 0 ? value : set(target[i], tokens.slice(0), value);\r\n                } else {\r\n                    target = [];\r\n                    target.push(tokens.length == 0 ? value : set(null, tokens.slice(0), value));\r\n                }\r\n            } else if (token && token.match(\/^\\s*[0-9]+\\s*$\/)) {\r\n                var index = parseInt(token, 10);\r\n                if (!target) target = [];\r\n                target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);\r\n            } else if (token) {\r\n                var index = token.replace(\/^\\s*|\\s*$\/g, \"\");\r\n                if (!target) target = {};\r\n                if (is(target, Array)) {\r\n                    var temp = {};\r\n                    for (var i = 0; i < target.length; ++i) {\r\n                        temp[i] = target[i];\r\n                    }\r\n                    target = temp;\r\n                }\r\n                target[index] = tokens.length == 0 ? value : set(target[index], tokens.slice(0), value);\r\n            } else {\r\n                return value;\r\n            }\r\n            return target;\r\n        };\r\n\r\n        var queryObject = function (a, settings) {\r\n            if (settings) assign_settings(settings);\r\n\r\n            var self = this;\r\n            self.keys = {};\r\n\r\n            if (a.queryObject) {\r\n                each(a.get(), function (key, val) {\r\n                    self.SET(key, val);\r\n                });\r\n            }\r\n            else {\r\n                var q = \"\" + a;\r\n                q = q.replace(\/^[?#]\/, ''); \/\/ remove any leading ? || #\r\n                q = q.replace(\/[;&]$\/, ''); \/\/ remove any trailing & || ;\r\n                if ($spaces) q = q.replace(\/[+]\/g, ' '); \/\/ replace +'s with spaces\r\n\r\n                each(q.split(\/[&;]\/), function () {\r\n                    var key = decodeURIComponent(this.split('=')[0]);\r\n                    var val = (function (keyval, key) {\r\n                        if (key) {\r\n                            var val = keyval.split('=')[1];\r\n                            return val ? decodeURIComponent(val) : true;\r\n                        }\r\n                        else {\r\n                            return null;\r\n                        }\r\n                    })(this, key);\r\n\r\n                    if (!key) return;\r\n\r\n                    if ($numbers) {\r\n                        if (\/^[+-]?[0-9]+\\.[0-9]*$\/.test(val)) \/\/ simple float regex\r\n                            val = parseFloat(val);\r\n                        else if (\/^[+-]?[0-9]+$\/.test(val)) \/\/ simple int regex\r\n                            val = parseInt(val, 10);\r\n                    }\r\n\r\n                    val = (!val && val !== 0) ? true : val;\r\n\r\n                    if (val !== false && val !== true && typeof val != 'number')\r\n                        val = val;\r\n\r\n                    self.SET(key, val);\r\n                });\r\n            }\r\n            return self;\r\n        };\r\n\r\n        queryObject.prototype = {\r\n            queryObject: true,\r\n            has: function (key, type) {\r\n                var value = this.get(key);\r\n                return is(value, type);\r\n            },\r\n            GET: function (key) {\r\n                if (!is(key)) return this.keys;\r\n                var parsed = parse(key), base = parsed[0], tokens = parsed[1];\r\n                var target = this.keys[base];\r\n                while (target != null && tokens.length != 0) {\r\n                    target = target[tokens.shift()];\r\n                }\r\n                return typeof target == 'number' ? target : target || \"\";\r\n            },\r\n            get: function (key) {\r\n                var target = this.GET(key);\r\n                if (is(target, Object))\r\n                    return extend(true, {}, target);\r\n                else if (is(target, Array))\r\n                    return target.slice(0);\r\n                return target;\r\n            },\r\n            SET: function (key, val) {\r\n                var value = !is(val) ? null : val;\r\n                var parsed = parse(key), base = parsed[0], tokens = parsed[1];\r\n                var target = this.keys[base];\r\n                this.keys[base] = set(target, tokens.slice(0), value);\r\n                return this;\r\n            },\r\n            set: function (key, val) {\r\n                return this.copy().SET(key, val);\r\n            },\r\n            REMOVE: function (key) {\r\n                return this.SET(key, null).COMPACT();\r\n            },\r\n            remove: function (key) {\r\n                return this.copy().REMOVE(key);\r\n            },\r\n            EMPTY: function () {\r\n                var self = this;\r\n                each(self.keys, function (key, value) {\r\n                    delete self.keys[key];\r\n                });\r\n                return self;\r\n            },\r\n            load: function (url) {\r\n                var hash = url.replace(\/^.*?[#](.+?)(?:\\?.+)?$\/, \"$1\");\r\n                var search = url.replace(\/^.*?[?](.+?)(?:#.+)?$\/, \"$1\");\r\n                return new queryObject(url.length == search.length ? '' : search, url.length == hash.length ? '' : hash);\r\n            },\r\n            empty: function () {\r\n                return this.copy().EMPTY();\r\n            },\r\n            copy: function () {\r\n                return new queryObject(this);\r\n            },\r\n            COMPACT: function () {\r\n                function build(orig) {\r\n                    var obj = typeof orig == \"object\" ? is(orig, Array) ? [] : {} : orig;\r\n                    if (typeof orig == 'object') {\r\n                        function add(o, key, value) {\r\n                            if (is(o, Array))\r\n                                o.push(value);\r\n                            else\r\n                                o[key] = value;\r\n                        }\r\n                        each(orig, function (key, value) {\r\n                            if (!is(value)) return true;\r\n                            add(obj, key, build(value));\r\n                        });\r\n                    }\r\n                    return obj;\r\n                }\r\n                this.keys = build(this.keys);\r\n                return this;\r\n            },\r\n            compact: function () {\r\n                return this.copy().COMPACT();\r\n            },\r\n            toString: function () {\r\n                var i = 0, queryString = [], chunks = [], self = this;\r\n                var addFields = function (arr, key, value) {\r\n                    if (!is(value) || value === false) return;\r\n                    var o = [encodeURIComponent(key)];\r\n                    if (value !== true) {\r\n                        o.push(\"=\");\r\n                        o.push(encodeURIComponent(value));\r\n                    }\r\n                    arr.push(o.join(\"\"));\r\n                };\r\n                var build = function (obj, base) {\r\n                    var newKey = function (key) {\r\n                        \/\/ return !base || base == \"\" ? [key].join(\"\") : [base, \"[\", key, \"]\"].join(\"\");\r\n                        \/\/ add hock implementation for php\r\n                        return !base || base == \"\" ? [key].join(\"\") : [\r\n                          base, \"[\",\r\n                          $preserve_numeric_index || typeof (key) != 'number' ? key : \"\",\r\n                          \"]\"\r\n                        ].join(\"\");\r\n                    };\r\n                    each(obj, function (key, value) {\r\n\r\n                        \/\/ rebuild or assign\r\n                        if (Object.prototype.isPrototypeOf(value)) {\r\n                            build(value, newKey(key));\r\n                        }\r\n                        else {\r\n                            addFields(chunks, newKey(key), value);\r\n                        }\r\n                    });\r\n                };\r\n                build(this.keys);\r\n\r\n                if (chunks.length > 0) queryString.push($hash);\r\n                queryString.push(chunks.join($separator));\r\n                return ($prefix || '') + queryString.join(\"\");\r\n            }\r\n        };\r\n\r\n        function parse_url(url) {\r\n            var m = url && url.match(\/^(.*?)[?](.+?)(?:#.+)?$\/);\r\n            return m ? {\r\n                base: m[1],\r\n                search: m[2]\r\n            } : {\r\n                base: url,\r\n                search: \"\"\r\n            };\r\n        };\r\n\r\n        return function (url, settings) {\r\n            if (!settings) settings = {};\r\n\r\n            var u = parse_url(url);\r\n            if (u.base) settings.prefix = u.base;\r\n\r\n            assign_settings(settings);\r\n            return new queryObject(u.search);\r\n        };\r\n    };\r\n}(unit, {});"
                                                    }
                                                }, {
                                                    "clazz": "ActionInvocation",
                                                    "localId": 103,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Flick Fix",
                                                        "code": "var BeGoneFlick =\r\n    \"-webkit-perspective:1000;\"+\r\n    \"-webkit-backface-visibility:hidden;\"+\r\n    \"-moz-perspective:1000;\"+\r\n    \"-moz-backface-visibility:hidden;\"+\r\n    \"-ms-perspective:1000;\"+\r\n    \"-ms-backface-visibility:hidden;\"+\r\n    \"-o-perspective:1000;\"+\r\n    \"-o-backface-visibility:hidden;\"+\r\n    \"perspective:1000;\"+\r\n    \"backface-visibility:hidden;\"+\r\n    \"-webkit-transform:translate3d(0,0,0);\"+\r\n    \"-moz-transform:translate3d(0,0,0);\"+\r\n    \"-ms-transform:translate3d(0,0,0);\"+\r\n    \"-o-transform:translate3d(0,0,0);\"+\r\n    \"transform:translate3d(0,0,0);\"+\r\n    \"direction:ltr\";\r\ndocument.getElementsByTagName(\"div\")[0].style.cssText +=';'+ BeGoneFlick;"
                                                    }
                                                }, {
                                                    "clazz": "ActionInvocation",
                                                    "localId": 576,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Gyro Parallax",
                                                        "code": "\r\n\/\/ Main Background\r\nvar mainBg = screen.find(\"mainBackground\");\r\nvar mainBgID = mainBg.node.id;\r\n\r\n\/\/ Remove the first ID\r\nvar domElement = document.getElementById( mainBgID );\r\ndomElement.parentNode.removeChild( domElement );\r\n\r\n\/\/ Assign the second ID\r\nvar mainBgBlur = document.getElementById( mainBgID ).getElementsByTagName(\"div\")[0];\r\n\r\nif (window.DeviceOrientationEvent) {\r\n  window.addEventListener('deviceorientation', function(eventData) {\r\n        var LR = eventData.gamma;\r\n        var FB = eventData.beta;\r\n        var DIR = eventData.alpha;\r\n        deviceOrientationHandler(LR, FB, DIR);\r\n    }, false);\r\n}\r\n\r\nfunction deviceOrientationHandler(LR, FB, DIR) {\r\n\r\n    if(window.innerHeight < window.innerWidth){\r\n    \r\n        \/\/ landscape\r\n        mainBgBlur.style.webkitTransform = \"translate3d(\"+(FB\/3)+\"px, \"+(LR\/3)+\"px, 0)\";\r\n        mainBgBlur.style.MozTransform = \"translate3d(\"+(FB\/3)+\"px, \"+(LR\/3)+\"px, 0)\";\r\n        mainBgBlur.style.transform = \"translate3d(\"+(FB\/3)+\"px, \"+(LR\/3)+\"px, 0)\";\r\n        \r\n    } else {\r\n    \r\n        \/\/ portrait\r\n        mainBgBlur.style.webkitTransform = \"translate3d(\"+(LR\/3)+\"px, \"+(FB\/3)+\"px, 0)\";\r\n        mainBgBlur.style.MozTransform = \"translate3d(\"+(LR\/3)+\"px, \"+(FB\/3)+\"px, 0)\";\r\n        mainBgBlur.style.transform = \"translate3d(\"+(LR\/3)+\"px, \"+(FB\/3)+\"px, 0)\";\r\n        \r\n    }\r\n\r\n}\r\n\r\n\/* ------- For Low End Devices ------- *\/\r\n\r\nif (navigator.userAgent.match(\/GT-S\/i)) {\r\n\r\n    if (navigator.userAgent.match(\/Chrome\/i)) {\r\n    \r\n        if (window.DeviceMotionEvent != undefined) {\r\n        \r\n            window.ondevicemotion = function(e) {\r\n                \r\n                var x = e.accelerationIncludingGravity.x * -3;\r\n                var y = e.accelerationIncludingGravity.y * 3;        \r\n                var translate = \"translate3d(\"+x+\"px,\"+y+\"px,0)\";\r\n                \r\n                mainBgBlur.style.webkitTransform = translate;\r\n                mainBgBlur.style.MozTransform = translate\r\n                mainBgBlur.style.msTransform = translate\r\n                mainBgBlur.style.OTransform = translate\r\n                mainBgBlur.style.transform = translate\r\n                \r\n        \t}\r\n            \r\n        }\r\n        \r\n    }\r\n\r\n}"
                                                    }
                                                }, {
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2457,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "loop",
                                                    "isStatic": true,
                                                    "args": {
                                                        "repeat": -1,
                                                        "action": {
                                                            "clazz": "ActionInvocation",
                                                            "actionClazz": "Kernel",
                                                            "instanceLocalId": null,
                                                            "method": "runInSequence",
                                                            "isStatic": true,
                                                            "args": {
                                                                "actions": [{
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2458,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1480",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "3px",
                                                                                        "top": "18px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "314px",
                                                                                        "height": "69px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 500,
                                                                                "target": "1480",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": false
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2459,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1480",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "0px",
                                                                                        "top": "15px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "320px",
                                                                                        "height": "75px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 500,
                                                                                "target": "1480",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": true
                                                                            }
                                                                        }]
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 2,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "5px",
                                        "top": "325px"
                                    },
                                    "size": {
                                        "width": "310px",
                                        "height": "55px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "disclaimer",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 6,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "",
                                "fontWeight": "",
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 8,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(204,204,204,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u041f\u0440\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435 \u043d\u0430 \u041c\u043e\u0431\u0438\u043b\u044c\u043d\u0443\u044e \u0410\u043a\u0430\u0434\u0435\u043c\u0438\u044e \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0437\u0430\u0442\u0435\u043c \u0443\u0441\u043b\u0443\u0433\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043e\u0438\u0442\u044c 1,18 AZN \u0441 \u041d\u0414\u0421 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 2 \u0434\u043d\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0412\u0430\u0448\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0442\u044c\u0441\u044f. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432 \u043b\u044e\u0431\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0432 SMS \u0441 \u0442\u0435\u043a\u0441\u0442\u043e\u043c \"STOP MA\" \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 6550.",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 116,
                                "fieldName": "disclaimer"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "5px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "310px",
                                        "height": "20px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "pricing",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 7,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "",
                                "fontWeight": "",
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 8,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(204,204,204,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "1,18 AZN \u0441 \u041d\u0414\u0421. \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 2 \u0434\u043d\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u043f\u0435\u0440\u0432\u044b\u0439 \u0434\u0435\u043d\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e.",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 117,
                                "fieldName": "pricing"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "15px"
                                    },
                                    "size": {
                                        "width": "320px",
                                        "height": "75px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "title-en",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 8,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fileLocalId": 2869,
                                "fittingSize": "stretch",
                                "imagePosition": "center",
                                "clazz": "Picture",
                                "localId": 1480
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-90px",
                                        "top": "15px"
                                    },
                                    "size": {
                                        "width": "500px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "top gradient",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "linear-gradient(0deg, rgba(78,95,102,0), rgba(78,95,102,1))",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 1549,
                                "fieldName": "top gradient"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-90px",
                                        "top": "300px"
                                    },
                                    "size": {
                                        "width": "500px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "bottom gradient",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "linear-gradient(0deg, rgba(78,95,102,1), rgba(78,95,102,0))",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 1555,
                                "fieldName": "bottom gradient"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-90px",
                                        "top": "-234px"
                                    },
                                    "size": {
                                        "width": "500px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "top solid",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(78,95,102,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 1573,
                                "fieldName": "top solid"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-90px",
                                        "top": "322px"
                                    },
                                    "size": {
                                        "width": "500px",
                                        "height": "250px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "bottom solid",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "backgroundColor": "rgba(78,95,102,1)",
                                "border": false,
                                "borderWidth": 5,
                                "borderColor": "#000000",
                                "roundness": 0,
                                "shadow": false,
                                "shadowDistance": 0,
                                "shadowBlur": 10,
                                "shadowAngle": 0,
                                "shadowColor": "rgba(0,0,0,0.5)",
                                "clazz": "Shapey",
                                "localId": 1586,
                                "fieldName": "bottom solid"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "-90px",
                                        "top": "-114px"
                                    },
                                    "size": {
                                        "width": "500px",
                                        "height": "500px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "mainBackground",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fileLocalId": 1624,
                                "fittingSize": "stretch",
                                "imagePosition": "center",
                                "clazz": "Picture",
                                "localId": 1605
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        },
                        "screens": [{
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "Start",
                            "triggers": [{
                                "localId": 36,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 3129,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Button Efx",
                                                        "code": "var button = screen.find(\"button\");\r\nvar targetButton = button.node.id;\r\nvar animeCSS =\r\n    \"-webkit-animation: blinker 1s linear infinite;\"+\r\n    \"animation: blinker 1s linear infinite;\";\r\ndocument.getElementById( targetButton ).getElementsByClassName('call-to-action')[0].style.cssText +=';'+ animeCSS;"
                                                    }
                                                }, {
                                                    "clazz": "ActionInvocation",
                                                    "localId": 86,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "loop",
                                                    "isStatic": true,
                                                    "args": {
                                                        "repeat": -1,
                                                        "action": {
                                                            "clazz": "ActionInvocation",
                                                            "actionClazz": "Kernel",
                                                            "instanceLocalId": null,
                                                            "method": "runInSequence",
                                                            "isStatic": true,
                                                            "args": {
                                                                "actions": [{
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 87,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1651",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "271px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1651",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": false
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2045,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 88,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1651",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "270px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1651",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": true
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2046,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 3,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "0px",
                                        "top": "0px"
                                    },
                                    "size": {
                                        "width": "320px",
                                        "height": "372px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "hotspot",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 3,
                                "triggers": [{
                                    "localId": 15,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 16,
                                                        "disabled": false,
                                                        "actionClazz": "Kernel",
                                                        "instanceLocalId": null,
                                                        "method": "executeJavascript",
                                                        "isStatic": true,
                                                        "args": {
                                                            "description": "Subscribe Button",
                                                            "code": "var subMethod = unit._response.SubMethod;\r\nvar url = subMethod.URL;\r\n\r\nswitch (subMethod.Method) {\r\n    case \"DirectWAP\":\r\n        \/\/ check if double confirmation for DirectWAP is true or false\r\n        if ( unit.doubleConfirmation == 'false' ) {\r\n            \/\/ parse url and remove jsonp and _ parameter\r\n            var q = unit.parsequery(url).REMOVE(\"jsonp\").REMOVE(\"_\");\r\n            url = q.REMOVE(\"skipgoogleplay\").SET(\"celtra\", \"1\");\r\n            url = \"http:\/\/\" + unit.domainPath + url;\r\n            \r\n            unit.goToURLAction(ctx, {url: url, label: 'DirectWAP Double Confirmation'}, c);\r\n        } else {\r\n            unit.goToScreenAction(ctx, { screen: unit.pConfirm }, c);\r\n        }\r\n        break;\r\n    case \"ClickTag\":\r\n        \/\/ assign url to this hotspot\r\n        unit.goToURLAction(ctx, {url: url, label: 'ClickTag'}, c);\r\n        break;\r\n    case \"WAPPIN\":\r\n        \/\/ go to msisdn page\r\n        unit.goToScreenAction(ctx, { screen: unit.pMsisdn }, c);\r\n        break;\r\n    case \"MO\":\r\n        \/\/ go to mo page\r\n        unit.goToScreenAction(ctx, { screen: unit.pMo }, c);\r\n        break;\r\n    default:\r\n        console.log(\"SubMethod is not supported: \" + subMethod.Method);\r\n        break;\r\n}"
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false
                                }],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Hotspot",
                                "localId": 17,
                                "fieldName": "hotspot"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "47px",
                                        "top": "270px"
                                    },
                                    "size": {
                                        "width": "225px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "button",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 2,
                                "triggers": [{
                                    "localId": 1649,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": null,
                                    "isCustom": false
                                }],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Button",
                                "localId": 1651,
                                "fieldName": "button",
                                "creativeOptimizationEnabled": false,
                                "experimentSpecificValues": {
                                    "ButtonStyle": [{
                                        "id": "v1",
                                        "label": "v1",
                                        "callToActionText": "\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u0441\u0435\u0439\u0447\u0430\u0441!",
                                        "backgroundColor": true,
                                        "backgroundColorUp": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorDown": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorHover": "linear-gradient(0deg, #0d2a59, #365c99)",
                                        "border": true,
                                        "borderWidth": 1,
                                        "borderColor": "rgba(23,85,20,1)",
                                        "roundness": 10,
                                        "shadow": false,
                                        "shadowDistance": 0,
                                        "shadowBlur": 10,
                                        "shadowAngle": 0,
                                        "shadowColor": "rgba(0,0,0,0.5)",
                                        "fontFamily": "Helvetica",
                                        "fontProvider": "web",
                                        "fontStretch": "",
                                        "fontStyle": "normal",
                                        "fontWeight": 700,
                                        "fontVariation": "",
                                        "fontFiles": {},
                                        "fontSize": 14,
                                        "scaleFont": false,
                                        "scaleBaseWidth": 0,
                                        "textColor": "rgba(255,255,255,1)",
                                        "textAlign": "center",
                                        "textDecoration": "",
                                        "letterSpacing": 0,
                                        "textColorDown": "rgba(255,255,255,1)",
                                        "textColorHover": "#ffffff",
                                        "background": "css",
                                        "foregroundForCss": "text",
                                        "foregroundForImage": "image"
                                    }]
                                }
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "82px",
                                        "top": "90px"
                                    },
                                    "size": {
                                        "width": "155px",
                                        "height": "243px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "girl",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fileLocalId": 1486,
                                "fittingSize": "stretch",
                                "imagePosition": "center",
                                "clazz": "Picture",
                                "localId": 1652
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "155px",
                                        "top": "-200px"
                                    },
                                    "size": {
                                        "width": "10px",
                                        "height": "10px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "div",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "frameType": "div",
                                "sourceUrl": "",
                                "initCode": "var newStyles =\n'<style type=\"text\/css\">' +\n    '@-webkit-keyframes blinker {' +\n      '1% { color: rgba(255, 255, 255, 1); }' +\n      '50% { color: rgba(255, 255, 255, 1); }' +\n      '51% { color: rgba(255, 255, 255, 0); }' +\n      '100% { color: rgba(255, 255, 255, 0); }' +\n    '}' +\n    '@keyframes blinker {' +\n      '1% { color: rgba(255, 255, 255, 1); }' +\n      '50% { color: rgba(255, 255, 255, 1); }' +\n      '51% { color: rgba(255, 255, 255, 0); }' +\n      '100% { color: rgba(255, 255, 255, 0); }' +\n    '}' +\n'<\/style>';\n\ndiv.innerHTML = newStyles;\nc();",
                                "clazz": "Frame",
                                "localId": 3120,
                                "fieldName": "div"
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "confirmation",
                            "triggers": [{
                                "localId": 83,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 89,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "loop",
                                                    "isStatic": true,
                                                    "args": {
                                                        "repeat": -1,
                                                        "action": {
                                                            "clazz": "ActionInvocation",
                                                            "actionClazz": "Kernel",
                                                            "instanceLocalId": null,
                                                            "method": "runInSequence",
                                                            "isStatic": true,
                                                            "args": {
                                                                "actions": [{
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 90,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1705",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "196px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1705",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": false
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2055,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 91,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1705",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "195px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1705",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": true
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2056,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 42,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "240px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "20px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "no",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 1,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "",
                                "fontWeight": "",
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 10,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "underline",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u043d\u0435\u0442",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 53,
                                "fieldName": "no"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "150px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "45px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "you-will",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 5,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "",
                                "fontWeight": "",
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 10,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u0423\u0441\u043b\u0443\u0433\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043e\u0438\u0442\u044c 1,18 AZN \u0441 \u041d\u0414\u0421 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 2 \u0434\u043d\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u0412\u0430\u0448\u0430 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0442\u044c\u0441\u044f.",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 55,
                                "fieldName": "you-will"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "47px",
                                        "top": "195px"
                                    },
                                    "size": {
                                        "width": "225px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "button",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 4,
                                "triggers": [{
                                    "localId": 1704,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1714,
                                                        "disabled": false,
                                                        "actionClazz": "Kernel",
                                                        "instanceLocalId": null,
                                                        "method": "executeJavascript",
                                                        "isStatic": true,
                                                        "args": {
                                                            "description": "Yes Button",
                                                            "code": "var subMethod = unit._response.SubMethod;\r\nvar url = subMethod.URL;\r\n\r\n\/\/ parse url and remove jsonp and _ parameter\r\nvar q = unit.parsequery(url).REMOVE(\"jsonp\").REMOVE(\"_\");\r\nurl = q.REMOVE(\"skipgoogleplay\").SET(\"celtra\", \"1\");\r\nurl = \"http:\/\/\" + unit.domainPath + url;\r\n\r\nunit.goToURLAction(ctx, {url: url, label: 'DirectWAP Double Confirmation'}, c);"
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false
                                }],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Button",
                                "localId": 1705,
                                "fieldName": "button",
                                "creativeOptimizationEnabled": false,
                                "experimentSpecificValues": {
                                    "ButtonStyle": [{
                                        "id": "v1",
                                        "label": "v1",
                                        "callToActionText": "\u0414\u0430",
                                        "backgroundColor": true,
                                        "backgroundColorUp": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorDown": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorHover": "linear-gradient(0deg, #0d2a59, #365c99)",
                                        "border": true,
                                        "borderWidth": 1,
                                        "borderColor": "rgba(23,85,20,1)",
                                        "roundness": 10,
                                        "shadow": false,
                                        "shadowDistance": 0,
                                        "shadowBlur": 10,
                                        "shadowAngle": 0,
                                        "shadowColor": "rgba(0,0,0,0.5)",
                                        "fontFamily": "Helvetica",
                                        "fontProvider": "web",
                                        "fontStretch": "",
                                        "fontStyle": "normal",
                                        "fontWeight": 700,
                                        "fontVariation": "",
                                        "fontFiles": {},
                                        "fontSize": 14,
                                        "scaleFont": false,
                                        "scaleBaseWidth": 0,
                                        "textColor": "rgba(255,255,255,1)",
                                        "textAlign": "center",
                                        "textDecoration": "",
                                        "letterSpacing": 0,
                                        "textColorDown": "rgba(255,255,255,1)",
                                        "textColorHover": "#ffffff",
                                        "background": "css",
                                        "foregroundForCss": "text",
                                        "foregroundForImage": "image"
                                    }]
                                }
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "msisdn",
                            "triggers": [{
                                "localId": 1213,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1214,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Form Properties",
                                                        "code": "\r\n\/* Input Ascii *\/\r\n\r\nvar input = unit.find(\"msisdnBox\");\r\ndivID = input.node.id;\r\n\r\ndocument.getElementById( divID ).getElementsByTagName(\"input\")[0].setAttribute(\"type\",\"tel\");\r\ndocument.getElementById( divID ).getElementsByTagName(\"input\")[0].setAttribute(\"maxlength\",10);\r\ndocument.getElementById( divID ).getElementsByTagName(\"input\")[0].onkeypress = function(e){\r\n    var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(\/[^0-9]\/);\r\n    if (verified) { e.preventDefault(); }\r\n};"
                                                    }
                                                }, {
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2105,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "loop",
                                                    "isStatic": true,
                                                    "args": {
                                                        "repeat": -1,
                                                        "action": {
                                                            "clazz": "ActionInvocation",
                                                            "actionClazz": "Kernel",
                                                            "instanceLocalId": null,
                                                            "method": "runInSequence",
                                                            "isStatic": true,
                                                            "args": {
                                                                "actions": [{
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2106,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1202",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "211px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1202",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": false
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2107,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2108,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1202",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "210px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1202",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": true
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2109,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 104,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "255px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "errorNumber",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 201,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 10,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1199,
                                "fieldName": "errorNumber"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "47px",
                                        "top": "210px"
                                    },
                                    "size": {
                                        "width": "225px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "button",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 202,
                                "triggers": [{
                                    "localId": 1200,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1201,
                                                        "disabled": false,
                                                        "actionClazz": "Kernel",
                                                        "instanceLocalId": null,
                                                        "method": "executeJavascript",
                                                        "isStatic": true,
                                                        "args": {
                                                            "description": "MSISDN",
                                                            "code": "var subMethod = unit._response.SubMethod;\r\nvar url = subMethod.URL;\r\nvar msisdn = unit.find(\"msisdnBox\").getField().value;\r\nvar errorNumber = unit.find(\"errorNumber\");\r\n\r\n\/\/ parse url and remove jsonp and _ parameter\r\nvar q = unit.parsequery(url).REMOVE(\"jsonp\").REMOVE(\"_\");\r\nurl = q.REMOVE(\"skipgoogleplay\").SET(\"celtra\", \"1\");\r\nurl = \"http:\/\/\" + unit.domainPath + url;\r\n\r\nloadJSONP(url + \"&phone=\" + msisdn, function (response) {\r\n    if(!!console && !!console.log)\r\n        console.log('Response received', response);\r\n    \r\n    switch (response.SubMethod.Method) {\r\n        case \"WAPPIN\":\r\n            if (\"InvalidNumber\" == response.Status) {\r\n                \/\/ invalid number | https:\/\/hub.celtra.com\/doc\/api.html#js_api&Texty\r\n                errorNumber.setTextAction(ctx, { text:'\u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430' }, c);\r\n            }\r\n            else if (\"AlreadySub\" == response.Status) {\r\n                \/\/ already subscribe | https:\/\/hub.celtra.com\/doc\/api.html#js_api&Texty\r\n                errorNumber.setTextAction(ctx, { text:'\u0412\u044b \u0443\u0436\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d\u044b \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0443' }, c);\r\n            }\r\n            else {\r\n                unit._response = response;\r\n                unit.goToScreenAction(ctx, { screen: unit.pPin }, c);\r\n            }\r\n            break;\r\n        case \"MO\":\r\n            unit._response = response;\r\n            unit.goToScreenAction(ctx, { screen: unit.pMo }, c);\r\n            break;\r\n        default:\r\n            console.log(\"SubMethod is not supported: \" + subMethod.Method);\r\n            break;\r\n    }\r\n});"
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false
                                }],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Button",
                                "localId": 1202,
                                "fieldName": "button",
                                "creativeOptimizationEnabled": false,
                                "experimentSpecificValues": {
                                    "ButtonStyle": [{
                                        "id": "v1",
                                        "label": "v1",
                                        "callToActionText": "\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c \u0441\u0435\u0439\u0447\u0430\u0441!",
                                        "backgroundColor": true,
                                        "backgroundColorUp": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorDown": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorHover": "linear-gradient(0deg, #0d2a59, #365c99)",
                                        "border": true,
                                        "borderWidth": 1,
                                        "borderColor": "rgba(23,85,20,1)",
                                        "roundness": 10,
                                        "shadow": false,
                                        "shadowDistance": 0,
                                        "shadowBlur": 10,
                                        "shadowAngle": 0,
                                        "shadowColor": "rgba(0,0,0,0.5)",
                                        "fontFamily": "Helvetica",
                                        "fontProvider": "web",
                                        "fontStretch": "",
                                        "fontStyle": "normal",
                                        "fontWeight": 700,
                                        "fontVariation": "",
                                        "fontFiles": {},
                                        "fontSize": 14,
                                        "scaleFont": false,
                                        "scaleBaseWidth": 0,
                                        "textColor": "rgba(255,255,255,1)",
                                        "textAlign": "center",
                                        "textDecoration": "",
                                        "letterSpacing": 0,
                                        "textColorDown": "rgba(255,255,255,1)",
                                        "textColorHover": "#ffffff",
                                        "background": "css",
                                        "foregroundForCss": "text",
                                        "foregroundForImage": "image"
                                    }]
                                }
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "104px",
                                        "top": "160px"
                                    },
                                    "size": {
                                        "width": "111px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "msisdnBox",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 203,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 14,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(0,0,0,1)",
                                "textAlign": "left",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "textDirection": "ltr",
                                "lineSpacing": 0,
                                "multiLine": false,
                                "backgroundType": "color",
                                "placeholderColor": "#000000",
                                "value": "07",
                                "placeholder": "",
                                "validation": "none",
                                "regex": "^[0-9]{11}$",
                                "clazz": "TextBox",
                                "localId": 1203,
                                "fieldName": "msisdnBox"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "120px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "35px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "text",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 204,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 14,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0441\u0432\u043e\u0435\u0433\u043e \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1204,
                                "fieldName": "text"
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "pin",
                            "triggers": [{
                                "localId": 1215,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1216,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Form Properties",
                                                        "code": "\r\n\/* Input Ascii *\/\r\n\r\nvar input = unit.find(\"pinBox\");\r\ndivID = input.node.id;\r\n\r\ndocument.getElementById( divID ).getElementsByTagName(\"input\")[0].setAttribute(\"type\",\"tel\");\r\ndocument.getElementById( divID ).getElementsByTagName(\"input\")[0].setAttribute(\"maxlength\",4);\r\ndocument.getElementById( divID ).getElementsByTagName(\"input\")[0].onkeypress = function(e){\r\n    var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(\/[^0-9]\/);\r\n    if (verified) { e.preventDefault(); }\r\n};"
                                                    }
                                                }, {
                                                    "clazz": "ActionInvocation",
                                                    "localId": 2118,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "loop",
                                                    "isStatic": true,
                                                    "args": {
                                                        "repeat": -1,
                                                        "action": {
                                                            "clazz": "ActionInvocation",
                                                            "actionClazz": "Kernel",
                                                            "instanceLocalId": null,
                                                            "method": "runInSequence",
                                                            "isStatic": true,
                                                            "args": {
                                                                "actions": [{
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2119,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1209",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "211px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1209",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": false
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2120,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2121,
                                                                            "disabled": false,
                                                                            "actionClazz": "ScreenObject",
                                                                            "instanceLocalId": "1209",
                                                                            "method": "animate",
                                                                            "isStatic": false,
                                                                            "args": {
                                                                                "layoutSpecificValues": [{
                                                                                    "position": {
                                                                                        "left": "47px",
                                                                                        "top": "210px"
                                                                                    },
                                                                                    "size": {
                                                                                        "width": "225px",
                                                                                        "height": "40px"
                                                                                    },
                                                                                    "rotation": 0,
                                                                                    "opacity": 1
                                                                                }],
                                                                                "duration": 1,
                                                                                "target": "1209",
                                                                                "aspectRatioLocked": false,
                                                                                "coordinatesCentered": false,
                                                                                "timingFunction": "ease-in-out",
                                                                                "startSequence": true
                                                                            }
                                                                        }]
                                                                    }
                                                                }, {
                                                                    "clazz": "ActionInvocation",
                                                                    "actionClazz": "Kernel",
                                                                    "instanceLocalId": null,
                                                                    "method": "runInParallel",
                                                                    "isStatic": true,
                                                                    "args": {
                                                                        "actions": [{
                                                                            "clazz": "ActionInvocation",
                                                                            "localId": 2122,
                                                                            "disabled": false,
                                                                            "actionClazz": "Kernel",
                                                                            "instanceLocalId": null,
                                                                            "method": "sleep",
                                                                            "isStatic": true,
                                                                            "args": {
                                                                                "duration": "500"
                                                                            }
                                                                        }]
                                                                    }
                                                                }]
                                                            }
                                                        }
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 106,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "255px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "errorPin",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 201,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 10,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1206,
                                "fieldName": "errorPin"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "47px",
                                        "top": "210px"
                                    },
                                    "size": {
                                        "width": "225px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "button",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 202,
                                "triggers": [{
                                    "localId": 1207,
                                    "type": "tap",
                                    "parameters": {},
                                    "onFire": {
                                        "clazz": "ActionInvocation",
                                        "actionClazz": "Kernel",
                                        "instanceLocalId": null,
                                        "method": "runInSequence",
                                        "isStatic": true,
                                        "args": {
                                            "actions": [{
                                                "clazz": "ActionInvocation",
                                                "actionClazz": "Kernel",
                                                "instanceLocalId": null,
                                                "method": "runInParallel",
                                                "isStatic": true,
                                                "args": {
                                                    "actions": [{
                                                        "clazz": "ActionInvocation",
                                                        "localId": 1208,
                                                        "disabled": false,
                                                        "actionClazz": "Kernel",
                                                        "instanceLocalId": null,
                                                        "method": "executeJavascript",
                                                        "isStatic": true,
                                                        "args": {
                                                            "description": "PIN",
                                                            "code": "var subMethod = unit._response.SubMethod;\r\nvar url = subMethod.URL;\r\nvar pin = unit.find(\"pinBox\").getField().value;\r\nvar errorPin = unit.find(\"errorPin\");\r\n\r\n\/\/ parse url and remove jsonp and _ parameter\r\nvar q = unit.parsequery(url).REMOVE(\"jsonp\").REMOVE(\"_\");\r\nurl = q.REMOVE(\"skipgoogleplay\").SET(\"celtra\", \"1\");\r\nurl = \"http:\/\/\" + unit.domainPath + url;\r\n\r\nloadJSONP(url + \"&PIN=\" + pin, function (response) {\r\n    if(!!console && !!console.log)\r\n        console.log('Response received', response);\r\n        \r\n    if (response.SubMethod == null && response.redirectUrl !== null ) {\r\n        \/\/ show congratulation page\r\n        unit._response = response;\r\n        unit.goToScreenAction(ctx, { screen: unit.pCongrats }, c);\r\n    } else {\r\n    \r\n        switch(response.SubMethod.Method) {\r\n            case \"WAPPIN\":\r\n                if (\"InvalidPIN\" == response.Status) {\r\n                    \/\/ invalid pin | https:\/\/hub.celtra.com\/doc\/api.html#js_api&Texty\r\n                    var input = unit.find(\"pinBox\");\r\n                    document.getElementById( divID ).getElementsByTagName(\"input\")[0].value = \"\";\r\n                    errorPin.setTextAction(ctx, { text:'\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 PIN' }, c);\r\n                } else {\r\n                    \/\/ show congratulation page\r\n                    unit._response = response;\r\n                    unit.goToScreenAction(ctx, { screen: unit.pCongrats }, c);\r\n                }\r\n                break;\r\n            case \"MO\":\r\n                unit._response = response;\r\n                unit.goToScreenAction(ctx, { screen: unit.pMo }, c);\r\n                break;\r\n            default:\r\n                console.log(\"SubMethod is not supported: \" + subMethod.Method);\r\n                break;\r\n        }\r\n    \r\n    }\r\n});"
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    },
                                    "isCustom": false
                                }],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "clazz": "Button",
                                "localId": 1209,
                                "fieldName": "button",
                                "creativeOptimizationEnabled": false,
                                "experimentSpecificValues": {
                                    "ButtonStyle": [{
                                        "id": "v1",
                                        "label": "v1",
                                        "callToActionText": "\u0412\u0432\u0435\u0441\u0442\u0438",
                                        "backgroundColor": true,
                                        "backgroundColorUp": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorDown": "linear-gradient(0deg, rgba(135,177,40,1), rgba(180,225,61,1))",
                                        "backgroundColorHover": "linear-gradient(0deg, #0d2a59, #365c99)",
                                        "border": true,
                                        "borderWidth": 1,
                                        "borderColor": "rgba(23,85,20,1)",
                                        "roundness": 10,
                                        "shadow": false,
                                        "shadowDistance": 0,
                                        "shadowBlur": 10,
                                        "shadowAngle": 0,
                                        "shadowColor": "rgba(0,0,0,0.5)",
                                        "fontFamily": "Helvetica",
                                        "fontProvider": "web",
                                        "fontStretch": "",
                                        "fontStyle": "normal",
                                        "fontWeight": 700,
                                        "fontVariation": "",
                                        "fontFiles": {},
                                        "fontSize": 14,
                                        "scaleFont": false,
                                        "scaleBaseWidth": 0,
                                        "textColor": "rgba(255,255,255,1)",
                                        "textAlign": "center",
                                        "textDecoration": "",
                                        "letterSpacing": 0,
                                        "textColorDown": "rgba(255,255,255,1)",
                                        "textColorHover": "#ffffff",
                                        "background": "css",
                                        "foregroundForCss": "text",
                                        "foregroundForImage": "image"
                                    }]
                                }
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "132px",
                                        "top": "160px"
                                    },
                                    "size": {
                                        "width": "55px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "pinBox",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 203,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 14,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "#000000",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "textDirection": "ltr",
                                "lineSpacing": 0,
                                "multiLine": false,
                                "backgroundType": "color",
                                "placeholderColor": "#000000",
                                "value": "",
                                "placeholder": "",
                                "validation": "none",
                                "regex": "^[0-9]{4}$",
                                "clazz": "TextBox",
                                "localId": 1210,
                                "fieldName": "pinBox"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "120px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "40px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "text",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 204,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 10,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(51,51,51,0.5)",
                                "text": "\u0412\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 SMS \u0441 PIN \u043a\u043e\u0434\u043e\u043c. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 PIN \u043a\u043e\u0434 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1211,
                                "fieldName": "text"
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "congratulation",
                            "triggers": [{
                                "localId": 1194,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1195,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Congratulation",
                                                        "code": "var oldUrl = unit._response.redirectUrl;\r\n\r\nfunction pullSubscriptionCompleted(url) {\r\n    if (url.indexOf(\"http\") == 0) {\r\n        unit.goToURLAction(ctx, {url: url, label: 'Congratulation redirection'}, c);\r\n    } else {\r\n        \/\/ parse url and remove jsonp and _ parameter\r\n        var q = unit.parsequery(url).REMOVE(\"jsonp\").REMOVE(\"_\");\r\n        url = q.REMOVE(\"skipgoogleplay\").SET(\"celtra\", \"1\");\r\n        url = q.SET(\"RedirectionCycle\", parseInt(q.GET(\"RedirectionCycle\"))+1).toString();\r\n\r\n        loadJSONP(\"http:\/\/\" + unit.domainPath + url, function (response) {\r\n            if(!!console && !!console.log)\r\n                console.log('Response received', response);\r\n            \r\n            var newUrl = response.redirectUrl;\r\n            pullSubscriptionCompleted(!!newUrl && newUrl.length > 0 ? newUrl : url);\r\n        });\r\n    }\r\n}\r\n\r\npullSubscriptionCompleted(oldUrl);"
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 108,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "170px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "60px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "message",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 201,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 10,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043b\u0438\u0441\u044c \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0443",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1192,
                                "fieldName": "message"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "150px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "congratulation",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 202,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 14,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1193,
                                "fieldName": "congratulation"
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        }, {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "mo",
                            "triggers": [{
                                "localId": 1189,
                                "type": "appear",
                                "onFire": {
                                    "clazz": "ActionInvocation",
                                    "actionClazz": "Kernel",
                                    "instanceLocalId": null,
                                    "method": "runInSequence",
                                    "isStatic": true,
                                    "args": {
                                        "actions": [{
                                            "clazz": "ActionInvocation",
                                            "actionClazz": "Kernel",
                                            "instanceLocalId": null,
                                            "method": "runInParallel",
                                            "isStatic": true,
                                            "args": {
                                                "actions": [{
                                                    "clazz": "ActionInvocation",
                                                    "localId": 1190,
                                                    "disabled": false,
                                                    "actionClazz": "Kernel",
                                                    "instanceLocalId": null,
                                                    "method": "executeJavascript",
                                                    "isStatic": true,
                                                    "args": {
                                                        "description": "Mobile Originated",
                                                        "code": "var moKeyword = unit._response.SubMethod.MOKeyword;\r\nvar moShortCode = unit._response.SubMethod.MOShortCode;\r\nunit.find(\"MOKeyword\").setTextAction(ctx, { text:moKeyword }, function(c){ \/*noop*\/ } );\r\nunit.find(\"MOShortCode\").setTextAction(ctx, { text:moShortCode }, function(c){ \/*noop*\/ } );"
                                                    }
                                                }]
                                            }
                                        }]
                                    }
                                },
                                "isCustom": false
                            }],
                            "localId": 110,
                            "objects": [{
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "215px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "30px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "MOShortCode",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 201,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 700,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 24,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(51,51,51,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(255,255,255,0.5)",
                                "text": "",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1183,
                                "fieldName": "MOShortCode"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "200px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "to",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 202,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 14,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "\u043a",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1184,
                                "fieldName": "to"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "170px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "30px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "MOKeyword",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 203,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 700,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 24,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(51,51,51,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 0,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(255,255,255,0.5)",
                                "text": "",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1185,
                                "fieldName": "MOKeyword"
                            }, {
                                "layoutSpecificValues": [{
                                    "position": {
                                        "left": "10px",
                                        "top": "150px"
                                    },
                                    "size": {
                                        "width": "300px",
                                        "height": "25px"
                                    },
                                    "rotation": 0,
                                    "opacity": 1,
                                    "hidden": false
                                }],
                                "name": "sms",
                                "aspectRatioLocked": false,
                                "coordinatesCentered": false,
                                "zIndex": 204,
                                "triggers": [],
                                "hiddenInBuilder": false,
                                "lockedInBuilder": false,
                                "fontFamily": "Helvetica",
                                "fontProvider": "web",
                                "fontStretch": "",
                                "fontStyle": "normal",
                                "fontWeight": 400,
                                "fontVariation": "",
                                "fontFiles": {},
                                "fontSize": 14,
                                "scaleFont": false,
                                "scaleBaseWidth": 0,
                                "textColor": "rgba(255,255,255,1)",
                                "textAlign": "center",
                                "textDecoration": "",
                                "letterSpacing": 0,
                                "lineSpacing": 2,
                                "textShadow": true,
                                "textShadowDistance": 1,
                                "textShadowBlur": 0,
                                "textShadowAngle": 90,
                                "textShadowColor": "rgba(0,0,0,0.5)",
                                "text": "sms",
                                "scrollable": false,
                                "scrollbarPosition": "",
                                "scrollbarColor": "#000000",
                                "autoscrollEnabled": false,
                                "autoscrollDelay": 1000,
                                "autoscrollDuration": 3000,
                                "autoscrollConclusion": "",
                                "usePadding": true,
                                "clazz": "Texty",
                                "localId": 1186,
                                "fieldName": "sms"
                            }],
                            "guidelines": [],
                            "clazz": "Screen",
                            "reachableScreensLocalIds": []
                        }],
                        "backgroundColor": "rgba(78,95,102,1)",
                        "sizing": "fixed",
                        "orientation": "portrait",
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
                        }],
                        "layoutsLocked": {
                            "portrait": false,
                            "landscape": false,
                            "independent": false
                        },
                        "closeButtonType": "image",
                        "loadingScreen": {
                            "hiddenInBuilder": false,
                            "lockedInBuilder": false,
                            "showOverflow": true,
                            "title": "Loading",
                            "triggers": [],
                            "localId": 4,
                            "objects": [],
                            "guidelines": [],
                            "clazz": "Screen",
                            "loaderVisible": true,
                            "loaderColor": "rgba(173,222,40,1)",
                            "reachableScreensLocalIds": [3]
                        }
                    }
                },
                "unitSizes": {
                    "banner": {
                        "width": 320,
                        "height": 372
                    }
                },
                "files": [{
                    "name": "girl@2x.png",
                    "size": 45788,
                    "type": "image",
                    "blobHash": "73c3a8e96930900850c54e46448372b47b175c602b57eeb365d11d5acbc26d8e",
                    "asset": true,
                    "retina": true,
                    "localId": 1486,
                    "clazz": "File",
                    "meta": {
                        "size": 45788,
                        "contentType": "image\/png",
                        "width": 310,
                        "height": 485
                    }
                }, {
                    "name": "background.jpg",
                    "size": 21880,
                    "type": "image",
                    "blobHash": "2a00c57332be653d06d388cb85c6e026c53c7418458c37d37845630dae6fc98e",
                    "asset": true,
                    "retina": false,
                    "localId": 1624,
                    "clazz": "File",
                    "meta": {
                        "size": 21880,
                        "contentType": "image\/jpeg",
                        "width": 500,
                        "height": 500
                    }
                }, {
                    "name": "title-ru@2x.png",
                    "size": 14457,
                    "type": "image",
                    "blobHash": "8d4611fed07560ec62d9e7f280e05c93efd24386a10a152647e97ea0abb2148b",
                    "asset": true,
                    "retina": true,
                    "localId": 2869,
                    "clazz": "File",
                    "meta": {
                        "size": 14457,
                        "contentType": "image\/png",
                        "width": 640,
                        "height": 150
                    }
                }],
                "version": 13,
                "accountId": "e97de0f9",
                "brandId": "e38329c0",
                "srmFacebookAppId": "466947940086983",
                "shareFacebookAppId": "534105289948762",
                "videoStreamAlgoVersions": {
                    "mpeg1TeaserVideo": 3,
                    "mpeg1LQVideo": 3,
                    "mpeg1HQVideo": 3,
                    "aacAudio": 1,
                    "mpeg4LQ": 3,
                    "mpeg4HQ": 3,
                    "mpeg4HQPlus": 1,
                    "webmHQ": 1
                }
            }, runtimeParams, trackingCenter, aggregatorTracking, experiments, adapter, urls, openWebsiteOverrideUrls, getAppOverrideUrls, brand);
        })();
    };
})()