
            (function() {
                // Dynamic values from page request
                var script = document.getElementById("mobitrans-ad-1");
                if (!script || script.tagName.toLowerCase() !== 'script')
                    throw 'Element with id equal to scriptId does not exist or is not a script.';

                var payloadUrl = "step-3.mjs"

                var payload = document.createElement('script');
                payload.src = payloadUrl;
                payload.onload = function() {
                    window.mobiads.ads[payloadUrl](script, runtimeParams, trackers, openWebsiteOverrideUrls, getAppOverrideUrls, brand);
                };
                script.parentNode.insertBefore(payload, script.nextSibling);


            // Set creative height
            document.body.style.minHeight = '372px';
            })();
            