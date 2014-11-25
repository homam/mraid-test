
            (function() {
                // Dynamic values from page request
                var script = document.getElementById("mobitrans-ad-1");
                if (!script || script.tagName.toLowerCase() !== 'script')
                    throw 'Element with id equal to scriptId does not exist or is not a script.';

                var mobiads = document.createElement('script');
                mobiads.src =  "https://quiet-lake-9535.herokuapp.com/step/3.js";

                document.currentScript.parentNode.insertBefore(mobiads, script.nextSibling);

            })();
            