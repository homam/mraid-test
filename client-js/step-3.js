
    ///payload URL

    var mobiad =  function(script, runtimeParams) {
        if (mraid.getState() != 'ready') {
            console.log("MRAID Ad: adding event listener for ready");
            mraid.addEventListener('ready', showAd);
        } else {
            showAd();
        }


        function showAd() {
            var basePath = "https://quiet-lake-9535.herokuapp.com/page/1.js";

            renderBaseAd(mraid, basePath);
            mraid.setExpandProperties({
                useCustomClose : true
            });
        };



        function renderBaseAd(mraid, basePath) {
            var mobiads = document.createElement('script');
            mobiads.src = basePath;
            document.currentScript.insertAfter(mobiads, script.nextSibling);

        }
    };

