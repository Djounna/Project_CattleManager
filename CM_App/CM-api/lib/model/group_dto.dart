//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class GroupDto {
  /// Returns a new [GroupDto] instance.
  GroupDto({
    this.id,
    this.name,
    this.description,
    this.imgLink,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? id;

  String? name;

  String? description;

  String? imgLink;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is GroupDto &&
          other.id == id &&
          other.name == name &&
          other.description == description &&
          other.imgLink == imgLink;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (name == null ? 0 : name!.hashCode) +
      (description == null ? 0 : description!.hashCode) +
      (imgLink == null ? 0 : imgLink!.hashCode);

  @override
  String toString() =>
      'GroupDto[id=$id, name=$name, description=$description, imgLink=$imgLink]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.id != null) {
      json[r'id'] = this.id;
    } else {
      json[r'id'] = null;
    }
    if (this.name != null) {
      json[r'name'] = this.name;
    } else {
      json[r'name'] = null;
    }
    if (this.description != null) {
      json[r'description'] = this.description;
    } else {
      json[r'description'] = null;
    }
    if (this.imgLink != null) {
      json[r'imgLink'] = this.imgLink;
    } else {
      json[r'imgLink'] = null;
    }
    return json;
  }

  /// Returns a new [GroupDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static GroupDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "GroupDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "GroupDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return GroupDto(
        id: mapValueOfType<int>(json, r'id'),
        name: mapValueOfType<String>(json, r'name'),
        description: mapValueOfType<String>(json, r'description'),
        imgLink: mapValueOfType<String>(json, r'imgLink'),
      );
    }
    return null;
  }

  static List<GroupDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <GroupDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = GroupDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, GroupDto> mapFromJson(dynamic json) {
    final map = <String, GroupDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = GroupDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of GroupDto-objects as value to a dart map
  static Map<String, List<GroupDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<GroupDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = GroupDto.listFromJson(
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
