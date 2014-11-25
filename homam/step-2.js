(function() {
    var script = document.getElementById("mone-tag-script-1"); // TODO: read scriptId from query string
    if (!script || script.tagName.toLowerCase() !== 'script')
        throw 'Element with id equal to scriptId does not exist or is not a script.';
    var runtimeParams = {
        "placementId":"homam", // TODO: read placementId from query string
        "sessionId":"0000000000",
        "clientTimestamp":"14168190363390", 
        "scriptId":"mone-tag-script-1", 
        "redirectJsClientTimestamp": new Date()
    };

    var payloadUrl = "http://localhost:8080/homam/step-3.js?7"; // TODO: generate a dynamic URL by appending to query string to skip caching

    // Request and run payload
    var payload = document.createElement('script');
    payload.src = payloadUrl;;
    payload.onload = function() {
        setTimeout(function() {
            runtimeParams.payloadJsClientTimestamp = new Date();
            window.moneTags.payloads[payloadUrl](script, runtimeParams);
        },100);
    };
    script.parentNode.insertBefore(payload, script.nextSibling);

    
    // Set creative height
    document.body.style.minHeight = '372px';
})();
