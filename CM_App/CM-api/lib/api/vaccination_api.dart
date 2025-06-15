//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class VaccinationApi {
  VaccinationApi([ApiClient? apiClient])
      : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /api/Vaccination/{cowId}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] cowId (required):
  Future<Response> apiVaccinationCowIdGetWithHttpInfo(
    int cowId,
  ) async {
    // ignore: prefer_const_declarations
    final path =
        r'/api/Vaccination/{cowId}'.replaceAll('{cowId}', cowId.toString());

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
  /// * [int] cowId (required):
  Future<List<VaccinationDto>?> apiVaccinationCowIdGet(
    int cowId,
  ) async {
    final response = await apiVaccinationCowIdGetWithHttpInfo(
      cowId,
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
      return (await apiClient.deserializeAsync(
              responseBody, 'List<VaccinationDto>') as List)
          .cast<VaccinationDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'DELETE /api/Vaccination' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id:
  Future<Response> apiVaccinationDeleteWithHttpInfo({
    int? id,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Vaccination';

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
  Future<void> apiVaccinationDelete({
    int? id,
  }) async {
    final response = await apiVaccinationDeleteWithHttpInfo(
      id: id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /api/Vaccination' operation and returns the [Response].
  Future<Response> apiVaccinationGetWithHttpInfo() async {
    // ignore: prefer_const_declarations
    final path = r'/api/Vaccination';

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

  Future<List<VaccinationDto>?> apiVaccinationGet() async {
    final response = await apiVaccinationGetWithHttpInfo();
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
              responseBody, 'List<VaccinationDto>') as List)
          .cast<VaccinationDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Vaccination/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiVaccinationIdGetWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Vaccination/{id}'.replaceAll('{id}', id.toString());

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
  Future<VaccinationDto?> apiVaccinationIdGet(
    int id,
  ) async {
    final response = await apiVaccinationIdGetWithHttpInfo(
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
        'VaccinationDto',
      ) as VaccinationDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Vaccination' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [VaccinationDto] vaccinationDto:
  Future<Response> apiVaccinationPostWithHttpInfo({
    VaccinationDto? vaccinationDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Vaccination';

    // ignore: prefer_final_locals
    Object? postBody = vaccinationDto;

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
  /// * [VaccinationDto] vaccinationDto:
  Future<VaccinationDto?> apiVaccinationPost({
    VaccinationDto? vaccinationDto,
  }) async {
    final response = await apiVaccinationPostWithHttpInfo(
      vaccinationDto: vaccinationDto,
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
        'VaccinationDto',
      ) as VaccinationDto;
    }
    return null;
  }

  /// Performs an HTTP 'PUT /api/Vaccination' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [VaccinationDto] vaccinationDto:
  Future<Response> apiVaccinationPutWithHttpInfo({
    VaccinationDto? vaccinationDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Vaccination';

    // ignore: prefer_final_locals
    Object? postBody = vaccinationDto;

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
  /// * [VaccinationDto] vaccinationDto:
  Future<VaccinationDto?> apiVaccinationPut({
    VaccinationDto? vaccinationDto,
  }) async {
    final response = await apiVaccinationPutWithHttpInfo(
      vaccinationDto: vaccinationDto,
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
        'VaccinationDto',
      ) as VaccinationDto;
    }
    return null;
  }
}
