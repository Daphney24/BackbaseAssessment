const { browser, element } = require("protractor");

let signinpage = function(){

    let signinEmail_input = element(by.css('input[formcontrolname=email]'));
    let signinPassword_input = element(by.css('input[formcontrolname=password]'));
    let signin_button = element(by.buttonText(' Sign in '));
    var signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
    var candidatename = "test24";

    this.clikcSigninLink = function(){
        browser.executeScript('arguments[0].click();', signinWebElement);
    };

    this.enterEmail = function(email){
        signinEmail_input.sendKeys(email);
    };

    this.enterPassword = function(password){
        signinPassword_input.sendKeys(password);
    };

    this.clickSignInButton = function(){
        var click = element(by.css('button[type="submit"]'));
        browser.executeScript('arguments[0].click();', click);
    };

    this.validateSuccessfulSignin = function(){
        var elementText;
        var text1 = element(by.xpath('//nav[1]/div[1]/ul[1]/li[4]/a[1]')).getText();
        text1.then(elementText =>{
            expect(elementText).toEqual("test24");
            console.log("Signin is Successful for candidate: "+ elementText);
        })
    
    };
	
};

module.exports = new signinpage();