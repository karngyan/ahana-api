# AhanaApi.UsersApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCreateUser**](UsersApi.md#userControllerCreateUser) | **POST** /users/ | 
[**userControllerGetUser**](UsersApi.md#userControllerGetUser) | **GET** /users/{firebaseUid} | 

<a name="userControllerCreateUser"></a>
# **userControllerCreateUser**
> ModelsUser userControllerCreateUser(bodyxToken)



Create New User

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.UsersApi();
let body = new AhanaApi.ModelsEUser(); // ModelsEUser | User details
let xToken = "xToken_example"; // String | Firebase token

apiInstance.userControllerCreateUser(bodyxToken, (error, data, response) => {
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
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.UsersApi();
let xToken = "xToken_example"; // String | Firebase token
let firebaseUid = "firebaseUid_example"; // String | the firebase uid of the user you need to fetch

apiInstance.userControllerGetUser(xToken, firebaseUid, (error, data, response) => {
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
 **xToken** | **String**| Firebase token | 
 **firebaseUid** | **String**| the firebase uid of the user you need to fetch | 

### Return type

[**ModelsUser**](ModelsUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

