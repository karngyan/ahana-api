# AhanaApi.McqProblemsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mcqProblemControllerGetMcqProblemsByContest**](McqProblemsApi.md#mcqProblemControllerGetMcqProblemsByContest) | **GET** /mcq-problems/ | 


<a name="mcqProblemControllerGetMcqProblemsByContest"></a>
# **mcqProblemControllerGetMcqProblemsByContest**
> [ModelsMcqProblem] mcqProblemControllerGetMcqProblemsByContest(cid)



Get All McqProblems By Contest Id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.McqProblemsApi();

var cid = 789; // Number | contest id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mcqProblemControllerGetMcqProblemsByContest(cid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cid** | **Number**| contest id | 

### Return type

[**[ModelsMcqProblem]**](ModelsMcqProblem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

