//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ParentDto {
  /// Returns a new [ParentDto] instance.
  ParentDto({
    this.cow,
    this.mother,
    this.father,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  CowDto? cow;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  CowDto? mother;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  CowDto? father;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ParentDto &&
          other.cow == cow &&
          other.mother == mother &&
          other.father == father;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (cow == null ? 0 : cow!.hashCode) +
      (mother == null ? 0 : mother!.hashCode) +
      (father == null ? 0 : father!.hashCode);

  @override
  String toString() => 'ParentDto[cow=$cow, mother=$mother, father=$father]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.cow != null) {
      json[r'cow'] = this.cow;
    } else {
      json[r'cow'] = null;
    }
    if (this.mother != null) {
      json[r'mother'] = this.mother;
    } else {
      json[r'mother'] = null;
    }
    if (this.father != null) {
      json[r'father'] = this.father;
    } else {
      json[r'father'] = null;
    }
    return json;
  }

  /// Returns a new [ParentDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static ParentDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "ParentDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "ParentDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return ParentDto(
        cow: CowDto.fromJson(json[r'cow']),
        mother: CowDto.fromJson(json[r'mother']),
        father: CowDto.fromJson(json[r'father']),
      );
    }
    return null;
  }

  static List<ParentDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <ParentDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = ParentDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, ParentDto> mapFromJson(dynamic json) {
    final map = <String, ParentDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = ParentDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of ParentDto-objects as value to a dart map
  static Map<String, List<ParentDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<ParentDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = ParentDto.listFromJson(
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
