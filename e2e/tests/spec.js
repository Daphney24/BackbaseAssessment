const {
    browser,
    element,
    by
} = require("protractor");

const signinpage = require('../pages/signinpage.js');
const createNewArticle = require('../pages/createNewArticle.js');
const updateNewArticle = require('../pages/updateNewArticle.js');
const {
    updateArticleTitle
} = require("../pages/updateNewArticle.js");
const deleteArticle = require("../pages/deleteArticle.js");
const markArticleAsFavourite = require('../pages/markArticleAsFavourite.js');
const addNewComment = require('../pages/addNewComment.js');
const candidateName = 'test24';
const newArticleTitle = 'Testing Automation';
const newArticleDescription = 'This is a an automation script';
const newArticleDetails = 'This is the empty body for the script';
const newArticleTag = 'Autotag1';
const newComments = 'This is new comments'


describe('Backbase Assessment', function () {
    var url = 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com/';
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(200000)

    beforeEach(function () {
        browser.get(url);
        expect(browser.getTitle()).toEqual('Conduit');

    });

    it('Create New Article', function () {

        //TODO: Signin to site
        createNewArticle.checkSignIn();

        //TODO:Clicking on New Artcile
        createNewArticle.clickNewArticle();

        //TODO:Adding details for creation of new article
        createNewArticle.setTitle(newArticleTitle);
        createNewArticle.enterArticleTitle();
        createNewArticle.enterArticleDescription(newArticleDescription);
        createNewArticle.enterArticleDetails(newArticleDetails);
        createNewArticle.articleArticleTag(newArticleTag);
        createNewArticle.clickPublishArticleButton();

        //TODO:Verify successful creation
        createNewArticle.validateSuccessfulArticleCreation();
        
    });


    it('Update New Article', function () {

        console.log("Now on Update Article")
        //TODO: Signin to site
        //updateNewArticle.checkSignIn();

        updateNewArticle.setCandidateName(candidateName);
        updateNewArticle.setTitle('Testing Automation');
        updateNewArticle.setArticleDetails(newArticleDetails);

        //TODO:Clicking on Candidate Profile
        updateNewArticle.clickCandidateProfile();

        //TODO: Validate newly created artcile is present for update
        updateNewArticle.validateNewlyCreatedArticlePresent();

        //TODO: Open article to be updated
        updateNewArticle.openArticle();

        //TODO: Click on Edit Artcile button
        updateNewArticle.clickEditArticleButton();

        //TODO: Update title of artcile and publish
        updateNewArticle.updateArticleDetails();

        //TODO: clikcing publish artcile button
        updateNewArticle.clickPublishArticleButton();

        //TODO:Verify successful creation
        updateNewArticle.validateSuccessfulUpdateArticle();

    });

    it('Mark Article as favourite', function () {

        console.log("Now on Mark Article as favourite");
       
        //markArticleAsFavourite.checkSignIn();
        markArticleAsFavourite.setCandidateName(candidateName);
        markArticleAsFavourite.setTitle('Testing Automation');

        //TODO:Clicking on Candidate Profile
        markArticleAsFavourite.clickCandidateProfile();

        //TODO: Validate newly created artcile is present for update
        markArticleAsFavourite.validateNewlyCreatedArticlePresent();

        //TODO: Open article to be updated
        markArticleAsFavourite.clickArticleAsFavourite();

    });

    it('Add comments on Article', function () {

        console.log("Now on Add Comments Section")

        //TODO:Sign-in into site
        //addNewComment.checkSignIn();

        addNewComment.setCandidateName(candidateName);
        addNewComment.setTitle('Testing Automation');
        addNewComment.setNewComments(newComments);

        //TODO:Clicking on Candidate Profile
        addNewComment.clickCandidateProfile();

        //TODO: Validate newly created artcile is present for update
        addNewComment.validateNewlyCreatedArticlePresent();

        //TODO: Open article to be updated
        addNewComment.openArticle();

        //TODO: Click on Edit Artcile button
        addNewComment.enterComments();

        //TODO:Click Post Comments button
        addNewComment.clickPostCommentButton();

        //TODO:Verify successful creation
        addNewComment.validateSuccessfulAddComments();

    });

    it('Delete Article', function () {

        console.log("Now on Delete Article")

        //deleteArticle.checkSignIn();
        deleteArticle.setCandidateName(candidateName);
        deleteArticle.setTitle('Testing Automation');

        //TODO:Clicking on Candidate Profile
        deleteArticle.clickCandidateProfile();

        //TODO: Validate newly created artcile is present for update
        deleteArticle.validateNewlyCreatedArticlePresent();

        //TODO: Open article to be updated
        deleteArticle.openArticle();

        //TODO: Click on Edit Artcile button
        deleteArticle.clickDeleteArticleButton();

    });


    
});
