//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class GroupMoveDto {
  /// Returns a new [GroupMoveDto] instance.
  GroupMoveDto({
    this.cowId,
    this.date,
    this.sourceGroupId,
    this.destinationGroupId,
  });

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
  DateOnly? date;

  int? sourceGroupId;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? destinationGroupId;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is GroupMoveDto &&
          other.cowId == cowId &&
          other.date == date &&
          other.sourceGroupId == sourceGroupId &&
          other.destinationGroupId == destinationGroupId;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (cowId == null ? 0 : cowId!.hashCode) +
      (date == null ? 0 : date!.hashCode) +
      (sourceGroupId == null ? 0 : sourceGroupId!.hashCode) +
      (destinationGroupId == null ? 0 : destinationGroupId!.hashCode);

  @override
  String toString() =>
      'GroupMoveDto[cowId=$cowId, date=$date, sourceGroupId=$sourceGroupId, destinationGroupId=$destinationGroupId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.cowId != null) {
      json[r'cowId'] = this.cowId;
    } else {
      json[r'cowId'] = null;
    }
    if (this.date != null) {
      json[r'date'] = this.date;
    } else {
      json[r'date'] = null;
    }
    if (this.sourceGroupId != null) {
      json[r'sourceGroupId'] = this.sourceGroupId;
    } else {
      json[r'sourceGroupId'] = null;
    }
    if (this.destinationGroupId != null) {
      json[r'destinationGroupId'] = this.destinationGroupId;
    } else {
      json[r'destinationGroupId'] = null;
    }
    return json;
  }

  /// Returns a new [GroupMoveDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static GroupMoveDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "GroupMoveDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "GroupMoveDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return GroupMoveDto(
        cowId: mapValueOfType<int>(json, r'cowId'),
        date: DateOnly.fromJson(json[r'date']),
        sourceGroupId: mapValueOfType<int>(json, r'sourceGroupId'),
        destinationGroupId: mapValueOfType<int>(json, r'destinationGroupId'),
      );
    }
    return null;
  }

  static List<GroupMoveDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <GroupMoveDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = GroupMoveDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, GroupMoveDto> mapFromJson(dynamic json) {
    final map = <String, GroupMoveDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = GroupMoveDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of GroupMoveDto-objects as value to a dart map
  static Map<String, List<GroupMoveDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<GroupMoveDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = GroupMoveDto.listFromJson(
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
