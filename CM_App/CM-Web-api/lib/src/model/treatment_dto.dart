//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'treatment_dto.g.dart';

/// TreatmentDto
///
/// Properties:
/// * [conditionId]
/// * [name]
/// * [comment]
/// * [date]
@BuiltValue()
abstract class TreatmentDto
    implements Built<TreatmentDto, TreatmentDtoBuilder> {
  @BuiltValueField(wireName: r'conditionId')
  int? get conditionId;

  @BuiltValueField(wireName: r'name')
  String? get name;

  @BuiltValueField(wireName: r'comment')
  String? get comment;

  @BuiltValueField(wireName: r'date')
  DateTime? get date;

  TreatmentDto._();

  factory TreatmentDto([void updates(TreatmentDtoBuilder b)]) = _$TreatmentDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(TreatmentDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<TreatmentDto> get serializer => _$TreatmentDtoSerializer();
}

class _$TreatmentDtoSerializer implements PrimitiveSerializer<TreatmentDto> {
  @override
  final Iterable<Type> types = const [TreatmentDto, _$TreatmentDto];

  @override
  final String wireName = r'TreatmentDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    TreatmentDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.conditionId != null) {
      yield r'conditionId';
      yield serializers.serialize(
        object.conditionId,
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
    if (object.comment != null) {
      yield r'comment';
      yield serializers.serialize(
        object.comment,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.date != null) {
      yield r'date';
      yield serializers.serialize(
        object.date,
        specifiedType: const FullType(DateTime),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    TreatmentDto object, {
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
    required TreatmentDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'conditionId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.conditionId = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.name = valueDes;
          break;
        case r'comment':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.comment = valueDes;
          break;
        case r'date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.date = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  TreatmentDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = TreatmentDtoBuilder();
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
