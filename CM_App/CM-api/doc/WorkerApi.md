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
> List<UserDto> apiWorkerGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = WorkerApi();

try {
    final result = api_instance.apiWorkerGet();
    print(result);
} catch (e) {
    print('Exception when calling WorkerApi->apiWorkerGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<UserDto>**](UserDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

