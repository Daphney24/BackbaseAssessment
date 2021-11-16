const {
    browser,
    element,
    by
} = require("protractor");

const createNewArticle = require('../pages/createNewArticle.js');
const dataProvider = require('../testdata/dataProvider.js');

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Create New Article', function () {
        createNewArticle.checkSignIn();
        createNewArticle.clickNewArticle();
        createNewArticle.setTitle(dataProvider.updateArticle.newArticleTitle);
        createNewArticle.enterArticleTitle();
        createNewArticle.enterArticleDescription(dataProvider.updateArticle.newArticleDescription);
        createNewArticle.enterArticleDetails(dataProvider.updateArticle.newArticleDetails);
        createNewArticle.articleArticleTag(dataProvider.updateArticle.newArticleTag);
        createNewArticle.clickPublishArticleButton();
        createNewArticle.validateSuccessfulArticleCreation();

    });

});
