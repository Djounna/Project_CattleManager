# CM_api.api.InterventionApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiInterventionDelete**](InterventionApi.md#apiinterventiondelete) | **DELETE** /api/Intervention | 
[**apiInterventionGet**](InterventionApi.md#apiinterventionget) | **GET** /api/Intervention | 
[**apiInterventionIdGet**](InterventionApi.md#apiinterventionidget) | **GET** /api/Intervention/{id} | 
[**apiInterventionPost**](InterventionApi.md#apiinterventionpost) | **POST** /api/Intervention | 
[**apiInterventionPut**](InterventionApi.md#apiinterventionput) | **PUT** /api/Intervention | 


# **apiInterventionDelete**
> apiInterventionDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getInterventionApi();
final int id = 56; // int | 

try {
    api.apiInterventionDelete(id);
} catch on DioException (e) {
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
> BuiltList<InterventionDto> apiInterventionGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getInterventionApi();

try {
    final response = api.apiInterventionGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling InterventionApi->apiInterventionGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;InterventionDto&gt;**](InterventionDto.md)

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

final api = CMApi().getInterventionApi();
final int id = 56; // int | 

try {
    final response = api.apiInterventionIdGet(id);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getInterventionApi();
final InterventionDto interventionDto = ; // InterventionDto | 

try {
    final response = api.apiInterventionPost(interventionDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getInterventionApi();
final InterventionDto interventionDto = ; // InterventionDto | 

try {
    final response = api.apiInterventionPut(interventionDto);
    print(response);
} catch on DioException (e) {
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

