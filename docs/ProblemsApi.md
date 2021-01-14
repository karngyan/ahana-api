# AhanaApi.ProblemsApi

All URIs are relative to *https://api.ahana.bitmesra.dev/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**problemControllerGetInputFileAndInitSubmissionDeadline**](ProblemsApi.md#problemControllerGetInputFileAndInitSubmissionDeadline) | **GET** /problems/{pid}/input | 


<a name="problemControllerGetInputFileAndInitSubmissionDeadline"></a>
# **problemControllerGetInputFileAndInitSubmissionDeadline**
> problemControllerGetInputFileAndInitSubmissionDeadline(xUserApiKey, pid)



Get Input File and create a submission deadline for the user

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.ProblemsApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var pid = 789; // Integer | the problem id you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.problemControllerGetInputFileAndInitSubmissionDeadline(xUserApiKey, pid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **pid** | **Integer**| the problem id you want to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

