
            (function() {
                // Dynamic values from page request
                var script = document.getElementById("celtra-script-1");
                if (!script || script.tagName.toLowerCase() !== 'script')
                    throw 'Element with id equal to scriptId does not exist or is not a script.';
                var runtimeParams = {"placementId":"c0e4eff3","sessionId":"s1416819036x5472f15cc22404x87387559","purpose":"live","variantChoices":{},"clientTimestamp":"1416819036.339","gpsLat":"","gpsLng":"","platformAdvId":null,"platformAdvIdTrackingLimited":null,"ipCountryCode":"AE","ipCountryName":"United Arab Emirates","ipRegionCode":"03","ipRegionName":"Dubai","ipCity":"Dubai","ipPostalCode":"","ipDmaCode":"","ipAreaCode":"","ipMetroCode":"","ipLat":25.25819,"ipLng":55.3047,"ipTimeZone":"Asia\/Dubai","diDeviceType":"Desktop","diPlatform":"DesktopPlatform","diPlatformVersion":"10.10.2","clickUrl":"","clickEvent":"advertiser","externalAdServer":"Custom","scriptId":"celtra-script-1","firstPage":1,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38"};
                runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
                
                // Dynamic values that we do not want to pass forward in urls,
                // so we look them up on every page request based on runtimeParams
                var openWebsiteOverrideUrls = {};
                var getAppOverrideUrls      = {};
                var brand                   = {"allowsCookies":"0"};
                
                // Less dynamic values for payload request
                var payloadBase = "step-3.js";
                
                

                
                var adLoadingEvent = {"name":"adLoading","sessionId":"s1416819036x5472f15cc22404x87387559"};
                adLoadingEvent.clientTimestamp = new Date/1000;

                
                
                    // Build payload url
                    var pairs = [];
                    for (var k in cacheParams)
                        pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
                    var payloadUrl = payloadBase + '?' + pairs.join('&');
                
                    // Request and run payload
                    var payload = document.createElement('script');
                    payload.src = payloadUrl;
                    payload.onload = function() {
                        runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
                        window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, openWebsiteOverrideUrls, getAppOverrideUrls, brand);
                    };
                    script.parentNode.insertBefore(payload, script.nextSibling);
                
                
                // Set creative height
                document.body.style.minHeight = '372px';
            })();
            