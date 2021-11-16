const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');
const dataProvider = require('../testdata/dataProvider.js');

let createNewArticle = function () {

    const clickNewArticleLinkWebElement = element(by.xpath('//a[contains(text(),"New Article")]'));
    const articleTitle = element(by.css('input[formcontrolname=title]'));
    const articleDescription = element(by.css('input[formcontrolname=description]'));
    const articleDetails = element(by.xpath('//textarea[@placeholder="Write your article (in markdown)"]'));
    const articleTag = element(by.xpath('//input[@placeholder="Enter tags"]'));
    const title = '';
    const clickSigninButton = element(by.css('button[type="submit"]'));
    const signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));

    this.setTitle = function (title) {
        this.title = title;
    }

    this.clickNewArticle = function () {
        browser.executeScript('arguments[0].click();', clickNewArticleLinkWebElement);
    };

    this.checkSignIn = function () {
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail(dataProvider.signinPage.emailID);
        signinpage.enterPassword(dataProvider.signinPage.password);
        browser.executeScript('arguments[0].click();', clickSigninButton);
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
        const clickSigninButton = element(by.xpath('//button[normalize-space()="Publish Article"]'));
        browser.executeScript('arguments[0].click();', clickSigninButton);
    };

    this.validateSuccessfulArticleCreation = function () {
        const articleTitleValue = '';
        const articleTitleWebElement = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        articleTitleWebElement.then(articleTitleValue => {
            expect(articleTitleValue).toEqual(this.title);
        })
    };
};
module.exports = new createNewArticle();
