//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MilkProductionDto {
  /// Returns a new [MilkProductionDto] instance.
  MilkProductionDto({
    this.id,
    this.cowId,
    this.weeklyProduction,
    this.monthlyProduction,
    this.lifetimeAverage,
    this.totalQuantity,
    this.totalDays,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? id;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? cowId;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? weeklyProduction;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? monthlyProduction;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? lifetimeAverage;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? totalQuantity;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? totalDays;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is MilkProductionDto &&
          other.id == id &&
          other.cowId == cowId &&
          other.weeklyProduction == weeklyProduction &&
          other.monthlyProduction == monthlyProduction &&
          other.lifetimeAverage == lifetimeAverage &&
          other.totalQuantity == totalQuantity &&
          other.totalDays == totalDays;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (cowId == null ? 0 : cowId!.hashCode) +
      (weeklyProduction == null ? 0 : weeklyProduction!.hashCode) +
      (monthlyProduction == null ? 0 : monthlyProduction!.hashCode) +
      (lifetimeAverage == null ? 0 : lifetimeAverage!.hashCode) +
      (totalQuantity == null ? 0 : totalQuantity!.hashCode) +
      (totalDays == null ? 0 : totalDays!.hashCode);

  @override
  String toString() =>
      'MilkProductionDto[id=$id, cowId=$cowId, weeklyProduction=$weeklyProduction, monthlyProduction=$monthlyProduction, lifetimeAverage=$lifetimeAverage, totalQuantity=$totalQuantity, totalDays=$totalDays]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.id != null) {
      json[r'id'] = this.id;
    } else {
      json[r'id'] = null;
    }
    if (this.cowId != null) {
      json[r'cowId'] = this.cowId;
    } else {
      json[r'cowId'] = null;
    }
    if (this.weeklyProduction != null) {
      json[r'weeklyProduction'] = this.weeklyProduction;
    } else {
      json[r'weeklyProduction'] = null;
    }
    if (this.monthlyProduction != null) {
      json[r'monthlyProduction'] = this.monthlyProduction;
    } else {
      json[r'monthlyProduction'] = null;
    }
    if (this.lifetimeAverage != null) {
      json[r'lifetimeAverage'] = this.lifetimeAverage;
    } else {
      json[r'lifetimeAverage'] = null;
    }
    if (this.totalQuantity != null) {
      json[r'totalQuantity'] = this.totalQuantity;
    } else {
      json[r'totalQuantity'] = null;
    }
    if (this.totalDays != null) {
      json[r'totalDays'] = this.totalDays;
    } else {
      json[r'totalDays'] = null;
    }
    return json;
  }

  /// Returns a new [MilkProductionDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MilkProductionDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "MilkProductionDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "MilkProductionDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return MilkProductionDto(
        id: mapValueOfType<int>(json, r'id'),
        cowId: mapValueOfType<int>(json, r'cowId'),
        weeklyProduction: mapValueOfType<double>(json, r'weeklyProduction'),
        monthlyProduction: mapValueOfType<double>(json, r'monthlyProduction'),
        lifetimeAverage: mapValueOfType<double>(json, r'lifetimeAverage'),
        totalQuantity: mapValueOfType<double>(json, r'totalQuantity'),
        totalDays: mapValueOfType<double>(json, r'totalDays'),
      );
    }
    return null;
  }

  static List<MilkProductionDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <MilkProductionDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = MilkProductionDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, MilkProductionDto> mapFromJson(dynamic json) {
    final map = <String, MilkProductionDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = MilkProductionDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of MilkProductionDto-objects as value to a dart map
  static Map<String, List<MilkProductionDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<MilkProductionDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = MilkProductionDto.listFromJson(
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
