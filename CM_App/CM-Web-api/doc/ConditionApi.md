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

final api = CMApi().getConditionApi();
final int id = 56; // int | 

try {
    api.apiConditionDelete(id);
} catch on DioException (e) {
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
> BuiltList<ConditionDto> apiConditionGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getConditionApi();

try {
    final response = api.apiConditionGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling ConditionApi->apiConditionGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;ConditionDto&gt;**](ConditionDto.md)

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

final api = CMApi().getConditionApi();
final int id = 56; // int | 

try {
    final response = api.apiConditionIdGet(id);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getConditionApi();
final ConditionDto conditionDto = ; // ConditionDto | 

try {
    final response = api.apiConditionPost(conditionDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getConditionApi();
final ConditionDto conditionDto = ; // ConditionDto | 

try {
    final response = api.apiConditionPut(conditionDto);
    print(response);
} catch on DioException (e) {
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

