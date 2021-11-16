const {
    browser,
    element,
    by
} = require("protractor");

const updateNewArticle = require('../pages/updateNewArticle.js');
const dataProvider = require('../testdata/dataProvider.js');

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Update New Article', function () {

        console.log("Now on Update Article")
        updateNewArticle.setCandidateName(dataProvider.signinPage.candidateName);
        updateNewArticle.setTitle(dataProvider.toSelectArticleByTitle.title);
        updateNewArticle.setArticleDetails(dataProvider.updateArticle.newArticleDetails);
        updateNewArticle.clickCandidateProfile();
        updateNewArticle.validateNewlyCreatedArticlePresent();
        updateNewArticle.openArticle();
        updateNewArticle.clickEditArticleButton();
        updateNewArticle.updateArticleDetails();
        updateNewArticle.clickPublishArticleButton();
        updateNewArticle.validateSuccessfulUpdateArticle();

    });
});
