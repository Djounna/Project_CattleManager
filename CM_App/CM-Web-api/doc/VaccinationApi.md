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

final api = CMApi().getVaccinationApi();
final int id = 56; // int | 

try {
    api.apiVaccinationDelete(id);
} catch on DioException (e) {
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
> BuiltList<VaccinationDto> apiVaccinationGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getVaccinationApi();

try {
    final response = api.apiVaccinationGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling VaccinationApi->apiVaccinationGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;VaccinationDto&gt;**](VaccinationDto.md)

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

final api = CMApi().getVaccinationApi();
final int id = 56; // int | 

try {
    final response = api.apiVaccinationIdGet(id);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getVaccinationApi();
final VaccinationDto vaccinationDto = ; // VaccinationDto | 

try {
    final response = api.apiVaccinationPost(vaccinationDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getVaccinationApi();
final VaccinationDto vaccinationDto = ; // VaccinationDto | 

try {
    final response = api.apiVaccinationPut(vaccinationDto);
    print(response);
} catch on DioException (e) {
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

