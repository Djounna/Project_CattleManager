//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:CM_api/src/model/day_of_week.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'date_only.g.dart';

/// DateOnly
///
/// Properties:
/// * [year]
/// * [month]
/// * [day]
/// * [dayOfWeek]
/// * [dayOfYear]
/// * [dayNumber]
@BuiltValue()
abstract class DateOnly implements Built<DateOnly, DateOnlyBuilder> {
  @BuiltValueField(wireName: r'year')
  int? get year;

  @BuiltValueField(wireName: r'month')
  int? get month;

  @BuiltValueField(wireName: r'day')
  int? get day;

  @BuiltValueField(wireName: r'dayOfWeek')
  DayOfWeek? get dayOfWeek;
  // enum dayOfWeekEnum {  0,  1,  2,  3,  4,  5,  6,  };

  @BuiltValueField(wireName: r'dayOfYear')
  int? get dayOfYear;

  @BuiltValueField(wireName: r'dayNumber')
  int? get dayNumber;

  DateOnly._();

  factory DateOnly([void updates(DateOnlyBuilder b)]) = _$DateOnly;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(DateOnlyBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<DateOnly> get serializer => _$DateOnlySerializer();
}

class _$DateOnlySerializer implements PrimitiveSerializer<DateOnly> {
  @override
  final Iterable<Type> types = const [DateOnly, _$DateOnly];

  @override
  final String wireName = r'DateOnly';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    DateOnly object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    if (object.year != null) {
      yield r'year';
      yield serializers.serialize(
        object.year,
        specifiedType: const FullType(int),
      );
    }
    if (object.month != null) {
      yield r'month';
      yield serializers.serialize(
        object.month,
        specifiedType: const FullType(int),
      );
    }
    if (object.day != null) {
      yield r'day';
      yield serializers.serialize(
        object.day,
        specifiedType: const FullType(int),
      );
    }
    if (object.dayOfWeek != null) {
      yield r'dayOfWeek';
      yield serializers.serialize(
        object.dayOfWeek,
        specifiedType: const FullType(DayOfWeek),
      );
    }
    if (object.dayOfYear != null) {
      yield r'dayOfYear';
      yield serializers.serialize(
        object.dayOfYear,
        specifiedType: const FullType(int),
      );
    }
    if (object.dayNumber != null) {
      yield r'dayNumber';
      yield serializers.serialize(
        object.dayNumber,
        specifiedType: const FullType(int),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    DateOnly object, {
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
    required DateOnlyBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'year':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.year = valueDes;
          break;
        case r'month':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.month = valueDes;
          break;
        case r'day':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.day = valueDes;
          break;
        case r'dayOfWeek':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DayOfWeek),
          ) as DayOfWeek;
          result.dayOfWeek = valueDes;
          break;
        case r'dayOfYear':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.dayOfYear = valueDes;
          break;
        case r'dayNumber':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(int),
          ) as int;
          result.dayNumber = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  DateOnly deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = DateOnlyBuilder();
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
