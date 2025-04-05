//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class StockApi {
  StockApi([ApiClient? apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'DELETE /api/Stock' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id:
  Future<Response> apiStockDeleteWithHttpInfo({
    int? id,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Stock';

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
  Future<void> apiStockDelete({
    int? id,
  }) async {
    final response = await apiStockDeleteWithHttpInfo(
      id: id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /api/Stock' operation and returns the [Response].
  Future<Response> apiStockGetWithHttpInfo() async {
    // ignore: prefer_const_declarations
    final path = r'/api/Stock';

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

  Future<List<StockDto>?> apiStockGet() async {
    final response = await apiStockGetWithHttpInfo();
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      final responseBody = await _decodeBodyBytes(response);
      return (await apiClient.deserializeAsync(responseBody, 'List<StockDto>')
              as List)
          .cast<StockDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Stock/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiStockIdGetWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Stock/{id}'.replaceAll('{id}', id.toString());

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
  Future<StockDto?> apiStockIdGet(
    int id,
  ) async {
    final response = await apiStockIdGetWithHttpInfo(
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
        'StockDto',
      ) as StockDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Stock' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [StockDto] stockDto:
  Future<Response> apiStockPostWithHttpInfo({
    StockDto? stockDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Stock';

    // ignore: prefer_final_locals
    Object? postBody = stockDto;

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
  /// * [StockDto] stockDto:
  Future<StockDto?> apiStockPost({
    StockDto? stockDto,
  }) async {
    final response = await apiStockPostWithHttpInfo(
      stockDto: stockDto,
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
        'StockDto',
      ) as StockDto;
    }
    return null;
  }

  /// Performs an HTTP 'PUT /api/Stock' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [StockDto] stockDto:
  Future<Response> apiStockPutWithHttpInfo({
    StockDto? stockDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Stock';

    // ignore: prefer_final_locals
    Object? postBody = stockDto;

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
  /// * [StockDto] stockDto:
  Future<StockDto?> apiStockPut({
    StockDto? stockDto,
  }) async {
    final response = await apiStockPutWithHttpInfo(
      stockDto: stockDto,
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
        'StockDto',
      ) as StockDto;
    }
    return null;
  }
}
