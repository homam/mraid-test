    if (!window.moneTags) window.moneTags={};
    if (!window.moneTags.pages) window.moneTags.pages={};
    if (!window.moneTags.renderers) window.moneTags.renderer={};

    var pid= "homam";

    window.moneTags.pages[pid]  = /*pageData*/ ;

    window.moneTags.renderer[pid] =  function(script, runtimeParams) {

        if (mraid.getState() === 'loading') {
            mraid.addEventListener('ready', showAd);
        } else {
            render();
        }


        function render() {
            var basePath = "http://localhost:3000/page/1.js";

            renderAdBase(mraid, basePath);
            mraid.setExpandProperties({
                useCustomClose : true
            });
        };


        function renderAdBase(mraid, basePath) {
            for(var i=0;i< window.moneTags.pages[pid].css.length;++i){
                var css = document.createElement('link');
                css.href= window.moneTags.pages[pid].css[i].source;
                css.type= 'text/css';
                css.rel='stylesheet';
                document.head.appendChild(css);
            }


            var contentDiv=document.createElement('div');
            contentDiv.innerHTML=unescape( window.moneTags.pages[pid].html);
            document.body.appendChild(contentDiv);


            for(var i=0;i< window.moneTags.pages[pid].js.length;++i){
                var jsScript = document.createElement('script');
                var entry=window.moneTags.pages[pid].js[i];
                jsScript.type= 'text/javascript';

                if (entry.type === 'remote'){
                    jsScript.src=entry.url;
                }

                if( entry.type === 'inline'){
                    jsScript.innerHTML=unescape(entry.content);
                }

                document.body.appendChild(jsScript);
            }
        }
    };

