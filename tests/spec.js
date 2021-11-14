const { browser, element, by } = require("protractor");

let signinpage = require('../pages/signinpage.js');
let createNewArticle = require('../pages/createNewArticle.js');
let updateNewArticle = require('../pages/updateNewArticle.js');
const { updateArticleTitle } = require("../pages/updateNewArticle.js");
const deleteArticle = require("../pages/deleteArticle.js");
let markArticleAsFavourite = require('../pages/markArticleAsFavourite.js');

let candidateName = 'test24';
let newArticleTitle = 'Testing Automation';
let newArticleDescription = 'This is a an automation script';
let newArticleDetails = 'This is the empty body for the script';
let newArticleTag = 'Autotag1';


describe('Backbase Assessment',function(){
    var url = 'https://candidatex:qa-is-cool@qa-task.backbasecloud.com/';

    browser.waitForAngularEnabled(false);
	browser.manage().timeouts().implicitlyWait(200000)
    
    beforeEach(function(){
        browser.get(url);
        expect(browser.getTitle()).toEqual('Conduit');
        
    });

    it('Create New Article',function(){

        //TODO:Sign-in into site
        var signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail('test24@gmail.com');
        signinpage.enterPassword('test24');
        var click = element(by.css('button[type="submit"]'));
        browser.executeScript('arguments[0].click();', click);
        signinpage.validateSuccessfulSignin();
       
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

        browser.sleep(1000);
    });

    it('Update New Article',function(){

        console.log("Now on Update Article")
        //TODO:Sign-in into site
        // var signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
        // browser.executeScript('arguments[0].click();', signinWebElement);
        // signinpage.enterEmail('test24@gmail.com');
        // signinpage.enterPassword('test24');
        // var click = element(by.css('button[type="submit"]'));
        // browser.executeScript('arguments[0].click();', click);
        // signinpage.validateSuccessfulSignin();
       
        updateNewArticle.setCandidateName(candidateName);
        updateNewArticle.setTitle('Testing Automation');

        browser.sleep(1000);
        //TODO:Clicking on Candidate Profile
        updateNewArticle.clickCandidateProfile();

        browser.sleep(1000);
        //TODO: Validate newly created artcile is present for update
        updateNewArticle.validateNewlyCreatedArticlePresent();

        browser.sleep(1000);
        //TODO: Open article to be updated
        updateNewArticle.openArticle();

        browser.sleep(1000);
        //TODO: Click on Edit Artcile button
        updateNewArticle.clickEditArticleButton();

        browser.sleep(1000);
        //TODO: Update title of artcile and publish
        updateNewArticle.updateArticleTitle();
        browser.sleep(1000);
        updateNewArticle.clickPublishArticleButton();

        browser.sleep(1000);
        //TODO:Verify successful creation
        updateNewArticle.validateSuccessfulUpdateArticle();

    });

    it('Delete Article',function(){

        console.log("Now on Delete Article")
        //TODO:Sign-in into site
        var signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail('test24@gmail.com');
        signinpage.enterPassword('test24');
        var click = element(by.css('button[type="submit"]'));
        browser.executeScript('arguments[0].click();', click);
        signinpage.validateSuccessfulSignin();
       
        deleteArticle.setCandidateName(candidateName);
        deleteArticle.setTitle('Testing Automation');

        browser.sleep(1000);
        //TODO:Clicking on Candidate Profile
        deleteArticle.clickCandidateProfile();

        browser.sleep(1000);
        //TODO: Validate newly created artcile is present for update
        deleteArticle.validateNewlyCreatedArticlePresent();

        browser.sleep(1000);
        //TODO: Open article to be updated
        deleteArticle.openArticle();

        browser.sleep(1000);
        //TODO: Click on Edit Artcile button
        deleteArticle.clickDeleteArticleButton();

    });

    it('Mark Article as favourite',function(){

        console.log("Now on Mark Article as favourite")
        //TODO:Sign-in into site
        var signinWebElement = element(by.xpath('//a[contains(text(),"Sign in")]'));
        browser.executeScript('arguments[0].click();', signinWebElement);
        signinpage.enterEmail('test24@gmail.com');
        signinpage.enterPassword('test24');
        var click = element(by.css('button[type="submit"]'));
        browser.executeScript('arguments[0].click();', click);
        signinpage.validateSuccessfulSignin();
       
        markArticleAsFavourite.setCandidateName(candidateName);
        markArticleAsFavourite.setTitle('Testing Automation');

        browser.sleep(1000);
        //TODO:Clicking on Candidate Profile
        markArticleAsFavourite.clickCandidateProfile();

        browser.sleep(1000);
        //TODO: Validate newly created artcile is present for update
        markArticleAsFavourite.validateNewlyCreatedArticlePresent();

        browser.sleep(1000);
        //TODO: Open article to be updated
        markArticleAsFavourite.clickArticleAsFavourite();

    });
});



