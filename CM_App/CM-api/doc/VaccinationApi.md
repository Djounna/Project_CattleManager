# CM_api.api.VaccinationApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiVaccinationDelete**](VaccinationApi.md#apivaccinationdelete) | **DELETE** /api/Vaccination | 
[**apiVaccinationGet**](VaccinationApi.md#apivaccinationget) | **GET** /api/Vaccination | 
[**apiVaccinationIdGet**](VaccinationApi.md#apivaccinationidget) | **GET** /api/Vaccination/{id} | 
[**apiVaccinationPost**](VaccinationApi.md#apivaccinationpost) | **POST** /api/Vaccination | 
[**apiVaccinationPut**](VaccinationApi.md#apivaccinationput) | **PUT** /api/Vaccination | 


# **apiVaccinationDelete**
> apiVaccinationDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = VaccinationApi();
final id = 56; // int | 

try {
    api_instance.apiVaccinationDelete(id);
} catch (e) {
    print('Exception when calling VaccinationApi->apiVaccinationDelete: $e\n');
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

# **apiVaccinationGet**
> List<VaccinationDto> apiVaccinationGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = VaccinationApi();

try {
    final result = api_instance.apiVaccinationGet();
    print(result);
} catch (e) {
    print('Exception when calling VaccinationApi->apiVaccinationGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<VaccinationDto>**](VaccinationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVaccinationIdGet**
> VaccinationDto apiVaccinationIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = VaccinationApi();
final id = 56; // int | 

try {
    final result = api_instance.apiVaccinationIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling VaccinationApi->apiVaccinationIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**VaccinationDto**](VaccinationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVaccinationPost**
> VaccinationDto apiVaccinationPost(vaccinationDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = VaccinationApi();
final vaccinationDto = VaccinationDto(); // VaccinationDto | 

try {
    final result = api_instance.apiVaccinationPost(vaccinationDto);
    print(result);
} catch (e) {
    print('Exception when calling VaccinationApi->apiVaccinationPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaccinationDto** | [**VaccinationDto**](VaccinationDto.md)|  | [optional] 

### Return type

[**VaccinationDto**](VaccinationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiVaccinationPut**
> VaccinationDto apiVaccinationPut(vaccinationDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = VaccinationApi();
final vaccinationDto = VaccinationDto(); // VaccinationDto | 

try {
    final result = api_instance.apiVaccinationPut(vaccinationDto);
    print(result);
} catch (e) {
    print('Exception when calling VaccinationApi->apiVaccinationPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaccinationDto** | [**VaccinationDto**](VaccinationDto.md)|  | [optional] 

### Return type

[**VaccinationDto**](VaccinationDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

