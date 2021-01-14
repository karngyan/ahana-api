# AhanaApi.ContestsApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contestControllerGetContest**](ContestsApi.md#contestControllerGetContest) | **GET** /contests/{contestId} | 
[**contestControllerGetContestsBySeries**](ContestsApi.md#contestControllerGetContestsBySeries) | **GET** /contests/ | 
[**contestControllerRegisterForContest**](ContestsApi.md#contestControllerRegisterForContest) | **GET** /contests/{contestId}/register | 


<a name="contestControllerGetContest"></a>
# **contestControllerGetContest**
> ModelsContest contestControllerGetContest(contestId)



Get Contest by id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.ContestsApi();

var contestId = 789; // Integer | the ContestId you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contestControllerGetContest(contestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contestId** | **Integer**| the ContestId you want to get | 

### Return type

[**ModelsContest**](ModelsContest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contestControllerGetContestsBySeries"></a>
# **contestControllerGetContestsBySeries**
> [ModelsContest] contestControllerGetContestsBySeries(sid)



Get All Contests By Series Id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.ContestsApi();

var sid = 789; // Integer | series id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contestControllerGetContestsBySeries(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **Integer**| series id | 

### Return type

[**[ModelsContest]**](ModelsContest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contestControllerRegisterForContest"></a>
# **contestControllerRegisterForContest**
> contestControllerRegisterForContest(xUserApiKey, contestId)



Register for an upcoming contest

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.ContestsApi();

var xUserApiKey = "xUserApiKey_example"; // String | User API Key

var contestId = 789; // Integer | the contest id you want to register for


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contestControllerRegisterForContest(xUserApiKey, contestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xUserApiKey** | **String**| User API Key | 
 **contestId** | **Integer**| the contest id you want to register for | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

