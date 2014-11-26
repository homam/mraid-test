var express = require('express')
var app = express()
var cheerio=require('cheerio')
var request=require('request')
var fs = require('fs');

var PLACE_TAGS={
    PAGE_OBJECT:'/*pageData*/'
};

app.get('/step/mediator.js', function(req, res, next) {
    var url= 'client-js/mediator.js';

    fs.readFile(url, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        res.send(data);
    });
});

app.get('/step/renderer.js', function(req, res, next) {
    // gets the value for the named parameter user_id from the url
    var page_id = req.params.page_id;
    page_id=12751;
    var domain= 'http://pages.mobileacademy.com';

    var url = domain+ '/' + page_id;

    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {

            var pData = getPageData(html,domain);
            var stringedPageData=JSON.stringify(pData);
            getRenderer(stringedPageData,res);


        } else
        {
            res.send(error);
        }
    });
});

var getRenderer = function(stringedObject, res){
    var url= 'client-js/renderer.js';

    fs.readFile(url, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(PLACE_TAGS.PAGE_OBJECT,stringedObject);
        res.send(data);
    });
}

var server = app.listen(process.env.PORT || 3000);

var getPageData = function(html,domain){
    $ = cheerio.load(html);

    var pageStructure= {
        html: extractHtml($),
        js: extractScripts(domain,$),
        css:extractCss(domain,$)
    }
    return pageStructure;
}


var extractCss=function(domain,$){
    var cssLinks=$('head > link');
    var collection=[];
    cssLinks.each(function(index, element) {
      collection.push({
          type:'inline',
          source: normalizeUrl(element.attribs['href'], domain)
      });
    });
    return collection;
}

var extractScripts=function(domain,$){
    var cssLinks=$('script');
    var collection=[];
    cssLinks.each(function(index, element) {
        if (element.attribs['src']) {
            collection.push({
                type: 'remote',
                url: normalizeUrl(element.attribs['src'], domain)
            });
        } else
        {
            collection.push({
                type: 'inline',
                content: escape($(element).text())
            });
        }
    });
    return collection;
}

var extractHtml=function($){
    var containerSelector='#container';
    var html='<div id="container">'+$(containerSelector).html()+'</div>';
    var result = escape(html);
    return result;
}

var normalizeUrl=function(url, domain){
    if (url[0]=='/') return domain+url;
    return url;

}