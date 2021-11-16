const {
    browser,
    element,
    by
} = require("protractor");

const addNewComment = require('../pages/addNewComment.js');
const dataProvider = require('../testdata/dataProvider.js');

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Add comments on Article', function () {

        addNewComment.setCandidateName(dataProvider.signinPage.candidateName);
        console.log("Title is:" + dataProvider.toSelectArticleByTitle.title);
        addNewComment.setTitle(dataProvider.toSelectArticleByTitle.title);
        addNewComment.setNewComments(dataProvider.updateArticle.newComments);
        addNewComment.clickCandidateProfile();
        addNewComment.validateNewlyCreatedArticlePresent();
        addNewComment.openArticle();
        addNewComment.enterComments();
        addNewComment.clickPostCommentButton();
        addNewComment.validateSuccessfulAddComments();
    });

});
