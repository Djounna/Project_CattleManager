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
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = GroupApi();
final assignGroupDetailsDto = AssignGroupDetailsDto(); // AssignGroupDetailsDto | 

try {
    final result = api_instance.apiGroupAssignPost(assignGroupDetailsDto);
    print(result);
} catch (e) {
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
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = GroupApi();
final id = 56; // int | 

try {
    api_instance.apiGroupDelete(id);
} catch (e) {
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
> List<GroupDto> apiGroupGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = GroupApi();

try {
    final result = api_instance.apiGroupGet();
    print(result);
} catch (e) {
    print('Exception when calling GroupApi->apiGroupGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<GroupDto>**](GroupDto.md)

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
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = GroupApi();
final id = 56; // int | 

try {
    final result = api_instance.apiGroupIdGet(id);
    print(result);
} catch (e) {
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
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = GroupApi();
final groupDto = GroupDto(); // GroupDto | 

try {
    final result = api_instance.apiGroupPost(groupDto);
    print(result);
} catch (e) {
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
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = GroupApi();
final groupDto = GroupDto(); // GroupDto | 

try {
    final result = api_instance.apiGroupPut(groupDto);
    print(result);
} catch (e) {
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

