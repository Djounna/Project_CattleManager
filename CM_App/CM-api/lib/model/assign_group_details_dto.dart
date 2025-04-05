//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AssignGroupDetailsDto {
  /// Returns a new [AssignGroupDetailsDto] instance.
  AssignGroupDetailsDto({
    this.group1,
    this.group2,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  GroupDetailsDto? group1;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  GroupDetailsDto? group2;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AssignGroupDetailsDto &&
          other.group1 == group1 &&
          other.group2 == group2;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (group1 == null ? 0 : group1!.hashCode) +
      (group2 == null ? 0 : group2!.hashCode);

  @override
  String toString() => 'AssignGroupDetailsDto[group1=$group1, group2=$group2]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.group1 != null) {
      json[r'group1'] = this.group1;
    } else {
      json[r'group1'] = null;
    }
    if (this.group2 != null) {
      json[r'group2'] = this.group2;
    } else {
      json[r'group2'] = null;
    }
    return json;
  }

  /// Returns a new [AssignGroupDetailsDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AssignGroupDetailsDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "AssignGroupDetailsDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "AssignGroupDetailsDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return AssignGroupDetailsDto(
        group1: GroupDetailsDto.fromJson(json[r'group1']),
        group2: GroupDetailsDto.fromJson(json[r'group2']),
      );
    }
    return null;
  }

  static List<AssignGroupDetailsDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <AssignGroupDetailsDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = AssignGroupDetailsDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, AssignGroupDetailsDto> mapFromJson(dynamic json) {
    final map = <String, AssignGroupDetailsDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = AssignGroupDetailsDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of AssignGroupDetailsDto-objects as value to a dart map
  static Map<String, List<AssignGroupDetailsDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<AssignGroupDetailsDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = AssignGroupDetailsDto.listFromJson(
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
