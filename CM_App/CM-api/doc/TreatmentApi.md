# CM_api.api.TreatmentApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTreatmentCowIdGet**](TreatmentApi.md#apitreatmentcowidget) | **GET** /api/Treatment/{cowId} | 
[**apiTreatmentDelete**](TreatmentApi.md#apitreatmentdelete) | **DELETE** /api/Treatment | 
[**apiTreatmentGet**](TreatmentApi.md#apitreatmentget) | **GET** /api/Treatment | 
[**apiTreatmentIdGet**](TreatmentApi.md#apitreatmentidget) | **GET** /api/Treatment/{id} | 
[**apiTreatmentPost**](TreatmentApi.md#apitreatmentpost) | **POST** /api/Treatment | 
[**apiTreatmentPut**](TreatmentApi.md#apitreatmentput) | **PUT** /api/Treatment | 


# **apiTreatmentCowIdGet**
> List<TreatmentDto> apiTreatmentCowIdGet(cowId)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TreatmentApi();
final cowId = 56; // int | 

try {
    final result = api_instance.apiTreatmentCowIdGet(cowId);
    print(result);
} catch (e) {
    print('Exception when calling TreatmentApi->apiTreatmentCowIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowId** | **int**|  | 

### Return type

[**List<TreatmentDto>**](TreatmentDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiTreatmentDelete**
> apiTreatmentDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TreatmentApi();
final id = 56; // int | 

try {
    api_instance.apiTreatmentDelete(id);
} catch (e) {
    print('Exception when calling TreatmentApi->apiTreatmentDelete: $e\n');
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

# **apiTreatmentGet**
> List<TreatmentDto> apiTreatmentGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TreatmentApi();

try {
    final result = api_instance.apiTreatmentGet();
    print(result);
} catch (e) {
    print('Exception when calling TreatmentApi->apiTreatmentGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<TreatmentDto>**](TreatmentDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiTreatmentIdGet**
> TreatmentDto apiTreatmentIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TreatmentApi();
final id = 56; // int | 

try {
    final result = api_instance.apiTreatmentIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling TreatmentApi->apiTreatmentIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**TreatmentDto**](TreatmentDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiTreatmentPost**
> TreatmentDto apiTreatmentPost(treatmentDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TreatmentApi();
final treatmentDto = TreatmentDto(); // TreatmentDto | 

try {
    final result = api_instance.apiTreatmentPost(treatmentDto);
    print(result);
} catch (e) {
    print('Exception when calling TreatmentApi->apiTreatmentPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **treatmentDto** | [**TreatmentDto**](TreatmentDto.md)|  | [optional] 

### Return type

[**TreatmentDto**](TreatmentDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiTreatmentPut**
> TreatmentDto apiTreatmentPut(treatmentDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = TreatmentApi();
final treatmentDto = TreatmentDto(); // TreatmentDto | 

try {
    final result = api_instance.apiTreatmentPut(treatmentDto);
    print(result);
} catch (e) {
    print('Exception when calling TreatmentApi->apiTreatmentPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **treatmentDto** | [**TreatmentDto**](TreatmentDto.md)|  | [optional] 

### Return type

[**TreatmentDto**](TreatmentDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

