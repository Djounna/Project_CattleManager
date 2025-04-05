# CM_api.api.MilkingApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiMilkingCowIdRangeGet**](MilkingApi.md#apimilkingcowidrangeget) | **GET** /api/Milking/{cowId}/{range} | 
[**apiMilkingCowIdStartEndGet**](MilkingApi.md#apimilkingcowidstartendget) | **GET** /api/Milking/{cowId}/{start}/{end} | 
[**apiMilkingDelete**](MilkingApi.md#apimilkingdelete) | **DELETE** /api/Milking | 
[**apiMilkingGet**](MilkingApi.md#apimilkingget) | **GET** /api/Milking | 
[**apiMilkingIdGet**](MilkingApi.md#apimilkingidget) | **GET** /api/Milking/{id} | 
[**apiMilkingMilkingInputPost**](MilkingApi.md#apimilkingmilkinginputpost) | **POST** /api/Milking/milkingInput | 
[**apiMilkingMilkingInputsDateGet**](MilkingApi.md#apimilkingmilkinginputsdateget) | **GET** /api/Milking/milkingInputs/{date} | 
[**apiMilkingMilkingInputsPost**](MilkingApi.md#apimilkingmilkinginputspost) | **POST** /api/Milking/milkingInputs | 
[**apiMilkingPost**](MilkingApi.md#apimilkingpost) | **POST** /api/Milking | 
[**apiMilkingPut**](MilkingApi.md#apimilkingput) | **PUT** /api/Milking | 
[**apiMilkingRangeStartEndGet**](MilkingApi.md#apimilkingrangestartendget) | **GET** /api/Milking/range/{start}/{end} | 
[**apiMilkingVolumeRangeStartEndGet**](MilkingApi.md#apimilkingvolumerangestartendget) | **GET** /api/Milking/volume/range/{start}/{end} | 


# **apiMilkingCowIdRangeGet**
> List<MilkingDto> apiMilkingCowIdRangeGet(cowId, range)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final cowId = 56; // int | 
final range = 56; // int | 

try {
    final result = api_instance.apiMilkingCowIdRangeGet(cowId, range);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingCowIdRangeGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowId** | **int**|  | 
 **range** | **int**|  | 

### Return type

[**List<MilkingDto>**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingCowIdStartEndGet**
> List<MilkingDto> apiMilkingCowIdStartEndGet(cowId, start, end)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final cowId = 56; // int | 
final start = start_example; // String | 
final end = end_example; // String | 

try {
    final result = api_instance.apiMilkingCowIdStartEndGet(cowId, start, end);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingCowIdStartEndGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowId** | **int**|  | 
 **start** | **String**|  | 
 **end** | **String**|  | 

### Return type

[**List<MilkingDto>**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingDelete**
> apiMilkingDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final id = 56; // int | 

try {
    api_instance.apiMilkingDelete(id);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingDelete: $e\n');
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

# **apiMilkingGet**
> List<MilkingDto> apiMilkingGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();

try {
    final result = api_instance.apiMilkingGet();
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<MilkingDto>**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingIdGet**
> MilkingDto apiMilkingIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final id = 56; // int | 

try {
    final result = api_instance.apiMilkingIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**MilkingDto**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingMilkingInputPost**
> MilkingInputDto apiMilkingMilkingInputPost(milkingInputDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final milkingInputDto = MilkingInputDto(); // MilkingInputDto | 

try {
    final result = api_instance.apiMilkingMilkingInputPost(milkingInputDto);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingMilkingInputPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milkingInputDto** | [**MilkingInputDto**](MilkingInputDto.md)|  | [optional] 

### Return type

[**MilkingInputDto**](MilkingInputDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingMilkingInputsDateGet**
> MilkingInputsDto apiMilkingMilkingInputsDateGet(date)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final date = date_example; // String | 

try {
    final result = api_instance.apiMilkingMilkingInputsDateGet(date);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingMilkingInputsDateGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | **String**|  | 

### Return type

[**MilkingInputsDto**](MilkingInputsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingMilkingInputsPost**
> MilkingInputsDto apiMilkingMilkingInputsPost(milkingInputsDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final milkingInputsDto = MilkingInputsDto(); // MilkingInputsDto | 

try {
    final result = api_instance.apiMilkingMilkingInputsPost(milkingInputsDto);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingMilkingInputsPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milkingInputsDto** | [**MilkingInputsDto**](MilkingInputsDto.md)|  | [optional] 

### Return type

[**MilkingInputsDto**](MilkingInputsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingPost**
> MilkingDto apiMilkingPost(milkingDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final milkingDto = MilkingDto(); // MilkingDto | 

try {
    final result = api_instance.apiMilkingPost(milkingDto);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milkingDto** | [**MilkingDto**](MilkingDto.md)|  | [optional] 

### Return type

[**MilkingDto**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingPut**
> MilkingDto apiMilkingPut(milkingDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final milkingDto = MilkingDto(); // MilkingDto | 

try {
    final result = api_instance.apiMilkingPut(milkingDto);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **milkingDto** | [**MilkingDto**](MilkingDto.md)|  | [optional] 

### Return type

[**MilkingDto**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingRangeStartEndGet**
> List<MilkingDto> apiMilkingRangeStartEndGet(start, end)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final start = start_example; // String | 
final end = end_example; // String | 

try {
    final result = api_instance.apiMilkingRangeStartEndGet(start, end);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingRangeStartEndGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **String**|  | 
 **end** | **String**|  | 

### Return type

[**List<MilkingDto>**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingVolumeRangeStartEndGet**
> List<MilkingVolumeDto> apiMilkingVolumeRangeStartEndGet(start, end)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = MilkingApi();
final start = start_example; // String | 
final end = end_example; // String | 

try {
    final result = api_instance.apiMilkingVolumeRangeStartEndGet(start, end);
    print(result);
} catch (e) {
    print('Exception when calling MilkingApi->apiMilkingVolumeRangeStartEndGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **String**|  | 
 **end** | **String**|  | 

### Return type

[**List<MilkingVolumeDto>**](MilkingVolumeDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

