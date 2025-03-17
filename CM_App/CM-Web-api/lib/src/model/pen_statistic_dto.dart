//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'pen_statistic_dto.g.dart';

/// PenStatisticDto
///
/// Properties:
/// * [penId]
/// * [penName]
/// * [number]
@BuiltValue()
abstract class PenStatisticDto
    implements Built<PenStatisticDto, PenStatisticDtoBuilder> {
  @BuiltValueField(wireName: r'penId')
  int? get penId;

  @BuiltValueField(wireName: r'penName')
  String? get penName;

  @BuiltValueField(wireName: r'number')
  int? get number;

  PenStatisticDto._();

  factory PenStatisticDto([void updates(PenStatisticDtoBuilder b)]) =
      _$PenStatisticDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(PenStatisticDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<PenStatisticDto> get serializer =>
      _$PenStatisticDtoSerializer();
}

class _$PenStatisticDtoSerializer
    implements PrimitiveSerializer<PenStatisticDto> {
  @override
  final Iterable<Type> types = const [PenStatisticDto, _$PenStatisticDto];

  @override
  final String wireName = r'PenStatisticDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    PenStatisticDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.penId != null) {
      yield r'penId';
      yield serializers.serialize(
        object.penId,
        specifiedType: const FullType(int),
      );
    }
    if (object.penName != null) {
      yield r'penName';
      yield serializers.serialize(
        object.penName,
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
    PenStatisticDto object, {
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
    required PenStatisticDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'penId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.penId = valueDes;
          break;
        case r'penName':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.penName = valueDes;
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
  PenStatisticDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = PenStatisticDtoBuilder();
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
