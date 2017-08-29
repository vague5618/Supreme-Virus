var system = require('system');
var args = system.args;
var baseUrl = 'http://www.supremenewyork.com/shop';
var targetColor = "Black";
var targetSize = "Large";
var itemSelector;
var data =[
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1567097232,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utma",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "74692624.661930686.1504025215.1504025215.1504025215.1",
    "id": 1
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504027032,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmb",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "74692624.6.10.1504025215",
    "id": 2
},
{
    "domain": ".supremenewyork.com",
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmc",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "74692624",
    "id": 3
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504025814,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmt",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 4
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1519793232,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmz",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "74692624.1504025215.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
    "id": 5
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1567097214,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_ga",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.661930686.1504025215",
    "id": 6
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504025274,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gat",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1",
    "id": 7
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504111614,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.640132791.1504025215",
    "id": 8
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504111633.951135,
    "hostOnly": false,
    "httpOnly": true,
    "name": "_supreme_sess",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "Vm1nTkthWVlkRVRMNGs4bFJVc0VNNGIvVkR2RzFLNjdZdnE5SWVhWDZmQU1LK3hzYlJyc2IrQmV5S09VbDJGMWh0cU1VTXQ4NXc1T3dieTRoZ1FCenpCQktHNTBJVVlWQndmVGpkaFdyTjV4a1RFWC93eWt5WDhyOE1oOVdyTStjam0xNFhzdGdmV21TbmJQeFphSm1lZGxjWFMxd3hCS0JycmlYMG5ZazNuN0lZTGMxcmxqbkRvVTdBTjkrQ3NMbkhudGw5TGFCeVh4WlFlKzJHbDBTa2M5c1h4elR6Z1pRVC8yd1JPWE9YbWtrZm1oa01RRTd3eGhnV0ZNdTg1VFFvUUNtUklFUDdBWGFScFoyZ2Rkd3Y1bE9Kc2VZdDAvam5lVTcxN0JnMGhpMTM2Mm9ZV2RBTWtvQmQzV2svNUVHYU1KR3ZpaFNDUHJvV05jNGlCM1pkaXlOeWJKZmt1TDVtS1BMWkZjQmVCckN1M0lLaldmSGNzcmRGclZYcy9yREdFV2dKTGRFMTdua2V0MXA2S3Z4cVJ4Y20wekxQRWdlQTlRVHlMVGtmWT0tLWVaOVFlb3E0MVhOY1JVWUtpaVJibFE9PQ%3D%3D--5c8da55ea419ffcb39c2d8d1cfbbdd4bfa2c51bc",
    "id": 9
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1535561233,
    "hostOnly": false,
    "httpOnly": false,
    "name": "mp_c5c3c493b693d7f413d219e72ab974b2_mixpanel",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "%7B%22distinct_id%22%3A%20%2215e2ee37f2d953-0f90f4f66c29a2-6b3f0178-1fa400-15e2ee37f2e982%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D",
    "id": 10
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504111633,
    "hostOnly": false,
    "httpOnly": false,
    "name": "mp_mixpanel__c",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "0",
    "id": 11
},
{
    "domain": "www.supremenewyork.com",
    "expirationDate": 1504111633.950879,
    "hostOnly": true,
    "httpOnly": false,
    "name": "cart",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1+item--46158%2C17130",
    "id": 12
},
{
    "domain": "www.supremenewyork.com",
    "expirationDate": 1504111633,
    "hostOnly": true,
    "httpOnly": false,
    "name": "pure_cart",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "%7B%2246158%22%3A1%2C%22cookie%22%3A%221%20item--46158%2C17130%22%2C%22total%22%3A%22%24798%22%7D",
    "id": 13
},
{
    "domain": "www.supremenewyork.com",
    "hostOnly": true,
    "httpOnly": false,
    "name": "request_method",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": true,
    "storeId": "0",
    "value": "POST",
    "id": 14
}
];
var cookies = data;
//var cookies = JSON.parse(data);

for(var i = 0; i < cookies.length; i++) {
//    console.log(cookies[i]);
    phantom.addCookie(cookies[i]);
}

var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    viewportSize:{
        width:2300,
        height:1200
    },
    pageSettings: {
        loadImages: true,         // The WebPage instance used by Casper will
        loadPlugins: true,       // use these settings
        javascriptEnabled: true,
        resourceTimeout: 20000
    }
});


casper.cookiesEnabled = true;
casper.javascriptEnabled = true;
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11');

casper.start('http://www.supremenewyork.com/shop', function () {
 casper.page.injectJs('./bower_components/jquery/dist/jquery.min.js');
});

//move to Item
casper.then(function () {
     casper.evaluate(function(itemSelector){
         return $(itemSelector).click();
     },itemSelector);
});

casper.waitForSelector(('#container > article'),
    function pass () {
   
    casper.capture("test.png");
    
    var price = casper.evaluate(function(){
       return $("#details > p.price > span").text(); 
    });
    
    this.echo("price : "+price);
    
    var color = casper.evaluate(function(){
        return $("#details > p.style").text();
    });
    
    //colorpicker
    casper.evaluate(function(targetColor){   
       $("a[data-style-name='"+targetColor+"']").click(); 
    },targetColor);
    
    color = casper.evaluate(function(){
        return $("#details > p.style").text();
    });
    
    this.echo("choice color : " + color);
        
    //sizePicker
    
    var size = casper.evaluate(function(){
        return $("#s option:selected").text();
    });
    
    casper.evaluate(function(targetSize){   
    $("#s option")
        .each(function() { this.selected =      (this.text == targetSize); });
    },targetSize);
   
    size = casper.evaluate(function(){
        return $("#s option:selected").text();
    });
    
        this.echo("choice size : "+size);
    
        casper.capture("process1.png");
    },
    function fail () {
        this.echo("fail it");
    },
    10000 // timeout limit in milliseconds
);

casper.waitForSelector(('#add-remove-buttons > input'),
    function pass () {
        casper.evaluate(function(){
           $("#add-remove-buttons > input")[0].click();
        });
    
        casper.capture("process2.png");
    },
    function fail () {
        this.echo("fail it");
    },
    10000 // timeout limit in milliseconds
);

casper.waitUntilVisible('#cart > a.button.checkout',function(){
   
        if (this.visible('#cart > a.button.checkout')) {
            this.echo("I can see the checkout");
        }else {
            this.echo("I can't see the checkout");
        }
    
        casper.evaluate(function(){
            $("#cart > a.button.checkout")[0].click();
        });
    
        casper.capture("process3.png");
});

casper.waitForSelector(('#pay > input'),
    function pass () {
    
      var isPhantom = casper.evaluate(function(){
           delete window.callPhantom;

           return !!window.callPhantom; 
        });
    
        this.echo("open checkOut");

        this.echo("open checkOut");
    
    var name = casper.evaluate(function () {
        return $("#order_billing_name").val("GGMAN G");
    });

    var email = casper.evaluate(function () {
        return $("#order_email").val("gkgk@gmail.com");
    });

    var tel = casper.evaluate(function () {
        return $("#order_tel").val("201-917-1929");
    });

    var address1 = casper.evaluate(function () {
        return $("#bo").val("11two1 Edgewater Ave Unit four");
    });

    var address2 = casper.evaluate(function () {
        return $("#oba3").val("its3555");
    });

    var zip = casper.evaluate(function () {
        return $("#order_billing_zip").val("07657");
    });

    var city = casper.evaluate(function () {
        return $("#order_billing_city").val("Ridgefield");
    });

    var state = casper.evaluate(function () {
        return $("#order_billing_state").val('NJ').attr("selected", "selected");
    });

    var country = casper.evaluate(function () {
        return $("#order_billing_country").val('USA').attr("selected", "selected");
    });
    
    var cardNumber =casper.evaluate(function () {
        return $("#cnb").val('5219 4260 4877 9477');
    });

    var credit_card_month =casper.evaluate(function () {
        return $("#credit_card_month").val($('#credit_card_month > option')[4].value);
    });

    var credit_card_year =casper.evaluate(function () {
        return $("#credit_card_year").val($('#credit_card_year > option')[5].value);
    });

    var vval = casper.evaluate(function () {
        return $("#vval").val("572");
    });
    

    casper.evaluate(function(){
        $("#cart-cc > fieldset > p:nth-child(4) > label > div > ins").click();
    });
    
    casper.evaluate(function(){
        $("#pay > input").click();
        casper.capture("process4.png");
    });

    },
    function fail () {
        this.echo("fail it");
    },
    10000 // timeout limit in milliseconds
);

casper.waitForSelector(('#confirmation'),
    function pass () {    
    
        this.echo("purchase finish");
    
        casper.capture("process5.png");
    },
    function fail () {
    
        var isPhantom = casper.evaluate(function(){
            delete window.callPhantom;

           return !!window.callPhantom; 
        });
    
    //casper.echo(casper.getPageContent());
    
        casper.capture("process6.png");

        casper.echo(isPhantom);
    
        this.echo("fail it");
    },
    10000 // timeout limit in milliseconds
);

if(args[4]===undefined){
    console.log('Try to pass some arguments when invoking this script!');
    
    casper.exit(); 
    
}else{
        
    itemSelector = "#shop-scroller > li:nth-child("+args[4]+") > a > img";
    
    if(args[5]!=undefined){
        targetColor = args[5];
    }
    
    if(args[6]!=undefined){
        targetSize = args[6];
    }
    
    casper.run(function(){
        casper.exit(); 
    });
}

casper.on('popup.created', function() {
    this.echo("url popup created : " + this.getCurrentUrl(),"INFO");
});

casper.on('popup.loaded', function() {
    this.echo("url popup loaded : " + this.getCurrentUrl(),"INFO");
});

