const { browser, element } = require("protractor");

let deleteArticle = function(){

    const title = '';
    const candidateName = '';
    let deleteArticleButtonWebElement = element(by.xpath('//button[contains(text(), "Delete Article")]'));
    let articleTitle = element(by.css('input[formcontrolname=title]'));
       
    this.setCandidateName = function(candidateName){
        this.candidateName = candidateName;
    };

    this.setTitle = function(title){
        this.title = title;
    };

    this.clickCandidateProfile = function(){
        console.log(this.candidateName);
        browser.sleep(2000);
        const profilehref = `/profile/${this.candidateName}`;
        console.log("Href is :"+profilehref);
        const clickCandidateProfileWebElement = element(by.css('[href="'+profilehref+'"]'));
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
        const articlePresent = element(by.xpath('//h1[contains(text(), "'+this.title+'")]')).click();
        articlePresent.click();
    };

    this.clickDeleteArticleButton =  function(){
        deleteArticleButtonWebElement.click();
        console.log("Article Deleted Successfully");
    };
    
};
module.exports = new deleteArticle();
