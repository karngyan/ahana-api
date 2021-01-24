# AhanaApi.SubmissionsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submissionControllerGetSubmission**](SubmissionsApi.md#submissionControllerGetSubmission) | **GET** /submissions/{submissionId} | 
[**submissionControllerSubmitCodeSolution**](SubmissionsApi.md#submissionControllerSubmitCodeSolution) | **POST** /submissions/code | 


<a name="submissionControllerGetSubmission"></a>
# **submissionControllerGetSubmission**
> ModelsSubmission submissionControllerGetSubmission(submissionId)



Get Submission by id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsApi();

var submissionId = 789; // Number | the submission you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submissionControllerGetSubmission(submissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | **Number**| the submission you want to get | 

### Return type

[**ModelsSubmission**](ModelsSubmission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submissionControllerSubmitCodeSolution"></a>
# **submissionControllerSubmitCodeSolution**
> ModelsSubmissionResponse submissionControllerSubmitCodeSolution(xUserApiKey, contestId, problemId, sfile, cfile)



Output Submission - Checks if output file matches output

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var contestId = 789; // Number | contest id

var problemId = 789; // Number | problem id

var sfile = "/path/to/file.txt"; // File | form data output file

var cfile = "/path/to/file.txt"; // File | form data source code file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submissionControllerSubmitCodeSolution(xUserApiKey, contestId, problemId, sfile, cfile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **contestId** | **Number**| contest id | 
 **problemId** | **Number**| problem id | 
 **sfile** | **File**| form data output file | 
 **cfile** | **File**| form data source code file | 

### Return type

[**ModelsSubmissionResponse**](ModelsSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

