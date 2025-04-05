# CM_api.api.IntervenantApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiIntervenantDelete**](IntervenantApi.md#apiintervenantdelete) | **DELETE** /api/Intervenant | 
[**apiIntervenantGet**](IntervenantApi.md#apiintervenantget) | **GET** /api/Intervenant | 
[**apiIntervenantIdGet**](IntervenantApi.md#apiintervenantidget) | **GET** /api/Intervenant/{id} | 
[**apiIntervenantPost**](IntervenantApi.md#apiintervenantpost) | **POST** /api/Intervenant | 
[**apiIntervenantPut**](IntervenantApi.md#apiintervenantput) | **PUT** /api/Intervenant | 


# **apiIntervenantDelete**
> apiIntervenantDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = IntervenantApi();
final id = 56; // int | 

try {
    api_instance.apiIntervenantDelete(id);
} catch (e) {
    print('Exception when calling IntervenantApi->apiIntervenantDelete: $e\n');
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

# **apiIntervenantGet**
> List<IntervenantDto> apiIntervenantGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = IntervenantApi();

try {
    final result = api_instance.apiIntervenantGet();
    print(result);
} catch (e) {
    print('Exception when calling IntervenantApi->apiIntervenantGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<IntervenantDto>**](IntervenantDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiIntervenantIdGet**
> IntervenantDto apiIntervenantIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = IntervenantApi();
final id = 56; // int | 

try {
    final result = api_instance.apiIntervenantIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling IntervenantApi->apiIntervenantIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**IntervenantDto**](IntervenantDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiIntervenantPost**
> IntervenantDto apiIntervenantPost(intervenantDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = IntervenantApi();
final intervenantDto = IntervenantDto(); // IntervenantDto | 

try {
    final result = api_instance.apiIntervenantPost(intervenantDto);
    print(result);
} catch (e) {
    print('Exception when calling IntervenantApi->apiIntervenantPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intervenantDto** | [**IntervenantDto**](IntervenantDto.md)|  | [optional] 

### Return type

[**IntervenantDto**](IntervenantDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiIntervenantPut**
> IntervenantDto apiIntervenantPut(intervenantDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = IntervenantApi();
final intervenantDto = IntervenantDto(); // IntervenantDto | 

try {
    final result = api_instance.apiIntervenantPut(intervenantDto);
    print(result);
} catch (e) {
    print('Exception when calling IntervenantApi->apiIntervenantPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intervenantDto** | [**IntervenantDto**](IntervenantDto.md)|  | [optional] 

### Return type

[**IntervenantDto**](IntervenantDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

