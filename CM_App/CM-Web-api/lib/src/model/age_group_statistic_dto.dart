//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'age_group_statistic_dto.g.dart';

/// AgeGroupStatisticDto
///
/// Properties:
/// * [ageGroupName]
/// * [number]
@BuiltValue()
abstract class AgeGroupStatisticDto
    implements Built<AgeGroupStatisticDto, AgeGroupStatisticDtoBuilder> {
  @BuiltValueField(wireName: r'ageGroupName')
  String? get ageGroupName;

  @BuiltValueField(wireName: r'number')
  int? get number;

  AgeGroupStatisticDto._();

  factory AgeGroupStatisticDto([void updates(AgeGroupStatisticDtoBuilder b)]) =
      _$AgeGroupStatisticDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(AgeGroupStatisticDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<AgeGroupStatisticDto> get serializer =>
      _$AgeGroupStatisticDtoSerializer();
}

class _$AgeGroupStatisticDtoSerializer
    implements PrimitiveSerializer<AgeGroupStatisticDto> {
  @override
  final Iterable<Type> types = const [
    AgeGroupStatisticDto,
    _$AgeGroupStatisticDto
  ];

  @override
  final String wireName = r'AgeGroupStatisticDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    AgeGroupStatisticDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
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
    AgeGroupStatisticDto object, {
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
    required AgeGroupStatisticDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
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
  AgeGroupStatisticDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = AgeGroupStatisticDtoBuilder();
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
