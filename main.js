var express = require('express')
var app = express()
var cheerio=require('cheerio')
var request=require('request')

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/page/:page_id', function(req, res, next) {
    // gets the value for the named parameter user_id from the url
    var page_id = req.params.page_id;
    page_id=12751;
    var domain= 'http://pages.mobileacademy.com';
    var url = domain+ '/' + page_id;
     request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var result='';
            $ = cheerio.load(html);

            result+=extractCss(domain, $('head > link').attr('href'));
            var htmlData = $('#container').html();

            result+=extractHtml(htmlData);
            var scripts= $('body > script');
            result+=extractScript(domain,scripts[1].attribs.src);
            result+="";
            res.send( result);
        } else
        {
            res.send(error);
        }
    });


});

var server = app.listen(process.env.PORT || 3000);

var extractCss=function(domain,url){
    var fullUrl= domain+url;
    var result=""+
    "var link=document.createElement('link');"+
    "link.href='"+fullUrl+"';"+
    "link.rel='stylesheet';" +
    "link.type='text/css';"+

    "document.getElementsByTagName('head')[0].appendChild(link);"
    return result;
}

var extractScript=function(domain,url){
    var fullUrl= domain+url;
    var result=""+
        "var script=document.createElement('script');"+
        "script.src='"+fullUrl+"';"+
        "script.type='text/javascript';"+

        "document.getElementsByTagName('body')[0].appendChild(script);";
    return result;
}

var extractHtml=function(html){
    var result='';
    html='<div id="container">'+html+'</div>';
    result='var htmlBody="'+escape(html)+'";';
    result+='document.write(unescape(htmlBody));';
    return result;
}