//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/date_only.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'group_move_dto.g.dart';

/// GroupMoveDto
///
/// Properties:
/// * [cowId]
/// * [date]
/// * [sourceGroupId]
/// * [destinationGroupId]
@BuiltValue()
abstract class GroupMoveDto
    implements Built<GroupMoveDto, GroupMoveDtoBuilder> {
  @BuiltValueField(wireName: r'cowId')
  int? get cowId;

  @BuiltValueField(wireName: r'date')
  DateOnly? get date;

  @BuiltValueField(wireName: r'sourceGroupId')
  int? get sourceGroupId;

  @BuiltValueField(wireName: r'destinationGroupId')
  int? get destinationGroupId;

  GroupMoveDto._();

  factory GroupMoveDto([void updates(GroupMoveDtoBuilder b)]) = _$GroupMoveDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(GroupMoveDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<GroupMoveDto> get serializer => _$GroupMoveDtoSerializer();
}

class _$GroupMoveDtoSerializer implements PrimitiveSerializer<GroupMoveDto> {
  @override
  final Iterable<Type> types = const [GroupMoveDto, _$GroupMoveDto];

  @override
  final String wireName = r'GroupMoveDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    GroupMoveDto object, {
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
    if (object.sourceGroupId != null) {
      yield r'sourceGroupId';
      yield serializers.serialize(
        object.sourceGroupId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.destinationGroupId != null) {
      yield r'destinationGroupId';
      yield serializers.serialize(
        object.destinationGroupId,
        specifiedType: const FullType(int),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    GroupMoveDto object, {
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
    required GroupMoveDtoBuilder result,
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
        case r'sourceGroupId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.sourceGroupId = valueDes;
          break;
        case r'destinationGroupId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.destinationGroupId = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  GroupMoveDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = GroupMoveDtoBuilder();
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
