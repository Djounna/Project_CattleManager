//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class MilkingInputDto {
  /// Returns a new [MilkingInputDto] instance.
  MilkingInputDto({
    this.cowId,
    this.done,
    this.volume,
    this.date,
    this.cancelled,
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
  bool? done;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  double? volume;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  DateOnly? date;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  bool? cancelled;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is MilkingInputDto &&
          other.cowId == cowId &&
          other.done == done &&
          other.volume == volume &&
          other.date == date &&
          other.cancelled == cancelled;

  @override
  int get hashCode =>
      // ignore: unnecessary_parenthesis
      (cowId == null ? 0 : cowId!.hashCode) +
      (done == null ? 0 : done!.hashCode) +
      (volume == null ? 0 : volume!.hashCode) +
      (date == null ? 0 : date!.hashCode) +
      (cancelled == null ? 0 : cancelled!.hashCode);

  @override
  String toString() =>
      'MilkingInputDto[cowId=$cowId, done=$done, volume=$volume, date=$date, cancelled=$cancelled]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
    if (this.cowId != null) {
      json[r'cowId'] = this.cowId;
    } else {
      json[r'cowId'] = null;
    }
    if (this.done != null) {
      json[r'done'] = this.done;
    } else {
      json[r'done'] = null;
    }
    if (this.volume != null) {
      json[r'volume'] = this.volume;
    } else {
      json[r'volume'] = null;
    }
    if (this.date != null) {
      json[r'date'] = this.date;
    } else {
      json[r'date'] = null;
    }
    if (this.cancelled != null) {
      json[r'cancelled'] = this.cancelled;
    } else {
      json[r'cancelled'] = null;
    }
    return json;
  }

  /// Returns a new [MilkingInputDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static MilkingInputDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      // Ensure that the map contains the required keys.
      // Note 1: the values aren't checked for validity beyond being non-null.
      // Note 2: this code is stripped in release mode!
      assert(() {
        requiredKeys.forEach((key) {
          assert(json.containsKey(key),
              'Required key "MilkingInputDto[$key]" is missing from JSON.');
          assert(json[key] != null,
              'Required key "MilkingInputDto[$key]" has a null value in JSON.');
        });
        return true;
      }());

      return MilkingInputDto(
        cowId: mapValueOfType<int>(json, r'cowId'),
        done: mapValueOfType<bool>(json, r'done'),
        volume: mapValueOfType<double>(json, r'volume'),
        date: DateOnly.fromJson(json[r'date']),
        cancelled: mapValueOfType<bool>(json, r'cancelled'),
      );
    }
    return null;
  }

  static List<MilkingInputDto> listFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final result = <MilkingInputDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = MilkingInputDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, MilkingInputDto> mapFromJson(dynamic json) {
    final map = <String, MilkingInputDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = MilkingInputDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of MilkingInputDto-objects as value to a dart map
  static Map<String, List<MilkingInputDto>> mapListFromJson(
    dynamic json, {
    bool growable = false,
  }) {
    final map = <String, List<MilkingInputDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = MilkingInputDto.listFromJson(
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
