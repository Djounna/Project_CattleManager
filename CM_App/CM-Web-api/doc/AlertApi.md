# CM_api.api.AlertApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAlertDelete**](AlertApi.md#apialertdelete) | **DELETE** /api/Alert | 
[**apiAlertGet**](AlertApi.md#apialertget) | **GET** /api/Alert | 
[**apiAlertIdGet**](AlertApi.md#apialertidget) | **GET** /api/Alert/{id} | 
[**apiAlertPost**](AlertApi.md#apialertpost) | **POST** /api/Alert | 
[**apiAlertPut**](AlertApi.md#apialertput) | **PUT** /api/Alert | 


# **apiAlertDelete**
> apiAlertDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getAlertApi();
final int id = 56; // int | 

try {
    api.apiAlertDelete(id);
} catch on DioException (e) {
    print('Exception when calling AlertApi->apiAlertDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAlertGet**
> BuiltList<AlertDto> apiAlertGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getAlertApi();

try {
    final response = api.apiAlertGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling AlertApi->apiAlertGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;AlertDto&gt;**](AlertDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAlertIdGet**
> AlertDto apiAlertIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getAlertApi();
final int id = 56; // int | 

try {
    final response = api.apiAlertIdGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling AlertApi->apiAlertIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AlertDto**](AlertDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAlertPost**
> AlertDto apiAlertPost(alertDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getAlertApi();
final AlertDto alertDto = ; // AlertDto | 

try {
    final response = api.apiAlertPost(alertDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling AlertApi->apiAlertPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertDto** | [**AlertDto**](AlertDto.md)|  | [optional] 

### Return type

[**AlertDto**](AlertDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiAlertPut**
> AlertDto apiAlertPut(alertDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getAlertApi();
final AlertDto alertDto = ; // AlertDto | 

try {
    final response = api.apiAlertPut(alertDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling AlertApi->apiAlertPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertDto** | [**AlertDto**](AlertDto.md)|  | [optional] 

### Return type

[**AlertDto**](AlertDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

