//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/pen_details_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'assign_pen_details_dto.g.dart';

/// AssignPenDetailsDto
///
/// Properties:
/// * [pen1]
/// * [pen2]
@BuiltValue()
abstract class AssignPenDetailsDto
    implements Built<AssignPenDetailsDto, AssignPenDetailsDtoBuilder> {
  @BuiltValueField(wireName: r'pen1')
  PenDetailsDto? get pen1;

  @BuiltValueField(wireName: r'pen2')
  PenDetailsDto? get pen2;

  AssignPenDetailsDto._();

  factory AssignPenDetailsDto([void updates(AssignPenDetailsDtoBuilder b)]) =
      _$AssignPenDetailsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(AssignPenDetailsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<AssignPenDetailsDto> get serializer =>
      _$AssignPenDetailsDtoSerializer();
}

class _$AssignPenDetailsDtoSerializer
    implements PrimitiveSerializer<AssignPenDetailsDto> {
  @override
  final Iterable<Type> types = const [
    AssignPenDetailsDto,
    _$AssignPenDetailsDto
  ];

  @override
  final String wireName = r'AssignPenDetailsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    AssignPenDetailsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.pen1 != null) {
      yield r'pen1';
      yield serializers.serialize(
        object.pen1,
        specifiedType: const FullType(PenDetailsDto),
      );
    }
    if (object.pen2 != null) {
      yield r'pen2';
      yield serializers.serialize(
        object.pen2,
        specifiedType: const FullType(PenDetailsDto),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    AssignPenDetailsDto object, {
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
    required AssignPenDetailsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'pen1':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(PenDetailsDto),
          ) as PenDetailsDto;
          result.pen1.replace(valueDes);
          break;
        case r'pen2':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(PenDetailsDto),
          ) as PenDetailsDto;
          result.pen2.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  AssignPenDetailsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = AssignPenDetailsDtoBuilder();
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
