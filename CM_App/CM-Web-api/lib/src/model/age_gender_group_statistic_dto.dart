//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'age_gender_group_statistic_dto.g.dart';

/// AgeGenderGroupStatisticDto
///
/// Properties:
/// * [gender]
/// * [ageGroupName]
/// * [number]
@BuiltValue()
abstract class AgeGenderGroupStatisticDto
    implements
        Built<AgeGenderGroupStatisticDto, AgeGenderGroupStatisticDtoBuilder> {
  @BuiltValueField(wireName: r'gender')
  String? get gender;

  @BuiltValueField(wireName: r'ageGroupName')
  String? get ageGroupName;

  @BuiltValueField(wireName: r'number')
  int? get number;

  AgeGenderGroupStatisticDto._();

  factory AgeGenderGroupStatisticDto(
          [void updates(AgeGenderGroupStatisticDtoBuilder b)]) =
      _$AgeGenderGroupStatisticDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(AgeGenderGroupStatisticDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<AgeGenderGroupStatisticDto> get serializer =>
      _$AgeGenderGroupStatisticDtoSerializer();
}

class _$AgeGenderGroupStatisticDtoSerializer
    implements PrimitiveSerializer<AgeGenderGroupStatisticDto> {
  @override
  final Iterable<Type> types = const [
    AgeGenderGroupStatisticDto,
    _$AgeGenderGroupStatisticDto
  ];

  @override
  final String wireName = r'AgeGenderGroupStatisticDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    AgeGenderGroupStatisticDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.gender != null) {
      yield r'gender';
      yield serializers.serialize(
        object.gender,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.ageGroupName != null) {
      yield r'ageGroupName';
      yield serializers.serialize(
        object.ageGroupName,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.number != null) {
      yield r'number';
      yield serializers.serialize(
        object.number,
        specifiedType: const FullType(int),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    AgeGenderGroupStatisticDto object, {
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
    required AgeGenderGroupStatisticDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'gender':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.gender = valueDes;
          break;
        case r'ageGroupName':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.ageGroupName = valueDes;
          break;
        case r'number':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.number = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  AgeGenderGroupStatisticDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = AgeGenderGroupStatisticDtoBuilder();
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
