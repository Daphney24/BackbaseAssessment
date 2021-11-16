const {
    browser,
    element,
    by
} = require("protractor");

const markArticleAsFavourite = require('../pages/markArticleAsFavourite.js');
const candidateName = 'test24';

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Mark Article as favourite', function () {
        markArticleAsFavourite.setCandidateName(candidateName);
        markArticleAsFavourite.setTitle('Testing Automation');
        markArticleAsFavourite.clickCandidateProfile();
        markArticleAsFavourite.validateNewlyCreatedArticlePresent();
        markArticleAsFavourite.clickArticleAsFavourite();
    });

});
