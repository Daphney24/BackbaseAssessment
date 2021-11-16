const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');
const dataProvider = require('../testdata/dataProvider.js');

let addNewComment = function () {

    const title = '';
    const candidateName = '';
    const enterCommentsWebElement = element(by.xpath('//textarea[@placeholder="Write a comment..."]'));
    const clickPostCommentButton = element(by.css('button[type="submit"]'));
    const clickSigninButton = element(by.css('button[type="submit"]'));
    const signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));

    this.setCandidateName = function (candidateName) {
        this.candidateName = candidateName;
    };

    this.setTitle = function (title) {
        this.title = title;
    };

    this.setNewComments = function (newComments) {
        this.newComments = newComments;
    };

    this.checkSignIn = function () {
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail(dataProvider.signinPage.emailID);
        signinpage.enterPassword(dataProvider.signinPage.password);
        browser.executeScript('arguments[0].click();', clickSigninButton);
        signinpage.validateSuccessfulSignin();
        return this.candidateName;
    };

    this.clickCandidateProfile = function () {
        const profilehref = "/profile/" + this.candidateName;
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);
    };

    this.validateNewlyCreatedArticlePresent = function () {
        const articleTitle = '';
        const articleTitleWebElement = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
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

    this.enterComments = function () {
       enterCommentsWebElement.sendKeys(this.newComments);
    };

    this.clickPostCommentButton = function () {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(clickPostCommentButton, 5000));
        clickPostCommentButton.click();
    };

    this.validateSuccessfulAddComments = function () {
        const newCommentsValue = '';
        const commentWebElement = element(by.xpath('//p[contains(text(), "' + this.newComments + '")]')).getText();
        commentWebElement.then(newCommentsValue => {
            expect(newCommentsValue).toEqual(this.newComments);
        })

    };

};
module.exports = new addNewComment();
