# BackbaseAssessment
Summary project
-------------------------------
This Test Automation framework is designed using Protractor, Jasmine ,JavaScript and POM Architectuer .

#### Prerequisites

* To run the regression tests Node.js is required https://nodejs.org/en/. 

* The web page under test is: https://qa-task.backbasecloud.com/.
This application needs to be available in order for the tests to run.

**Test Scenarios to be tested**

|Test Case Number|Test case name|Description|Expected result|
|:----------------:|:-------------:|:-----------:|:-------------:|
|TC_UI_001|Create New Article|Given a candidate is logged in,he creates a new artcile and it is required to validate that this articles appear in the tab MyPosts|A new artcile is created successfully and it appears under the his MyPosts tab|
|TC_UI_002|Update Artcile|Given a candidate is logged in, he can select his article, click on Edit Artcile button and change values of the fields and publish it|It is expected that after an update artcile is successful the newly updated value should be reflected correctly|
|TC_UI_003|Marking artcile as favourite|Given a candidate is logged in, Validate when an artcile is marked a fourite, its count is increased to 1 from 0|The artcile is marked as favourite and the count goes to 1|
|TC_UI_004|Adding comment to article|Given a candidate is logged in, An artcile can be edited and a comment can be added and posted respectively|Comment gets added for an artcile and it gets posted on the respective artcile page|
|TC_UI_005|Deleting an article|Given a candidate is logged in, Validate that an article can be deleted by opening artcile and clicking on Delete Article button|Article is deleted successfully|


## Framework Structure
```
BackbaseAssessment
|
├───e2e 
|   |               
│   |───conf                            
|   |    |───capabilities
|   |    |    |───multiCapabilities.js  
│   |    |───environment.js
|   |    |    |───devenv.conf.js
|   |    |    |───testenv.conf.js
|   |    |───base.conf.js
|   |    |───protractor.conf.js
|   |
│   |───pages                           
│   |    |───addNewComment.js
│   |    |───createNewArtcile.js
|   |    |───deleteArticle.js
|   |    |───markArticleAsFavourite.js
|   |    |───signinpage.js
|   |    |───updateNewArtcile.js
|   | 
|   |───testdata                           
|   |    |───dataProvider.js  
|   |───tests                           
│   |    |───addCommentOnArticle.js
│   |    |───clickArticleAsFavourite.js
|   |    |───deleteArticle.js
|   |    |───createArticle.js
|   |    |───updateArticle.js
|   |    |───updateNewArtcile.js  
|   |
|───reports
|   |───UITestCases.xlsx
|   |───BugReport.xlsx 
|   |───TestEvaluationReport.pdf 
| 
├───target                                                  
|───screenshots 
├── package.json
├── README.md

```

  
#### Setup
Run the following commands from the project root:
```
npm install
```

To start the webdriver explicitly run the below command from project root:(OPTIONAL)
```
npm run start-webdriver
```

#### Multiple environment configurations
The project contains multiple configuration files based on the entered environment for execution. The executable configuration file is ```protractor.conf.js``` which will execute depending on value of the environment variable ENV. If environment variable has not been set, then the default configuration ```testenv.conf.js``` will be executed. The ```base.conf.js``` contains basic configuration merged with environment specific configuration files(either devenv.conf.js or testenv.conf.js) based on the entry provided in the commandline.

Example:

To run the e2e tests on Developement Environment:
```
ENV='dev' npm run e2e
```

To run the e2e tests on Testing Environment:
```
ENV='test' npm run e2e 
```

#### Capabilities
In order to run tests in different browsers , the ```multicapabilities``` module can be used, located in ```conf/capabilities```.
The ```buildForMultiCapabilities``` property is used to built dynamically using environment variables.

Example:
```
BROWSER='chrome' npm run e2e
```

### Test results reporting and screenshots
The Allure reports will be generated under the ```resports/allure-results``` folder, in HTML format.Thescreenshots are stored seperately under the ```screenshots``` folder.

To generate and launch visual allure reports:
```
npm run post-test
```

### Manual test cases and Bug Report
A Excel file with manual test cases can be found under the below mentioned directory. This also includes a Bug Report for the issues found in the application.
```
BackbaseAssessment/ManualTests/BackbaseUITests.xlsx
```
```
BackbaseAssessment/ManualTests/BugReport.xlsx
```

### Test Evaluation Report
The report is an overall evaluation test report for the application including an overview on the issues, risks, recommendation, etc. It explains why I decided to automate what I have automated, why I decided to test what I have tested, what test strategies I decided to use and why. It can be found under the below directory:
```
BackbaseAssessment/ManualTests/TestEvaluationReport.pdf
```
