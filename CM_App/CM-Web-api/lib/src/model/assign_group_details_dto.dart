//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/group_details_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'assign_group_details_dto.g.dart';

/// AssignGroupDetailsDto
///
/// Properties:
/// * [group1]
/// * [group2]
@BuiltValue()
abstract class AssignGroupDetailsDto
    implements Built<AssignGroupDetailsDto, AssignGroupDetailsDtoBuilder> {
  @BuiltValueField(wireName: r'group1')
  GroupDetailsDto? get group1;

  @BuiltValueField(wireName: r'group2')
  GroupDetailsDto? get group2;

  AssignGroupDetailsDto._();

  factory AssignGroupDetailsDto(
      [void updates(AssignGroupDetailsDtoBuilder b)]) = _$AssignGroupDetailsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(AssignGroupDetailsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<AssignGroupDetailsDto> get serializer =>
      _$AssignGroupDetailsDtoSerializer();
}

class _$AssignGroupDetailsDtoSerializer
    implements PrimitiveSerializer<AssignGroupDetailsDto> {
  @override
  final Iterable<Type> types = const [
    AssignGroupDetailsDto,
    _$AssignGroupDetailsDto
  ];

  @override
  final String wireName = r'AssignGroupDetailsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    AssignGroupDetailsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.group1 != null) {
      yield r'group1';
      yield serializers.serialize(
        object.group1,
        specifiedType: const FullType(GroupDetailsDto),
      );
    }
    if (object.group2 != null) {
      yield r'group2';
      yield serializers.serialize(
        object.group2,
        specifiedType: const FullType(GroupDetailsDto),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    AssignGroupDetailsDto object, {
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
    required AssignGroupDetailsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'group1':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(GroupDetailsDto),
          ) as GroupDetailsDto;
          result.group1.replace(valueDes);
          break;
        case r'group2':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(GroupDetailsDto),
          ) as GroupDetailsDto;
          result.group2.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  AssignGroupDetailsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = AssignGroupDetailsDtoBuilder();
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
