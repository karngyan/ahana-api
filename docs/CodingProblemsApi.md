# AhanaApi.CodingProblemsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codingProblemControllerGetCodingProblemById**](CodingProblemsApi.md#codingProblemControllerGetCodingProblemById) | **GET** /coding-problems/{problemId} | 
[**codingProblemControllerGetCodingProblemsByContest**](CodingProblemsApi.md#codingProblemControllerGetCodingProblemsByContest) | **GET** /coding-problems/ | 
[**codingProblemControllerGetInputFileAndInitSubmissionDeadline**](CodingProblemsApi.md#codingProblemControllerGetInputFileAndInitSubmissionDeadline) | **GET** /coding-problems/{pid}/input | 


<a name="codingProblemControllerGetCodingProblemById"></a>
# **codingProblemControllerGetCodingProblemById**
> ModelsCodingProblem codingProblemControllerGetCodingProblemById(problemId)



Get CodingProblem by Id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.CodingProblemsApi();

var problemId = 789; // Number | the problemId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.codingProblemControllerGetCodingProblemById(problemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **problemId** | **Number**| the problemId you want to get | 

### Return type

[**ModelsCodingProblem**](ModelsCodingProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="codingProblemControllerGetCodingProblemsByContest"></a>
# **codingProblemControllerGetCodingProblemsByContest**
> [ModelsCodingProblem] codingProblemControllerGetCodingProblemsByContest(cid)



Get All CodingProblems By Contest Id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.CodingProblemsApi();

var cid = 789; // Number | contest id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.codingProblemControllerGetCodingProblemsByContest(cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **Number**| contest id | 

### Return type

[**[ModelsCodingProblem]**](ModelsCodingProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="codingProblemControllerGetInputFileAndInitSubmissionDeadline"></a>
# **codingProblemControllerGetInputFileAndInitSubmissionDeadline**
> codingProblemControllerGetInputFileAndInitSubmissionDeadline(xUserApiKey, pid)



Get Input File and create a submission deadline for the user

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.CodingProblemsApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var pid = 789; // Number | the problem id you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.codingProblemControllerGetInputFileAndInitSubmissionDeadline(xUserApiKey, pid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **pid** | **Number**| the problem id you want to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

