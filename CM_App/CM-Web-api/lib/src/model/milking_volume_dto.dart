//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/date_only.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'milking_volume_dto.g.dart';

/// MilkingVolumeDto
///
/// Properties:
/// * [date]
/// * [volume]
/// * [average]
/// * [min]
/// * [max]
@BuiltValue()
abstract class MilkingVolumeDto
    implements Built<MilkingVolumeDto, MilkingVolumeDtoBuilder> {
  @BuiltValueField(wireName: r'date')
  DateOnly? get date;

  @BuiltValueField(wireName: r'volume')
  double? get volume;

  @BuiltValueField(wireName: r'average')
  double? get average;

  @BuiltValueField(wireName: r'min')
  double? get min;

  @BuiltValueField(wireName: r'max')
  double? get max;

  MilkingVolumeDto._();

  factory MilkingVolumeDto([void updates(MilkingVolumeDtoBuilder b)]) =
      _$MilkingVolumeDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(MilkingVolumeDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<MilkingVolumeDto> get serializer =>
      _$MilkingVolumeDtoSerializer();
}

class _$MilkingVolumeDtoSerializer
    implements PrimitiveSerializer<MilkingVolumeDto> {
  @override
  final Iterable<Type> types = const [MilkingVolumeDto, _$MilkingVolumeDto];

  @override
  final String wireName = r'MilkingVolumeDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    MilkingVolumeDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.date != null) {
      yield r'date';
      yield serializers.serialize(
        object.date,
        specifiedType: const FullType(DateOnly),
      );
    }
    if (object.volume != null) {
      yield r'volume';
      yield serializers.serialize(
        object.volume,
        specifiedType: const FullType(double),
      );
    }
    if (object.average != null) {
      yield r'average';
      yield serializers.serialize(
        object.average,
        specifiedType: const FullType(double),
      );
    }
    if (object.min != null) {
      yield r'min';
      yield serializers.serialize(
        object.min,
        specifiedType: const FullType(double),
      );
    }
    if (object.max != null) {
      yield r'max';
      yield serializers.serialize(
        object.max,
        specifiedType: const FullType(double),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    MilkingVolumeDto object, {
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
    required MilkingVolumeDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateOnly),
          ) as DateOnly;
          result.date.replace(valueDes);
          break;
        case r'volume':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.volume = valueDes;
          break;
        case r'average':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.average = valueDes;
          break;
        case r'min':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.min = valueDes;
          break;
        case r'max':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.max = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  MilkingVolumeDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = MilkingVolumeDtoBuilder();
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
