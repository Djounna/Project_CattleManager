# CM_api.api.WorkerApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWorkerGet**](WorkerApi.md#apiworkerget) | **GET** /api/Worker | 


# **apiWorkerGet**
> BuiltList<UserDto> apiWorkerGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getWorkerApi();

try {
    final response = api.apiWorkerGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling WorkerApi->apiWorkerGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;UserDto&gt;**](UserDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

