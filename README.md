# ahana_api

AhanaApi - JavaScript client for ahana_api
Ahana Web Server API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build date: 2021-01-14T21:19:07.850+05:30
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ahana_api --save
```

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
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var AhanaApi = require('ahana_api');

var api = new AhanaApi.ContestsApi()

var contestId = 789; // {Integer} the ContestId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.contestControllerGetContest(contestId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.ahana.bitmesra.dev/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AhanaApi.ContestsApi* | [**contestControllerGetContest**](docs/ContestsApi.md#contestControllerGetContest) | **GET** /contests/{contestId} | 
*AhanaApi.ContestsApi* | [**contestControllerGetContestsBySeries**](docs/ContestsApi.md#contestControllerGetContestsBySeries) | **GET** /contests/ | 
*AhanaApi.ProblemsApi* | [**problemControllerGetInputFileAndInitSubmissionDeadline**](docs/ProblemsApi.md#problemControllerGetInputFileAndInitSubmissionDeadline) | **GET** /problems/{pid}/input | 
*AhanaApi.SeriesApi* | [**seriesControllerGetAllSeries**](docs/SeriesApi.md#seriesControllerGetAllSeries) | **GET** /series/ | 
*AhanaApi.SeriesApi* | [**seriesControllerGetSeries**](docs/SeriesApi.md#seriesControllerGetSeries) | **GET** /series/{sid} | 
*AhanaApi.SubmissionsApi* | [**submissionControllerGetSubmission**](docs/SubmissionsApi.md#submissionControllerGetSubmission) | **GET** /submissions/{submissionId} | 
*AhanaApi.SubmissionsApi* | [**submissionControllerSubmitCodeSolution**](docs/SubmissionsApi.md#submissionControllerSubmitCodeSolution) | **POST** /submissions/code | 
*AhanaApi.UsersApi* | [**userControllerCreateUser**](docs/UsersApi.md#userControllerCreateUser) | **POST** /users/ | 
*AhanaApi.UsersApi* | [**userControllerGetUser**](docs/UsersApi.md#userControllerGetUser) | **GET** /users/{firebaseUid} | 


## Documentation for Models

 - [AhanaApi.ModelsContest](docs/ModelsContest.md)
 - [AhanaApi.ModelsEUser](docs/ModelsEUser.md)
 - [AhanaApi.ModelsSeries](docs/ModelsSeries.md)
 - [AhanaApi.ModelsSignUpMode](docs/ModelsSignUpMode.md)
 - [AhanaApi.ModelsSubmission](docs/ModelsSubmission.md)
 - [AhanaApi.ModelsSubmissionResponse](docs/ModelsSubmissionResponse.md)
 - [AhanaApi.ModelsSubmissionType](docs/ModelsSubmissionType.md)
 - [AhanaApi.ModelsUser](docs/ModelsUser.md)
 - [AhanaApi.ModelsUserType](docs/ModelsUserType.md)
 - [AhanaApi.ModelsVerdictType](docs/ModelsVerdictType.md)


## Documentation for Authorization

 All endpoints do not require authorization.
