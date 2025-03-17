//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:CM_api/src/model/group_statistic_dto.dart';
import 'package:CM_api/src/model/age_gender_group_statistic_dto.dart';
import 'package:CM_api/src/model/pen_statistic_dto.dart';
import 'package:CM_api/src/model/age_group_statistic_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'cattle_statistics_dto.g.dart';

/// CattleStatisticsDto
///
/// Properties:
/// * [groupStatistics]
/// * [penStatistics]
/// * [ageGroupStatistics]
/// * [ageGenderGroupStatisticsFemale]
/// * [ageGenderGroupStatisticsMale]
@BuiltValue()
abstract class CattleStatisticsDto
    implements Built<CattleStatisticsDto, CattleStatisticsDtoBuilder> {
  @BuiltValueField(wireName: r'groupStatistics')
  BuiltList<GroupStatisticDto>? get groupStatistics;

  @BuiltValueField(wireName: r'penStatistics')
  BuiltList<PenStatisticDto>? get penStatistics;

  @BuiltValueField(wireName: r'ageGroupStatistics')
  BuiltList<AgeGroupStatisticDto>? get ageGroupStatistics;

  @BuiltValueField(wireName: r'ageGenderGroupStatisticsFemale')
  BuiltList<AgeGenderGroupStatisticDto>? get ageGenderGroupStatisticsFemale;

  @BuiltValueField(wireName: r'ageGenderGroupStatisticsMale')
  BuiltList<AgeGenderGroupStatisticDto>? get ageGenderGroupStatisticsMale;

  CattleStatisticsDto._();

  factory CattleStatisticsDto([void updates(CattleStatisticsDtoBuilder b)]) =
      _$CattleStatisticsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CattleStatisticsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CattleStatisticsDto> get serializer =>
      _$CattleStatisticsDtoSerializer();
}

class _$CattleStatisticsDtoSerializer
    implements PrimitiveSerializer<CattleStatisticsDto> {
  @override
  final Iterable<Type> types = const [
    CattleStatisticsDto,
    _$CattleStatisticsDto
  ];

  @override
  final String wireName = r'CattleStatisticsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CattleStatisticsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.groupStatistics != null) {
      yield r'groupStatistics';
      yield serializers.serialize(
        object.groupStatistics,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(GroupStatisticDto)]),
      );
    }
    if (object.penStatistics != null) {
      yield r'penStatistics';
      yield serializers.serialize(
        object.penStatistics,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(PenStatisticDto)]),
      );
    }
    if (object.ageGroupStatistics != null) {
      yield r'ageGroupStatistics';
      yield serializers.serialize(
        object.ageGroupStatistics,
        specifiedType: const FullType.nullable(
            BuiltList, [FullType(AgeGroupStatisticDto)]),
      );
    }
    if (object.ageGenderGroupStatisticsFemale != null) {
      yield r'ageGenderGroupStatisticsFemale';
      yield serializers.serialize(
        object.ageGenderGroupStatisticsFemale,
        specifiedType: const FullType.nullable(
            BuiltList, [FullType(AgeGenderGroupStatisticDto)]),
      );
    }
    if (object.ageGenderGroupStatisticsMale != null) {
      yield r'ageGenderGroupStatisticsMale';
      yield serializers.serialize(
        object.ageGenderGroupStatisticsMale,
        specifiedType: const FullType.nullable(
            BuiltList, [FullType(AgeGenderGroupStatisticDto)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    CattleStatisticsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object,
            specifiedType: specifiedType)
        .toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CattleStatisticsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'groupStatistics':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(
                BuiltList, [FullType(GroupStatisticDto)]),
          ) as BuiltList<GroupStatisticDto>?;
          if (valueDes == null) continue;
          result.groupStatistics.replace(valueDes);
          break;
        case r'penStatistics':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(PenStatisticDto)]),
          ) as BuiltList<PenStatisticDto>?;
          if (valueDes == null) continue;
          result.penStatistics.replace(valueDes);
          break;
        case r'ageGroupStatistics':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(
                BuiltList, [FullType(AgeGroupStatisticDto)]),
          ) as BuiltList<AgeGroupStatisticDto>?;
          if (valueDes == null) continue;
          result.ageGroupStatistics.replace(valueDes);
          break;
        case r'ageGenderGroupStatisticsFemale':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(
                BuiltList, [FullType(AgeGenderGroupStatisticDto)]),
          ) as BuiltList<AgeGenderGroupStatisticDto>?;
          if (valueDes == null) continue;
          result.ageGenderGroupStatisticsFemale.replace(valueDes);
          break;
        case r'ageGenderGroupStatisticsMale':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(
                BuiltList, [FullType(AgeGenderGroupStatisticDto)]),
          ) as BuiltList<AgeGenderGroupStatisticDto>?;
          if (valueDes == null) continue;
          result.ageGenderGroupStatisticsMale.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CattleStatisticsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CattleStatisticsDtoBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}
