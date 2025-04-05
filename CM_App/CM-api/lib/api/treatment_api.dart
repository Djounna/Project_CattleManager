//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TreatmentApi {
  TreatmentApi([ApiClient? apiClient])
      : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'DELETE /api/Treatment' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id:
  Future<Response> apiTreatmentDeleteWithHttpInfo({
    int? id,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Treatment';

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
  Future<void> apiTreatmentDelete({
    int? id,
  }) async {
    final response = await apiTreatmentDeleteWithHttpInfo(
      id: id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /api/Treatment' operation and returns the [Response].
  Future<Response> apiTreatmentGetWithHttpInfo() async {
    // ignore: prefer_const_declarations
    final path = r'/api/Treatment';

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

  Future<List<TreatmentDto>?> apiTreatmentGet() async {
    final response = await apiTreatmentGetWithHttpInfo();
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      final responseBody = await _decodeBodyBytes(response);
      return (await apiClient.deserializeAsync(
              responseBody, 'List<TreatmentDto>') as List)
          .cast<TreatmentDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Treatment/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiTreatmentIdGetWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Treatment/{id}'.replaceAll('{id}', id.toString());

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
  Future<TreatmentDto?> apiTreatmentIdGet(
    int id,
  ) async {
    final response = await apiTreatmentIdGetWithHttpInfo(
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
        'TreatmentDto',
      ) as TreatmentDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Treatment' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [TreatmentDto] treatmentDto:
  Future<Response> apiTreatmentPostWithHttpInfo({
    TreatmentDto? treatmentDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Treatment';

    // ignore: prefer_final_locals
    Object? postBody = treatmentDto;

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
  /// * [TreatmentDto] treatmentDto:
  Future<TreatmentDto?> apiTreatmentPost({
    TreatmentDto? treatmentDto,
  }) async {
    final response = await apiTreatmentPostWithHttpInfo(
      treatmentDto: treatmentDto,
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
        'TreatmentDto',
      ) as TreatmentDto;
    }
    return null;
  }

  /// Performs an HTTP 'PUT /api/Treatment' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [TreatmentDto] treatmentDto:
  Future<Response> apiTreatmentPutWithHttpInfo({
    TreatmentDto? treatmentDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Treatment';

    // ignore: prefer_final_locals
    Object? postBody = treatmentDto;

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
  /// * [TreatmentDto] treatmentDto:
  Future<TreatmentDto?> apiTreatmentPut({
    TreatmentDto? treatmentDto,
  }) async {
    final response = await apiTreatmentPutWithHttpInfo(
      treatmentDto: treatmentDto,
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
        'TreatmentDto',
      ) as TreatmentDto;
    }
    return null;
  }
}
