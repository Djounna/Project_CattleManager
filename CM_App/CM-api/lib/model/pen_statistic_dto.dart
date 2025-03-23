//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PenStatisticDto {
  /// Returns a new [PenStatisticDto] instance.
  PenStatisticDto({
    this.penId,
    this.penName,
    this.number,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? penId;

  String? penName;

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
      other is PenStatisticDto &&
          other.penId == penId &&
          other.penName == penName &&
          other.number == number;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (penId == null ? 0 : penId!.hashCode) +
      (penName == null ? 0 : penName!.hashCode) +
      (number == null ? 0 : number!.hashCode);

  @override
  String toString() =>
      'PenStatisticDto[penId=$penId, penName=$penName, number=$number]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.penId != null) {
      json[r'penId'] = this.penId;
    } else {
      json[r'penId'] = null;
    }
    if (this.penName != null) {
      json[r'penName'] = this.penName;
    } else {
      json[r'penName'] = null;
    }
    if (this.number != null) {
      json[r'number'] = this.number;
    } else {
      json[r'number'] = null;
    }
    return json;
  }

  /// Returns a new [PenStatisticDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PenStatisticDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "PenStatisticDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "PenStatisticDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return PenStatisticDto(
        penId: mapValueOfType<int>(json, r'penId'),
        penName: mapValueOfType<String>(json, r'penName'),
        number: mapValueOfType<int>(json, r'number'),
      );
    }
    return null;
  }

  static List<PenStatisticDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <PenStatisticDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = PenStatisticDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, PenStatisticDto> mapFromJson(dynamic json) {
    final map = <String, PenStatisticDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = PenStatisticDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of PenStatisticDto-objects as value to a dart map
  static Map<String, List<PenStatisticDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<PenStatisticDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = PenStatisticDto.listFromJson(
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
