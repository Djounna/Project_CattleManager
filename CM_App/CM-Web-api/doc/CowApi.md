# CM_api.api.CowApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCowDelete**](CowApi.md#apicowdelete) | **DELETE** /api/Cow | 
[**apiCowGet**](CowApi.md#apicowget) | **GET** /api/Cow | 
[**apiCowIdDetailsGet**](CowApi.md#apicowiddetailsget) | **GET** /api/Cow/{id}/details | 
[**apiCowIdGet**](CowApi.md#apicowidget) | **GET** /api/Cow/{id} | 
[**apiCowPost**](CowApi.md#apicowpost) | **POST** /api/Cow | 
[**apiCowPut**](CowApi.md#apicowput) | **PUT** /api/Cow | 


# **apiCowDelete**
> apiCowDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getCowApi();
final int id = 56; // int | 

try {
    api.apiCowDelete(id);
} catch on DioException (e) {
    print('Exception when calling CowApi->apiCowDelete: $e\n');
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

# **apiCowGet**
> BuiltList<CowDto> apiCowGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getCowApi();

try {
    final response = api.apiCowGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling CowApi->apiCowGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;CowDto&gt;**](CowDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiCowIdDetailsGet**
> CowDetailsDto apiCowIdDetailsGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getCowApi();
final int id = 56; // int | 

try {
    final response = api.apiCowIdDetailsGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CowApi->apiCowIdDetailsGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CowDetailsDto**](CowDetailsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiCowIdGet**
> CowDto apiCowIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getCowApi();
final int id = 56; // int | 

try {
    final response = api.apiCowIdGet(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CowApi->apiCowIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**CowDto**](CowDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiCowPost**
> CowDto apiCowPost(cowDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getCowApi();
final CowDto cowDto = ; // CowDto | 

try {
    final response = api.apiCowPost(cowDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CowApi->apiCowPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowDto** | [**CowDto**](CowDto.md)|  | [optional] 

### Return type

[**CowDto**](CowDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiCowPut**
> CowDto apiCowPut(cowDto)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getCowApi();
final CowDto cowDto = ; // CowDto | 

try {
    final response = api.apiCowPut(cowDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CowApi->apiCowPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowDto** | [**CowDto**](CowDto.md)|  | [optional] 

### Return type

[**CowDto**](CowDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

