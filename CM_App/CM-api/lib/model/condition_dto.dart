//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ConditionDto {
  /// Returns a new [ConditionDto] instance.
  ConditionDto({
    this.id,
    this.cowId,
    this.name,
    this.type,
    this.status,
    this.comment,
    this.startDate,
    this.endDate,
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

  String? name;

  String? type;

  String? status;

  String? comment;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DateTime? startDate;

  DateTime? endDate;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is ConditionDto &&
          other.id == id &&
          other.cowId == cowId &&
          other.name == name &&
          other.type == type &&
          other.status == status &&
          other.comment == comment &&
          other.startDate == startDate &&
          other.endDate == endDate;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (id == null ? 0 : id!.hashCode) +
      (cowId == null ? 0 : cowId!.hashCode) +
      (name == null ? 0 : name!.hashCode) +
      (type == null ? 0 : type!.hashCode) +
      (status == null ? 0 : status!.hashCode) +
      (comment == null ? 0 : comment!.hashCode) +
      (startDate == null ? 0 : startDate!.hashCode) +
      (endDate == null ? 0 : endDate!.hashCode);

  @override
  String toString() =>
      'ConditionDto[id=$id, cowId=$cowId, name=$name, type=$type, status=$status, comment=$comment, startDate=$startDate, endDate=$endDate]';

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
    if (this.status != null) {
      json[r'status'] = this.status;
    } else {
      json[r'status'] = null;
    }
    if (this.comment != null) {
      json[r'comment'] = this.comment;
    } else {
      json[r'comment'] = null;
    }
    if (this.startDate != null) {
      json[r'startDate'] = this.startDate!.toUtc().toIso8601String();
    } else {
      json[r'startDate'] = null;
    }
    if (this.endDate != null) {
      json[r'endDate'] = this.endDate!.toUtc().toIso8601String();
    } else {
      json[r'endDate'] = null;
    }
    return json;
  }

  /// Returns a new [ConditionDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static ConditionDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "ConditionDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "ConditionDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return ConditionDto(
        id: mapValueOfType<int>(json, r'id'),
        cowId: mapValueOfType<int>(json, r'cowId'),
        name: mapValueOfType<String>(json, r'name'),
        type: mapValueOfType<String>(json, r'type'),
        status: mapValueOfType<String>(json, r'status'),
        comment: mapValueOfType<String>(json, r'comment'),
        startDate: mapDateTime(json, r'startDate', r''),
        endDate: mapDateTime(json, r'endDate', r''),
      );
    }
    return null;
  }

  static List<ConditionDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <ConditionDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = ConditionDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, ConditionDto> mapFromJson(dynamic json) {
    final map = <String, ConditionDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = ConditionDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of ConditionDto-objects as value to a dart map
  static Map<String, List<ConditionDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<ConditionDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = ConditionDto.listFromJson(
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
