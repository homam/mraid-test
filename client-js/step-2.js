
            (function() {
                // Dynamic values from page request
                var script = document.getElementById("mobitrans-ad-1");
                if (!script || script.tagName.toLowerCase() !== 'script')
                    throw 'Element with id equal to scriptId does not exist or is not a script.';

                var payloadUrl = "https://quiet-lake-9535.herokuapp.com/step/3.js"

                var mobiads = document.createElement('script');
                mobiads.src = payloadUrl;
                mobiads.onload = function() {
                    mobiad(script);
                };
                document.currentScript.parentNode.insertBefore(mobiads, script.nextSibling);


            // Set creative height
            document.body.style.minHeight = '372px';
            })();
            