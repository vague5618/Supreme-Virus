/**
 * Created by JAY on 2016. 7. 5..
 */

var baseUrl = 'http://www.supremenewyork.com/shop';

var itemSelector = "#shop-scroller > li:nth-child(1) > a > img";

var targetColor = "Black";
var targetSize = "Large";

var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22',
    pageSettings: {
        loadImages: false,         // The WebPage instance used by Casper will
        loadPlugins: false,       // use these settings
        resourceTimeout: 15000
    }
});

casper.start('http://www.supremenewyork.com/shop', function () {
 casper.page.injectJs('./bower_components/jquery/dist/jquery.min.js');
});

//move to Item
casper.then(function () {
     casper.evaluate(function(itemSelector){
         return $(itemSelector).click();
     },itemSelector);
});

//item check
casper.waitForSelector(('#details > h1'),
    function pass () {
        var item = this.evaluate(function(){
            return $('#details > h1').text();
        });
    
        this.echo("item : "+item);
    },
    function fail () {
        this.echo("fail it");
    },
    20000 // timeout limit in milliseconds
).then(function(){
    
    var price = casper.evaluate(function(){
       return $("#details > p.price > span").text(); 
    });
    
    this.echo("price : "+price);
    
    var color = casper.evaluate(function(){
        return $("#details > p.style").text();
    });
    
    this.echo("before color : " + color);

    //colorpicker
    casper.evaluate(function(targetColor){   
       $("a[data-style-name='"+targetColor+"']").click(); 
    },targetColor);
    
    color = casper.evaluate(function(){
        return $("#details > p.style").text();
    });
    
    this.echo("choice color : " + color);
    
    var soldOut = casper.evaluate(function(){
        return $("#add-remove-buttons > b").text(); 
    });
       
    this.echo(soldOut);
    
    //sizePicker
    
    var size = casper.evaluate(function(){
        return $("#s option:selected").text();
    });
    
    this.echo("before size : "+size);

    casper.evaluate(function(targetSize){   
    $("#s option")
        .each(function() { this.selected =      (this.text == targetSize); });
    },targetSize);
   
    size = casper.evaluate(function(){
        return $("#s option:selected").text();
    });
    
    this.echo("after size : "+size);
}).then(function(){

    //add to cart
    casper.evaluate(function(){
        $("#add-remove-buttons > input").click();
    });
});

casper.waitForSelector(('#cart > a.button.checkout'),
    function pass () {
        this.echo("it not Soldout");
    
        this.evaluate(function(){
        $("#cart > a.button.checkout")[0].click();        
        });
    },
    function fail () {
        this.echo("fail it");
    },
    20000 // timeout limit in milliseconds
);

casper.waitForSelector(('#pay > input'),
    function pass () {
        this.echo("pass to payment");
   
    var name = casper.evaluate(function () {
        return $("#order_billing_name").val("BAE JAEYONG");
    });

    var email = casper.evaluate(function () {
        return $("#order_email").val("vague5618@gmail.com");
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

    var cardType =casper.evaluate(function () {
        return $('#credit_card_type').val($('#credit_card_type > option')[2].value)
    });

    var cardNumber =casper.evaluate(function () {
        return $("#cnb").val('5371 2000 0280 3845');
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
    
    },
    function fail () {
        this.echo("checkout Fail it");
    },
    20000 // timeout limit in milliseconds
);

casper.on("page.error", function (msg, trace) {
    this.echo("Error: " + msg, "ERROR");
});

casper.on("resource.error", function(resourceError){
    console.log('Unable to load resource (#' + resourceError.id + 'URL:' + resourceError.url + ')');
    console.log('Error code: ' + resourceError.errorCode + '. Description: ' + resourceError.errorString);
});

casper.on('url.changed', function (url) {
    casper.echo(url);
});

casper.on('remote.message', function(message) {
    this.echo('remote message caught: ' + message);
});

casper.run(function () {
    casper.exit();
});
