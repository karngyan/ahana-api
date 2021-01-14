# AhanaApi.SeriesApi

All URIs are relative to *http://127.0.0.1:8081/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seriesControllerGetAllSeries**](SeriesApi.md#seriesControllerGetAllSeries) | **GET** /series/ | 
[**seriesControllerGetSeries**](SeriesApi.md#seriesControllerGetSeries) | **GET** /series/{sid} | 


<a name="seriesControllerGetAllSeries"></a>
# **seriesControllerGetAllSeries**
> [ModelsSeries] seriesControllerGetAllSeries()



Get All Series

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SeriesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seriesControllerGetAllSeries(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelsSeries]**](ModelsSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="seriesControllerGetSeries"></a>
# **seriesControllerGetSeries**
> ModelsSeries seriesControllerGetSeries(sid)



Get Series by id

### Example
```javascript
var AhanaApi = require('ahana_api');

var apiInstance = new AhanaApi.SeriesApi();

var sid = 789; // Integer | the sid you want to get


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.seriesControllerGetSeries(sid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sid** | **Integer**| the sid you want to get | 

### Return type

[**ModelsSeries**](ModelsSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

