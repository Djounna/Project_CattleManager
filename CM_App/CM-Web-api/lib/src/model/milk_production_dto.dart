//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'milk_production_dto.g.dart';

/// MilkProductionDto
///
/// Properties:
/// * [id]
/// * [cowId]
/// * [weeklyProduction]
/// * [monthlyProduction]
/// * [lifetimeAverage]
/// * [totalQuantity]
/// * [totalDays]
@BuiltValue()
abstract class MilkProductionDto
    implements Built<MilkProductionDto, MilkProductionDtoBuilder> {
  @BuiltValueField(wireName: r'id')
  int? get id;

  @BuiltValueField(wireName: r'cowId')
  int? get cowId;

  @BuiltValueField(wireName: r'weeklyProduction')
  double? get weeklyProduction;

  @BuiltValueField(wireName: r'monthlyProduction')
  double? get monthlyProduction;

  @BuiltValueField(wireName: r'lifetimeAverage')
  double? get lifetimeAverage;

  @BuiltValueField(wireName: r'totalQuantity')
  double? get totalQuantity;

  @BuiltValueField(wireName: r'totalDays')
  double? get totalDays;

  MilkProductionDto._();

  factory MilkProductionDto([void updates(MilkProductionDtoBuilder b)]) =
      _$MilkProductionDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(MilkProductionDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<MilkProductionDto> get serializer =>
      _$MilkProductionDtoSerializer();
}

class _$MilkProductionDtoSerializer
    implements PrimitiveSerializer<MilkProductionDto> {
  @override
  final Iterable<Type> types = const [MilkProductionDto, _$MilkProductionDto];

  @override
  final String wireName = r'MilkProductionDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    MilkProductionDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.id != null) {
      yield r'id';
      yield serializers.serialize(
        object.id,
        specifiedType: const FullType(int),
      );
    }
    if (object.cowId != null) {
      yield r'cowId';
      yield serializers.serialize(
        object.cowId,
        specifiedType: const FullType(int),
      );
    }
    if (object.weeklyProduction != null) {
      yield r'weeklyProduction';
      yield serializers.serialize(
        object.weeklyProduction,
        specifiedType: const FullType(double),
      );
    }
    if (object.monthlyProduction != null) {
      yield r'monthlyProduction';
      yield serializers.serialize(
        object.monthlyProduction,
        specifiedType: const FullType(double),
      );
    }
    if (object.lifetimeAverage != null) {
      yield r'lifetimeAverage';
      yield serializers.serialize(
        object.lifetimeAverage,
        specifiedType: const FullType(double),
      );
    }
    if (object.totalQuantity != null) {
      yield r'totalQuantity';
      yield serializers.serialize(
        object.totalQuantity,
        specifiedType: const FullType(double),
      );
    }
    if (object.totalDays != null) {
      yield r'totalDays';
      yield serializers.serialize(
        object.totalDays,
        specifiedType: const FullType(double),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    MilkProductionDto object, {
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
    required MilkProductionDtoBuilder result,
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
        case r'cowId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.cowId = valueDes;
          break;
        case r'weeklyProduction':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.weeklyProduction = valueDes;
          break;
        case r'monthlyProduction':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.monthlyProduction = valueDes;
          break;
        case r'lifetimeAverage':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.lifetimeAverage = valueDes;
          break;
        case r'totalQuantity':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.totalQuantity = valueDes;
          break;
        case r'totalDays':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(double),
          ) as double;
          result.totalDays = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  MilkProductionDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = MilkProductionDtoBuilder();
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
