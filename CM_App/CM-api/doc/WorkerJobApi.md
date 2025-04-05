# CM_api.api.WorkerJobApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiWorkerJobApiWorkerJobAssignJobPost**](WorkerJobApi.md#apiworkerjobapiworkerjobassignjobpost) | **POST** /api/WorkerJob/api/WorkerJob/AssignJob | 
[**apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet**](WorkerJobApi.md#apiworkerjobapiworkerjobgetassignedworkersidget) | **GET** /api/WorkerJob/api/WorkerJob/GetAssignedWorkers/{id} | 
[**apiWorkerJobApiWorkerJobUnassignJobIdDelete**](WorkerJobApi.md#apiworkerjobapiworkerjobunassignjobiddelete) | **DELETE** /api/WorkerJob/api/WorkerJob/UnassignJob/{id} | 


# **apiWorkerJobApiWorkerJobAssignJobPost**
> WorkerJobDto apiWorkerJobApiWorkerJobAssignJobPost(workerJobDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = WorkerJobApi();
final workerJobDto = WorkerJobDto(); // WorkerJobDto | 

try {
    final result = api_instance.apiWorkerJobApiWorkerJobAssignJobPost(workerJobDto);
    print(result);
} catch (e) {
    print('Exception when calling WorkerJobApi->apiWorkerJobApiWorkerJobAssignJobPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workerJobDto** | [**WorkerJobDto**](WorkerJobDto.md)|  | [optional] 

### Return type

[**WorkerJobDto**](WorkerJobDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet**
> List<UserDto> apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = WorkerJobApi();
final id = 56; // int | 

try {
    final result = api_instance.apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling WorkerJobApi->apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**List<UserDto>**](UserDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiWorkerJobApiWorkerJobUnassignJobIdDelete**
> apiWorkerJobApiWorkerJobUnassignJobIdDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = WorkerJobApi();
final id = 56; // int | 

try {
    api_instance.apiWorkerJobApiWorkerJobUnassignJobIdDelete(id);
} catch (e) {
    print('Exception when calling WorkerJobApi->apiWorkerJobApiWorkerJobUnassignJobIdDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

