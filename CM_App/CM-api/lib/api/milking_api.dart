//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MilkingApi {
  MilkingApi([ApiClient? apiClient])
      : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'GET /api/Milking/{cowId}/{range}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] cowId (required):
  ///
  /// * [int] range (required):
  Future<Response> apiMilkingCowIdRangeGetWithHttpInfo(
    int cowId,
    int range,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/{cowId}/{range}'
        .replaceAll('{cowId}', cowId.toString())
        .replaceAll('{range}', range.toString());

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
  ///
  /// * [int] range (required):
  Future<List<MilkingDto>?> apiMilkingCowIdRangeGet(
    int cowId,
    int range,
  ) async {
    final response = await apiMilkingCowIdRangeGetWithHttpInfo(
      cowId,
      range,
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
      return (await apiClient.deserializeAsync(responseBody, 'List<MilkingDto>')
              as List)
          .cast<MilkingDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Milking/{cowId}/{start}/{end}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] cowId (required):
  ///
  /// * [String] start (required):
  ///
  /// * [String] end (required):
  Future<Response> apiMilkingCowIdStartEndGetWithHttpInfo(
    int cowId,
    String start,
    String end,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/{cowId}/{start}/{end}'
        .replaceAll('{cowId}', cowId.toString())
        .replaceAll('{start}', start)
        .replaceAll('{end}', end);

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
  ///
  /// * [String] start (required):
  ///
  /// * [String] end (required):
  Future<List<MilkingDto>?> apiMilkingCowIdStartEndGet(
    int cowId,
    String start,
    String end,
  ) async {
    final response = await apiMilkingCowIdStartEndGetWithHttpInfo(
      cowId,
      start,
      end,
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
      return (await apiClient.deserializeAsync(responseBody, 'List<MilkingDto>')
              as List)
          .cast<MilkingDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'DELETE /api/Milking' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id:
  Future<Response> apiMilkingDeleteWithHttpInfo({
    int? id,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking';

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
  Future<void> apiMilkingDelete({
    int? id,
  }) async {
    final response = await apiMilkingDeleteWithHttpInfo(
      id: id,
    );
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
  }

  /// Performs an HTTP 'GET /api/Milking' operation and returns the [Response].
  Future<Response> apiMilkingGetWithHttpInfo() async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking';

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

  Future<List<MilkingDto>?> apiMilkingGet() async {
    final response = await apiMilkingGetWithHttpInfo();
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body.isNotEmpty &&
        response.statusCode != HttpStatus.noContent) {
      final responseBody = await _decodeBodyBytes(response);
      return (await apiClient.deserializeAsync(responseBody, 'List<MilkingDto>')
              as List)
          .cast<MilkingDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Milking/{id}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [int] id (required):
  Future<Response> apiMilkingIdGetWithHttpInfo(
    int id,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/{id}'.replaceAll('{id}', id.toString());

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
  Future<MilkingDto?> apiMilkingIdGet(
    int id,
  ) async {
    final response = await apiMilkingIdGetWithHttpInfo(
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
        'MilkingDto',
      ) as MilkingDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Milking/milkingInput' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [MilkingInputDto] milkingInputDto:
  Future<Response> apiMilkingMilkingInputPostWithHttpInfo({
    MilkingInputDto? milkingInputDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/milkingInput';

    // ignore: prefer_final_locals
    Object? postBody = milkingInputDto;

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
  /// * [MilkingInputDto] milkingInputDto:
  Future<MilkingInputDto?> apiMilkingMilkingInputPost({
    MilkingInputDto? milkingInputDto,
  }) async {
    final response = await apiMilkingMilkingInputPostWithHttpInfo(
      milkingInputDto: milkingInputDto,
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
        'MilkingInputDto',
      ) as MilkingInputDto;
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Milking/milkingInputs/{date}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] date (required):
  Future<Response> apiMilkingMilkingInputsDateGetWithHttpInfo(
    String date,
  ) async {
    // ignore: prefer_const_declarations
    final path =
        r'/api/Milking/milkingInputs/{date}'.replaceAll('{date}', date);

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
  /// * [String] date (required):
  Future<MilkingInputsDto?> apiMilkingMilkingInputsDateGet(
    String date,
  ) async {
    final response = await apiMilkingMilkingInputsDateGetWithHttpInfo(
      date,
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
        'MilkingInputsDto',
      ) as MilkingInputsDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Milking/milkingInputs' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [MilkingInputsDto] milkingInputsDto:
  Future<Response> apiMilkingMilkingInputsPostWithHttpInfo({
    MilkingInputsDto? milkingInputsDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/milkingInputs';

    // ignore: prefer_final_locals
    Object? postBody = milkingInputsDto;

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
  /// * [MilkingInputsDto] milkingInputsDto:
  Future<MilkingInputsDto?> apiMilkingMilkingInputsPost({
    MilkingInputsDto? milkingInputsDto,
  }) async {
    final response = await apiMilkingMilkingInputsPostWithHttpInfo(
      milkingInputsDto: milkingInputsDto,
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
        'MilkingInputsDto',
      ) as MilkingInputsDto;
    }
    return null;
  }

  /// Performs an HTTP 'POST /api/Milking' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [MilkingDto] milkingDto:
  Future<Response> apiMilkingPostWithHttpInfo({
    MilkingDto? milkingDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking';

    // ignore: prefer_final_locals
    Object? postBody = milkingDto;

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
  /// * [MilkingDto] milkingDto:
  Future<MilkingDto?> apiMilkingPost({
    MilkingDto? milkingDto,
  }) async {
    final response = await apiMilkingPostWithHttpInfo(
      milkingDto: milkingDto,
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
        'MilkingDto',
      ) as MilkingDto;
    }
    return null;
  }

  /// Performs an HTTP 'PUT /api/Milking' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [MilkingDto] milkingDto:
  Future<Response> apiMilkingPutWithHttpInfo({
    MilkingDto? milkingDto,
  }) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking';

    // ignore: prefer_final_locals
    Object? postBody = milkingDto;

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
  /// * [MilkingDto] milkingDto:
  Future<MilkingDto?> apiMilkingPut({
    MilkingDto? milkingDto,
  }) async {
    final response = await apiMilkingPutWithHttpInfo(
      milkingDto: milkingDto,
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
        'MilkingDto',
      ) as MilkingDto;
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Milking/range/{start}/{end}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] start (required):
  ///
  /// * [String] end (required):
  Future<Response> apiMilkingRangeStartEndGetWithHttpInfo(
    String start,
    String end,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/range/{start}/{end}'
        .replaceAll('{start}', start)
        .replaceAll('{end}', end);

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
  /// * [String] start (required):
  ///
  /// * [String] end (required):
  Future<List<MilkingDto>?> apiMilkingRangeStartEndGet(
    String start,
    String end,
  ) async {
    final response = await apiMilkingRangeStartEndGetWithHttpInfo(
      start,
      end,
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
      return (await apiClient.deserializeAsync(responseBody, 'List<MilkingDto>')
              as List)
          .cast<MilkingDto>()
          .toList(growable: false);
    }
    return null;
  }

  /// Performs an HTTP 'GET /api/Milking/volume/range/{start}/{end}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] start (required):
  ///
  /// * [String] end (required):
  Future<Response> apiMilkingVolumeRangeStartEndGetWithHttpInfo(
    String start,
    String end,
  ) async {
    // ignore: prefer_const_declarations
    final path = r'/api/Milking/volume/range/{start}/{end}'
        .replaceAll('{start}', start)
        .replaceAll('{end}', end);

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
  /// * [String] start (required):
  ///
  /// * [String] end (required):
  Future<List<MilkingVolumeDto>?> apiMilkingVolumeRangeStartEndGet(
    String start,
    String end,
  ) async {
    final response = await apiMilkingVolumeRangeStartEndGetWithHttpInfo(
      start,
      end,
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
              responseBody, 'List<MilkingVolumeDto>') as List)
          .cast<MilkingVolumeDto>()
          .toList(growable: false);
    }
    return null;
  }
}
