const {
    browser,
    element,
    by
} = require("protractor");

const addNewComment = require('../pages/addNewComment.js');
const candidateName = 'test24';
const newComments = 'This is new comments'

describe('Backbase Assessment', function () {
    browser.manage().timeouts().implicitlyWait(200000)
    browser.waitForAngularEnabled(false);

    it('Add comments on Article', function () {

        addNewComment.setCandidateName(candidateName);
        addNewComment.setTitle('Testing Automation');
        addNewComment.setNewComments(newComments);
        addNewComment.clickCandidateProfile();
        addNewComment.validateNewlyCreatedArticlePresent();
        addNewComment.openArticle();
        addNewComment.enterComments();
        addNewComment.clickPostCommentButton();
        addNewComment.validateSuccessfulAddComments();
    });

});
