# CM_api.api.UserManagementApi

## Load the API package
```dart
import 'package:CM_api/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUserManagementPost**](UserManagementApi.md#apiusermanagementpost) | **POST** /api/UserManagement | 
[**apiUserManagementPut**](UserManagementApi.md#apiusermanagementput) | **PUT** /api/UserManagement | 
[**apiUserManagementUserUserIdRolesGet**](UserManagementApi.md#apiusermanagementuseruseridrolesget) | **GET** /api/UserManagement/user/{userId}/roles | 


# **apiUserManagementPost**
> UserInput apiUserManagementPost(userInput)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserManagementApi();
final userInput = UserInput(); // UserInput | 

try {
    final result = api_instance.apiUserManagementPost(userInput);
    print(result);
} catch (e) {
    print('Exception when calling UserManagementApi->apiUserManagementPost: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInput** | [**UserInput**](UserInput.md)|  | [optional] 

### Return type

[**UserInput**](UserInput.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiUserManagementPut**
> List<RoleDto> apiUserManagementPut(userId)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserManagementApi();
final userId = 56; // int | 

try {
    final result = api_instance.apiUserManagementPut(userId);
    print(result);
} catch (e) {
    print('Exception when calling UserManagementApi->apiUserManagementPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **int**|  | [optional] 

### Return type

[**List<RoleDto>**](RoleDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiUserManagementUserUserIdRolesGet**
> List<RoleDto> apiUserManagementUserUserIdRolesGet(userId)



### Example
```dart
import 'package:CM_api/api.dart';
// TODO Configure HTTP Bearer authorization: Bearer
// Case 1. Use String Token
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken('YOUR_ACCESS_TOKEN');
// Case 2. Use Function which generate token.
// String yourTokenGeneratorFunction() { ... }
//defaultApiClient.getAuthentication<HttpBearerAuth>('Bearer').setAccessToken(yourTokenGeneratorFunction);

final api_instance = UserManagementApi();
final userId = 56; // int | 

try {
    final result = api_instance.apiUserManagementUserUserIdRolesGet(userId);
    print(result);
} catch (e) {
    print('Exception when calling UserManagementApi->apiUserManagementUserUserIdRolesGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **int**|  | 

### Return type

[**List<RoleDto>**](RoleDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

