const { browser, element } = require("protractor");

let updateNewArticle = function(){

    const title = '';
    const candidateName = '';
    let editArticleButtonWebElement = element(by.xpath('//a[contains(text(), "Edit Article")]'));
    let articleTitle = element(by.css('input[formcontrolname=title]'));
    let clickPublishArticleButton = element(by.xpath('//button[normalize-space()="Publish Article"]'));
       
    this.setCandidateName = function(candidateName){
        this.candidateName = candidateName;
    };

    this.setTitle = function(title){
        this.title = title;
    };

    this.clickCandidateProfile = function(){
        console.log(this.candidateName);
        browser.sleep(2000);
        //var clickCandidateProfileWebElement = element(by.xpath('//a[@class="nav-link active"][normalize-space()="'+this.candidateName+'"]'));
        var clickCandidateProfileWebElement = element(by.xpath('//nav[1]/div[1]/ul[1]/li[4]/a[1]'));
        browser.executeScript('arguments[0].click();', clickCandidateProfileWebElement);
    };

    this.validateNewlyCreatedArticlePresent = function(){
        var articleTitle;
        var text1 = element(by.xpath('//h1[contains(text(), "'+this.title+'")]')).getText();
        text1.then(articleTitle =>{
            expect(articleTitle).toEqual(this.title);
            console.log("Article is present with name: "+ articleTitle);
        })
    };

    this.openArticle = function(){
        var articlePresent = element(by.xpath('//h1[contains(text(), "'+this.title+'")]')).click();
        articlePresent.click();
    };

    this.clickEditArticleButton =  function(){
        editArticleButtonWebElement.click();
    };

    this.updateArticleTitle = function(){
        updatedTitle = this.title+" Updated";
        console.log(updatedTitle);
        articleTitle.clear();
        articleTitle.sendKeys(updatedTitle);
    };

    this.clickPublishArticleButton = function(){
         browser.executeScript('arguments[0].click();', clickPublishArticleButton);
    };

    this.validateSuccessfulUpdateArticle = function(){
        var updatedTitleText;
        var text1 = element(by.xpath('//h1[contains(text(), "'+updatedTitle+'")]')).getText();
        text1.then(updatedTitleText =>{
            expect(updatedTitleText).toEqual(updatedTitle);
            console.log("Article succesfully updated as: "+ updatedTitleText);
        })
    
    };
    
};
module.exports = new updateNewArticle();
