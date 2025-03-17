//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_import

import 'package:one_of_serializer/any_of_serializer.dart';
import 'package:one_of_serializer/one_of_serializer.dart';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/json_object.dart';
import 'package:built_value/serializer.dart';
import 'package:built_value/standard_json_plugin.dart';
import 'package:built_value/iso_8601_date_time_serializer.dart';
import 'package:CM_api/src/date_serializer.dart';
import 'package:CM_api/src/model/date.dart';

import 'package:CM_api/src/model/age_gender_group_statistic_dto.dart';
import 'package:CM_api/src/model/age_group_statistic_dto.dart';
import 'package:CM_api/src/model/alert_dto.dart';
import 'package:CM_api/src/model/assign_group_details_dto.dart';
import 'package:CM_api/src/model/assign_pen_details_dto.dart';
import 'package:CM_api/src/model/cattle_statistics_dto.dart';
import 'package:CM_api/src/model/condition_dto.dart';
import 'package:CM_api/src/model/cow_details_dto.dart';
import 'package:CM_api/src/model/cow_dto.dart';
import 'package:CM_api/src/model/date_only.dart';
import 'package:CM_api/src/model/day_of_week.dart';
import 'package:CM_api/src/model/genealogy_dto.dart';
import 'package:CM_api/src/model/gestation_dto.dart';
import 'package:CM_api/src/model/group_details_dto.dart';
import 'package:CM_api/src/model/group_dto.dart';
import 'package:CM_api/src/model/group_move_dto.dart';
import 'package:CM_api/src/model/group_statistic_dto.dart';
import 'package:CM_api/src/model/intervenant_dto.dart';
import 'package:CM_api/src/model/intervention_dto.dart';
import 'package:CM_api/src/model/job_details_dto.dart';
import 'package:CM_api/src/model/job_dto.dart';
import 'package:CM_api/src/model/milk_production_dto.dart';
import 'package:CM_api/src/model/milking_dto.dart';
import 'package:CM_api/src/model/milking_input_dto.dart';
import 'package:CM_api/src/model/milking_inputs_dto.dart';
import 'package:CM_api/src/model/milking_volume_dto.dart';
import 'package:CM_api/src/model/parent_dto.dart';
import 'package:CM_api/src/model/pen_details_dto.dart';
import 'package:CM_api/src/model/pen_dto.dart';
import 'package:CM_api/src/model/pen_move_dto.dart';
import 'package:CM_api/src/model/pen_statistic_dto.dart';
import 'package:CM_api/src/model/problem_details.dart';
import 'package:CM_api/src/model/role_dto.dart';
import 'package:CM_api/src/model/stock_dto.dart';
import 'package:CM_api/src/model/treatment_dto.dart';
import 'package:CM_api/src/model/user_dto.dart';
import 'package:CM_api/src/model/user_input.dart';
import 'package:CM_api/src/model/vaccination_dto.dart';
import 'package:CM_api/src/model/worker_job_dto.dart';

part 'serializers.g.dart';

@SerializersFor([
  AgeGenderGroupStatisticDto,
  AgeGroupStatisticDto,
  AlertDto,
  AssignGroupDetailsDto,
  AssignPenDetailsDto,
  CattleStatisticsDto,
  ConditionDto,
  CowDetailsDto,
  CowDto,
  DateOnly,
  DayOfWeek,
  GenealogyDto,
  GestationDto,
  GroupDetailsDto,
  GroupDto,
  GroupMoveDto,
  GroupStatisticDto,
  IntervenantDto,
  InterventionDto,
  JobDetailsDto,
  JobDto,
  MilkProductionDto,
  MilkingDto,
  MilkingInputDto,
  MilkingInputsDto,
  MilkingVolumeDto,
  ParentDto,
  PenDetailsDto,
  PenDto,
  PenMoveDto,
  PenStatisticDto,
  ProblemDetails,
  RoleDto,
  StockDto,
  TreatmentDto,
  UserDto,
  UserInput,
  VaccinationDto,
  WorkerJobDto,
])
Serializers serializers = (_$serializers.toBuilder()
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(StockDto)]),
        () => ListBuilder<StockDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(MilkingVolumeDto)]),
        () => ListBuilder<MilkingVolumeDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(VaccinationDto)]),
        () => ListBuilder<VaccinationDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(ConditionDto)]),
        () => ListBuilder<ConditionDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(RoleDto)]),
        () => ListBuilder<RoleDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(CowDto)]),
        () => ListBuilder<CowDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(InterventionDto)]),
        () => ListBuilder<InterventionDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(TreatmentDto)]),
        () => ListBuilder<TreatmentDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(JobDto)]),
        () => ListBuilder<JobDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(MilkingDto)]),
        () => ListBuilder<MilkingDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(JobDetailsDto)]),
        () => ListBuilder<JobDetailsDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(MilkProductionDto)]),
        () => ListBuilder<MilkProductionDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(IntervenantDto)]),
        () => ListBuilder<IntervenantDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(AlertDto)]),
        () => ListBuilder<AlertDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(GroupDto)]),
        () => ListBuilder<GroupDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(PenDto)]),
        () => ListBuilder<PenDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(UserDto)]),
        () => ListBuilder<UserDto>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(GestationDto)]),
        () => ListBuilder<GestationDto>(),
      )
      ..add(const OneOfSerializer())
      ..add(const AnyOfSerializer())
      ..add(const DateSerializer())
      ..add(Iso8601DateTimeSerializer()))
    .build();

Serializers standardSerializers =
    (serializers.toBuilder()..addPlugin(StandardJsonPlugin())).build();
