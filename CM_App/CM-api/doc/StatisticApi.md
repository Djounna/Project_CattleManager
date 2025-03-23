# CM_api.api.StatisticApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiStatisticGet**](StatisticApi.md#apistatisticget) | **GET** /api/Statistic | 


# **apiStatisticGet**
> CattleStatisticsDto apiStatisticGet()



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = StatisticApi();

try {
    final result = api_instance.apiStatisticGet();
    print(result);
} catch (e) {
    print('Exception when calling StatisticApi->apiStatisticGet: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CattleStatisticsDto**](CattleStatisticsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

