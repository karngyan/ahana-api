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
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SubmissionsApi();
let xUserApiKey = "xUserApiKey_example"; // String | the User API Key
let cid = 789; // Number | contest id

apiInstance.submissionControllerGetAllUserSubmissionsByContest(xUserApiKey, cid, (error, data, response) => {
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
 **xUserApiKey** | **String**| the User API Key | 
 **cid** | **Number**| contest id | 

### Return type

[**[ModelsSubmission]**](ModelsSubmission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submissionControllerGetSubmission"></a>
# **submissionControllerGetSubmission**
> ModelsSubmission submissionControllerGetSubmission(xUserApiKey, submissionId)



Get Submission by id

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SubmissionsApi();
let xUserApiKey = "xUserApiKey_example"; // String | User API Key
let submissionId = 789; // Number | the submission you want to get

apiInstance.submissionControllerGetSubmission(xUserApiKey, submissionId, (error, data, response) => {
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
 **submissionId** | **Number**| the submission you want to get | 

### Return type

[**ModelsSubmission**](ModelsSubmission.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submissionControllerGetSubmissionDeadlineByProblem"></a>
# **submissionControllerGetSubmissionDeadlineByProblem**
> ModelsRSubmissionDeadline submissionControllerGetSubmissionDeadlineByProblem(xUserApiKey, pid)



GetSubmissionDeadline for given problem Id for given User

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SubmissionsApi();
let xUserApiKey = "xUserApiKey_example"; // String | User API Key
let pid = 789; // Number | problem id

apiInstance.submissionControllerGetSubmissionDeadlineByProblem(xUserApiKey, pid, (error, data, response) => {
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
 **pid** | **Number**| problem id | 

### Return type

[**ModelsRSubmissionDeadline**](ModelsRSubmissionDeadline.md)

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

