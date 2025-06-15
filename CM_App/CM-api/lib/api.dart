//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

library openapi.api;

import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:collection/collection.dart';
import 'package:http/http.dart';
import 'package:intl/intl.dart';
import 'package:meta/meta.dart';

part 'api_client.dart';
part 'api_helper.dart';
part 'api_exception.dart';
part 'auth/authentication.dart';
part 'auth/api_key_auth.dart';
part 'auth/oauth.dart';
part 'auth/http_basic_auth.dart';
part 'auth/http_bearer_auth.dart';

part 'api/alert_api.dart';
part 'api/condition_api.dart';
part 'api/cow_api.dart';
part 'api/gestation_api.dart';
part 'api/group_api.dart';
part 'api/intervenant_api.dart';
part 'api/intervention_api.dart';
part 'api/job_api.dart';
part 'api/milk_production_api.dart';
part 'api/milking_api.dart';
part 'api/pen_api.dart';
part 'api/statistic_api.dart';
part 'api/stock_api.dart';
part 'api/treatment_api.dart';
part 'api/user_management_api.dart';
part 'api/vaccination_api.dart';
part 'api/worker_api.dart';
part 'api/worker_job_api.dart';

part 'model/age_gender_group_statistic_dto.dart';
part 'model/age_group_statistic_dto.dart';
part 'model/alert_dto.dart';
part 'model/assign_group_details_dto.dart';
part 'model/assign_pen_details_dto.dart';
part 'model/cattle_statistics_dto.dart';
part 'model/condition_dto.dart';
part 'model/cow_details_dto.dart';
part 'model/cow_dto.dart';
part 'model/cow_genealogy_dto.dart';
part 'model/date_only.dart';
part 'model/day_of_week.dart';
part 'model/gestation_dto.dart';
part 'model/group_details_dto.dart';
part 'model/group_dto.dart';
part 'model/group_move_dto.dart';
part 'model/group_statistic_dto.dart';
part 'model/intervenant_dto.dart';
part 'model/intervention_dto.dart';
part 'model/job_details_dto.dart';
part 'model/job_dto.dart';
part 'model/milk_production_dto.dart';
part 'model/milking_dto.dart';
part 'model/milking_input_dto.dart';
part 'model/milking_inputs_dto.dart';
part 'model/milking_volume_dto.dart';
part 'model/parent_dto.dart';
part 'model/pen_details_dto.dart';
part 'model/pen_dto.dart';
part 'model/pen_move_dto.dart';
part 'model/pen_statistic_dto.dart';
part 'model/problem_details.dart';
part 'model/role_dto.dart';
part 'model/stock_dto.dart';
part 'model/treatment_dto.dart';
part 'model/user_dto.dart';
part 'model/user_input.dart';
part 'model/vaccination_dto.dart';
part 'model/worker_job_dto.dart';

/// An [ApiClient] instance that uses the default values obtained from
/// the OpenAPI specification file.
var defaultApiClient = ApiClient();

const _delimiters = {'csv': ',', 'ssv': ' ', 'tsv': '\t', 'pipes': '|'};
const _dateEpochMarker = 'epoch';
const _deepEquality = DeepCollectionEquality();
final _dateFormatter = DateFormat('yyyy-MM-dd');
final _regList = RegExp(r'^List<(.*)>$');
final _regSet = RegExp(r'^Set<(.*)>$');
final _regMap = RegExp(r'^Map<String,(.*)>$');

bool _isEpochMarker(String? pattern) =>
    pattern == _dateEpochMarker || pattern == '/$_dateEpochMarker/';
