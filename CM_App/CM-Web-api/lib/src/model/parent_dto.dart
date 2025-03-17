//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/cow_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'parent_dto.g.dart';

/// ParentDto
///
/// Properties:
/// * [cow]
/// * [mother]
/// * [father]
@BuiltValue()
abstract class ParentDto implements Built<ParentDto, ParentDtoBuilder> {
  @BuiltValueField(wireName: r'cow')
  CowDto? get cow;

  @BuiltValueField(wireName: r'mother')
  CowDto? get mother;

  @BuiltValueField(wireName: r'father')
  CowDto? get father;

  ParentDto._();

  factory ParentDto([void updates(ParentDtoBuilder b)]) = _$ParentDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ParentDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<ParentDto> get serializer => _$ParentDtoSerializer();
}

class _$ParentDtoSerializer implements PrimitiveSerializer<ParentDto> {
  @override
  final Iterable<Type> types = const [ParentDto, _$ParentDto];

  @override
  final String wireName = r'ParentDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    ParentDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.cow != null) {
      yield r'cow';
      yield serializers.serialize(
        object.cow,
        specifiedType: const FullType(CowDto),
      );
    }
    if (object.mother != null) {
      yield r'mother';
      yield serializers.serialize(
        object.mother,
        specifiedType: const FullType(CowDto),
      );
    }
    if (object.father != null) {
      yield r'father';
      yield serializers.serialize(
        object.father,
        specifiedType: const FullType(CowDto),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    ParentDto object, {
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
    required ParentDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'cow':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CowDto),
          ) as CowDto;
          result.cow.replace(valueDes);
          break;
        case r'mother':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CowDto),
          ) as CowDto;
          result.mother.replace(valueDes);
          break;
        case r'father':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CowDto),
          ) as CowDto;
          result.father.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  ParentDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ParentDtoBuilder();
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
