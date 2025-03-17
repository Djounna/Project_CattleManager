//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/cow_dto.dart';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'group_details_dto.g.dart';

/// GroupDetailsDto
///
/// Properties:
/// * [id]
/// * [name]
/// * [description]
/// * [imgLink]
/// * [cows]
@BuiltValue()
abstract class GroupDetailsDto
    implements Built<GroupDetailsDto, GroupDetailsDtoBuilder> {
  @BuiltValueField(wireName: r'id')
  int? get id;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'imgLink')
  String? get imgLink;

  @BuiltValueField(wireName: r'cows')
  BuiltList<CowDto>? get cows;

  GroupDetailsDto._();

  factory GroupDetailsDto([void updates(GroupDetailsDtoBuilder b)]) =
      _$GroupDetailsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(GroupDetailsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<GroupDetailsDto> get serializer =>
      _$GroupDetailsDtoSerializer();
}

class _$GroupDetailsDtoSerializer
    implements PrimitiveSerializer<GroupDetailsDto> {
  @override
  final Iterable<Type> types = const [GroupDetailsDto, _$GroupDetailsDto];

  @override
  final String wireName = r'GroupDetailsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    GroupDetailsDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.id != null) {
      yield r'id';
      yield serializers.serialize(
        object.id,
        specifiedType: const FullType(int),
      );
    }
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.description != null) {
      yield r'description';
      yield serializers.serialize(
        object.description,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.imgLink != null) {
      yield r'imgLink';
      yield serializers.serialize(
        object.imgLink,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.cows != null) {
      yield r'cows';
      yield serializers.serialize(
        object.cows,
        specifiedType: const FullType.nullable(BuiltList, [FullType(CowDto)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    GroupDetailsDto object, {
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
    required GroupDetailsDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'id':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.id = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'description':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.description = valueDes;
          break;
        case r'imgLink':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.imgLink = valueDes;
          break;
        case r'cows':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(CowDto)]),
          ) as BuiltList<CowDto>?;
          if (valueDes == null) continue;
          result.cows.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  GroupDetailsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = GroupDetailsDtoBuilder();
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
