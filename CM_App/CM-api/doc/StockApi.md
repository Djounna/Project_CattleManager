# CM_api.api.StockApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiStockDelete**](StockApi.md#apistockdelete) | **DELETE** /api/Stock | 
[**apiStockGet**](StockApi.md#apistockget) | **GET** /api/Stock | 
[**apiStockIdGet**](StockApi.md#apistockidget) | **GET** /api/Stock/{id} | 
[**apiStockPost**](StockApi.md#apistockpost) | **POST** /api/Stock | 
[**apiStockPut**](StockApi.md#apistockput) | **PUT** /api/Stock | 


# **apiStockDelete**
> apiStockDelete(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = StockApi();
final id = 56; // int | 

try {
    api_instance.apiStockDelete(id);
} catch (e) {
    print('Exception when calling StockApi->apiStockDelete: $e\n');
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

# **apiStockGet**
> List<StockDto> apiStockGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = StockApi();

try {
    final result = api_instance.apiStockGet();
    print(result);
} catch (e) {
    print('Exception when calling StockApi->apiStockGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<StockDto>**](StockDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiStockIdGet**
> StockDto apiStockIdGet(id)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = StockApi();
final id = 56; // int | 

try {
    final result = api_instance.apiStockIdGet(id);
    print(result);
} catch (e) {
    print('Exception when calling StockApi->apiStockIdGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**StockDto**](StockDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiStockPost**
> StockDto apiStockPost(stockDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = StockApi();
final stockDto = StockDto(); // StockDto | 

try {
    final result = api_instance.apiStockPost(stockDto);
    print(result);
} catch (e) {
    print('Exception when calling StockApi->apiStockPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stockDto** | [**StockDto**](StockDto.md)|  | [optional] 

### Return type

[**StockDto**](StockDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiStockPut**
> StockDto apiStockPut(stockDto)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = StockApi();
final stockDto = StockDto(); // StockDto | 

try {
    final result = api_instance.apiStockPut(stockDto);
    print(result);
} catch (e) {
    print('Exception when calling StockApi->apiStockPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stockDto** | [**StockDto**](StockDto.md)|  | [optional] 

### Return type

[**StockDto**](StockDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

