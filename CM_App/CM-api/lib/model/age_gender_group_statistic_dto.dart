//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AgeGenderGroupStatisticDto {
  /// Returns a new [AgeGenderGroupStatisticDto] instance.
  AgeGenderGroupStatisticDto({
    this.gender,
    this.ageGroupName,
    this.number,
  });

  String? gender;

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
      other is AgeGenderGroupStatisticDto &&
          other.gender == gender &&
          other.ageGroupName == ageGroupName &&
          other.number == number;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (gender == null ? 0 : gender!.hashCode) +
      (ageGroupName == null ? 0 : ageGroupName!.hashCode) +
      (number == null ? 0 : number!.hashCode);

  @override
  String toString() =>
      'AgeGenderGroupStatisticDto[gender=$gender, ageGroupName=$ageGroupName, number=$number]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.gender != null) {
      json[r'gender'] = this.gender;
    } else {
      json[r'gender'] = null;
    }
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

  /// Returns a new [AgeGenderGroupStatisticDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AgeGenderGroupStatisticDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "AgeGenderGroupStatisticDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "AgeGenderGroupStatisticDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return AgeGenderGroupStatisticDto(
        gender: mapValueOfType<String>(json, r'gender'),
        ageGroupName: mapValueOfType<String>(json, r'ageGroupName'),
        number: mapValueOfType<int>(json, r'number'),
      );
    }
    return null;
  }

  static List<AgeGenderGroupStatisticDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <AgeGenderGroupStatisticDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = AgeGenderGroupStatisticDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, AgeGenderGroupStatisticDto> mapFromJson(dynamic json) {
    final map = <String, AgeGenderGroupStatisticDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = AgeGenderGroupStatisticDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of AgeGenderGroupStatisticDto-objects as value to a dart map
  static Map<String, List<AgeGenderGroupStatisticDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<AgeGenderGroupStatisticDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = AgeGenderGroupStatisticDto.listFromJson(
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
