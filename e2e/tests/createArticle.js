const {
    browser,
    element,
    by
} = require("protractor");

const createNewArticle = require('../pages/createNewArticle.js');
const newArticleTitle = 'Testing Automation';
const newArticleDescription = 'This is a an automation script';
const newArticleDetails = 'This is the empty body for the script';
const newArticleTag = 'Autotag1';

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Create New Article', function () {
        createNewArticle.checkSignIn();
        createNewArticle.clickNewArticle();
        createNewArticle.setTitle(newArticleTitle);
        createNewArticle.enterArticleTitle();
        createNewArticle.enterArticleDescription(newArticleDescription);
        createNewArticle.enterArticleDetails(newArticleDetails);
        createNewArticle.articleArticleTag(newArticleTag);
        createNewArticle.clickPublishArticleButton();
        createNewArticle.validateSuccessfulArticleCreation();

    });

});
