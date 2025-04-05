//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class WorkerJobApi {
  WorkerJobApi([ApiClient? apiClient])
      : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'POST /api/WorkerJob/api/WorkerJob/AssignJob' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [WorkerJobDto] workerJobDto:
  Future<Response> apiWorkerJobApiWorkerJobAssignJobPostWithHttpInfo({
    WorkerJobDto? workerJobDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/WorkerJob/api/WorkerJob/AssignJob';

    // ignore: prefer_final_locals
    Object? postBody = workerJobDto;

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
  /// * [WorkerJobDto] workerJobDto:
  Future<WorkerJobDto?> apiWorkerJobApiWorkerJobAssignJobPost({
    WorkerJobDto? workerJobDto,
  }) async {
    final response = await apiWorkerJobApiWorkerJobAssignJobPostWithHttpInfo(
      workerJobDto: workerJobDto,
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
        'WorkerJobDto',
      ) as WorkerJobDto;
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/WorkerJob/api/WorkerJob/GetAssignedWorkers/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiWorkerJobApiWorkerJobGetAssignedWorkersIdGetWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/WorkerJob/api/WorkerJob/GetAssignedWorkers/{id}'
        .replaceAll('{id}', id.toString());

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
  Future<List<UserDto>?> apiWorkerJobApiWorkerJobGetAssignedWorkersIdGet(
    int id,
  ) async {
    final response =
        await apiWorkerJobApiWorkerJobGetAssignedWorkersIdGetWithHttpInfo(
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
      final responseBody = await _decodeBodyBytes(response);
      return (await apiClient.deserializeAsync(responseBody, 'List<UserDto>')
              as List)
          .cast<UserDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'DELETE /api/WorkerJob/api/WorkerJob/UnassignJob/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiWorkerJobApiWorkerJobUnassignJobIdDeleteWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/WorkerJob/api/WorkerJob/UnassignJob/{id}'
        .replaceAll('{id}', id.toString());

    // ignore: prefer_final_locals
    Object? postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

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
  /// * [int] id (required):
  Future<void> apiWorkerJobApiWorkerJobUnassignJobIdDelete(
    int id,
  ) async {
    final response =
        await apiWorkerJobApiWorkerJobUnassignJobIdDeleteWithHttpInfo(
      id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }
}
