//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class InterventionDto {
  /// Returns a new [InterventionDto] instance.
  InterventionDto({
    this.id,
    this.cowId,
    this.intervenantId,
    this.type,
    this.description,
    this.date,
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

  int? intervenantId;

  String? type;

  String? description;

  DateTime? date;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is InterventionDto &&
          other.id == id &&
          other.cowId == cowId &&
          other.intervenantId == intervenantId &&
          other.type == type &&
          other.description == description &&
          other.date == date;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (cowId == null ? 0 : cowId!.hashCode) +
      (intervenantId == null ? 0 : intervenantId!.hashCode) +
      (type == null ? 0 : type!.hashCode) +
      (description == null ? 0 : description!.hashCode) +
      (date == null ? 0 : date!.hashCode);

  @override
  String toString() =>
      'InterventionDto[id=$id, cowId=$cowId, intervenantId=$intervenantId, type=$type, description=$description, date=$date]';

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
    if (this.intervenantId != null) {
      json[r'intervenantId'] = this.intervenantId;
    } else {
      json[r'intervenantId'] = null;
    }
    if (this.type != null) {
      json[r'type'] = this.type;
    } else {
      json[r'type'] = null;
    }
    if (this.description != null) {
      json[r'description'] = this.description;
    } else {
      json[r'description'] = null;
    }
    if (this.date != null) {
      json[r'date'] = this.date!.toUtc().toIso8601String();
    } else {
      json[r'date'] = null;
    }
    return json;
  }

  /// Returns a new [InterventionDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static InterventionDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "InterventionDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "InterventionDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return InterventionDto(
        id: mapValueOfType<int>(json, r'id'),
        cowId: mapValueOfType<int>(json, r'cowId'),
        intervenantId: mapValueOfType<int>(json, r'intervenantId'),
        type: mapValueOfType<String>(json, r'type'),
        description: mapValueOfType<String>(json, r'description'),
        date: mapDateTime(json, r'date', r''),
      );
    }
    return null;
  }

  static List<InterventionDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <InterventionDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = InterventionDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, InterventionDto> mapFromJson(dynamic json) {
    final map = <String, InterventionDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = InterventionDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of InterventionDto-objects as value to a dart map
  static Map<String, List<InterventionDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<InterventionDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = InterventionDto.listFromJson(
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
