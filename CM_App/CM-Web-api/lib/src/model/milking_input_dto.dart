//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/date_only.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'milking_input_dto.g.dart';

/// MilkingInputDto
///
/// Properties:
/// * [cowId]
/// * [done]
/// * [volume]
/// * [date]
/// * [cancelled]
@BuiltValue()
abstract class MilkingInputDto
    implements Built<MilkingInputDto, MilkingInputDtoBuilder> {
  @BuiltValueField(wireName: r'cowId')
  int? get cowId;

  @BuiltValueField(wireName: r'done')
  bool? get done;

  @BuiltValueField(wireName: r'volume')
  double? get volume;

  @BuiltValueField(wireName: r'date')
  DateOnly? get date;

  @BuiltValueField(wireName: r'cancelled')
  bool? get cancelled;

  MilkingInputDto._();

  factory MilkingInputDto([void updates(MilkingInputDtoBuilder b)]) =
      _$MilkingInputDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(MilkingInputDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<MilkingInputDto> get serializer =>
      _$MilkingInputDtoSerializer();
}

class _$MilkingInputDtoSerializer
    implements PrimitiveSerializer<MilkingInputDto> {
  @override
  final Iterable<Type> types = const [MilkingInputDto, _$MilkingInputDto];

  @override
  final String wireName = r'MilkingInputDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    MilkingInputDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.cowId != null) {
      yield r'cowId';
      yield serializers.serialize(
        object.cowId,
        specifiedType: const FullType(int),
      );
    }
    if (object.done != null) {
      yield r'done';
      yield serializers.serialize(
        object.done,
        specifiedType: const FullType(bool),
      );
    }
    if (object.volume != null) {
      yield r'volume';
      yield serializers.serialize(
        object.volume,
        specifiedType: const FullType(double),
      );
    }
    if (object.date != null) {
      yield r'date';
      yield serializers.serialize(
        object.date,
        specifiedType: const FullType(DateOnly),
      );
    }
    if (object.cancelled != null) {
      yield r'cancelled';
      yield serializers.serialize(
        object.cancelled,
        specifiedType: const FullType(bool),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    MilkingInputDto object, {
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
    required MilkingInputDtoBuilder result,
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
        case r'done':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.done = valueDes;
          break;
        case r'volume':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.volume = valueDes;
          break;
        case r'date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateOnly),
          ) as DateOnly;
          result.date.replace(valueDes);
          break;
        case r'cancelled':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.cancelled = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  MilkingInputDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = MilkingInputDtoBuilder();
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
