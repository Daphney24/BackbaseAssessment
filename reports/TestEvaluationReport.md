### Test Evaluation Report
-------------------------------
I choose to automate the functionalities for a logged in candidate. The goal here is to have the candidate perform the end-to-end actions related to his own artciles right from creation to publishing to deletions and the miscellaneous action in between.
This is to verify the candidate has an ease to use the application as and when needed for creation and reading of articles. 

#### Chosen automated test
-------------------------------
* Tool Stack: Protractor, JavaScript, Jasmine, BDD Framework, POM Architecture
* Why did I use this stack here: 
    * Protractor is specially designed for angular applications, and as we are testing an angular applications here, it was better to opt for a protractor.Also supports cross-browser testing which we tried to achieve here.
    * Jasmine is a behavior-driven development framework for testing JavaScript code. It does not require a DOM. And it has a clean, easy syntax so that you can easily write tests.
* Why did I automated the selected 5 tests: These are the comman actions expected from a logged in candidate.To verify these basic actions work as expected without any glitches, I chose the below tests.

### Test Stratergy:
-------------------------------
The Test Plan below indicates the items to be tested, the features to be tested, the types of testing performed.

#### Scope And Overview
    * In Scope:
    All  the below specified tests are in scope and are tested here
        
|Test Case Number|Test case name|Description|Expected result|
|:----------------:|:-------------:|:-----------:|:-------------:|
|TC_UI_001|Create New Article|Given a candidate is logged in,he creates a new artcile and it is required to validate that this articles appear in the tab MyPosts|A new artcile is created successfully and it appears under the his MyPosts tab|
|TC_UI_002|Update Artcile|Given a candidate is logged in, he can select his article, click on Edit Artcile button and change values of the fields and publish it|It is expected that after an update artcile is successful the newly updated value should be reflected correctly|
|TC_UI_003|Marking artcile as favourite|Given a candidate is logged in, Validate when an artcile is marked a fourite, its count is increased to 1 from 0|The artcile is marked as favourite and the count goes to 1|
|TC_UI_004|Adding comment to article|Given a candidate is logged in, An artcile can be edited and a comment can be added and posted respectively|Comment gets added for an artcile and it gets posted on the respective artcile page|
|TC_UI_005|Deleting an article|Given a candidate is logged in, Validate that an article can be deleted by opening artcile and clicking on Delete Article button|Article is deleted successfully|

   * Out of scope:
   The features for the actions performed when the user is a visiting guest. 
   
#### Test Approach

    * The test objectives is to verify the Functionality of https://qa-task.backbasecloud.com/, with focus on testing to guarantee all these below specified   operation can work normally in real environment.
      * Candidate creates an article
      * Candidate updates an artcile
      * Candidate marks his own artcile as Favourite
      * Candidate adds comments on his own artcile
      * Candidate deletes his artcile
   * End-to-End testing approach is followed here to evaluate the system’s compliance with its specified requirements

#### Test Environment

      It needs minimum hardware requirements that will be used to run and test the Applicatio.In addition there are 2 different environments setup for maximum coverage of tests:
         * Dev Environment
         * Test Environment

#### Testing Tools and Deliverables

      Client Specific Tools used for automating the above specified flows are:
      For Automation: 
         * Protractor
         * Jasmine
         * Javascript
      For manual tests and defects documentation:
         * Excel

#### Test deliverables:
    * Before testing phase:
        Test cases documents

    * During the testing
        Test Data

    * After the testing cycles is over
        Test Results/reports
        Defect Report
        Installation/ Test procedures guidelines

#### Release Control
      Granular commits done in git

#### Risk Analysis

   Each risk was classified on the basis of following two parameters:

   * The probability of occurrence
   * The impact on the project

Below table can be used as a refernce to categorize the risk  as High, Medium, and Low or values 3,2, 1

|Level|Probability|
|:----------------:|:-------------:|
|High (3)|Has very high probability to occur, may impact to the whole project|
|Medium (2)|50% chance to occur|
|Low (1)|Low probability of occurrence|
   
|Level|Impact|
|:----------------:|:-------------:|
|High (3)|Cannot continue with project activity if it is not solved immediately|
|Medium (2)|Cannot continue the project activity if it is not solved|
|Low (1)|Low probability of occurrence|


