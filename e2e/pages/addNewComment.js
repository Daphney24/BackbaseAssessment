const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');

let addNewComment = function () {

    const title = '';
    const candidateName = '';
    const editArticleButtonWebElement = element(by.xpath('//a[contains(text(), "Edit Article")]'));
    const articleTitle = element(by.css('input[formcontrolname=title]'));
    const clickPublishArticleButton = element(by.xpath('//button[normalize-space()="Publish Article"]'));
    const enterCommentsWebElement = element(by.xpath('//textarea[@placeholder="Write a comment..."]'));
    const clickPostCommentButton = element(by.css('button[type="submit"]'));
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

    this.setNewComments = function (newComments) {
        this.newComments = newComments;
    };

    this.checkSignIn = function () {
        console.log("signin method");
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail(emailID);
        signinpage.enterPassword(password);
        browser.executeScript('arguments[0].click();', click);
        signinpage.validateSuccessfulSignin();
        return this.candidateName;
    };

    this.clickCandidateProfile = function () {
        console.log("clickcandidateProfile method");
        console.log(this.candidateName);
        const profilehref = "/profile/" + this.candidateName;
        console.log("Href is :" + profilehref);
        browser.sleep(2000);
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);
    };

    this.validateNewlyCreatedArticlePresent = function () {
        console.log("validate artcile present method");
        const articleTitle = '';
        const text1 = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        text1.then(articleTitle => {
            expect(articleTitle).toEqual(this.title);
            console.log("Article is present with name: " + articleTitle);
        })
    };

    this.openArticle = function () {
        console.log("open article method");
        const articlePresent = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).click();
        articlePresent.click();
    };

    this.enterComments = function () {
        console.log("enter comments method");
        enterCommentsWebElement.sendKeys(this.newComments);
    };

    this.clickPostCommentButton = function () {
        let EC = protractor.ExpectedConditions;
        // Waits for element to be present on the DOM with 5s timeout
        browser.wait(EC.presenceOf(clickPostCommentButton, 5000));
        clickPostCommentButton.click();
    };

    this.validateSuccessfulAddComments = function () {
        console.log("validatecomments method");
        const newCommentsCheck = '';
        const textTitle = element(by.xpath('//p[contains(text(), "' + this.newComments + '")]')).getText();
        textTitle.then(newCommentsCheck => {
            expect(newCommentsCheck).toEqual(this.newComments);
            console.log("Article succesfully updated as: " + newCommentsCheck);
        })

    };

};
module.exports = new addNewComment();
