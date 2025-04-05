//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class GroupDetailsDto {
  /// Returns a new [GroupDetailsDto] instance.
  GroupDetailsDto({
    this.id,
    this.name,
    this.description,
    this.imgLink,
    this.cows = const [],
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

  List<CowDto>? cows;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is GroupDetailsDto &&
          other.id == id &&
          other.name == name &&
          other.description == description &&
          other.imgLink == imgLink &&
          _deepEquality.equals(other.cows, cows);

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (name == null ? 0 : name!.hashCode) +
      (description == null ? 0 : description!.hashCode) +
      (imgLink == null ? 0 : imgLink!.hashCode) +
      (cows == null ? 0 : cows!.hashCode);

  @override
  String toString() =>
      'GroupDetailsDto[id=$id, name=$name, description=$description, imgLink=$imgLink, cows=$cows]';

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
    if (this.cows != null) {
      json[r'cows'] = this.cows;
    } else {
      json[r'cows'] = null;
    }
    return json;
  }

  /// Returns a new [GroupDetailsDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static GroupDetailsDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "GroupDetailsDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "GroupDetailsDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return GroupDetailsDto(
        id: mapValueOfType<int>(json, r'id'),
        name: mapValueOfType<String>(json, r'name'),
        description: mapValueOfType<String>(json, r'description'),
        imgLink: mapValueOfType<String>(json, r'imgLink'),
        cows: CowDto.listFromJson(json[r'cows']),
      );
    }
    return null;
  }

  static List<GroupDetailsDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <GroupDetailsDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = GroupDetailsDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, GroupDetailsDto> mapFromJson(dynamic json) {
    final map = <String, GroupDetailsDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = GroupDetailsDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of GroupDetailsDto-objects as value to a dart map
  static Map<String, List<GroupDetailsDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<GroupDetailsDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = GroupDetailsDto.listFromJson(
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
