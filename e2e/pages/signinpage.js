const {
    browser,
    element
} = require("protractor");

let signinpage = function () {

    let signinEmail_input = element(by.css('input[formcontrolname=email]'));
    let signinPassword_input = element(by.css('input[formcontrolname=password]'));
    var signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
    
    this.clikcSigninLink = function () {
        browser.executeScript('arguments[0].click();', signinWebElement);
    };

    this.enterEmail = function (email) {
        signinEmail_input.sendKeys(email);
    };

    this.enterPassword = function (password) {
        signinPassword_input.sendKeys(password);
    };

    this.clickSignInButton = function () {
        var signin_button = element(by.css('button[type="submit"]'));
        browser.executeScript('arguments[0].click();', signin_button);
    };

    this.validateSuccessfulSignin = function () {
        var getCandidateNameValue;
        var getCandidateNameWebElement = element(by.xpath('//nav[1]/div[1]/ul[1]/li[4]/a[1]')).getText();
        getCandidateNameWebElement.then(getCandidateNameValue => {
            expect(getCandidateNameValue).toEqual("test24");
            console.log("Signin is Successful for candidate: " + getCandidateNameValue);
        })

    };

};

module.exports = new signinpage();