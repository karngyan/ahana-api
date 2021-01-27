# ahana_api

AhanaApi - JavaScript client for ahana_api
Ahana Web Server API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ahana_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your ahana_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('ahana_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AhanaApi = require('ahana_api');

var api = new AhanaApi.CodingProblemsApi()

var key = "key_example"; // {String} key

var pid = 789; // {Number} the problem id you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.codingProblemControllerDownloadInputFile(key, pid, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AhanaApi.CodingProblemsApi* | [**codingProblemControllerDownloadInputFile**](docs/CodingProblemsApi.md#codingProblemControllerDownloadInputFile) | **GET** /coding-problems/in/download | 
*AhanaApi.CodingProblemsApi* | [**codingProblemControllerGetCodingProblemById**](docs/CodingProblemsApi.md#codingProblemControllerGetCodingProblemById) | **GET** /coding-problems/{problemId} | 
*AhanaApi.CodingProblemsApi* | [**codingProblemControllerGetCodingProblemsByContest**](docs/CodingProblemsApi.md#codingProblemControllerGetCodingProblemsByContest) | **GET** /coding-problems/ | 
*AhanaApi.CodingProblemsApi* | [**codingProblemControllerInitSubmissionDeadline**](docs/CodingProblemsApi.md#codingProblemControllerInitSubmissionDeadline) | **POST** /coding-problems/{pid}/init | 
*AhanaApi.ContestsApi* | [**contestControllerGetContest**](docs/ContestsApi.md#contestControllerGetContest) | **GET** /contests/{contestId} | 
*AhanaApi.ContestsApi* | [**contestControllerGetContestsBySeries**](docs/ContestsApi.md#contestControllerGetContestsBySeries) | **GET** /contests/ | 
*AhanaApi.ContestsApi* | [**contestControllerRegisterForContest**](docs/ContestsApi.md#contestControllerRegisterForContest) | **POST** /contests/{contestId}/register | 
*AhanaApi.SeriesApi* | [**seriesControllerGetAllSeries**](docs/SeriesApi.md#seriesControllerGetAllSeries) | **GET** /series/ | 
*AhanaApi.SeriesApi* | [**seriesControllerGetSeries**](docs/SeriesApi.md#seriesControllerGetSeries) | **GET** /series/{sid} | 
*AhanaApi.SubmissionsApi* | [**submissionControllerGetAllUserSubmissionsByContest**](docs/SubmissionsApi.md#submissionControllerGetAllUserSubmissionsByContest) | **GET** /submissions/ | 
*AhanaApi.SubmissionsApi* | [**submissionControllerGetSubmission**](docs/SubmissionsApi.md#submissionControllerGetSubmission) | **GET** /submissions/{submissionId} | 
*AhanaApi.SubmissionsApi* | [**submissionControllerGetSubmissionDeadlineByProblem**](docs/SubmissionsApi.md#submissionControllerGetSubmissionDeadlineByProblem) | **GET** /submissions/deadline | 
*AhanaApi.SubmissionsApi* | [**submissionControllerSubmitCodeSolution**](docs/SubmissionsApi.md#submissionControllerSubmitCodeSolution) | **POST** /submissions/code | 
*AhanaApi.UsersApi* | [**userControllerCreateUser**](docs/UsersApi.md#userControllerCreateUser) | **POST** /users/ | 
*AhanaApi.UsersApi* | [**userControllerGetUser**](docs/UsersApi.md#userControllerGetUser) | **GET** /users/{firebaseUid} | 


## Documentation for Models

 - [AhanaApi.ModelsCodingProblem](docs/ModelsCodingProblem.md)
 - [AhanaApi.ModelsContest](docs/ModelsContest.md)
 - [AhanaApi.ModelsContestResponse](docs/ModelsContestResponse.md)
 - [AhanaApi.ModelsEUser](docs/ModelsEUser.md)
 - [AhanaApi.ModelsRSubmissionDeadline](docs/ModelsRSubmissionDeadline.md)
 - [AhanaApi.ModelsSeries](docs/ModelsSeries.md)
 - [AhanaApi.ModelsSignUpMode](docs/ModelsSignUpMode.md)
 - [AhanaApi.ModelsSubmission](docs/ModelsSubmission.md)
 - [AhanaApi.ModelsSubmissionDeadline](docs/ModelsSubmissionDeadline.md)
 - [AhanaApi.ModelsSubmissionResponse](docs/ModelsSubmissionResponse.md)
 - [AhanaApi.ModelsSubmissionType](docs/ModelsSubmissionType.md)
 - [AhanaApi.ModelsUser](docs/ModelsUser.md)
 - [AhanaApi.ModelsUserType](docs/ModelsUserType.md)
 - [AhanaApi.ModelsVerdictType](docs/ModelsVerdictType.md)


## Documentation for Authorization

 All endpoints do not require authorization.

