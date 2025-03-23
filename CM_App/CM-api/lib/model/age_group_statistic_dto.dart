//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AgeGroupStatisticDto {
  /// Returns a new [AgeGroupStatisticDto] instance.
  AgeGroupStatisticDto({
    this.ageGroupName,
    this.number,
  });

  String? ageGroupName;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? number;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AgeGroupStatisticDto &&
          other.ageGroupName == ageGroupName &&
          other.number == number;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (ageGroupName == null ? 0 : ageGroupName!.hashCode) +
      (number == null ? 0 : number!.hashCode);

  @override
  String toString() =>
      'AgeGroupStatisticDto[ageGroupName=$ageGroupName, number=$number]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.ageGroupName != null) {
      json[r'ageGroupName'] = this.ageGroupName;
    } else {
      json[r'ageGroupName'] = null;
    }
    if (this.number != null) {
      json[r'number'] = this.number;
    } else {
      json[r'number'] = null;
    }
    return json;
  }

  /// Returns a new [AgeGroupStatisticDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AgeGroupStatisticDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "AgeGroupStatisticDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "AgeGroupStatisticDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return AgeGroupStatisticDto(
        ageGroupName: mapValueOfType<String>(json, r'ageGroupName'),
        number: mapValueOfType<int>(json, r'number'),
      );
    }
    return null;
  }

  static List<AgeGroupStatisticDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <AgeGroupStatisticDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = AgeGroupStatisticDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, AgeGroupStatisticDto> mapFromJson(dynamic json) {
    final map = <String, AgeGroupStatisticDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = AgeGroupStatisticDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of AgeGroupStatisticDto-objects as value to a dart map
  static Map<String, List<AgeGroupStatisticDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<AgeGroupStatisticDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = AgeGroupStatisticDto.listFromJson(
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
