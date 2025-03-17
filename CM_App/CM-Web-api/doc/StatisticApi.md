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

final api = CMApi().getStatisticApi();

try {
    final response = api.apiStatisticGet();
    print(response);
} catch on DioException (e) {
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

