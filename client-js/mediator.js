
            (function() {
                // Dynamic values from page request
                var script = document.getElementById("mone-tag-script-1");
                if (!script || script.tagName.toLowerCase() !== 'script')
                    throw 'Element with id equal to scriptId does not exist or is not a script.';

                var runtimeParams = {
                    "placementId":"homam", // TODO: read placementId from query string
                    "sessionId":"0000000000",
                    "clientTimestamp":"14168190363390",
                    "scriptId":"mone-tag-script-1",
                    "redirectJsClientTimestamp": new Date()
                };

                var rendererUrl="http://localhost:3000/step/renderer.js";
                var pairs = [];
                for (var k in runtimeParams)
                    pairs.push(encodeURIComponent(k) + '=' +
                    encodeURIComponent(runtimeParams[k]));

                var rendererUrl = rendererUrl + '?' + pairs.join('&');

                var rendererJs = document.createElement('script');
                rendererJs.src =  rendererUrl;
                rendererJs.onload = function() {
                    window.moneTags.renderer[runtimeParams.placementId](script,runtimeParams);
                };
                document.body.appendChild(rendererJs);


            })();
