var system = require('system');
var args = system.args;
var baseUrl = 'http://www.supremenewyork.com/shop';
var targetColor = "Black";
var targetSize = "Large";
var itemSelector;

var casper = require('casper').create({
    verbose: true,
    logLevel: 'debug',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.172 Safari/537.22',
    viewportSize:{
        width:2300,
        height:1200
    },
    pageSettings: {
        loadImages: true,         // The WebPage instance used by Casper will
        loadPlugins: true,       // use these settings
        resourceTimeout: 20000
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

casper.waitForSelector(('#container > article'),
    function pass () {
   
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
        this.echo("open checkOut");
    
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
    
    casper.capture("process.png");
    
    },
    function fail () {
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

