# CM_api.api.JobApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiJobDelete**](JobApi.md#apijobdelete) | **DELETE** /api/Job | 
[**apiJobDetailsGet**](JobApi.md#apijobdetailsget) | **GET** /api/Job/details | 
[**apiJobGet**](JobApi.md#apijobget) | **GET** /api/Job | 
[**apiJobIdGet**](JobApi.md#apijobidget) | **GET** /api/Job/{id} | 
[**apiJobPost**](JobApi.md#apijobpost) | **POST** /api/Job | 
[**apiJobPut**](JobApi.md#apijobput) | **PUT** /api/Job | 


# **apiJobDelete**
> apiJobDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getJobApi();
final int id = 56; // int | 

try {
    api.apiJobDelete(id);
} catch on DioException (e) {
    print('Exception when calling JobApi->apiJobDelete: $e\n');
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

# **apiJobDetailsGet**
> BuiltList<JobDetailsDto> apiJobDetailsGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getJobApi();

try {
    final response = api.apiJobDetailsGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling JobApi->apiJobDetailsGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;JobDetailsDto&gt;**](JobDetailsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiJobGet**
> BuiltList<JobDto> apiJobGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getJobApi();

try {
    final response = api.apiJobGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling JobApi->apiJobGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;JobDto&gt;**](JobDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiJobIdGet**
> JobDto apiJobIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getJobApi();
final int id = 56; // int | 

try {
    final response = api.apiJobIdGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling JobApi->apiJobIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**JobDto**](JobDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiJobPost**
> JobDto apiJobPost(jobDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getJobApi();
final JobDto jobDto = ; // JobDto | 

try {
    final response = api.apiJobPost(jobDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling JobApi->apiJobPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobDto** | [**JobDto**](JobDto.md)|  | [optional] 

### Return type

[**JobDto**](JobDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiJobPut**
> JobDto apiJobPut(jobDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getJobApi();
final JobDto jobDto = ; // JobDto | 

try {
    final response = api.apiJobPut(jobDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling JobApi->apiJobPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobDto** | [**JobDto**](JobDto.md)|  | [optional] 

### Return type

[**JobDto**](JobDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

