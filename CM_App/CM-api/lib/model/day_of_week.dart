//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class DayOfWeek {
  /// Instantiate a new enum with the provided [value].
  const DayOfWeek._(this.value);

  /// The underlying value of this enum member.
  final int value;

  @override
  String toString() => value.toString();

  int toJson() => value;

  static const number0 = DayOfWeek._(0);
  static const number1 = DayOfWeek._(1);
  static const number2 = DayOfWeek._(2);
  static const number3 = DayOfWeek._(3);
  static const number4 = DayOfWeek._(4);
  static const number5 = DayOfWeek._(5);
  static const number6 = DayOfWeek._(6);

  /// List of all possible values in this [enum][DayOfWeek].
  static const values = <DayOfWeek>[
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
  ];

  static DayOfWeek? fromJson(dynamic value) =>
      DayOfWeekTypeTransformer().decode(value);

  static List<DayOfWeek> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <DayOfWeek>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = DayOfWeek.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }
}

/// Transformation class that can [encode] an instance of [DayOfWeek] to int,
/// and [decode] dynamic data back to [DayOfWeek].
class DayOfWeekTypeTransformer {
  factory DayOfWeekTypeTransformer() =>
      _instance ??= const DayOfWeekTypeTransformer._();

  const DayOfWeekTypeTransformer._();

  int encode(DayOfWeek data) => data.value;

  /// Decodes a [dynamic value][data] to a DayOfWeek.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  DayOfWeek? decode(dynamic data, {bool allowNull = true}) {
    if (data != null) {
      switch (data) {
        case 0:
          return DayOfWeek.number0;
        case 1:
          return DayOfWeek.number1;
        case 2:
          return DayOfWeek.number2;
        case 3:
          return DayOfWeek.number3;
        case 4:
          return DayOfWeek.number4;
        case 5:
          return DayOfWeek.number5;
        case 6:
          return DayOfWeek.number6;
        default:
          if (!allowNull) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [DayOfWeekTypeTransformer] instance.
  static DayOfWeekTypeTransformer? _instance;
}
