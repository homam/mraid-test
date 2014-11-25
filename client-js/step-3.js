(function() {
    var scriptKey="step-3.js?v=13-fe0e22efad&secure=0";
    if (!window.mobiads)
        window.mobiads = {};
    if (!window.mobiads.ads)
        window.mobiads.ads = {};
    ///payload URL
    window.mobiads.ads[scriptKey] =  function(script, runtimeParams) {
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

            console.log("!!!!!!!rendering base ad");

        }
    };
});
