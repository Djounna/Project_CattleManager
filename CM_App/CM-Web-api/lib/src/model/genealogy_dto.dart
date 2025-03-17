//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/parent_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'genealogy_dto.g.dart';

/// GenealogyDto
///
/// Properties:
/// * [mother]
/// * [father]
@BuiltValue()
abstract class GenealogyDto
    implements Built<GenealogyDto, GenealogyDtoBuilder> {
  @BuiltValueField(wireName: r'mother')
  ParentDto? get mother;

  @BuiltValueField(wireName: r'father')
  ParentDto? get father;

  GenealogyDto._();

  factory GenealogyDto([void updates(GenealogyDtoBuilder b)]) = _$GenealogyDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(GenealogyDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<GenealogyDto> get serializer => _$GenealogyDtoSerializer();
}

class _$GenealogyDtoSerializer implements PrimitiveSerializer<GenealogyDto> {
  @override
  final Iterable<Type> types = const [GenealogyDto, _$GenealogyDto];

  @override
  final String wireName = r'GenealogyDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    GenealogyDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.mother != null) {
      yield r'mother';
      yield serializers.serialize(
        object.mother,
        specifiedType: const FullType(ParentDto),
      );
    }
    if (object.father != null) {
      yield r'father';
      yield serializers.serialize(
        object.father,
        specifiedType: const FullType(ParentDto),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    GenealogyDto object, {
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
    required GenealogyDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'mother':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(ParentDto),
          ) as ParentDto;
          result.mother.replace(valueDes);
          break;
        case r'father':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(ParentDto),
          ) as ParentDto;
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
  GenealogyDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = GenealogyDtoBuilder();
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
