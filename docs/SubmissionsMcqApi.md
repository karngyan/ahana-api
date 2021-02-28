# AhanaApi.SubmissionsMcqApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mcqSubmissionControllerGetAllUserMcqSubmissionByContest**](SubmissionsMcqApi.md#mcqSubmissionControllerGetAllUserMcqSubmissionByContest) | **GET** /submissions-mcq/ | 
[**mcqSubmissionControllerSubmitMcqProblems**](SubmissionsMcqApi.md#mcqSubmissionControllerSubmitMcqProblems) | **POST** /submissions-mcq/ | 


<a name="mcqSubmissionControllerGetAllUserMcqSubmissionByContest"></a>
# **mcqSubmissionControllerGetAllUserMcqSubmissionByContest**
> ModelsASubmissionMcq mcqSubmissionControllerGetAllUserMcqSubmissionByContest(xUserApiKey, cid)



Get All User McqSubmissions By Contest Id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsMcqApi();

var xUserApiKey = "xUserApiKey_example"; // String | the User API Key

var cid = 789; // Number | contest id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mcqSubmissionControllerGetAllUserMcqSubmissionByContest(xUserApiKey, cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| the User API Key | 
 **cid** | **Number**| contest id | 

### Return type

[**ModelsASubmissionMcq**](ModelsASubmissionMcq.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mcqSubmissionControllerSubmitMcqProblems"></a>
# **mcqSubmissionControllerSubmitMcqProblems**
> ModelsASubmissionMcq mcqSubmissionControllerSubmitMcqProblems(xUserApiKey, contestId, opts)



Mcq Submission

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SubmissionsMcqApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var contestId = 789; // Number | contest id

var opts = { 
  'body': new AhanaApi.ModelsASubmissionMcq() // ModelsASubmissionMcq | mcq submission request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mcqSubmissionControllerSubmitMcqProblems(xUserApiKey, contestId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **contestId** | **Number**| contest id | 
 **body** | [**ModelsASubmissionMcq**](ModelsASubmissionMcq.md)| mcq submission request | [optional] 

### Return type

[**ModelsASubmissionMcq**](ModelsASubmissionMcq.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

