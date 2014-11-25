
    ///payload URL

    var mobiad =  function(script, runtimeParams) {

        if ((mraid.getState() != "default") || (mraid.getState() != "ready")) {
            // console.log("Document is not ready, adding event listener");
            mraid.addEventListener("stateChange", handleStateChanges);
        } else {
            mraid.addEventListener("stateChange", handleStateChanges);
        }

        function handleStateChanges() {

            switch(mraid.getState()) {
                case "expanded":
                    showAd();
                    break;
                case "default":
                    showAd();
                    break;
            }
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
            document.currentScript.insertAfter(mobiads, script.nextSibling);

        }
    };

