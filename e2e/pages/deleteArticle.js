const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');

let deleteArticle = function () {

    const title = '';
    const candidateName = '';
    let deleteArticleButtonWebElement = element(by.xpath('//button[contains(text(), "Delete Article")]'));
    let articleTitle = element(by.css('input[formcontrolname=title]'));
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
        browser.sleep(2000);
        const profilehref = `/profile/${this.candidateName}`;
        console.log("Href is :" + profilehref);
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);
    };

    this.validateNewlyCreatedArticlePresent = function () {
        const updatedArticleTitle = '';
        const textTitle = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        textTitle.then(updatedArticleTitle => {
            expect(updatedArticleTitle).toEqual(this.title);
            console.log("Article is present with name: " + updatedArticleTitle);
        })
    };

    this.openArticle = function () {
        const articlePresent = element(by.xpath('//h1[starts-with(text(), "' + this.title + '")]')).click();
        articlePresent.click();
    };

    this.clickDeleteArticleButton = function () {
        deleteArticleButtonWebElement.click();
        console.log("Article Deleted Successfully");
    };

};
module.exports = new deleteArticle();
