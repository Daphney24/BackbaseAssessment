const { browser, element } = require("protractor");

let createNewArticle = function(){

    let clickNewArticleLinkWebElement = element(by.xpath('//a[contains(text(),"New Article")]'));
    let articleTitle = element(by.css('input[formcontrolname=title]'));
    let articleDescription = element(by.css('input[formcontrolname=description]'));
    let articleDetails = element(by.xpath('//textarea[@placeholder="Write your article (in markdown)"]'));
    let articleTag = element(by.xpath('//input[@placeholder="Enter tags"]')); 
    let verifyArticleWebElement = element(by.xpath('//h1[contains(text(),"123")]'));
    const title = '';

    this.setTitle = function(title){
        this.title = title;
    }

    this.clickNewArticle = function(){
        browser.executeScript('arguments[0].click();', clickNewArticleLinkWebElement);
    };

    this.enterArticleTitle = function(){
        articleTitle.sendKeys(this.title);
    };

    this.enterArticleDescription = function(description){
        articleDescription.sendKeys(description);
    };

    this.enterArticleDetails = function(details){
        articleDetails.sendKeys(details);
    };

    this.articleArticleTag = function(tag){
        articleTag.sendKeys(tag);
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
    };

    this.clickPublishArticleButton = function(){
        var click = element(by.xpath('//button[normalize-space()="Publish Article"]'));
        browser.executeScript('arguments[0].click();', click);
    };

    this.validateSuccessfulArticleCreation = function(){
        var elementText;
        var text1 = element(by.xpath('//h1[contains(text(), "'+this.title+'")]')).getText();
        text1.then(elementText =>{
            expect(elementText).toEqual(this.title);
            console.log("Article succesfully created for: "+ elementText);
        })
    
    };
    
};
module.exports = new createNewArticle();
