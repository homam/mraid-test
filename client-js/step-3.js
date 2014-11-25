(function() {
    var scriptKey="step-3.js?v=13-fe0e22efad&secure=0";
    if (!window.mobiads)
        window.mobiads = {};
    if (!window.mobiads.ads)
        window.mobiads.ads = {};
    ///payload URL
    window.mobiads.ads[scriptKey] =  function(script, runtimeParams) {
        function setupViewPort(){
            alert('x');
        }
        setupViewPort();
    };
});
