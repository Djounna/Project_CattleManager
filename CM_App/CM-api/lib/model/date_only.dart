//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class DateOnly {
  /// Returns a new [DateOnly] instance.
  DateOnly({
    this.year,
    this.month,
    this.day,
    this.dayOfWeek,
    this.dayOfYear,
    this.dayNumber,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? year;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? month;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? day;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DayOfWeek? dayOfWeek;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? dayOfYear;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? dayNumber;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is DateOnly &&
          other.year == year &&
          other.month == month &&
          other.day == day &&
          other.dayOfWeek == dayOfWeek &&
          other.dayOfYear == dayOfYear &&
          other.dayNumber == dayNumber;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (year == null ? 0 : year!.hashCode) +
      (month == null ? 0 : month!.hashCode) +
      (day == null ? 0 : day!.hashCode) +
      (dayOfWeek == null ? 0 : dayOfWeek!.hashCode) +
      (dayOfYear == null ? 0 : dayOfYear!.hashCode) +
      (dayNumber == null ? 0 : dayNumber!.hashCode);

  @override
  String toString() =>
      'DateOnly[year=$year, month=$month, day=$day, dayOfWeek=$dayOfWeek, dayOfYear=$dayOfYear, dayNumber=$dayNumber]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.year != null) {
      json[r'year'] = this.year;
    } else {
      json[r'year'] = null;
    }
    if (this.month != null) {
      json[r'month'] = this.month;
    } else {
      json[r'month'] = null;
    }
    if (this.day != null) {
      json[r'day'] = this.day;
    } else {
      json[r'day'] = null;
    }
    if (this.dayOfWeek != null) {
      json[r'dayOfWeek'] = this.dayOfWeek;
    } else {
      json[r'dayOfWeek'] = null;
    }
    if (this.dayOfYear != null) {
      json[r'dayOfYear'] = this.dayOfYear;
    } else {
      json[r'dayOfYear'] = null;
    }
    if (this.dayNumber != null) {
      json[r'dayNumber'] = this.dayNumber;
    } else {
      json[r'dayNumber'] = null;
    }
    return json;
  }

  /// Returns a new [DateOnly] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static DateOnly? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "DateOnly[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "DateOnly[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return DateOnly(
        year: mapValueOfType<int>(json, r'year'),
        month: mapValueOfType<int>(json, r'month'),
        day: mapValueOfType<int>(json, r'day'),
        dayOfWeek: DayOfWeek.fromJson(json[r'dayOfWeek']),
        dayOfYear: mapValueOfType<int>(json, r'dayOfYear'),
        dayNumber: mapValueOfType<int>(json, r'dayNumber'),
      );
    }
    return null;
  }

  static List<DateOnly> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <DateOnly>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = DateOnly.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, DateOnly> mapFromJson(dynamic json) {
    final map = <String, DateOnly>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = DateOnly.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of DateOnly-objects as value to a dart map
  static Map<String, List<DateOnly>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<DateOnly>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = DateOnly.listFromJson(
          entry.value,
          growable: growable,
        );
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{};
}
