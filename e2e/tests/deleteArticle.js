const {
    browser,
    element,
    by
} = require("protractor");

const deleteArticle = require("../pages/deleteArticle.js");
const candidateName = 'test24';

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Delete Article', function () {

        deleteArticle.setCandidateName(candidateName);
        deleteArticle.setTitle('Testing Automation');
        deleteArticle.clickCandidateProfile();
        deleteArticle.validateNewlyCreatedArticlePresent();
        deleteArticle.openArticle();
        deleteArticle.clickDeleteArticleButton();
    });

});
