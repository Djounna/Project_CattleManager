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

final api = CMApi().getMilkProductionApi();
final int id = 56; // int | 

try {
    api.apiMilkProductionDelete(id);
} catch on DioException (e) {
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
> BuiltList<MilkProductionDto> apiMilkProductionGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getMilkProductionApi();

try {
    final response = api.apiMilkProductionGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling MilkProductionApi->apiMilkProductionGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;MilkProductionDto&gt;**](MilkProductionDto.md)

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

final api = CMApi().getMilkProductionApi();
final int id = 56; // int | 

try {
    final response = api.apiMilkProductionIdGet(id);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkProductionApi();
final MilkProductionDto milkProductionDto = ; // MilkProductionDto | 

try {
    final response = api.apiMilkProductionPost(milkProductionDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkProductionApi();
final MilkProductionDto milkProductionDto = ; // MilkProductionDto | 

try {
    final response = api.apiMilkProductionPut(milkProductionDto);
    print(response);
} catch on DioException (e) {
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

