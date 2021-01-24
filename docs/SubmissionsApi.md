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
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SubmissionsApi();
let submissionId = 789; // Number | the submission you want to get

apiInstance.submissionControllerGetSubmission(submissionId, (error, data, response) => {
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
 **submissionId** | **Number**| the submission you want to get | 

### Return type

[**ModelsSubmission**](ModelsSubmission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submissionControllerSubmitCodeSolution"></a>
# **submissionControllerSubmitCodeSolution**
> ModelsSubmissionResponse submissionControllerSubmitCodeSolution(sfilecfilexUserApiKeycontestIdproblemId)



Output Submission - Checks if output file matches output

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SubmissionsApi();
let sfile = "sfile_example"; // File | 
let cfile = "cfile_example"; // File | 
let xUserApiKey = "xUserApiKey_example"; // String | User API Key
let contestId = 789; // Number | contest id
let problemId = 789; // Number | problem id

apiInstance.submissionControllerSubmitCodeSolution(sfilecfilexUserApiKeycontestIdproblemId, (error, data, response) => {
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
 **sfile** | **File**|  | 
 **cfile** | **File**|  | 
 **xUserApiKey** | **String**| User API Key | 
 **contestId** | **Number**| contest id | 
 **problemId** | **Number**| problem id | 

### Return type

[**ModelsSubmissionResponse**](ModelsSubmissionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

