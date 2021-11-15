const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');

let markArticleAsFavourite = function () {

    const title = '';
    const candidateName = '';
    let deleteArticleButtonWebElement = element(by.xpath('//button[contains(text(), "Delete Article")]'));
    let articleTitle = element(by.css('input[formcontrolname=title]'));
    let clickAsFavouriteWebElement = element(by.xpath('//app-favorite-button[@class="pull-xs-right"]'));
    const emailID = 'test24@gmail.com';
    const password = 'test24';
    const click = element(by.css('button[type="submit"]'));
    const signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));

    this.setCandidateName = function (candidateName) {
        this.candidateName = candidateName;
    };

    this.setTitle = function (title) {
        this.title = title;
    };

    this.checkSignIn = function () {
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail(emailID);
        signinpage.enterPassword(password);
        browser.executeScript('arguments[0].click();', click);
        signinpage.validateSuccessfulSignin();
    };

    this.clickCandidateProfile = function () {
        console.log(this.candidateName);
        const profilehref = "/profile/" + this.candidateName;
        console.log("Href is :" + profilehref);
        browser.sleep(2000);
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);

    };

    this.validateNewlyCreatedArticlePresent = function () {
        var articleTitle;
        var text1 = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        text1.then(articleTitle => {
            expect(articleTitle).toEqual(this.title);
            console.log("Article is present with name: " + articleTitle);
        })
    };

    this.clickArticleAsFavourite = function () {
        clickAsFavouriteWebElement.click();
    };

};
module.exports = new markArticleAsFavourite();
