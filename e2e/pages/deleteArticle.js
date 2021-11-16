const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');
const dataProvider = require('../testdata/dataProvider.js');

let deleteArticle = function () {

    const title = '';
    const candidateName = '';
    let deleteArticleButtonWebElement = element(by.xpath('//button[contains(text(), "Delete Article")]'));
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
        const profilehref = `/profile/${this.candidateName}`;
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);
    };

    this.validateNewlyCreatedArticlePresent = function () {
        var articleTitle;
        var articleTitleWebElement = element(by.xpath('//h1[starts-with(text(), "' + this.title + '")]')).getText();
        articleTitleWebElement.then(articleTitleValue => {
            expect(articleTitleValue).toEqual(this.title);
            console.log("Article is present with name: " + articleTitleValue);
        })
    };

    this.openArticle = function () {
        const articlePresent = element(by.xpath('//h1[starts-with(text(), "' + this.title + '")]'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(articlePresent, 5000));
        articlePresent.click();

    };

    this.clickDeleteArticleButton = function () {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(deleteArticleButtonWebElement, 5000));
        deleteArticleButtonWebElement.click();
    };

};
module.exports = new deleteArticle();
