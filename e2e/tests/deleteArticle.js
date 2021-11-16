const {
    browser,
    element,
    by
} = require("protractor");

const deleteArticle = require("../pages/deleteArticle.js");
const dataProvider = require('../testdata/dataProvider.js');

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();

    it('Delete Article', function () {

        deleteArticle.setCandidateName(dataProvider.signinPage.candidateName);
        deleteArticle.setTitle(dataProvider.toSelectArticleByTitle.title);
        deleteArticle.clickCandidateProfile();
        deleteArticle.validateNewlyCreatedArticlePresent();
        deleteArticle.openArticle();
        deleteArticle.clickDeleteArticleButton();
    });

});
