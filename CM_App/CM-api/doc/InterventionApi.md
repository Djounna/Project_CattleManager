# CM_api.api.InterventionApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiInterventionCowIdGet**](InterventionApi.md#apiinterventioncowidget) | **GET** /api/Intervention/{cowId} | 
[**apiInterventionDelete**](InterventionApi.md#apiinterventiondelete) | **DELETE** /api/Intervention | 
[**apiInterventionGet**](InterventionApi.md#apiinterventionget) | **GET** /api/Intervention | 
[**apiInterventionIdGet**](InterventionApi.md#apiinterventionidget) | **GET** /api/Intervention/{id} | 
[**apiInterventionPost**](InterventionApi.md#apiinterventionpost) | **POST** /api/Intervention | 
[**apiInterventionPut**](InterventionApi.md#apiinterventionput) | **PUT** /api/Intervention | 


# **apiInterventionCowIdGet**
> List<InterventionDto> apiInterventionCowIdGet(cowId)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = InterventionApi();
final cowId = 56; // int | 

try {
    final result = api_instance.apiInterventionCowIdGet(cowId);
    print(result);
} catch (e) {
    print('Exception when calling InterventionApi->apiInterventionCowIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowId** | **int**|  | 

### Return type

[**List<InterventionDto>**](InterventionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiInterventionDelete**
> apiInterventionDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = InterventionApi();
final id = 56; // int | 

try {
    api_instance.apiInterventionDelete(id);
} catch (e) {
    print('Exception when calling InterventionApi->apiInterventionDelete: $e\n');
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

# **apiInterventionGet**
> List<InterventionDto> apiInterventionGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = InterventionApi();

try {
    final result = api_instance.apiInterventionGet();
    print(result);
} catch (e) {
    print('Exception when calling InterventionApi->apiInterventionGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<InterventionDto>**](InterventionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiInterventionIdGet**
> InterventionDto apiInterventionIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = InterventionApi();
final id = 56; // int | 

try {
    final result = api_instance.apiInterventionIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling InterventionApi->apiInterventionIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**InterventionDto**](InterventionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiInterventionPost**
> InterventionDto apiInterventionPost(interventionDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = InterventionApi();
final interventionDto = InterventionDto(); // InterventionDto | 

try {
    final result = api_instance.apiInterventionPost(interventionDto);
    print(result);
} catch (e) {
    print('Exception when calling InterventionApi->apiInterventionPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interventionDto** | [**InterventionDto**](InterventionDto.md)|  | [optional] 

### Return type

[**InterventionDto**](InterventionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiInterventionPut**
> InterventionDto apiInterventionPut(interventionDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = InterventionApi();
final interventionDto = InterventionDto(); // InterventionDto | 

try {
    final result = api_instance.apiInterventionPut(interventionDto);
    print(result);
} catch (e) {
    print('Exception when calling InterventionApi->apiInterventionPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interventionDto** | [**InterventionDto**](InterventionDto.md)|  | [optional] 

### Return type

[**InterventionDto**](InterventionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

