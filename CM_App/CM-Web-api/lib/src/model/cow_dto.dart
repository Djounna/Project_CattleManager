//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'cow_dto.g.dart';

/// CowDto
///
/// Properties:
/// * [id]
/// * [identifier]
/// * [name]
/// * [milkCow]
/// * [birthDate]
/// * [race]
/// * [gender]
/// * [imgLink]
/// * [motherId]
/// * [fatherId]
/// * [penId]
/// * [groupId]
@BuiltValue()
abstract class CowDto implements Built<CowDto, CowDtoBuilder> {
  @BuiltValueField(wireName: r'id')
  int? get id;

  @BuiltValueField(wireName: r'identifier')
  String? get identifier;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'milkCow')
  bool? get milkCow;

  @BuiltValueField(wireName: r'birthDate')
  DateTime? get birthDate;

  @BuiltValueField(wireName: r'race')
  String? get race;

  @BuiltValueField(wireName: r'gender')
  String? get gender;

  @BuiltValueField(wireName: r'imgLink')
  String? get imgLink;

  @BuiltValueField(wireName: r'motherId')
  int? get motherId;

  @BuiltValueField(wireName: r'fatherId')
  int? get fatherId;

  @BuiltValueField(wireName: r'penId')
  int? get penId;

  @BuiltValueField(wireName: r'groupId')
  int? get groupId;

  CowDto._();

  factory CowDto([void updates(CowDtoBuilder b)]) = _$CowDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CowDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CowDto> get serializer => _$CowDtoSerializer();
}

class _$CowDtoSerializer implements PrimitiveSerializer<CowDto> {
  @override
  final Iterable<Type> types = const [CowDto, _$CowDto];

  @override
  final String wireName = r'CowDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CowDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.id != null) {
      yield r'id';
      yield serializers.serialize(
        object.id,
        specifiedType: const FullType(int),
      );
    }
    if (object.identifier != null) {
      yield r'identifier';
      yield serializers.serialize(
        object.identifier,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.name != null) {
      yield r'name';
      yield serializers.serialize(
        object.name,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.milkCow != null) {
      yield r'milkCow';
      yield serializers.serialize(
        object.milkCow,
        specifiedType: const FullType(bool),
      );
    }
    if (object.birthDate != null) {
      yield r'birthDate';
      yield serializers.serialize(
        object.birthDate,
        specifiedType: const FullType(DateTime),
      );
    }
    if (object.race != null) {
      yield r'race';
      yield serializers.serialize(
        object.race,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.gender != null) {
      yield r'gender';
      yield serializers.serialize(
        object.gender,
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
    if (object.motherId != null) {
      yield r'motherId';
      yield serializers.serialize(
        object.motherId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.fatherId != null) {
      yield r'fatherId';
      yield serializers.serialize(
        object.fatherId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.penId != null) {
      yield r'penId';
      yield serializers.serialize(
        object.penId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.groupId != null) {
      yield r'groupId';
      yield serializers.serialize(
        object.groupId,
        specifiedType: const FullType.nullable(int),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    CowDto object, {
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
    required CowDtoBuilder result,
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
        case r'identifier':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.identifier = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'milkCow':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(bool),
          ) as bool;
          result.milkCow = valueDes;
          break;
        case r'birthDate':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.birthDate = valueDes;
          break;
        case r'race':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.race = valueDes;
          break;
        case r'gender':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.gender = valueDes;
          break;
        case r'imgLink':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.imgLink = valueDes;
          break;
        case r'motherId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.motherId = valueDes;
          break;
        case r'fatherId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.fatherId = valueDes;
          break;
        case r'penId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.penId = valueDes;
          break;
        case r'groupId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.groupId = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CowDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CowDtoBuilder();
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
