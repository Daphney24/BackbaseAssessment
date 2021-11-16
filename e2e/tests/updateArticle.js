const {
    browser,
    element,
    by
} = require("protractor");

const updateNewArticle = require('../pages/updateNewArticle.js');
const candidateName = 'test24';
const newArticleDetails = 'This is the empty body for the script';

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Update New Article', function () {

        console.log("Now on Update Article")
        updateNewArticle.setCandidateName(candidateName);
        updateNewArticle.setTitle('Testing Automation');
        updateNewArticle.setArticleDetails(newArticleDetails);
        updateNewArticle.clickCandidateProfile();
        updateNewArticle.validateNewlyCreatedArticlePresent();
        updateNewArticle.openArticle();
        updateNewArticle.clickEditArticleButton();
        updateNewArticle.updateArticleDetails();
        updateNewArticle.clickPublishArticleButton();
        updateNewArticle.validateSuccessfulUpdateArticle();

    });
});
