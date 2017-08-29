var system = require('system');
var args = system.args;
var baseUrl = 'http://www.supremenewyork.com/shop';
var targetColor = "Black";
var targetSize = "Large";
var itemSelector;
var data =[
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1567097864,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utma",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "74692624.48893408.1504025861.1504025861.1504025861.1",
    "id": 1
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504027664,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmb",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "74692624.2.10.1504025861",
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
    "expirationDate": 1504026460,
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
    "expirationDate": 1519793864,
    "hostOnly": false,
    "httpOnly": false,
    "name": "__utmz",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "74692624.1504025861.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
    "id": 5
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1567097860,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_ga",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.48893408.1504025861",
    "id": 6
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504025920,
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
    "expirationDate": 1504112260,
    "hostOnly": false,
    "httpOnly": false,
    "name": "_gid",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "GA1.2.426129659.1504025861",
    "id": 8
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504112266.257997,
    "hostOnly": false,
    "httpOnly": true,
    "name": "_supreme_sess",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "WktqalZMQWtnb3M0SkYwSGV6TkdTYy9ueHdydGEyRlY2d0JTUEpycnlLbDdJK0hKUzNOSC92UjdPTEpvQUY5dHlRcklMSnMrcHFHOGV3TW5iamdBVUM5STU2K1hGdElmRTZqVzV6NXhYdXFqRFNBR1VDeC9tWFRaUGtteDJlaUpqczRMZ2ZOOXBXZ1VMZlRRampreGFuK1lSUEtmRkNaRmxYbEZOMjE1NnRXUHN6Nzk5bnRienVEWURjc25WOUtGSHhBWk84MTU1N2pvWTBhekhTVGNaZkFFdkZ5bzBtdkZKc05GdW5xNnhKbGg0OWF5TkNIbHV1TFFsQlNXRFJLZE1TN3l3blZxNGZxbm1Vem96OVJRL3ZJQzNGWXUvanBsODlZZ1dWQUJWZTFvRVJNWUJjUkRaWW9tV09FUEl2aWFPTDREOUw1V0xWSUQ2NUVIbk5BWUlEUWtzV0NVeDgzd28wTDFRdFBldCttdThuSGdLRUUzaVJSSHowMElVVTd4ZjZsTHhNQ2pTNEljeVA4c2tPNGRVRFRtT3JuNmI3RU8vb2lPZ1IyREYrQT0tLUpwelYzTmtHLzI5VEIxNlBTSW42a3c9PQ%3D%3D--71cf9be5627eaadc6f154f5c4f8a89c422013b3f",
    "id": 9
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1535561866,
    "hostOnly": false,
    "httpOnly": false,
    "name": "mp_c5c3c493b693d7f413d219e72ab974b2_mixpanel",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "%7B%22distinct_id%22%3A%20%2215e2eed5a143dc-0b27d2fedac5ac-6b3f0178-1fa400-15e2eed5a15a33%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D",
    "id": 10
},
{
    "domain": ".supremenewyork.com",
    "expirationDate": 1504112266,
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
    "expirationDate": 1504112266.25773,
    "hostOnly": true,
    "httpOnly": false,
    "name": "cart",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "1+item--44313%2C16426",
    "id": 12
},
{
    "domain": "www.supremenewyork.com",
    "expirationDate": 1504112266,
    "hostOnly": true,
    "httpOnly": false,
    "name": "pure_cart",
    "path": "/",
    "sameSite": "no_restriction",
    "secure": false,
    "session": false,
    "storeId": "0",
    "value": "%7B%2244313%22%3A1%2C%22cookie%22%3A%221%20item--44313%2C16426%22%2C%22total%22%3A%22%C2%A5135000%22%7D",
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
        var p = page.evaluate(function () {
                return document.getElementById("recaptcha_challenge_image").src;
            });
        casper.capture("process6.png");

        casper.echo(p);
    
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

