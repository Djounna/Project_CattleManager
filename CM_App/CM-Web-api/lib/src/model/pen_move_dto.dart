//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/date_only.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'pen_move_dto.g.dart';

/// PenMoveDto
///
/// Properties:
/// * [cowId]
/// * [date]
/// * [sourcePenId]
/// * [destinationPenId]
@BuiltValue()
abstract class PenMoveDto implements Built<PenMoveDto, PenMoveDtoBuilder> {
  @BuiltValueField(wireName: r'cowId')
  int? get cowId;

  @BuiltValueField(wireName: r'date')
  DateOnly? get date;

  @BuiltValueField(wireName: r'sourcePenId')
  int? get sourcePenId;

  @BuiltValueField(wireName: r'destinationPenId')
  int? get destinationPenId;

  PenMoveDto._();

  factory PenMoveDto([void updates(PenMoveDtoBuilder b)]) = _$PenMoveDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(PenMoveDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<PenMoveDto> get serializer => _$PenMoveDtoSerializer();
}

class _$PenMoveDtoSerializer implements PrimitiveSerializer<PenMoveDto> {
  @override
  final Iterable<Type> types = const [PenMoveDto, _$PenMoveDto];

  @override
  final String wireName = r'PenMoveDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    PenMoveDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.cowId != null) {
      yield r'cowId';
      yield serializers.serialize(
        object.cowId,
        specifiedType: const FullType(int),
      );
    }
    if (object.date != null) {
      yield r'date';
      yield serializers.serialize(
        object.date,
        specifiedType: const FullType(DateOnly),
      );
    }
    if (object.sourcePenId != null) {
      yield r'sourcePenId';
      yield serializers.serialize(
        object.sourcePenId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.destinationPenId != null) {
      yield r'destinationPenId';
      yield serializers.serialize(
        object.destinationPenId,
        specifiedType: const FullType(int),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    PenMoveDto object, {
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
    required PenMoveDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'cowId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.cowId = valueDes;
          break;
        case r'date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateOnly),
          ) as DateOnly;
          result.date.replace(valueDes);
          break;
        case r'sourcePenId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.sourcePenId = valueDes;
          break;
        case r'destinationPenId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.destinationPenId = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  PenMoveDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = PenMoveDtoBuilder();
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
