//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'job_dto.g.dart';

/// JobDto
///
/// Properties:
/// * [id]
/// * [title]
/// * [description]
/// * [status]
/// * [length]
/// * [recurringJobId]
/// * [infos]
/// * [penId]
/// * [cowId]
@BuiltValue()
abstract class JobDto implements Built<JobDto, JobDtoBuilder> {
  @BuiltValueField(wireName: r'id')
  int? get id;

  @BuiltValueField(wireName: r'title')
  String? get title;

  @BuiltValueField(wireName: r'description')
  String? get description;

  @BuiltValueField(wireName: r'status')
  String? get status;

  @BuiltValueField(wireName: r'length')
  int? get length;

  @BuiltValueField(wireName: r'recurringJobId')
  int? get recurringJobId;

  @BuiltValueField(wireName: r'infos')
  String? get infos;

  @BuiltValueField(wireName: r'penId')
  int? get penId;

  @BuiltValueField(wireName: r'cowId')
  int? get cowId;

  JobDto._();

  factory JobDto([void updates(JobDtoBuilder b)]) = _$JobDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(JobDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<JobDto> get serializer => _$JobDtoSerializer();
}

class _$JobDtoSerializer implements PrimitiveSerializer<JobDto> {
  @override
  final Iterable<Type> types = const [JobDto, _$JobDto];

  @override
  final String wireName = r'JobDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    JobDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.id != null) {
      yield r'id';
      yield serializers.serialize(
        object.id,
        specifiedType: const FullType(int),
      );
    }
    if (object.title != null) {
      yield r'title';
      yield serializers.serialize(
        object.title,
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
    if (object.status != null) {
      yield r'status';
      yield serializers.serialize(
        object.status,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.length != null) {
      yield r'length';
      yield serializers.serialize(
        object.length,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.recurringJobId != null) {
      yield r'recurringJobId';
      yield serializers.serialize(
        object.recurringJobId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.infos != null) {
      yield r'infos';
      yield serializers.serialize(
        object.infos,
        specifiedType: const FullType.nullable(String),
      );
    }
    if (object.penId != null) {
      yield r'penId';
      yield serializers.serialize(
        object.penId,
        specifiedType: const FullType.nullable(int),
      );
    }
    if (object.cowId != null) {
      yield r'cowId';
      yield serializers.serialize(
        object.cowId,
        specifiedType: const FullType.nullable(int),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    JobDto object, {
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
    required JobDtoBuilder result,
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
        case r'title':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.title = valueDes;
          break;
        case r'description':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.description = valueDes;
          break;
        case r'status':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.status = valueDes;
          break;
        case r'length':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.length = valueDes;
          break;
        case r'recurringJobId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.recurringJobId = valueDes;
          break;
        case r'infos':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(String),
          ) as String?;
          if (valueDes == null) continue;
          result.infos = valueDes;
          break;
        case r'penId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.penId = valueDes;
          break;
        case r'cowId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(int),
          ) as int?;
          if (valueDes == null) continue;
          result.cowId = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  JobDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = JobDtoBuilder();
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
