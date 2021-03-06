# AhanaApi.SubmissionsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submissionControllerGetAllUserSubmissionsByContest**](SubmissionsApi.md#submissionControllerGetAllUserSubmissionsByContest) | **GET** /submissions/ | 
[**submissionControllerGetSubmission**](SubmissionsApi.md#submissionControllerGetSubmission) | **GET** /submissions/{submissionId} | 
[**submissionControllerGetSubmissionDeadlineByProblem**](SubmissionsApi.md#submissionControllerGetSubmissionDeadlineByProblem) | **GET** /submissions/deadline | 
[**submissionControllerSubmitCodeSolution**](SubmissionsApi.md#submissionControllerSubmitCodeSolution) | **POST** /submissions/code | 


<a name="submissionControllerGetAllUserSubmissionsByContest"></a>
# **submissionControllerGetAllUserSubmissionsByContest**
> [ModelsSubmission] submissionControllerGetAllUserSubmissionsByContest(xUserApiKey, cid)



Get All User Submissions By Contest Id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsApi();

var xUserApiKey = "xUserApiKey_example"; // String | the User API Key

var cid = 789; // Number | contest id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submissionControllerGetAllUserSubmissionsByContest(xUserApiKey, cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| the User API Key | 
 **cid** | **Number**| contest id | 

### Return type

[**[ModelsSubmission]**](ModelsSubmission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submissionControllerGetSubmission"></a>
# **submissionControllerGetSubmission**
> ModelsSubmission submissionControllerGetSubmission(xUserApiKey, submissionId)



Get Submission by id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var submissionId = 789; // Number | the submission you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submissionControllerGetSubmission(xUserApiKey, submissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **submissionId** | **Number**| the submission you want to get | 

### Return type

[**ModelsSubmission**](ModelsSubmission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submissionControllerGetSubmissionDeadlineByProblem"></a>
# **submissionControllerGetSubmissionDeadlineByProblem**
> ModelsRSubmissionDeadline submissionControllerGetSubmissionDeadlineByProblem(xUserApiKey, pid)



GetSubmissionDeadline for given problem Id for given User

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var pid = 789; // Number | problem id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submissionControllerGetSubmissionDeadlineByProblem(xUserApiKey, pid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **pid** | **Number**| problem id | 

### Return type

[**ModelsRSubmissionDeadline**](ModelsRSubmissionDeadline.md)

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

