const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');
const dataProvider = require('../testdata/dataProvider.js');

let markArticleAsFavourite = function () {

    const title = '';
    const candidateName = '';
    let clickAsFavouriteWebElement = element(by.xpath('//app-favorite-button[@class="pull-xs-right"]'));
    const signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));

    this.setCandidateName = function (candidateName) {
        this.candidateName = candidateName;
    };

    this.setTitle = function (title) {
        this.title = title;
    };

    this.checkSignIn = function () {
        const clickSigninButton = element(by.css('button[type="submit"]'));
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail(dataProvider.signinPage.emailID);
        signinpage.enterPassword(dataProvider.signinPage.password);
        browser.executeScript('arguments[0].click();', clickSigninButton);
        signinpage.validateSuccessfulSignin();
    };

    this.clickCandidateProfile = function () {
        const profilehref = "/profile/" + this.candidateName;
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);

    };

    this.validateNewlyCreatedArticlePresent = function () {
        var articleTitle;
        var articleTitleWebElement = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        articleTitleWebElement.then(articleTitleValue => {
            expect(articleTitleValue).toEqual(this.title);
        })
    };

    this.clickArticleAsFavourite = function () {
        clickAsFavouriteWebElement.click();
    };

};
module.exports = new markArticleAsFavourite();
