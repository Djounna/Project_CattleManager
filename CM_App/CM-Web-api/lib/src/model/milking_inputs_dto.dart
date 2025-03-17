//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/date_only.dart';
import 'package:built_collection/built_collection.dart';
import 'package:CM_api/src/model/milking_input_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'milking_inputs_dto.g.dart';

/// MilkingInputsDto
///
/// Properties:
/// * [date]
/// * [milkingInputs]
@BuiltValue()
abstract class MilkingInputsDto
    implements Built<MilkingInputsDto, MilkingInputsDtoBuilder> {
  @BuiltValueField(wireName: r'date')
  DateOnly? get date;

  @BuiltValueField(wireName: r'milkingInputs')
  BuiltList<MilkingInputDto>? get milkingInputs;

  MilkingInputsDto._();

  factory MilkingInputsDto([void updates(MilkingInputsDtoBuilder b)]) =
      _$MilkingInputsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(MilkingInputsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<MilkingInputsDto> get serializer =>
      _$MilkingInputsDtoSerializer();
}

class _$MilkingInputsDtoSerializer
    implements PrimitiveSerializer<MilkingInputsDto> {
  @override
  final Iterable<Type> types = const [MilkingInputsDto, _$MilkingInputsDto];

  @override
  final String wireName = r'MilkingInputsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    MilkingInputsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.date != null) {
      yield r'date';
      yield serializers.serialize(
        object.date,
        specifiedType: const FullType(DateOnly),
      );
    }
    if (object.milkingInputs != null) {
      yield r'milkingInputs';
      yield serializers.serialize(
        object.milkingInputs,
        specifiedType:
            const FullType.nullable(BuiltList, [FullType(MilkingInputDto)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    MilkingInputsDto object, {
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
    required MilkingInputsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateOnly),
          ) as DateOnly;
          result.date.replace(valueDes);
          break;
        case r'milkingInputs':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(MilkingInputDto)]),
          ) as BuiltList<MilkingInputDto>?;
          if (valueDes == null) continue;
          result.milkingInputs.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  MilkingInputsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = MilkingInputsDtoBuilder();
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
