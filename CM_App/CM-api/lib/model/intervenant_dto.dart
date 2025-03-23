//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class IntervenantDto {
  /// Returns a new [IntervenantDto] instance.
  IntervenantDto({
    this.id,
    this.name,
    this.type,
    this.coordinates,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? id;

  String? name;

  String? type;

  String? coordinates;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is IntervenantDto &&
          other.id == id &&
          other.name == name &&
          other.type == type &&
          other.coordinates == coordinates;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (name == null ? 0 : name!.hashCode) +
      (type == null ? 0 : type!.hashCode) +
      (coordinates == null ? 0 : coordinates!.hashCode);

  @override
  String toString() =>
      'IntervenantDto[id=$id, name=$name, type=$type, coordinates=$coordinates]';

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
    if (this.type != null) {
      json[r'type'] = this.type;
    } else {
      json[r'type'] = null;
    }
    if (this.coordinates != null) {
      json[r'coordinates'] = this.coordinates;
    } else {
      json[r'coordinates'] = null;
    }
    return json;
  }

  /// Returns a new [IntervenantDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static IntervenantDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "IntervenantDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "IntervenantDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return IntervenantDto(
        id: mapValueOfType<int>(json, r'id'),
        name: mapValueOfType<String>(json, r'name'),
        type: mapValueOfType<String>(json, r'type'),
        coordinates: mapValueOfType<String>(json, r'coordinates'),
      );
    }
    return null;
  }

  static List<IntervenantDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <IntervenantDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = IntervenantDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, IntervenantDto> mapFromJson(dynamic json) {
    final map = <String, IntervenantDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = IntervenantDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of IntervenantDto-objects as value to a dart map
  static Map<String, List<IntervenantDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<IntervenantDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = IntervenantDto.listFromJson(
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
