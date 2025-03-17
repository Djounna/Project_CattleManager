# CM_api.api.PenApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiPenAssignPost**](PenApi.md#apipenassignpost) | **POST** /api/Pen/assign | 
[**apiPenDelete**](PenApi.md#apipendelete) | **DELETE** /api/Pen | 
[**apiPenGet**](PenApi.md#apipenget) | **GET** /api/Pen | 
[**apiPenIdGet**](PenApi.md#apipenidget) | **GET** /api/Pen/{id} | 
[**apiPenPost**](PenApi.md#apipenpost) | **POST** /api/Pen | 
[**apiPenPut**](PenApi.md#apipenput) | **PUT** /api/Pen | 


# **apiPenAssignPost**
> ProblemDetails apiPenAssignPost(assignPenDetailsDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getPenApi();
final AssignPenDetailsDto assignPenDetailsDto = ; // AssignPenDetailsDto | 

try {
    final response = api.apiPenAssignPost(assignPenDetailsDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PenApi->apiPenAssignPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignPenDetailsDto** | [**AssignPenDetailsDto**](AssignPenDetailsDto.md)|  | [optional] 

### Return type

[**ProblemDetails**](ProblemDetails.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPenDelete**
> apiPenDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getPenApi();
final int id = 56; // int | 

try {
    api.apiPenDelete(id);
} catch on DioException (e) {
    print('Exception when calling PenApi->apiPenDelete: $e\n');
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

# **apiPenGet**
> BuiltList<PenDto> apiPenGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getPenApi();

try {
    final response = api.apiPenGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling PenApi->apiPenGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;PenDto&gt;**](PenDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPenIdGet**
> PenDto apiPenIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getPenApi();
final int id = 56; // int | 

try {
    final response = api.apiPenIdGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PenApi->apiPenIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**PenDto**](PenDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPenPost**
> PenDto apiPenPost(penDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getPenApi();
final PenDto penDto = ; // PenDto | 

try {
    final response = api.apiPenPost(penDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PenApi->apiPenPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **penDto** | [**PenDto**](PenDto.md)|  | [optional] 

### Return type

[**PenDto**](PenDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiPenPut**
> PenDto apiPenPut(penDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getPenApi();
final PenDto penDto = ; // PenDto | 

try {
    final response = api.apiPenPut(penDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PenApi->apiPenPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **penDto** | [**PenDto**](PenDto.md)|  | [optional] 

### Return type

[**PenDto**](PenDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

