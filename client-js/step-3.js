
    ///payload URL

    var mobiad =  function(script, runtimeParams) {
        if (mraid.getState() === 'loading') {
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
            console.log("MRAID Ad: renderBaseAd");
            var mobiads = document.createElement('script');
            mobiads.src = basePath;
            script.insertBefore(mobiads, script.nextSibling);

        }
    };

