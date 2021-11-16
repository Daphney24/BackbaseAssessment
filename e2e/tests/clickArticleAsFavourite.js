const {
    browser,
    element,
    by
} = require("protractor");

const markArticleAsFavourite = require('../pages/markArticleAsFavourite.js');
const dataProvider = require('../testdata/dataProvider.js');

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Mark Article as favourite', function () {
        markArticleAsFavourite.setCandidateName(dataProvider.signinPage.candidateName);
        markArticleAsFavourite.setTitle(dataProvider.toSelectArticleByTitle.title);
        markArticleAsFavourite.clickCandidateProfile();
        markArticleAsFavourite.validateNewlyCreatedArticlePresent();
        markArticleAsFavourite.clickArticleAsFavourite();
    });

});
