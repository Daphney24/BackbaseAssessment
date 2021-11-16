const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');

let createNewArticle = function () {

    const clickNewArticleLinkWebElement = element(by.xpath('//a[contains(text(),"New Article")]'));
    const articleTitle = element(by.css('input[formcontrolname=title]'));
    const articleDescription = element(by.css('input[formcontrolname=description]'));
    const articleDetails = element(by.xpath('//textarea[@placeholder="Write your article (in markdown)"]'));
    const articleTag = element(by.xpath('//input[@placeholder="Enter tags"]'));
    const title = '';
    const emailID = 'test24@gmail.com';
    const password = 'test24';
    const click = element(by.css('button[type="submit"]'));
    const signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));

    this.setTitle = function (title) {
        this.title = title;
    }

    this.clickNewArticle = function () {
        browser.executeScript('arguments[0].click();', clickNewArticleLinkWebElement);
    };

    this.checkSignIn = function () {
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail(emailID);
        signinpage.enterPassword(password);
        browser.executeScript('arguments[0].click();', click);
        signinpage.validateSuccessfulSignin();
    };

    this.enterArticleTitle = function () {
        articleTitle.sendKeys(this.title);
    };

    this.enterArticleDescription = function (description) {
        articleDescription.sendKeys(description);
    };

    this.enterArticleDetails = function (details) {
        articleDetails.sendKeys(details);
    };

    this.articleArticleTag = function (tag) {
        articleTag.sendKeys(tag);
        const enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
    };

    this.clickPublishArticleButton = function () {
        const click = element(by.xpath('//button[normalize-space()="Publish Article"]'));
        browser.executeScript('arguments[0].click();', click);
    };

    this.validateSuccessfulArticleCreation = function () {
        const elementText = '';
        const textTitle = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        textTitle.then(elementText => {
            expect(elementText).toEqual(this.title);
            console.log("Article succesfully created for: " + elementText);
        })

    };

};
module.exports = new createNewArticle();
