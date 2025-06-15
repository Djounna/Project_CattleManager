//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class JobDto {
  /// Returns a new [JobDto] instance.
  JobDto({
    this.id,
    this.title,
    this.description,
    this.status,
    this.date,
    this.infos,
    this.penId,
    this.cowId,
  });

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? id;

  String? title;

  String? description;

  String? status;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DateTime? date;

  String? infos;

  int? penId;

  int? cowId;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is JobDto &&
          other.id == id &&
          other.title == title &&
          other.description == description &&
          other.status == status &&
          other.date == date &&
          other.infos == infos &&
          other.penId == penId &&
          other.cowId == cowId;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (title == null ? 0 : title!.hashCode) +
      (description == null ? 0 : description!.hashCode) +
      (status == null ? 0 : status!.hashCode) +
      (date == null ? 0 : date!.hashCode) +
      (infos == null ? 0 : infos!.hashCode) +
      (penId == null ? 0 : penId!.hashCode) +
      (cowId == null ? 0 : cowId!.hashCode);

  @override
  String toString() =>
      'JobDto[id=$id, title=$title, description=$description, status=$status, date=$date, infos=$infos, penId=$penId, cowId=$cowId]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.id != null) {
      json[r'id'] = this.id;
    } else {
      json[r'id'] = null;
    }
    if (this.title != null) {
      json[r'title'] = this.title;
    } else {
      json[r'title'] = null;
    }
    if (this.description != null) {
      json[r'description'] = this.description;
    } else {
      json[r'description'] = null;
    }
    if (this.status != null) {
      json[r'status'] = this.status;
    } else {
      json[r'status'] = null;
    }
    if (this.date != null) {
      json[r'date'] = this.date!.toUtc().toIso8601String();
    } else {
      json[r'date'] = null;
    }
    if (this.infos != null) {
      json[r'infos'] = this.infos;
    } else {
      json[r'infos'] = null;
    }
    if (this.penId != null) {
      json[r'penId'] = this.penId;
    } else {
      json[r'penId'] = null;
    }
    if (this.cowId != null) {
      json[r'cowId'] = this.cowId;
    } else {
      json[r'cowId'] = null;
    }
    return json;
  }

  /// Returns a new [JobDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static JobDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "JobDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "JobDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return JobDto(
        id: mapValueOfType<int>(json, r'id'),
        title: mapValueOfType<String>(json, r'title'),
        description: mapValueOfType<String>(json, r'description'),
        status: mapValueOfType<String>(json, r'status'),
        date: mapDateTime(json, r'date', r''),
        infos: mapValueOfType<String>(json, r'infos'),
        penId: mapValueOfType<int>(json, r'penId'),
        cowId: mapValueOfType<int>(json, r'cowId'),
      );
    }
    return null;
  }

  static List<JobDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <JobDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = JobDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, JobDto> mapFromJson(dynamic json) {
    final map = <String, JobDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = JobDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of JobDto-objects as value to a dart map
  static Map<String, List<JobDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<JobDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = JobDto.listFromJson(
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
