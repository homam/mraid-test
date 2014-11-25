(function() {
    var scriptKey="step-3.js?v=13-fe0e22efad&secure=0";

    ///payload URL

    var mobiad =  function(script, runtimeParams) {
        if (mraid.getState() != 'ready') {
            console.log("MRAID Ad: adding event listener for ready");
            mraid.addEventListener('ready', showAd);
        } else {
            showAd();
        }


        function showAd() {
            var basePath = "http://localhost:8666/yahoo.ads.mraid_richmedia/";

            renderBaseAd(mraid, basePath);
            mraid.setExpandProperties({
                useCustomClose : true
            });
        };



        function renderBaseAd(mraid, basePath) {
            var mobiads = document.createElement('script');
            mobiads.src =  "https://quiet-lake-9535.herokuapp.com/page/1";
            document.currentScript.parentNode.insertBefore(mobiads, script.nextSibling);

        }
    };

    mobiad(script);
});
