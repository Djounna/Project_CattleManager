//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class GestationDto {
  /// Returns a new [GestationDto] instance.
  GestationDto({
    this.id,
    this.cowId,
    this.status,
    this.startDate,
    this.calvingDate,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? id;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? cowId;

  String? status;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DateTime? startDate;

  DateTime? calvingDate;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is GestationDto &&
          other.id == id &&
          other.cowId == cowId &&
          other.status == status &&
          other.startDate == startDate &&
          other.calvingDate == calvingDate;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (cowId == null ? 0 : cowId!.hashCode) +
      (status == null ? 0 : status!.hashCode) +
      (startDate == null ? 0 : startDate!.hashCode) +
      (calvingDate == null ? 0 : calvingDate!.hashCode);

  @override
  String toString() =>
      'GestationDto[id=$id, cowId=$cowId, status=$status, startDate=$startDate, calvingDate=$calvingDate]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.id != null) {
      json[r'id'] = this.id;
    } else {
      json[r'id'] = null;
    }
    if (this.cowId != null) {
      json[r'cowId'] = this.cowId;
    } else {
      json[r'cowId'] = null;
    }
    if (this.status != null) {
      json[r'status'] = this.status;
    } else {
      json[r'status'] = null;
    }
    if (this.startDate != null) {
      json[r'startDate'] = this.startDate!.toUtc().toIso8601String();
    } else {
      json[r'startDate'] = null;
    }
    if (this.calvingDate != null) {
      json[r'calvingDate'] = this.calvingDate!.toUtc().toIso8601String();
    } else {
      json[r'calvingDate'] = null;
    }
    return json;
  }

  /// Returns a new [GestationDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static GestationDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "GestationDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "GestationDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return GestationDto(
        id: mapValueOfType<int>(json, r'id'),
        cowId: mapValueOfType<int>(json, r'cowId'),
        status: mapValueOfType<String>(json, r'status'),
        startDate: mapDateTime(json, r'startDate', r''),
        calvingDate: mapDateTime(json, r'calvingDate', r''),
      );
    }
    return null;
  }

  static List<GestationDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <GestationDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = GestationDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, GestationDto> mapFromJson(dynamic json) {
    final map = <String, GestationDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = GestationDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of GestationDto-objects as value to a dart map
  static Map<String, List<GestationDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<GestationDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = GestationDto.listFromJson(
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
