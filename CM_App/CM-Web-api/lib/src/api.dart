//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

import 'package:dio/dio.dart';
import 'package:built_value/serializer.dart';
import 'package:CM_api/src/serializers.dart';
import 'package:CM_api/src/auth/api_key_auth.dart';
import 'package:CM_api/src/auth/basic_auth.dart';
import 'package:CM_api/src/auth/bearer_auth.dart';
import 'package:CM_api/src/auth/oauth.dart';
import 'package:CM_api/src/api/alert_api.dart';
import 'package:CM_api/src/api/condition_api.dart';
import 'package:CM_api/src/api/cow_api.dart';
import 'package:CM_api/src/api/gestation_api.dart';
import 'package:CM_api/src/api/group_api.dart';
import 'package:CM_api/src/api/intervenant_api.dart';
import 'package:CM_api/src/api/intervention_api.dart';
import 'package:CM_api/src/api/job_api.dart';
import 'package:CM_api/src/api/milk_production_api.dart';
import 'package:CM_api/src/api/milking_api.dart';
import 'package:CM_api/src/api/pen_api.dart';
import 'package:CM_api/src/api/statistic_api.dart';
import 'package:CM_api/src/api/stock_api.dart';
import 'package:CM_api/src/api/treatment_api.dart';
import 'package:CM_api/src/api/user_management_api.dart';
import 'package:CM_api/src/api/vaccination_api.dart';
import 'package:CM_api/src/api/worker_api.dart';
import 'package:CM_api/src/api/worker_job_api.dart';

class CMApi {
  static const String basePath = r'http://localhost';

  final Dio dio;
  final Serializers serializers;

  CMApi({
    Dio? dio,
    Serializers? serializers,
    String? basePathOverride,
    List<Interceptor>? interceptors,
  })  : this.serializers = serializers ?? standardSerializers,
        this.dio = dio ??
            Dio(BaseOptions(
              baseUrl: basePathOverride ?? basePath,
              connectTimeout: const Duration(milliseconds: 5000),
              receiveTimeout: const Duration(milliseconds: 3000),
            )) {
    if (interceptors == null) {
      this.dio.interceptors.addAll([
        OAuthInterceptor(),
        BasicAuthInterceptor(),
        BearerAuthInterceptor(),
        ApiKeyAuthInterceptor(),
      ]);
    } else {
      this.dio.interceptors.addAll(interceptors);
    }
  }

  void setOAuthToken(String name, String token) {
    if (this.dio.interceptors.any((i) => i is OAuthInterceptor)) {
      (this.dio.interceptors.firstWhere((i) => i is OAuthInterceptor)
              as OAuthInterceptor)
          .tokens[name] = token;
    }
  }

  void setBearerAuth(String name, String token) {
    if (this.dio.interceptors.any((i) => i is BearerAuthInterceptor)) {
      (this.dio.interceptors.firstWhere((i) => i is BearerAuthInterceptor)
              as BearerAuthInterceptor)
          .tokens[name] = token;
    }
  }

  void setBasicAuth(String name, String username, String password) {
    if (this.dio.interceptors.any((i) => i is BasicAuthInterceptor)) {
      (this.dio.interceptors.firstWhere((i) => i is BasicAuthInterceptor)
              as BasicAuthInterceptor)
          .authInfo[name] = BasicAuthInfo(username, password);
    }
  }

  void setApiKey(String name, String apiKey) {
    if (this.dio.interceptors.any((i) => i is ApiKeyAuthInterceptor)) {
      (this
                  .dio
                  .interceptors
                  .firstWhere((element) => element is ApiKeyAuthInterceptor)
              as ApiKeyAuthInterceptor)
          .apiKeys[name] = apiKey;
    }
  }

  /// Get AlertApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  AlertApi getAlertApi() {
    return AlertApi(dio, serializers);
  }

  /// Get ConditionApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  ConditionApi getConditionApi() {
    return ConditionApi(dio, serializers);
  }

  /// Get CowApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  CowApi getCowApi() {
    return CowApi(dio, serializers);
  }

  /// Get GestationApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  GestationApi getGestationApi() {
    return GestationApi(dio, serializers);
  }

  /// Get GroupApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  GroupApi getGroupApi() {
    return GroupApi(dio, serializers);
  }

  /// Get IntervenantApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  IntervenantApi getIntervenantApi() {
    return IntervenantApi(dio, serializers);
  }

  /// Get InterventionApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  InterventionApi getInterventionApi() {
    return InterventionApi(dio, serializers);
  }

  /// Get JobApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  JobApi getJobApi() {
    return JobApi(dio, serializers);
  }

  /// Get MilkProductionApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  MilkProductionApi getMilkProductionApi() {
    return MilkProductionApi(dio, serializers);
  }

  /// Get MilkingApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  MilkingApi getMilkingApi() {
    return MilkingApi(dio, serializers);
  }

  /// Get PenApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  PenApi getPenApi() {
    return PenApi(dio, serializers);
  }

  /// Get StatisticApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  StatisticApi getStatisticApi() {
    return StatisticApi(dio, serializers);
  }

  /// Get StockApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  StockApi getStockApi() {
    return StockApi(dio, serializers);
  }

  /// Get TreatmentApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  TreatmentApi getTreatmentApi() {
    return TreatmentApi(dio, serializers);
  }

  /// Get UserManagementApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  UserManagementApi getUserManagementApi() {
    return UserManagementApi(dio, serializers);
  }

  /// Get VaccinationApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  VaccinationApi getVaccinationApi() {
    return VaccinationApi(dio, serializers);
  }

  /// Get WorkerApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  WorkerApi getWorkerApi() {
    return WorkerApi(dio, serializers);
  }

  /// Get WorkerJobApi instance, base route and serializer can be overridden by a given but be careful,
  /// by doing that all interceptors will not be executed
  WorkerJobApi getWorkerJobApi() {
    return WorkerJobApi(dio, serializers);
  }
}
