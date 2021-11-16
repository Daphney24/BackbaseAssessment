const {
    browser,
    element
} = require("protractor");
const signinpage = require('../pages/signinpage.js');

let updateNewArticle = function () {

    const title = '';
    const candidateName = '';
    const articleDetails = '';
    let editArticleButtonWebElement = element(by.xpath('//a[contains(text(), "Edit Article")]'));
    let articleTitle = element(by.css('input[formcontrolname=title]'));
    let artcileDetailsWebElement = element(by.xpath('//textarea[@placeholder="Write your article (in markdown)"]'));
    let clickPublishArticleButton = element(by.xpath('//button[normalize-space()="Publish Article"]'));
    const emailID = 'test24@gmail.com';
    const password = 'test24';
    const click = element(by.css('button[type="submit"]'));
    const signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
    var updatedArticleDetailsText;

    this.setCandidateName = function (candidateName) {
        this.candidateName = candidateName;
    };

    this.setTitle = function (title) {
        this.title = title;
    };

    this.setArticleDetails = function (articleDetails) {
        this.articleDetails = articleDetails;
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
        const clickCandidateProfileWebElement = element(by.css('[href="' + profilehref + '"]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);

    };

    this.validateNewlyCreatedArticlePresent = function () {
        var articleTitle;
        var textTitle = element(by.xpath('//h1[contains(text(), "' + this.title + '")]')).getText();
        textTitle.then(articleTitle => {
            expect(articleTitle).toEqual(this.title);
            console.log("Article is present with name: " + articleTitle);
        })
    };

    this.openArticle = function () {
        var articlePresent = element(by.xpath('//h1[starts-with(text(), "'+this.title+'")]'));
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(articlePresent, 6000));
        articlePresent.click();
    };

    this.clickEditArticleButton = function () {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(editArticleButtonWebElement, 5000));
        editArticleButtonWebElement.click();
    };

    this.updateArticleDetails = function () {
        updatedArtcileDetailsValue= this.articleDetails + " is now changed";
        console.log(updatedArtcileDetailsValue);
        artcileDetailsWebElement.clear();
        artcileDetailsWebElement.sendKeys(updatedArtcileDetailsValue);
    };

    this.clickPublishArticleButton = function () {
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(clickPublishArticleButton, 5000));
        browser.executeScript('arguments[0].click();', clickPublishArticleButton);
    };

    this.validateSuccessfulUpdateArticle = function () {
        var textArticleDetails = element(by.xpath('//p[contains(text(),"' + updatedArtcileDetailsValue + '")]')).getText();
        textArticleDetails.then(updatedArticleDetailsText => {
            expect(updatedArticleDetailsText).toEqual(updatedArtcileDetailsValue);
            console.log("Article succesfully updated as: " + updatedArticleDetailsText);
        })

    };

};
module.exports = new updateNewArticle();
