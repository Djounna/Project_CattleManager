# CM_api.api.ConditionApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiConditionDelete**](ConditionApi.md#apiconditiondelete) | **DELETE** /api/Condition | 
[**apiConditionGet**](ConditionApi.md#apiconditionget) | **GET** /api/Condition | 
[**apiConditionIdGet**](ConditionApi.md#apiconditionidget) | **GET** /api/Condition/{id} | 
[**apiConditionPost**](ConditionApi.md#apiconditionpost) | **POST** /api/Condition | 
[**apiConditionPut**](ConditionApi.md#apiconditionput) | **PUT** /api/Condition | 


# **apiConditionDelete**
> apiConditionDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ConditionApi();
final id = 56; // int | 

try {
    api_instance.apiConditionDelete(id);
} catch (e) {
    print('Exception when calling ConditionApi->apiConditionDelete: $e\n');
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

# **apiConditionGet**
> List<ConditionDto> apiConditionGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ConditionApi();

try {
    final result = api_instance.apiConditionGet();
    print(result);
} catch (e) {
    print('Exception when calling ConditionApi->apiConditionGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<ConditionDto>**](ConditionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiConditionIdGet**
> ConditionDto apiConditionIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ConditionApi();
final id = 56; // int | 

try {
    final result = api_instance.apiConditionIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling ConditionApi->apiConditionIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**ConditionDto**](ConditionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiConditionPost**
> ConditionDto apiConditionPost(conditionDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ConditionApi();
final conditionDto = ConditionDto(); // ConditionDto | 

try {
    final result = api_instance.apiConditionPost(conditionDto);
    print(result);
} catch (e) {
    print('Exception when calling ConditionApi->apiConditionPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conditionDto** | [**ConditionDto**](ConditionDto.md)|  | [optional] 

### Return type

[**ConditionDto**](ConditionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiConditionPut**
> ConditionDto apiConditionPut(conditionDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = ConditionApi();
final conditionDto = ConditionDto(); // ConditionDto | 

try {
    final result = api_instance.apiConditionPut(conditionDto);
    print(result);
} catch (e) {
    print('Exception when calling ConditionApi->apiConditionPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conditionDto** | [**ConditionDto**](ConditionDto.md)|  | [optional] 

### Return type

[**ConditionDto**](ConditionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

