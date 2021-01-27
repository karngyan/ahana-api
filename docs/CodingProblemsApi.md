# AhanaApi.CodingProblemsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codingProblemControllerDownloadInputFile**](CodingProblemsApi.md#codingProblemControllerDownloadInputFile) | **GET** /coding-problems/in/download | 
[**codingProblemControllerGetCodingProblemById**](CodingProblemsApi.md#codingProblemControllerGetCodingProblemById) | **GET** /coding-problems/{problemId} | 
[**codingProblemControllerGetCodingProblemsByContest**](CodingProblemsApi.md#codingProblemControllerGetCodingProblemsByContest) | **GET** /coding-problems/ | 
[**codingProblemControllerInitSubmissionDeadline**](CodingProblemsApi.md#codingProblemControllerInitSubmissionDeadline) | **POST** /coding-problems/{pid}/init | 

<a name="codingProblemControllerDownloadInputFile"></a>
# **codingProblemControllerDownloadInputFile**
> codingProblemControllerDownloadInputFile(key, pid)



Get Input File only if the submission deadline for the user is on or the contest ended

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.CodingProblemsApi();
let key = "key_example"; // String | key
let pid = 789; // Number | the problem id you want to get

apiInstance.codingProblemControllerDownloadInputFile(key, pid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **String**| key | 
 **pid** | **Number**| the problem id you want to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="codingProblemControllerGetCodingProblemById"></a>
# **codingProblemControllerGetCodingProblemById**
> ModelsCodingProblem codingProblemControllerGetCodingProblemById(problemId)



Get CodingProblem by Id

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.CodingProblemsApi();
let problemId = 789; // Number | the problemId you want to get

apiInstance.codingProblemControllerGetCodingProblemById(problemId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="codingProblemControllerGetCodingProblemsByContest"></a>
# **codingProblemControllerGetCodingProblemsByContest**
> [ModelsCodingProblem] codingProblemControllerGetCodingProblemsByContest(cid)



Get All CodingProblems By Contest Id

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.CodingProblemsApi();
let cid = 789; // Number | contest id

apiInstance.codingProblemControllerGetCodingProblemsByContest(cid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="codingProblemControllerInitSubmissionDeadline"></a>
# **codingProblemControllerInitSubmissionDeadline**
> ModelsRSubmissionDeadline codingProblemControllerInitSubmissionDeadline(xUserApiKey, pid)



Get Input File and create a submission deadline for the user

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.CodingProblemsApi();
let xUserApiKey = "xUserApiKey_example"; // String | User API Key
let pid = 789; // Number | the problem id you want to get

apiInstance.codingProblemControllerInitSubmissionDeadline(xUserApiKey, pid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **pid** | **Number**| the problem id you want to get | 

### Return type

[**ModelsRSubmissionDeadline**](ModelsRSubmissionDeadline.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

