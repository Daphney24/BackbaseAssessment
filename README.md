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
│   |───conf                            # This folder contains configuartion file
|   |    |───conf.js
|   |
│   |───pages                           # This folder contains all the different web pages web elemnts and methods
│   |    |───addNewComment.js
│   |    |───createNewArtcile.js
|   |    |───deleteArticle.js
|   |    |───markArticleAsFavourite.js
|   |    |───signinpage.js
|   |    |───updateNewArtcile.js
|   | 
|   |───tests                           # This folder contains the Test Methods 
|   |    |───spec.js  
|   |
|───Reports                             # This folder contains the HTML and the allure-reports xml files as well ad the manual test cases and the bug report for issues found 
| 
├───target                              # Generated after running the test.This folder contains test screenshots of the executed tests
|     
└───screenshots                         # Generated after running the test. This folder contains screenshots for the failed tests only

```

  
#### Setup
Run the following commands from the project root:
```
npm install
```

#### Multiple configurations
The project contains 2 different configuration files based on the dev and test environment. The executable configuration file is ```npm run test:e2e``` which will execute depending on the chosen environment. If environment variable ENV has not been set, then the default configuration test will be executed. The ```protractor.conf.js``` contains basic configuration merged with environment specific configuration files, which are located in ```config/environment/``` directory, if chosen, will extend the basic configuration.

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

In order to run tests in multiple browsers in parallel, the ```multicapabilities``` module can be used, located in ```config/capabilities```.
The ```buildForMultiCapabilities``` property is used to built dynamically using environment variables.

Example:
```
BROWSER='chrome' npm run e2e
```

### Test results reporting and screenshots

The Allure reports will be generated in the ```resports/allure-results``` folder, in HTML format.Sc reenshotrs are stored seperatedly under the ```resports/allure-results``` folder.

The generate and launch visual allure reports
```
npm run posttest
```

### Manual test cases and Bug Report
A Excel file with manual test cases can be found under the below mentioned directory. This also includes a Bug Report for the issues found in the application.
```
BackbaseAssessment/ManualTests/BackbaseUITests.xlsx
```
```
BackbaseAssessment/ManualTests/BugReport.xlsx
```
