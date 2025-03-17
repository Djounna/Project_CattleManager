# CM_api.api.TreatmentApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiTreatmentDelete**](TreatmentApi.md#apitreatmentdelete) | **DELETE** /api/Treatment | 
[**apiTreatmentGet**](TreatmentApi.md#apitreatmentget) | **GET** /api/Treatment | 
[**apiTreatmentIdGet**](TreatmentApi.md#apitreatmentidget) | **GET** /api/Treatment/{id} | 
[**apiTreatmentPost**](TreatmentApi.md#apitreatmentpost) | **POST** /api/Treatment | 
[**apiTreatmentPut**](TreatmentApi.md#apitreatmentput) | **PUT** /api/Treatment | 


# **apiTreatmentDelete**
> apiTreatmentDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getTreatmentApi();
final int id = 56; // int | 

try {
    api.apiTreatmentDelete(id);
} catch on DioException (e) {
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
> BuiltList<TreatmentDto> apiTreatmentGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getTreatmentApi();

try {
    final response = api.apiTreatmentGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling TreatmentApi->apiTreatmentGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;TreatmentDto&gt;**](TreatmentDto.md)

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

final api = CMApi().getTreatmentApi();
final int id = 56; // int | 

try {
    final response = api.apiTreatmentIdGet(id);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getTreatmentApi();
final TreatmentDto treatmentDto = ; // TreatmentDto | 

try {
    final response = api.apiTreatmentPost(treatmentDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getTreatmentApi();
final TreatmentDto treatmentDto = ; // TreatmentDto | 

try {
    final response = api.apiTreatmentPut(treatmentDto);
    print(response);
} catch on DioException (e) {
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

