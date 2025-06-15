//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class AlertDto {
  /// Returns a new [AlertDto] instance.
  AlertDto({
    this.id,
    this.title,
    this.description,
    this.level,
    this.done,
    this.infos,
    this.cowId,
    this.penId,
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

  String? level;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  bool? done;

  String? infos;

  int? cowId;

  int? penId;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is AlertDto &&
          other.id == id &&
          other.title == title &&
          other.description == description &&
          other.level == level &&
          other.done == done &&
          other.infos == infos &&
          other.cowId == cowId &&
          other.penId == penId;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (title == null ? 0 : title!.hashCode) +
      (description == null ? 0 : description!.hashCode) +
      (level == null ? 0 : level!.hashCode) +
      (done == null ? 0 : done!.hashCode) +
      (infos == null ? 0 : infos!.hashCode) +
      (cowId == null ? 0 : cowId!.hashCode) +
      (penId == null ? 0 : penId!.hashCode);

  @override
  String toString() =>
      'AlertDto[id=$id, title=$title, description=$description, level=$level, done=$done, infos=$infos, cowId=$cowId, penId=$penId]';

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
    if (this.level != null) {
      json[r'level'] = this.level;
    } else {
      json[r'level'] = null;
    }
    if (this.done != null) {
      json[r'done'] = this.done;
    } else {
      json[r'done'] = null;
    }
    if (this.infos != null) {
      json[r'infos'] = this.infos;
    } else {
      json[r'infos'] = null;
    }
    if (this.cowId != null) {
      json[r'cowId'] = this.cowId;
    } else {
      json[r'cowId'] = null;
    }
    if (this.penId != null) {
      json[r'penId'] = this.penId;
    } else {
      json[r'penId'] = null;
    }
    return json;
  }

  /// Returns a new [AlertDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static AlertDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "AlertDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "AlertDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return AlertDto(
        id: mapValueOfType<int>(json, r'id'),
        title: mapValueOfType<String>(json, r'title'),
        description: mapValueOfType<String>(json, r'description'),
        level: mapValueOfType<String>(json, r'level'),
        done: mapValueOfType<bool>(json, r'done'),
        infos: mapValueOfType<String>(json, r'infos'),
        cowId: mapValueOfType<int>(json, r'cowId'),
        penId: mapValueOfType<int>(json, r'penId'),
      );
    }
    return null;
  }

  static List<AlertDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <AlertDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = AlertDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, AlertDto> mapFromJson(dynamic json) {
    final map = <String, AlertDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = AlertDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of AlertDto-objects as value to a dart map
  static Map<String, List<AlertDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<AlertDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = AlertDto.listFromJson(
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
