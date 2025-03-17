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

final api = CMApi().getUserManagementApi();
final UserInput userInput = ; // UserInput | 

try {
    final response = api.apiUserManagementPost(userInput);
    print(response);
} catch on DioException (e) {
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
> BuiltList<RoleDto> apiUserManagementPut(userId)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getUserManagementApi();
final int userId = 56; // int | 

try {
    final response = api.apiUserManagementPut(userId);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UserManagementApi->apiUserManagementPut: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **int**|  | [optional] 

### Return type

[**BuiltList&lt;RoleDto&gt;**](RoleDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiUserManagementUserUserIdRolesGet**
> BuiltList<RoleDto> apiUserManagementUserUserIdRolesGet(userId)



### Example
```dart
import 'package:CM_api/api.dart';

final api = CMApi().getUserManagementApi();
final int userId = 56; // int | 

try {
    final response = api.apiUserManagementUserUserIdRolesGet(userId);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UserManagementApi->apiUserManagementUserUserIdRolesGet: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **int**|  | 

### Return type

[**BuiltList&lt;RoleDto&gt;**](RoleDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

