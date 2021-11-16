const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');
const updateNewArticle = require('../pages/updateNewArticle.js');

let deleteArticle = function () {

    const title = '';
    const candidateName = '';
    let deleteArticleButtonWebElement = element(by.xpath('//button[contains(text(), "Delete Article")]'));
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
        const profilehref = `/profile/${this.candidateName}`;
        console.log("Href is :" + profilehref);
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);
    };

    this.validateNewlyCreatedArticlePresent = function () {
        var articleTitle;
        var textTitle = element(by.xpath('//h1[starts-with(text(), "' + this.title + '")]')).getText();
        textTitle.then(articleTitle => {
            expect(articleTitle).toEqual(this.title);
            console.log("Article is present with name: " + articleTitle);
        })
    };

    this.openArticle = function () {
        console.log("open article method");
        const articlePresent = element(by.xpath('//h1[starts-with(text(), "' + this.title + '")]'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(articlePresent, 5000));
        articlePresent.click();

    };

    this.clickDeleteArticleButton = function () {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(deleteArticleButtonWebElement, 5000));
        deleteArticleButtonWebElement.click();
        console.log("Article Deleted Successfully");
    };

};
module.exports = new deleteArticle();
