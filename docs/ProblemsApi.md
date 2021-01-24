# AhanaApi.ProblemsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**problemControllerGetInputFileAndInitSubmissionDeadline**](ProblemsApi.md#problemControllerGetInputFileAndInitSubmissionDeadline) | **GET** /problems/{pid}/input | 

<a name="problemControllerGetInputFileAndInitSubmissionDeadline"></a>
# **problemControllerGetInputFileAndInitSubmissionDeadline**
> problemControllerGetInputFileAndInitSubmissionDeadline(xUserApiKey, pid)



Get Input File and create a submission deadline for the user

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.ProblemsApi();
let xUserApiKey = "xUserApiKey_example"; // String | User API Key
let pid = 789; // Number | the problem id you want to get

apiInstance.problemControllerGetInputFileAndInitSubmissionDeadline(xUserApiKey, pid, (error, data, response) => {
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
 **xUserApiKey** | **String**| User API Key | 
 **pid** | **Number**| the problem id you want to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

