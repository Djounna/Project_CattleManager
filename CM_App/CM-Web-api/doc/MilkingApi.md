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
> BuiltList<MilkingDto> apiMilkingCowIdRangeGet(cowId, range)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getMilkingApi();
final int cowId = 56; // int | 
final int range = 56; // int | 

try {
    final response = api.apiMilkingCowIdRangeGet(cowId, range);
    print(response);
} catch on DioException (e) {
    print('Exception when calling MilkingApi->apiMilkingCowIdRangeGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cowId** | **int**|  | 
 **range** | **int**|  | 

### Return type

[**BuiltList&lt;MilkingDto&gt;**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingCowIdStartEndGet**
> BuiltList<MilkingDto> apiMilkingCowIdStartEndGet(cowId, start, end)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getMilkingApi();
final int cowId = 56; // int | 
final String start = start_example; // String | 
final String end = end_example; // String | 

try {
    final response = api.apiMilkingCowIdStartEndGet(cowId, start, end);
    print(response);
} catch on DioException (e) {
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

[**BuiltList&lt;MilkingDto&gt;**](MilkingDto.md)

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

final api = CMApi().getMilkingApi();
final int id = 56; // int | 

try {
    api.apiMilkingDelete(id);
} catch on DioException (e) {
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
> BuiltList<MilkingDto> apiMilkingGet()



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getMilkingApi();

try {
    final response = api.apiMilkingGet();
    print(response);
} catch on DioException (e) {
    print('Exception when calling MilkingApi->apiMilkingGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;MilkingDto&gt;**](MilkingDto.md)

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

final api = CMApi().getMilkingApi();
final int id = 56; // int | 

try {
    final response = api.apiMilkingIdGet(id);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkingApi();
final MilkingInputDto milkingInputDto = ; // MilkingInputDto | 

try {
    final response = api.apiMilkingMilkingInputPost(milkingInputDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkingApi();
final String date = date_example; // String | 

try {
    final response = api.apiMilkingMilkingInputsDateGet(date);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkingApi();
final MilkingInputsDto milkingInputsDto = ; // MilkingInputsDto | 

try {
    final response = api.apiMilkingMilkingInputsPost(milkingInputsDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkingApi();
final MilkingDto milkingDto = ; // MilkingDto | 

try {
    final response = api.apiMilkingPost(milkingDto);
    print(response);
} catch on DioException (e) {
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

final api = CMApi().getMilkingApi();
final MilkingDto milkingDto = ; // MilkingDto | 

try {
    final response = api.apiMilkingPut(milkingDto);
    print(response);
} catch on DioException (e) {
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
> BuiltList<MilkingDto> apiMilkingRangeStartEndGet(start, end)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getMilkingApi();
final String start = start_example; // String | 
final String end = end_example; // String | 

try {
    final response = api.apiMilkingRangeStartEndGet(start, end);
    print(response);
} catch on DioException (e) {
    print('Exception when calling MilkingApi->apiMilkingRangeStartEndGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **String**|  | 
 **end** | **String**|  | 

### Return type

[**BuiltList&lt;MilkingDto&gt;**](MilkingDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiMilkingVolumeRangeStartEndGet**
> BuiltList<MilkingVolumeDto> apiMilkingVolumeRangeStartEndGet(start, end)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getMilkingApi();
final String start = start_example; // String | 
final String end = end_example; // String | 

try {
    final response = api.apiMilkingVolumeRangeStartEndGet(start, end);
    print(response);
} catch on DioException (e) {
    print('Exception when calling MilkingApi->apiMilkingVolumeRangeStartEndGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **String**|  | 
 **end** | **String**|  | 

### Return type

[**BuiltList&lt;MilkingVolumeDto&gt;**](MilkingVolumeDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

