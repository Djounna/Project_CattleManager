//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/pen_dto.dart';
import 'package:CM_api/src/model/cow_dto.dart';
import 'package:built_collection/built_collection.dart';
import 'package:CM_api/src/model/user_dto.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'job_details_dto.g.dart';

/// JobDetailsDto
///
/// Properties:
/// * [id]
/// * [title]
/// * [description]
/// * [status]
/// * [length]
/// * [pen]
/// * [cow]
/// * [workers]
@BuiltValue()
abstract class JobDetailsDto
    implements Built<JobDetailsDto, JobDetailsDtoBuilder> {
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

  @BuiltValueField(wireName: r'pen')
  PenDto? get pen;

  @BuiltValueField(wireName: r'cow')
  CowDto? get cow;

  @BuiltValueField(wireName: r'workers')
  BuiltList<UserDto>? get workers;

  JobDetailsDto._();

  factory JobDetailsDto([void updates(JobDetailsDtoBuilder b)]) =
      _$JobDetailsDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(JobDetailsDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<JobDetailsDto> get serializer =>
      _$JobDetailsDtoSerializer();
}

class _$JobDetailsDtoSerializer implements PrimitiveSerializer<JobDetailsDto> {
  @override
  final Iterable<Type> types = const [JobDetailsDto, _$JobDetailsDto];

  @override
  final String wireName = r'JobDetailsDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    JobDetailsDto object, {
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
    if (object.pen != null) {
      yield r'pen';
      yield serializers.serialize(
        object.pen,
        specifiedType: const FullType(PenDto),
      );
    }
    if (object.cow != null) {
      yield r'cow';
      yield serializers.serialize(
        object.cow,
        specifiedType: const FullType(CowDto),
      );
    }
    if (object.workers != null) {
      yield r'workers';
      yield serializers.serialize(
        object.workers,
        specifiedType: const FullType.nullable(BuiltList, [FullType(UserDto)]),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    JobDetailsDto object, {
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
    required JobDetailsDtoBuilder result,
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
        case r'pen':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(PenDto),
          ) as PenDto;
          result.pen.replace(valueDes);
          break;
        case r'cow':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CowDto),
          ) as CowDto;
          result.cow.replace(valueDes);
          break;
        case r'workers':
          final valueDes = serializers.deserialize(
            value,
            specifiedType:
                const FullType.nullable(BuiltList, [FullType(UserDto)]),
          ) as BuiltList<UserDto>?;
          if (valueDes == null) continue;
          result.workers.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  JobDetailsDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = JobDetailsDtoBuilder();
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
