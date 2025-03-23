# CM_api.api.MilkProductionApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMilkProductionDelete**](MilkProductionApi.md#apimilkproductiondelete) | **DELETE** /api/MilkProduction | 
[**apiMilkProductionGet**](MilkProductionApi.md#apimilkproductionget) | **GET** /api/MilkProduction | 
[**apiMilkProductionIdGet**](MilkProductionApi.md#apimilkproductionidget) | **GET** /api/MilkProduction/{id} | 
[**apiMilkProductionPost**](MilkProductionApi.md#apimilkproductionpost) | **POST** /api/MilkProduction | 
[**apiMilkProductionPut**](MilkProductionApi.md#apimilkproductionput) | **PUT** /api/MilkProduction | 


# **apiMilkProductionDelete**
> apiMilkProductionDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkProductionApi();
final id = 56; // int | 

try {
    api_instance.apiMilkProductionDelete(id);
} catch (e) {
    print('Exception when calling MilkProductionApi->apiMilkProductionDelete: $e\n');
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

# **apiMilkProductionGet**
> List<MilkProductionDto> apiMilkProductionGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkProductionApi();

try {
    final result = api_instance.apiMilkProductionGet();
    print(result);
} catch (e) {
    print('Exception when calling MilkProductionApi->apiMilkProductionGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<MilkProductionDto>**](MilkProductionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkProductionIdGet**
> MilkProductionDto apiMilkProductionIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkProductionApi();
final id = 56; // int | 

try {
    final result = api_instance.apiMilkProductionIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling MilkProductionApi->apiMilkProductionIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**MilkProductionDto**](MilkProductionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkProductionPost**
> MilkProductionDto apiMilkProductionPost(milkProductionDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkProductionApi();
final milkProductionDto = MilkProductionDto(); // MilkProductionDto | 

try {
    final result = api_instance.apiMilkProductionPost(milkProductionDto);
    print(result);
} catch (e) {
    print('Exception when calling MilkProductionApi->apiMilkProductionPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milkProductionDto** | [**MilkProductionDto**](MilkProductionDto.md)|  | [optional] 

### Return type

[**MilkProductionDto**](MilkProductionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkProductionPut**
> MilkProductionDto apiMilkProductionPut(milkProductionDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkProductionApi();
final milkProductionDto = MilkProductionDto(); // MilkProductionDto | 

try {
    final result = api_instance.apiMilkProductionPut(milkProductionDto);
    print(result);
} catch (e) {
    print('Exception when calling MilkProductionApi->apiMilkProductionPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milkProductionDto** | [**MilkProductionDto**](MilkProductionDto.md)|  | [optional] 

### Return type

[**MilkProductionDto**](MilkProductionDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

