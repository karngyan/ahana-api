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
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SeriesApi();
apiInstance.seriesControllerGetAllSeries((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelsSeries]**](ModelsSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="seriesControllerGetSeries"></a>
# **seriesControllerGetSeries**
> ModelsSeries seriesControllerGetSeries(sid)



Get Series by id

### Example
```javascript
import AhanaApi from 'ahana_api';

let apiInstance = new AhanaApi.SeriesApi();
let sid = 789; // Number | the sid you want to get

apiInstance.seriesControllerGetSeries(sid, (error, data, response) => {
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
 **sid** | **Number**| the sid you want to get | 

### Return type

[**ModelsSeries**](ModelsSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

