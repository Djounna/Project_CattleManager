//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class PenMoveDto {
  /// Returns a new [PenMoveDto] instance.
  PenMoveDto({
    this.cowId,
    this.date,
    this.sourcePenId,
    this.destinationPenId,
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

  int? sourcePenId;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? destinationPenId;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is PenMoveDto &&
          other.cowId == cowId &&
          other.date == date &&
          other.sourcePenId == sourcePenId &&
          other.destinationPenId == destinationPenId;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (cowId == null ? 0 : cowId!.hashCode) +
      (date == null ? 0 : date!.hashCode) +
      (sourcePenId == null ? 0 : sourcePenId!.hashCode) +
      (destinationPenId == null ? 0 : destinationPenId!.hashCode);

  @override
  String toString() =>
      'PenMoveDto[cowId=$cowId, date=$date, sourcePenId=$sourcePenId, destinationPenId=$destinationPenId]';

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
    if (this.sourcePenId != null) {
      json[r'sourcePenId'] = this.sourcePenId;
    } else {
      json[r'sourcePenId'] = null;
    }
    if (this.destinationPenId != null) {
      json[r'destinationPenId'] = this.destinationPenId;
    } else {
      json[r'destinationPenId'] = null;
    }
    return json;
  }

  /// Returns a new [PenMoveDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static PenMoveDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "PenMoveDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "PenMoveDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return PenMoveDto(
        cowId: mapValueOfType<int>(json, r'cowId'),
        date: DateOnly.fromJson(json[r'date']),
        sourcePenId: mapValueOfType<int>(json, r'sourcePenId'),
        destinationPenId: mapValueOfType<int>(json, r'destinationPenId'),
      );
    }
    return null;
  }

  static List<PenMoveDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <PenMoveDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = PenMoveDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, PenMoveDto> mapFromJson(dynamic json) {
    final map = <String, PenMoveDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = PenMoveDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of PenMoveDto-objects as value to a dart map
  static Map<String, List<PenMoveDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<PenMoveDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = PenMoveDto.listFromJson(
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
