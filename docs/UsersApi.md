# AhanaApi.UsersApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCreateUser**](UsersApi.md#userControllerCreateUser) | **POST** /users/ | 
[**userControllerGetUser**](UsersApi.md#userControllerGetUser) | **GET** /users/{firebaseUid} | 


<a name="userControllerCreateUser"></a>
# **userControllerCreateUser**
> ModelsUser userControllerCreateUser(body, xToken)



Create New User

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.UsersApi();

var body = new AhanaApi.ModelsEUser(); // ModelsEUser | User details

var xToken = "xToken_example"; // String | Firebase token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerCreateUser(body, xToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModelsEUser**](ModelsEUser.md)| User details | 
 **xToken** | **String**| Firebase token | 

### Return type

[**ModelsUser**](ModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userControllerGetUser"></a>
# **userControllerGetUser**
> ModelsUser userControllerGetUser(xToken, firebaseUid)



Get Existing User

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.UsersApi();

var xToken = "xToken_example"; // String | Firebase token

var firebaseUid = "firebaseUid_example"; // String | the firebase uid of the user you need to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userControllerGetUser(xToken, firebaseUid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xToken** | **String**| Firebase token | 
 **firebaseUid** | **String**| the firebase uid of the user you need to fetch | 

### Return type

[**ModelsUser**](ModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

