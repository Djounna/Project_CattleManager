//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class GroupApi {
  GroupApi([ApiClient? apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'POST /api/Group/assign' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [AssignGroupDetailsDto] assignGroupDetailsDto:
  Future<Response> apiGroupAssignPostWithHttpInfo({
    AssignGroupDetailsDto? assignGroupDetailsDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Group/assign';

    // ignore: prefer_final_locals
    Object? postBody = assignGroupDetailsDto;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const contentTypes = <String>[
      'application/json',
      'text/json',
      'application/*+json'
    ];

    return apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes.first,
    );
  }

  /// Parameters:
  ///
  /// * [AssignGroupDetailsDto] assignGroupDetailsDto:
  Future<ProblemDetails?> apiGroupAssignPost({
    AssignGroupDetailsDto? assignGroupDetailsDto,
  }) async {
    final response = await apiGroupAssignPostWithHttpInfo(
      assignGroupDetailsDto: assignGroupDetailsDto,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(
        await _decodeBodyBytes(response),
        'ProblemDetails',
      ) as ProblemDetails;
    }
    return null;
  }

  /// Performs an HTTP 'DELETE /api/Group' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id:
  Future<Response> apiGroupDeleteWithHttpInfo({
    int? id,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Group';

    // ignore: prefer_final_locals
    Object? postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    if (id != null) {
      queryParams.addAll(_queryParams('', 'id', id));
    }

    const contentTypes = <String>[];

    return apiClient.invokeAPI(
      path,
      'DELETE',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes.first,
    );
  }

  /// Parameters:
  ///
  /// * [int] id:
  Future<void> apiGroupDelete({
    int? id,
  }) async {
    final response = await apiGroupDeleteWithHttpInfo(
      id: id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /api/Group' operation and returns the [Response].
  Future<Response> apiGroupGetWithHttpInfo() async {
    // ignore: prefer_const_declarations
    final path = r'/api/Group';

    // ignore: prefer_final_locals
    Object? postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const contentTypes = <String>[];

    return apiClient.invokeAPI(
      path,
      'GET',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes.first,
    );
  }

  Future<List<GroupDto>?> apiGroupGet() async {
    final response = await apiGroupGetWithHttpInfo();
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      final responseBody = await _decodeBodyBytes(response);
      return (await apiClient.deserializeAsync(responseBody, 'List<GroupDto>')
              as List)
          .cast<GroupDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Group/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiGroupIdGetWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Group/{id}'.replaceAll('{id}', id.toString());

    // ignore: prefer_final_locals
    Object? postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const contentTypes = <String>[];

    return apiClient.invokeAPI(
      path,
      'GET',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes.first,
    );
  }

  /// Parameters:
  ///
  /// * [int] id (required):
  Future<GroupDto?> apiGroupIdGet(
    int id,
  ) async {
    final response = await apiGroupIdGetWithHttpInfo(
      id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(
        await _decodeBodyBytes(response),
        'GroupDto',
      ) as GroupDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Group' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [GroupDto] groupDto:
  Future<Response> apiGroupPostWithHttpInfo({
    GroupDto? groupDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Group';

    // ignore: prefer_final_locals
    Object? postBody = groupDto;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const contentTypes = <String>[
      'application/json',
      'text/json',
      'application/*+json'
    ];

    return apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes.first,
    );
  }

  /// Parameters:
  ///
  /// * [GroupDto] groupDto:
  Future<GroupDto?> apiGroupPost({
    GroupDto? groupDto,
  }) async {
    final response = await apiGroupPostWithHttpInfo(
      groupDto: groupDto,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(
        await _decodeBodyBytes(response),
        'GroupDto',
      ) as GroupDto;
    }
    return null;
  }

  /// Performs an HTTP 'PUT /api/Group' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [GroupDto] groupDto:
  Future<Response> apiGroupPutWithHttpInfo({
    GroupDto? groupDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Group';

    // ignore: prefer_final_locals
    Object? postBody = groupDto;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    const contentTypes = <String>[
      'application/json',
      'text/json',
      'application/*+json'
    ];

    return apiClient.invokeAPI(
      path,
      'PUT',
      queryParams,
      postBody,
      headerParams,
      formParams,
      contentTypes.isEmpty ? null : contentTypes.first,
    );
  }

  /// Parameters:
  ///
  /// * [GroupDto] groupDto:
  Future<GroupDto?> apiGroupPut({
    GroupDto? groupDto,
  }) async {
    final response = await apiGroupPutWithHttpInfo(
      groupDto: groupDto,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(
        await _decodeBodyBytes(response),
        'GroupDto',
      ) as GroupDto;
    }
    return null;
  }
}
