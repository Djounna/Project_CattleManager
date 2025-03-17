//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'day_of_week.g.dart';

class DayOfWeek extends EnumClass {
  @BuiltValueEnumConst(wireNumber: 0)
  static const DayOfWeek number0 = _$number0;
  @BuiltValueEnumConst(wireNumber: 1)
  static const DayOfWeek number1 = _$number1;
  @BuiltValueEnumConst(wireNumber: 2)
  static const DayOfWeek number2 = _$number2;
  @BuiltValueEnumConst(wireNumber: 3)
  static const DayOfWeek number3 = _$number3;
  @BuiltValueEnumConst(wireNumber: 4)
  static const DayOfWeek number4 = _$number4;
  @BuiltValueEnumConst(wireNumber: 5)
  static const DayOfWeek number5 = _$number5;
  @BuiltValueEnumConst(wireNumber: 6)
  static const DayOfWeek number6 = _$number6;

  static Serializer<DayOfWeek> get serializer => _$dayOfWeekSerializer;

  const DayOfWeek._(String name) : super(name);

  static BuiltSet<DayOfWeek> get values => _$values;
  static DayOfWeek valueOf(String name) => _$valueOf(name);
}

/// Optionally, enum_class can generate a mixin to go with your enum for use
/// with Angular. It exposes your enum constants as getters. So, if you mix it
/// in to your Dart component class, the values become available to the
/// corresponding Angular template.
///
/// Trigger mixin generation by writing a line like this one next to your enum.
abstract class DayOfWeekMixin = Object with _$DayOfWeekMixin;
