# CM_api.api.GestationApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGestationDelete**](GestationApi.md#apigestationdelete) | **DELETE** /api/Gestation | 
[**apiGestationGet**](GestationApi.md#apigestationget) | **GET** /api/Gestation | 
[**apiGestationIdGet**](GestationApi.md#apigestationidget) | **GET** /api/Gestation/{id} | 
[**apiGestationPost**](GestationApi.md#apigestationpost) | **POST** /api/Gestation | 
[**apiGestationPut**](GestationApi.md#apigestationput) | **PUT** /api/Gestation | 


# **apiGestationDelete**
> apiGestationDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGestationApi();
final int id = 56; // int | 

try {
    api.apiGestationDelete(id);
} catch on DioException (e) {
    print('Exception when calling GestationApi->apiGestationDelete: $e\n');
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

# **apiGestationGet**
> BuiltList<GestationDto> apiGestationGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGestationApi();

try {
    final response = api.apiGestationGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling GestationApi->apiGestationGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;GestationDto&gt;**](GestationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGestationIdGet**
> GestationDto apiGestationIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGestationApi();
final int id = 56; // int | 

try {
    final response = api.apiGestationIdGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GestationApi->apiGestationIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**GestationDto**](GestationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGestationPost**
> GestationDto apiGestationPost(gestationDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGestationApi();
final GestationDto gestationDto = ; // GestationDto | 

try {
    final response = api.apiGestationPost(gestationDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GestationApi->apiGestationPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gestationDto** | [**GestationDto**](GestationDto.md)|  | [optional] 

### Return type

[**GestationDto**](GestationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGestationPut**
> GestationDto apiGestationPut(gestationDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGestationApi();
final GestationDto gestationDto = ; // GestationDto | 

try {
    final response = api.apiGestationPut(gestationDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GestationApi->apiGestationPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gestationDto** | [**GestationDto**](GestationDto.md)|  | [optional] 

### Return type

[**GestationDto**](GestationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

