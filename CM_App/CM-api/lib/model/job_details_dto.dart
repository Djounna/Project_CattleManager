//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class JobDetailsDto {
  /// Returns a new [JobDetailsDto] instance.
  JobDetailsDto({
    this.id,
    this.title,
    this.description,
    this.status,
    this.length,
    this.pen,
    this.cow,
    this.workers = const [],
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

  int? length;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  PenDto? pen;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  CowDto? cow;

  List<UserDto>? workers;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is JobDetailsDto &&
          other.id == id &&
          other.title == title &&
          other.description == description &&
          other.status == status &&
          other.length == length &&
          other.pen == pen &&
          other.cow == cow &&
          _deepEquality.equals(other.workers, workers);

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (title == null ? 0 : title!.hashCode) +
      (description == null ? 0 : description!.hashCode) +
      (status == null ? 0 : status!.hashCode) +
      (length == null ? 0 : length!.hashCode) +
      (pen == null ? 0 : pen!.hashCode) +
      (cow == null ? 0 : cow!.hashCode) +
      (workers == null ? 0 : workers!.hashCode);

  @override
  String toString() =>
      'JobDetailsDto[id=$id, title=$title, description=$description, status=$status, length=$length, pen=$pen, cow=$cow, workers=$workers]';

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
    if (this.length != null) {
      json[r'length'] = this.length;
    } else {
      json[r'length'] = null;
    }
    if (this.pen != null) {
      json[r'pen'] = this.pen;
    } else {
      json[r'pen'] = null;
    }
    if (this.cow != null) {
      json[r'cow'] = this.cow;
    } else {
      json[r'cow'] = null;
    }
    if (this.workers != null) {
      json[r'workers'] = this.workers;
    } else {
      json[r'workers'] = null;
    }
    return json;
  }

  /// Returns a new [JobDetailsDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static JobDetailsDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "JobDetailsDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "JobDetailsDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return JobDetailsDto(
        id: mapValueOfType<int>(json, r'id'),
        title: mapValueOfType<String>(json, r'title'),
        description: mapValueOfType<String>(json, r'description'),
        status: mapValueOfType<String>(json, r'status'),
        length: mapValueOfType<int>(json, r'length'),
        pen: PenDto.fromJson(json[r'pen']),
        cow: CowDto.fromJson(json[r'cow']),
        workers: UserDto.listFromJson(json[r'workers']),
      );
    }
    return null;
  }

  static List<JobDetailsDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <JobDetailsDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = JobDetailsDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, JobDetailsDto> mapFromJson(dynamic json) {
    final map = <String, JobDetailsDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = JobDetailsDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of JobDetailsDto-objects as value to a dart map
  static Map<String, List<JobDetailsDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<JobDetailsDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = JobDetailsDto.listFromJson(
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
