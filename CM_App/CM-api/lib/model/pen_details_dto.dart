//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PenDetailsDto {
  /// Returns a new [PenDetailsDto] instance.
  PenDetailsDto({
    this.id,
    this.name,
    this.size,
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

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? size;

  List<CowDto>? cows;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is PenDetailsDto &&
          other.id == id &&
          other.name == name &&
          other.size == size &&
          _deepEquality.equals(other.cows, cows);

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (name == null ? 0 : name!.hashCode) +
      (size == null ? 0 : size!.hashCode) +
      (cows == null ? 0 : cows!.hashCode);

  @override
  String toString() =>
      'PenDetailsDto[id=$id, name=$name, size=$size, cows=$cows]';

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
    if (this.size != null) {
      json[r'size'] = this.size;
    } else {
      json[r'size'] = null;
    }
    if (this.cows != null) {
      json[r'cows'] = this.cows;
    } else {
      json[r'cows'] = null;
    }
    return json;
  }

  /// Returns a new [PenDetailsDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PenDetailsDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "PenDetailsDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "PenDetailsDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return PenDetailsDto(
        id: mapValueOfType<int>(json, r'id'),
        name: mapValueOfType<String>(json, r'name'),
        size: mapValueOfType<int>(json, r'size'),
        cows: CowDto.listFromJson(json[r'cows']),
      );
    }
    return null;
  }

  static List<PenDetailsDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <PenDetailsDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = PenDetailsDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, PenDetailsDto> mapFromJson(dynamic json) {
    final map = <String, PenDetailsDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = PenDetailsDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of PenDetailsDto-objects as value to a dart map
  static Map<String, List<PenDetailsDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<PenDetailsDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = PenDetailsDto.listFromJson(
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
