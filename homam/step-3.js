(function(){
	if (!window.moneTags)
		window.moneTags = {};
	if (!window.moneTags.payloads)
		window.moneTags.payloads = {};


	var hostElement = null;
	var viewport = null;


	// TODO: this URL must matches the the payloadUrl in step-2
	window.moneTags.payloads["http://localhost:8080/homam/step-3.js?7"] = function(scriptElement, runtimeParams) {
		
		hostElement = scriptElement.parentNode; // the parent node of the dynamically injected script in step-1
		viewport = fixViewPort();

		if("loading" === mraid.getState()) {
			mraid.addEventListener("ready", function() {
				ready();
			});
		} else {
			ready();
		}
	};

	var render = function(){
		// TODO: load and render the HTML page inside the viewport
		alert("hello! render stuff now");
		var element = document.createElement("div");
		element.style.cssText = "background-color: silver; color: black; position: absolute; top: 0; left: 0; right: 0; bottom: 0;";
		element.innerHTML = "<h1>HELLO MRAID!</h1>"
		viewport.appendChild(element);
	};

	var ready = function() {
		var topWindow = getTopWindow();
		if("static" == topWindow.document.defaultView.getComputedStyle(topWindow.document.body, null).getPropertyValue("position"))
			topWindow.document.body.style.position = "relative"

		if (mraid.useCustomClose) {
			mraid.useCustomClose(true);
		} else {
			var t = mraid.getExpandProperties();
			t.useCustomClose = true;
			mraid.setExpandProperties(t);
		}

		render();
	};




	var getMraidVersion = function() {
		var t = ("" + mraid.getVersion()).match(/^(\d+)(\.\d+)?/);
		return t ? parseInt(t[1], 10) : null
	};

	var createViewportElement = function() {
		var t = document.createElement("div");
		t.id = "viewport";
		t.style.cssText = "position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;";
		document.body.appendChild(t);
		return t;
	};

	var fixViewPort = function() {
		with(document.documentElement.style) 
			margin = 0, padding = 0, width = "100%", height = "100%";
		with(document.body.style) 
			margin = 0, padding = 0, width = "100%", height = "100%";
		
		var viewport = createViewportElement(); // absolute 100% width and height div with id = viewport

		if (!document.querySelector("meta[name=viewport]")) { // fixViewPort: fixed viewport meta tag
			var meta = document.createElement("meta");
			meta.name = "viewport";
			meta.content = "initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no";
			document.getElementsByTagName("head").item(0).appendChild(meta);
		}

		if ((!hostElement.offsetParent || hostElement.offsetParent === document.body && "static" === getComputedStyle(document.body, null).position)) {
			hostElement.style.position = "relative";
			hostElement.style.width = hostElement.style.height = "100%";
		}

		return viewport;
	};

	var getTopWindow = (function() {
		var _topWindow = null;
		return function() {
			if (_topWindow) 
				return _topWindow;
			var t = window;
			try {
				for (; t.parent.location.href !== void 0 && t.parent.document !== t.document;) 
					t = t.parent;
			} catch (e) {}
			return this._topWindow = t;
		};
	})();



})();