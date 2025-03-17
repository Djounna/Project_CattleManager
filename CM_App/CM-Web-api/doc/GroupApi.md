# CM_api.api.GroupApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiGroupAssignPost**](GroupApi.md#apigroupassignpost) | **POST** /api/Group/assign | 
[**apiGroupDelete**](GroupApi.md#apigroupdelete) | **DELETE** /api/Group | 
[**apiGroupGet**](GroupApi.md#apigroupget) | **GET** /api/Group | 
[**apiGroupIdGet**](GroupApi.md#apigroupidget) | **GET** /api/Group/{id} | 
[**apiGroupPost**](GroupApi.md#apigrouppost) | **POST** /api/Group | 
[**apiGroupPut**](GroupApi.md#apigroupput) | **PUT** /api/Group | 


# **apiGroupAssignPost**
> ProblemDetails apiGroupAssignPost(assignGroupDetailsDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGroupApi();
final AssignGroupDetailsDto assignGroupDetailsDto = ; // AssignGroupDetailsDto | 

try {
    final response = api.apiGroupAssignPost(assignGroupDetailsDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GroupApi->apiGroupAssignPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignGroupDetailsDto** | [**AssignGroupDetailsDto**](AssignGroupDetailsDto.md)|  | [optional] 

### Return type

[**ProblemDetails**](ProblemDetails.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupDelete**
> apiGroupDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGroupApi();
final int id = 56; // int | 

try {
    api.apiGroupDelete(id);
} catch on DioException (e) {
    print('Exception when calling GroupApi->apiGroupDelete: $e\n');
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

# **apiGroupGet**
> BuiltList<GroupDto> apiGroupGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGroupApi();

try {
    final response = api.apiGroupGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling GroupApi->apiGroupGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;GroupDto&gt;**](GroupDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupIdGet**
> GroupDto apiGroupIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGroupApi();
final int id = 56; // int | 

try {
    final response = api.apiGroupIdGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GroupApi->apiGroupIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**GroupDto**](GroupDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupPost**
> GroupDto apiGroupPost(groupDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGroupApi();
final GroupDto groupDto = ; // GroupDto | 

try {
    final response = api.apiGroupPost(groupDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GroupApi->apiGroupPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupDto** | [**GroupDto**](GroupDto.md)|  | [optional] 

### Return type

[**GroupDto**](GroupDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiGroupPut**
> GroupDto apiGroupPut(groupDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getGroupApi();
final GroupDto groupDto = ; // GroupDto | 

try {
    final response = api.apiGroupPut(groupDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling GroupApi->apiGroupPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupDto** | [**GroupDto**](GroupDto.md)|  | [optional] 

### Return type

[**GroupDto**](GroupDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

